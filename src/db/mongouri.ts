import 'dotenv/config';

export const dbConnect = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.v9sxm.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
