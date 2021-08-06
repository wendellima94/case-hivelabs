import mongoose from 'mongoose';

type TInput = {
  dbConnect: string;
};

export default ({ dbConnect }: TInput) => {
  const connect = () => {
    mongoose
      .connect(
        dbConnect,
        // tslint:disable-next-line: ter-indent
        {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
      },
      )
      .then(() => {
        return console.log(`Conexão com MongoDB realizada com sucesso! ${dbConnect}`);
      })
      // tslint:disable-next-line: ter-arrow-parens
      .catch(error => {
        console.error('Conexão com MongoDB não foi realizada: ', error);
        return process.exit(1);
      });
  };
  connect();

  mongoose.connection.on('disconnected', connect);
};
