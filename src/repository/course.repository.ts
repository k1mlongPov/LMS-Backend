import {CourseParams} from "./param/course.params";
import prisma from "../config/prisma";

 export const CourseRepository = {
     async getAllCoursesRepo() {
         return prisma.course.findMany();
     },

     async getCourseByIdRepo(id : string) {
         return prisma.course.findUnique({
             where: { id },
         })
     },

     async createCourseRepo(data:CourseParams) {
        return prisma.course.create({data});
    },

     async updateCourseRepo(id: string, data: CourseParams) {
         return prisma.course.update({
             where: {id},
             data
         })
     },

     async deleteCourseRepo(id: string) {
         return prisma.course.delete({
             where: {id},
         })
     }

}