import { NextFunction, Request, Response } from 'express';

import userModel from '../model/userModel';

export const updateLastNameAndAddress = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { _id } = req.params;
    const {
      lastName,
      address,
    } = req.body[0].newUser;

    const newUser = await userModel.findByIdAndUpdate(
      { _id },
      {
        lastName,
        address,
      });

    const userSave = await userModel.findById({ _id });

    console.log(_id);
    console.log(lastName);
    console.log(address);
    console.log(userSave);

    return res.status(200).json({ userSave });
  } catch (error) {
    console.log(error);
  }
};
