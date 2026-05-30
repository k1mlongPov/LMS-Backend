import {Response, Request} from "express";
import {CourseParams} from "../repository/param/course.params";
import {CourseRepository} from "../repository/course.repository";
export const getAllCoursesCtrl = async  (req: Request, res: Response): Promise<void> => {
    try {
        const allCourses = await CourseRepository.getAllCoursesRepo();
        res.status(200).json({
            success: true,
            data: allCourses
        })
    }catch (err: any) {
        res.send(err.message);
        res.status(500).json({
            message: 'Internal Server Error',
        })
    }
}
export const getCourseByIdCtrl = async  (req: Request, res: Response): Promise<void> => {
    try {
        const id = req.params.id;
        const course = await CourseRepository.getCourseByIdRepo(id.toString());
        if(!course) {
            res.status(404).json({
                success: false,
                message: 'Course not found.'
            })
        }
        res.status(200).json({
            success: true,
            data: course
        })
    }catch (err: any) {
        res.send(err.message);
        res.status(500).json({
            message: 'Internal Server Error',
        })
    }
}
export const createCourseCtrl = async (req: Request, res: Response): Promise<void>=> {
    try {
        const body: CourseParams = req.body;
        if(!body.title && !body.description && !body.instructorId) {
             res.status(400).json({
                 message: 'All fields are required',
             })
        }
        const newCourse = await CourseRepository.createCourseRepo(body);
        res.status(201).json({
            success: true,
            message: 'Course created successfully',
            course: newCourse
        })
    }catch (err: any) {
        res.send(err.message);
        res.status(500).json({
            message: 'Internal Server Error',
        })
    }
}

export const updateCourseCtrl = async (req: Request, res: Response): Promise<void>=> {
    try{
        const id = req.params.id;
        const body: CourseParams = req.body;
        if(!body.title && !body.description && !body.instructorId) {
            res.status(400).json({
                message: 'All fields are required',
            })
        }
        const course = await CourseRepository.updateCourseRepo(id.toString(), body);

        res.status(200).json({
            success: true,
            message: 'Course updated successfully',
            course: course
        })
    }catch (err: any) {
        res.send(err.message);
        res.status(500).json({
            message: 'Internal Server Error',
        })
    }
}

export const deleteCourseCtrl = async (req: Request, res: Response): Promise<void>=> {
    try {
        const id = req.params.id;
        const course = await CourseRepository.deleteCourseRepo(id.toString());
        res.status(200).json({
            success: true,
            message: 'Course deleted successfully'
        })
    }catch (err: any) {
        res.send(err.message);
        res.status(500).json({
            message: 'Internal Server Error',
        })
    }
}
