import express from 'express';

import { createUser } from '../controller/userController';

export const router = express.Router();

router.post('/signup', createUser);
