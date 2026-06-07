import {Response, Request} from "express";
import {EnrollRepository} from "../repository/enroll.repository";
import {EnrollParams} from "../repository/param/enroll.params";

export const getAllEnrollsCtrl = async (req: Request, res: Response): Promise<void> => {
    try {
        const enrolls = await EnrollRepository.getAllEnrollsRepo();
        res.status(200).json({
            success: true,
            data: enrolls,
        })
    }catch (e:any) {
        res.send(e.message);

        res.status(500).json({
            message: 'Internal Server Error',
        })
    }
}

export const getEnrollByIdCtrl = async (req: Request, res: Response): Promise<void> => {
    try {
        const id = req.params.id;
        const enroll = await EnrollRepository.getEnrollByIdRepo(id.toString());

        res.status(200).json({
            success: true,
            data: enroll,
        })
    }catch (e:any) {
        res.send(e.message);
        res.status(500).json({
            message: 'Internal Server Error',
        })
    }
}

export const createEnrollCtrl = async (req: Request, res: Response): Promise<void> => {
    try {
        const body: EnrollParams = req.body;
        const newEnroll = await EnrollRepository.createEnrollRepo(body);

        res.status(201).json({
            success: true,
            message: 'Enrollment created successfully',
            data: newEnroll,
        })
    }catch (e: any) {
        res.send(e.message);
        res.status(500).json({
            message: 'Internal Server Error',
        })
    }
}

export const updateEnrollCtrl = async (req: Request, res: Response): Promise<void> => {
    try {
        const id = req.params.id;
        const body: EnrollParams = req.body;

        const enroll = await  EnrollRepository.updateEnrollRepo(id.toString(), body);
        res.status(200).json({
            success: true,
            message: 'Enrollment updated successfully',
            data: enroll,
        })
    }catch (e: any) {
        res.send(e.message);
        res.status(500).json({
            message: 'Internal Server Error',
        })
    }
}

export const deleteEnrollCtrl = async (req: Request, res: Response): Promise<void> => {
    try{
        const id = req.params.id;
        const enroll = await EnrollRepository.deleteEnrollRepo(id.toString());
        res.status(200).json({
            success: true,
            message: 'Enrollment deleted successfully',
        })
    }catch (e: any) {
        res.send(e.message);
        res.status(500).json({
            message: 'Internal Server Error',
        })
    }
}