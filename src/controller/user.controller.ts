import {UserRepository} from "../repository/user.repository";
import {Response, Request} from "express";
import {UserParams} from "../repository/param/user.params";

export const getAllUsersCtrl = async (req: Request, res: Response): Promise<void> => {
    try {
        const users = await UserRepository.getALlUsersRepo();

        if(users.length === 0) {
            res.status(401).json({
                message: "No users found."
            })
        }

        res.status(200).json({
            success: true,
            data: users
        })
    }catch(err: any) {
        res.send(err.message);

        res.status(500).json({
            message: 'Internal Server Error',
        })
    }
}

export const getUserByIdCtrl = async (req: Request, res: Response): Promise<void> => {
    try {
        const id = req.params.id;
        const user = await UserRepository.getUserByIdRepo(id.toString());
        if(!user) {
            res.status(404).json({
                message: `User ${id} not found!.`
            })
        }
        res.status(200).json({
            success: true,
            data: user
        });
    }catch (err: any) {
        res.send(err.message);
        res.status(500).json({
            message: 'Internal Server Error',
        })
    }
}

export const createUserCtrl = async (req: Request, res: Response): Promise<void> => {
    try {
        const body: UserParams = req.body;
        const newUser = await UserRepository.createUserRepo(body);
        res.status(201).json({
            success: true,
            message: "User created successfully.",
            data: newUser
        })
    }catch(err: any) {
        res.send(err.message);
        res.status(500).json({
            message: 'Internal Server Error',
        })
    }
}

export const updateUserCtrl = async (req: Request, res: Response): Promise<void> => {
    try {
        const id = req.params.id;
        const body: UserParams = req.body;
        const user = await UserRepository.updateUserRepo(id.toString(), body);
        res.status(200).json({
            success: true,
            message: "User updated successfully.",
            data: user
        })
    }catch(err: any) {
        res.send(err.message);
        res.status(500).json({
            message: 'Internal Server Error',
        })
    }
}

export const deleteUserCtrl = async (req: Request, res: Response): Promise<void> => {
    try{
        const id = req.params.id;
        const user = await UserRepository.deleteUserRepo(id.toString());
        res.status(200).json({
            success: true,
            message: "User deleted successfully.",
        })
    }catch (err: any) {
        res.send(err.message);
        res.status(500).json({
            message: 'Internal Server Error',
        })
    }
}