import mongoose from "mongoose";

const uploadSchema = new mongoose.Schema({
    path:{
        type:String,
        required:[true, "Please upload an image"]
    }
})


const uploadModel = mongoose.model('uploadmodels', uploadSchema)

export default uploadModel