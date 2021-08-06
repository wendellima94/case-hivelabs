import express from 'express';
import { showUser } from '../controller/searchUser';

import { createUser } from '../controller/userController';

export const router = express.Router();
// post routes
router.post('/signup', createUser);

// get routes
router.get('/finduser/:name', showUser);
