import prisma from "../config/prisma";
import {UserParams} from "./param/user.param";

export const UserRepository = {
    async getALlUsersRepo() {
        return prisma.user.findMany();
    },

    async getUserByIdRepo(id: string) {
        return prisma.user.findUnique({
            where: {id: id}
        })
    },

    async createUserRepo(data: UserParams) {
        return prisma.user.create({
            data: data,
        })
    },
    async  updateUserRepo(id: string, data: UserParams) {
        return prisma.user.update({
            where: {id:id},
            data
        })
    },
    async deleteUserRepo(id: string) {
        return prisma.user.delete({
            where: {id:id}
        })
    }
}