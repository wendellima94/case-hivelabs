import 'dotenv/config';

export const dbConnect = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.v9sxm.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

// tslint:disable-next-line: max-line-length
// const db = 'mongodb+srv://wdl:9c8x7z4a5s6d@cluster0.v9sxm.mongodb.net/hivelabs?retryWrites=true&w=majority';
