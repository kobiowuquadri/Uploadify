import mongoose from "mongoose";
import { config } from "../config/config";

const connectToDB = async () => {
    try {
        await mongoose.connect(config.mongodb.url)
        console.log('Connected to database successfully.')
    }
    catch(err: any){
        console.error(err.message)
        throw err
    }
}

export default connectToDB