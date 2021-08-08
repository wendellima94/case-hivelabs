import express from 'express';

import { showUserByName, showUserByNickname } from '@controllers/searchUser';
import { updateLastNameAndAddress, updateNickname } from '@controllers/updateUser';
import { createUser } from '@controllers/createUser';
import { deleteUser } from '@controllers/deleteUser';

export const router = express.Router();
// post routes
router.post('/signup', createUser);

// get routes
router.get('/finduser/:name', showUserByName);
router.get('/finduserbynickname/:nickname', showUserByNickname);

// put routes
router.put('/updatelastnameandaddress/:_id', updateLastNameAndAddress);
router.put('/updatenickname/:_id', updateNickname);

// delete routes
router.delete('/delete/:_id', deleteUser);
