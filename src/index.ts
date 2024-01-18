import express from 'express'
import connectToDB from './database/db'
import dotenv from 'dotenv';
import { config } from './config/config'
dotenv.config();

const app = express()

const PORT = config.server.port;
connectToDB()



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


