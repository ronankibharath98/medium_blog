import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign } from 'hono/jwt'
import { signupInput, singinInput } from '@bronanki/medium-common';

export const userRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string
        JWT_SECRET: string
    }
}>()


userRouter.post('/signup', async (c) => {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate())
  
    const body = await c.req.json();
    const { success } = signupInput.safeParse(body)
    if(!success){
        c.status(400)
        return c.json({
            message: "Input not correct"
        })
    }
    try {
      const user = await prisma.user.create({
        data: {
          email: body.email,
          password: body.password
        }
      })

      const token = await sign({ id: user.id }, c.env.JWT_SECRET)

      return c.json({
        jwt: token,
        message : "Signed up"
      })
    } catch (error) {
      c.status(409);
      return c.text("Invalid Input, Please try again")
    }
  })
  userRouter.post('/signin', async (c) => {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate())
  
    const body = await c.req.json()
    const success = singinInput.safeParse(body)
    if(!success){
        c.status(400)
        return c.json({
            message: "Input not correct"
        })
    }
    try{
      const user = await prisma.user.findFirst({
        where:{
          email: body.email,
          password: body.password
        }
      })
      if(!user){
        c.status(403)
        return c.text("User data did not match")
      }
      const jwt = await sign({
        id: user.id
      }, c.env.JWT_SECRET)
      return c.json({
        jwt,
        message: "Logged in "
      })
    }catch(error){
      c.status(411);
      return c.text("Inavlid Signin data")
    }
  })