import prisma from "../config/prisma";
import {LessonParams} from "./param/lesson.params";

export const LessonRepository = {
    async getAllLessonsRepo() {
        return prisma.lesson.findMany();
    },

    async getLessonByIdRepo(id: string) {
        return prisma.lesson.findUnique({where: {id}})
    },

    async createLessonRepo(data: LessonParams) {
        return prisma.lesson.create({data})
    },

    async updateLessonRepo(id: string,data: LessonParams) {
        return prisma.lesson.update({
            where: {id},
            data,
        })
    },

    async deleteLessonRepo(id: string) {
        return prisma.lesson.delete({where: {id}})
    }
}