import { Router } from 'express';
import { getUserInfosByName } from '../controllers/user.controllers.js';

export const userRoute = Router();

userRoute.get('/getUserByName', getUserInfosByName);