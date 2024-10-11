import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { decode, sign, verify } from 'hono/jwt'

export const blogRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string;
        JWT_SECRET: string;
    },
    Variables:{
        userId: string;
    }
}>()
blogRouter.use('/*', async (c, next) => {
    try {
        const token = c.req.header("authorization") || "";
        const user = await verify(token, c.env.JWT_SECRET);
        if (user){
            c.set("userId", user.id as string);
            next();
        }else{
            c.status(403);
            return c.json({
                message: "You are not logged in"
            })
        }
    } catch (error) {
        c.status(403)
        console.log(error);
        return c.json({
            message: "There is a error in authorization middleware"
            
        })
    }
})
blogRouter.post('/', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate())

    try {
        const body = await c.req.json();
        const authorId = c.get("userId")
        const blog = await prisma.blog.create({
            data: {
                title: body.title,
                content: body.content,
                authorId: authorId
            }
        })
        return c.json({
            message: "Blog uploaded successfully",
            id: blog.id
        })
    } catch (error) {
        console.log(error)
        return c.status(411)
    }
})
blogRouter.put('/', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate())
    try {
        const body = await c.req.json();
        const blog = await prisma.blog.update({
            where: {
                id: body.id
            },
            data: {
                title: body.title,
                content: body.content,
            }
        })
        return c.json({
            message: "Blog updated successfully",
            id: blog.id
        })
    } catch (error) {
        return c.status(411)
    }
})
blogRouter.get('/:id', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate())
    const body = await c.req.json();
    try {
        const blog = await prisma.blog.findFirst({
            where: {
                id: body.id
            }
        })
        return c.json({
            blog
        })
    } catch (error) {
        return c.status(411)
    }
})
blogRouter.get('/bulk', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate())

    const blogs = await prisma.blog.findMany();

    return c.json({
        blogs
    })
    return c.text('Hi from get bulk blogs')
})