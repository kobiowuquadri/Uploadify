import express from 'express'
import connectToDB from './database/db'
import dotenv from 'dotenv';
import routers from './routes/uploadRoutes';
import { config } from './config/config'
dotenv.config();


const app = express()
const PORT = config.server.port;

// Middlewares
app.use(express.json())
app.use('/api/v1/', routers)
connectToDB()


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


