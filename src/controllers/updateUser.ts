import { NextFunction, Request, Response } from 'express';

import userModel from '@models/userModel';

export const updateLastNameAndAddress = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { _id } = req.params;
    const {
      lastName,
      address,
    } = req.body[0].newUser;

    // tratando erros para campos nulos
    if (lastName == null) {
      res.status(404).json({
        message: 'O sobrenome não pode estar vazio',
      });
    }
    if (address == null) {
      res.status(404).json({
        message: 'O endereço não pode estar vazio',
      });
    }

    await userModel.findByIdAndUpdate(
      { _id },
      { lastName, address },
    );

    const searchUser = await userModel.findById({ _id });
    return res.status(200).json({ searchUser });
  } catch (e) {
    res.status(404).json({
      message: 'Não foi possivel realizar as alterações',
    });
  }
};

export const updateNickname = async (req: Request, res: Response) => {
  try {
    const { _id } = req.params;
    const { nickname } = req.body[0].newUser;

    // tratando o erro de nickname já existente
    const nicknameInUse = await userModel.findOne({ nickname });
    if (nicknameInUse) {
      return res.status(400).json({
        errors: {
          nickname: 'Nome de usuário ja existe',
        },
      });
    }
    await userModel.findByIdAndUpdate(
      { _id },
      {
        nickname,
      });

    const searchUser = await userModel.findById({ _id });
    return res.status(200).json({ searchUser });

  } catch (error) {
    console.error(error);
    res.status(404).json({
      message: 'Não foi possivel atualizar o seu nickname',
    });
  }
};
