import {UserParams} from "./param/user.params";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import prisma from "../config/prisma";
import "dotenv"
const JWT_SECRET = process.env.JWT_SECRET;
export const AuthRepository ={

    async register(data: UserParams) {
        const passwordHash  = await bcrypt.hash(data.password, 10);
        return prisma.user.create({
            data: {
                ...data,
                passwordHash,
            }
        })
    },

    async login(email:string, password: string) {
        const user = await prisma.user.findFirst({
            where: {email}
        });
        if (!user) {
            throw new Error("Invalid email or password");
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            throw new Error("Invalid email or password");
        }
        const token = jwt.sign(
            {
                email: user.email,
                role: user.role
            },
            JWT_SECRET!,
            {
                expiresIn: "1d"
            }
        )
        return {
            accessToken: token,
        };
    }
}