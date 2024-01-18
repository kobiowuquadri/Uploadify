import mongoose from "mongoose";

// model set up
const uploadSchema = new mongoose.Schema({
    path:{
        type:String,
        required:true
    }
}, {timestamps: true})


const uploadModel = mongoose.model('uploadmodels', uploadSchema)

export default uploadModel