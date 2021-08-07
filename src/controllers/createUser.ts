import { Request, Response } from 'express';
import bcryptjs from "bcryptjs";

import userModel from '@models/userModel';

export const createUser = async (req: Request, res: Response) => {
  try {
    const {
      name,
      lastName,
      email,
      nickname,
      address,
      bio,
      password,
      confirmPassword,
    } = req.body;

    // tratando o erro de nickname já existente
    const nicknameInUse = await userModel.findOne({ nickname });
    if (nicknameInUse) {
      return res.status(400).json({
        errors: {
          nickname: 'Nome de usuário ja existe',
        },
      });
    }

    // tratando o erro de email já existente
    const emailInUse = await userModel.findOne({ email });
    if (emailInUse) {
      return res.status(400).json({
        errors: {
          email: 'Email já em uso',
        },
      });
    }

    // tratando erro de confirmarção de password
    if (confirmPassword === "") {
      return res.status(400).json({
        errors: 'O campo precisa estar preenchido',
      });
    }
    if (confirmPassword !== password) {
      return res.status(400).json({
        errors: 'As senhas não coincidem',
      });
    }

    // criptografando a senha do usuário
    const passwordHash = await bcryptjs.hash(password, 12);

    const newUser = await userModel.create({
      name,
      lastName,
      email,
      nickname,
      address,
      bio,
      password: passwordHash,
    });

    return res.status(200).json(
      [{
        newUser,
      }]);
  } catch (error) {
    console.error(error);
    res.status(404).json({
      message: 'Não foi possivel criar o usuário',
    });
  }
};
