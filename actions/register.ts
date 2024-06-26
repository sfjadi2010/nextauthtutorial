"use server";

import * as zod from "zod";
import { RegisterSchema } from "@/schemas";
import bcrypt from "bcrypt";
import { db } from "@/lib/db";
import { getUserByEmail } from "@/data/user";

export const register = async (values: zod.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  const { fname, lname, email, password } = validatedFields.data;
  const hashedPasswrod = await bcrypt.hash(password, 10);

  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    return { error: "Email already in use!" };
  }

  await db.user.create({
    data: {
        fname,
        lname,
        email,
        password: hashedPasswrod
    }
  });
  // TODO: Send verification email
  return { success: "User created!" };
};
