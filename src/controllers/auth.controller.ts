import {Request, Response} from 'express';
import {authService} from "../services/auth.service";
import {UserModel, I_UserDocument} from '../models/user.model';
import {getErrorMessage} from "../utils/getErrorMessage";

export const loginOne = async (req: Request, res: Response) => {
    try {
        const foundUser = await authService.login(req.body);
        //console.log('found user', foundUser.token);
        res.status(200).send(foundUser);
    } catch (error) {
        return res.status(500).send(getErrorMessage(error));
    }
};

export const register = async (req: Request, res: Response) => {
    try {
        await authService.register(req.body);
        res.status(200).send('Inserted successfully');
    } catch (error) {
        return res.status(500).send(getErrorMessage(error));
    }
};