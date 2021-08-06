import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import http from "http";
// tslint:disable-next-line: import-name
import connect from './db/connection';
import { router } from './routes/routes';
import { dbConnect } from './db/mongouri';

const app = express();

app.use(express.json());
app.use(cors());
app.use(router);

const server = http.createServer(app);

connect({ dbConnect });

const port = process.env.PORT || 4000;

server.listen(port, () => {
  console.log(`Listening to port ${port}...`);
});
