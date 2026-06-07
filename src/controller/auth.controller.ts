import {Request, Response} from "express";
import {UserParams} from "../repository/param/user.params";
import {AuthRepository} from "../repository/auth.repository";

export const registerCtrl = async (req: Request, res: Response) => {
    try {
        const body: UserParams = req.body;

        const newUser = await AuthRepository.register(body);

        res.status(201).json(newUser);
    }catch(err: any) {
        res.status(500).json({
            message: err.message || "Something went wrong",
        })
    }
}

export const loginCtrl = async (req: Request, res: Response) => {
    try {
        const {email, password} = req.body;
        const user = await AuthRepository.login(email, password);
        res.status(201).json(user);
    }catch(err: any) {
        res.status(500).json({
            message: err.message || "Something went wrong",
        })
    }
}