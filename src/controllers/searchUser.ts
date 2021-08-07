import { Request, Response } from 'express';

import userModel from '@models/userModel';

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
    res.status(404).json({
      message: 'Não foi possivel realizar a consulta',
      errors: error,
    });
  }
};

export const showUserByNickname = async (req: Request, res: Response) => {
  try {
    const { nickname } = req.params;
    const showUser = await userModel.find({ nickname }, 'name lastName nickname -_id');

    const findUser = await userModel.findOne({ nickname });
    if (!findUser) {
      return res.status(400).json({ errors: { user: 'Esse usuário não existe' } });
    }

    return res.status(200).json({ showUser });
  } catch (error) {
    res.status(404).json({
      message: 'Não foi possivel realizar a consulta',
      errors: error,
    });
  }
};
