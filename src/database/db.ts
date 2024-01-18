import mongoose from "mongoose";
import { config } from "../config/config";

// Database Set Up

const connectToDB = async () => {
    try {
        await mongoose.connect(config.mongodb.url)
        console.log('Connected to Database Successfully')
    }
    catch(err: any){
        console.error(err.message)
        throw err
    }
}

export default connectToDB