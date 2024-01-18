import { Request, Response } from "express";
import uploadModel from "../models/uploadModel";

export const uploadImage = async (req : Request, res : Response)=> {
      try {
          const image = req.file
          const newImage = new uploadModel({
            path: image?.path
          })
          const savedImage = await newImage.save()
          res.status(200).json({success: true, message: "Image Uploaded Successfully", savedImage})
      }
      catch(err){
        res.status(500).json({succes: false, error: err})
      }
}

