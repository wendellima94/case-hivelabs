import { Request, Response } from 'express';

import userModel from '@models/userModel';

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const { _id } = req.params;
    await userModel.findOneAndDelete({ _id });

    res.status(200).json({
      message: "Usuário deletado com sucesso!",
    });

  } catch (error) {
    console.error(error);
    res.status(404).json({
      message: "Não foi possivel deletar o usuário!",
    });
  }
};
