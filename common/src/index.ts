import {z} from 'zod';

export const signupInput = z.object({
    email: z.string().email(),
    password: z.string().min(8),
    name: z.string().optional()
})

export const singinInput = z.object({
    email: z.string(),
    password: z.string()
})

export const createBlogInput = z.object({
    title: z.string(),
    content: z.string(),
    tag: z.string()
})

export const updateBlogInput = z.object({
    title: z.string(),
    content: z.string()
}) 

export type SignupInput = z.infer<typeof signupInput> 
export type SigninInput = z.infer<typeof singinInput>
export type BlogInput = z.infer<typeof createBlogInput>
export type UpdateBlogInput = z.infer<typeof updateBlogInput>