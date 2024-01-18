import { Request, Response } from "express";
import uploadModel from "../models/uploadModel";
import path from "path";

export const uploadImage = async (req: Request, res: Response) => {
  try {
    const image = req.file;
    if (!image) {
      return res
        .status(400)
        .json({ success: false, message: "No image file provided." })
    }

    // Check if the file is an image and the extention are ( ".jpg", ".jpeg", ".png", ".gif")
    const allowedExtensions = [".jpg", ".jpeg", ".png", ".gif"];
    const fileExtension = path.extname(image.originalname).toLowerCase();

    if (!allowedExtensions.includes(fileExtension)) {
      return res.status(400).json({
        success: false,
        message:
          "Invalid file type, Only .jpg, .jpeg, .png, and .gif files are allowed.",
      })
    }

    const newImage = new uploadModel({
      path: image?.path,
    });
    const savedImage = await newImage.save();
    res.status(200).json({
      success: true,
      message: "Image Uploaded Successfully",
      savedImage,
    });
  } catch (err) {
    res.status(500).json({ succes: false, error: err });
  }
};