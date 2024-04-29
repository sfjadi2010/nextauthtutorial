import * as z from 'zod';

export const RegisterSchema = z.object({
    fname: z.string().min(1, {
        message: "First name is required!"
    }),
    lname: z.string().min(1, {
        message: "Last name is required!"
    }),
    email: z.string().email({
        message: "Email is required!"
    }),
    password: z.string().min(6, {
        message: "Password is required!"
    })
});

export const LoginSchema = z.object({
    email: z.string().email({
        message: "Email is required!"
    }),
    password: z.string().min(1, {
        message: "Password is required!"
    })
});

