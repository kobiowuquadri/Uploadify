import { Request, Response } from "express"
import uploadModel from "../models/uploadModel"
import path from "path"


// Upload Image Logic

export const uploadImage = async (req: Request, res: Response) => {
  try {
    const image = req.file
    if (!image) {
      return res
        .status(400)
        .json({ success: false, message: "No image file provided!" })
    }

    // validate image
    const allowedExtensions = [".jpg", ".jpeg", ".png", ".gif"]
    const fileExtension = path.extname(image.originalname).toLowerCase()

    if (!allowedExtensions.includes(fileExtension)) {
      return res.status(400).json({
        success: false,
        message:
          "Invalid file type, Only .jpg, .jpeg, .png, and .gif files are allowed!",
      })
    }

    const newImage = new uploadModel({
      path: image?.path.replace(/\\/g, "/").replace("public/", "")
    });
    const savedImage = await newImage.save();
    res.status(201).json({
      success: true,
      message: "Image Uploaded Successfully",
      savedImage,
    })
  } catch (err) {
    res.status(404).json({ succes: false, error: err })
  }
}

// Get Image (Single)

export const getImage = async (req: Request, res: Response) => {
  try {
    const { imageId } = req.params
    const image = await uploadModel.findById(imageId)
    if (image) {
      res
        .status(200)
        .json({ success: true, message: "Request Successfully", image })
    } else {
      res.status(404).json({ success: false, error: "Image not found" })
    }
  } catch (error : any) {
    console.error(error)
    res.status(404).json({ success: false, message: error.message})
  }
}


// Get Images (ALL)

export const getAllImages = async (req: Request, res: Response) => {
  try {
    const images = await uploadModel.find()
    if (images) {
      res.status(200).json({
        success: true,
        message: "View all images successfully",
        images,
      })
    } else {
      res.status(404).json({ success: false, message: "Images Not Found!" })
    }
  } catch (err: any) {
    console.log(err.message);
    res.status(404).json({ success: false, message: err.message })
  }
}
