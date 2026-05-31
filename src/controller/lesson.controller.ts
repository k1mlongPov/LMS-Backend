import {Request, Response} from 'express'
import {LessonRepository} from "../repository/lesson.repository";
import {LessonParams} from "../repository/param/lesson.params";

export const getAllLessonsCtrl = async (req: Request, res: Response): Promise<void> => {
    try{
        const lessons = await LessonRepository.getAllLessonsRepo();
        res.status(200).json({
            success: true,
            data: lessons,
        })
    }catch (e: any) {
        res.send(e.message);
        res.status(500).json({
            message: 'Internal Server Error',
        })
    }
}

export const getLessonByIdCtrl = async (req: Request , res: Response) :Promise<void> => {
    try {
        const id = req.params.id;
        const lesson = await LessonRepository.getLessonByIdRepo(id.toString());
        res.status(200).json({
            success: true,
            data: lesson,
        })
    }catch (e: any) {
        res.send(e.message);
        res.status(500).json({
            message: 'Internal Server Error',
        })
    }
}

export const createLessonCtrl = async (req: Request, res: Response): Promise<void> => {
    try{
        const body:LessonParams = req.body;
        const newLesson = await LessonRepository.createLessonRepo(body);
        res.status(201).json({
            success: true,
            message: 'Lesson created successfully',
            data: newLesson,
        })
    }catch (e: any) {
        res.send(e.message);
        res.status(500).json({
            message: 'Internal Server Error',
        })
    }
}

export const updateLessonCtrl = async (req: Request, res: Response): Promise<void> => {
    try {
        const id = req.params.id;
        const body:LessonParams = req.body;
        const lesson = await LessonRepository.updateLessonRepo(id.toString(), body);
        res.status(200).json({
            success: true,
            message: 'Lesson updated successfully',
            data: lesson,
        })
    }catch (e:any) {
        res.send(e.message);
        res.status(500).json({
            message: 'Internal Server Error',
        })
    }
}
export const deleteLessonCtrl = async (req: Request, res: Response): Promise<void> => {
    try{
        const id = req.params.id;
        const lesson = await LessonRepository.deleteLessonRepo(id.toString());
        res.status(200).json({
            success: true,
            message: 'Lesson deleted successfully',
        })
    }catch (e: any) {
        res.send(e.message);
        res.status(500).json({
            message: 'Internal Server Error',
        })
    }
}