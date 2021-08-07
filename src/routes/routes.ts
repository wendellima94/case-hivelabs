import express from 'express';
import { showUser, showUserByNickname } from '../controller/searchUser';
import { updateLastNameAndAddress } from '../controller/updateUser';

import { createUser } from '../controller/userController';

export const router = express.Router();
// post routes
router.post('/signup', createUser);

// get routes
router.get('/finduser/:name', showUser);
router.get('/finduserbynickname/:nickname', showUserByNickname);

router.put('/find/:_id', updateLastNameAndAddress);
