import express from 'express';
import cors from 'cors';
import 'dotenv/config';
// tslint:disable-next-line: import-name
import connect from './db/connection';
import { router } from './routes/routes';

const app = express();

app.use(express.json());
app.use(cors());
app.use(router);

const dbConnect = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.v9sxm.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
connect({ dbConnect });

// tslint:disable-next-line: max-line-length
// const db = 'mongodb+srv://wdl:9c8x7z4a5s6d@cluster0.v9sxm.mongodb.net/hivelabs?retryWrites=true&w=majority';

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Listening to port ${port}...`);
});
