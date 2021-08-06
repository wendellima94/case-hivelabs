import { Request, Response } from 'express';
import userModel from '../model/userModel';

export const showUser = async (req: Request, res: Response) => {
  const { name } = req.params;
  const showUsers = await userModel.find({ name });

  const findUser = await userModel.findOne({ name });
  try {
    if (!findUser) {
      return res.status(400).json({ errors: { user: 'Esse usuário não existe' } });
    }
    return res.status(200).json(showUsers);
  } catch (error) {
    console.error(error);
  }
};
