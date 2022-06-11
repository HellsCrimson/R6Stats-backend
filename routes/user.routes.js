import { Router } from 'express';
import { getUserInfos, getPvpStats, getPveStats } from '../controllers/user.controllers.js';

export const userRoute = Router();

userRoute.post('/info', getUserInfos);
userRoute.post('/statsPvp', getPvpStats);
userRoute.post('/statsPve', getPveStats);