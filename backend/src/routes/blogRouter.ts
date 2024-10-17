import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { verify } from 'hono/jwt'
import { createBlogInput, updateBlogInput } from '@bronanki/medium-common'

export const blogRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string;
        JWT_SECRET: string;
    },
    Variables: {
        userId: string;
    }
}>()

// Middleware to check authorization
blogRouter.use('/*', async (c, next) => {
    try {
        const token = c.req.header("authorization") || "";
        const user = await verify(token, c.env.JWT_SECRET);
        if (user) {
            c.set("userId", user.id as string);
            await next();
        } else {
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

// Post blog route 
blogRouter.post('/', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate())
    const body = await c.req.json();
    const success = createBlogInput.safeParse(body)
    if (!success) {
        c.status(400)
        return c.json({
            message: "Input not correct"
        })
    }
    try {
        const authorId = c.get("userId")
        const existingBlog = await prisma.blog.findFirst({
            where: {
                title: body.title
            }
        })
        if (existingBlog) {
            return c.json({
                message: "A blog with the same title and content already exists"
            })
        }
        const blog = await prisma.blog.create({
            data: {
                title: body.title,
                content: body.content,
                tag: body.tag || null,
                authorId: authorId
            },
            include: {
                author: {
                    select: {
                        name: true
                    }
                },
            }
        });
        return c.json({
            message: "Blog uploaded successfully",
            blog: {
                ...blog,
                author: blog.author.name
            }
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
    const body = await c.req.json();
    const success = updateBlogInput.safeParse(body)
    if (!success) {
        c.status(400)
        return c.json({
            message: "Input not correct"
        })
    }
    try {
        const blog = await prisma.blog.update({
            where: {
                id: body.id
            },
            data: {
                title: body.title,
                content: body.content,
                tag: body.tag || null,
            }
        })
        return c.json({
            message: "Blog updated successfully",
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

    const blogs = await prisma.blog.findMany({
        select: {
            id: true,
            title: true,
            content: true,
            thumbnail: true,
            tag: true,
            updatedAt: true,
            author: {
                select: {
                    name: true
                }
            }
        }
    });

    if (blogs.length < 1) {
        return c.json({
            message: "No blogs to show"
        })
    }
    return c.json({
        blogs
    })
})
blogRouter.get('/:id', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate())

    try {
        const blog = await prisma.blog.findFirst({
            where: {
                id: c.req.param('id')
            },
            select: {
                title: true,
                content: true,
                thumbnail: true,
                tag: true,
                updatedAt: true,
                author: {
                    select: {
                        name: true
                    }
                }
            }
        })
        return c.json({
            blog
        })
    } catch (error) {
        return c.status(411)
    }
})
