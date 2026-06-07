import prisma from "../config/prisma";
import {EnrollParams} from "./param/enroll.params";

export const EnrollRepository = {
    async getAllEnrollsRepo() {
        return prisma.enrollment.findMany();
    },

    async getEnrollByIdRepo(id: string) {
        return prisma.enrollment.findUnique({
            where: {id}
        })
    },

    async createEnrollRepo(data: EnrollParams) {
        return prisma.enrollment.create({data});
    },

    async updateEnrollRepo(id:string, data:EnrollParams) {
        return prisma.enrollment.update({
            where: {id},
            data
        })
    },

    async deleteEnrollRepo (id: string) {
        return prisma.enrollment.delete({where:{id}})
    }
}