import { config as conf } from "dotenv";
conf();

const _config = {
    PORT: process.env.PORT,
    DB_URL: `${process.env.MONGO_URL}/${process.env.DB_NAME}`,
}

export const config = Object.freeze(_config);   //to make _config obj readOnly