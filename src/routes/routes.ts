import express from 'express';

import { showUser, showUserByNickname } from '@controllers/searchUser';
import { updateLastNameAndAddress } from '@controllers/updateUser';
import { createUser } from '@controllers/createUser';

export const router = express.Router();
// post routes
router.post('/signup', createUser);

// get routes
router.get('/finduser/:name', showUser);
router.get('/finduserbynickname/:nickname', showUserByNickname);

router.put('/find/:_id', updateLastNameAndAddress);
