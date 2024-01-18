import { Request, Response } from "express";
import uploadModel from "../models/uploadModel";
import path from "path";

export const uploadImage = async (req: Request, res: Response) => {
  try {
    const image = req.file;
    if (!image) {
      return res
        .status(400)
        .json({ success: false, message: "No image file provided." });
    }

    // Check if the file is an image and the extention are ( ".jpg", ".jpeg", ".png", ".gif")
    const allowedExtensions = [".jpg", ".jpeg", ".png", ".gif"];
    const fileExtension = path.extname(image.originalname).toLowerCase();

    if (!allowedExtensions.includes(fileExtension)) {
      return res.status(400).json({
        success: false,
        message:
          "Invalid file type, Only .jpg, .jpeg, .png, and .gif files are allowed.",
      });
    }

    const newImage = new uploadModel({
      path: image?.path.replace(/\\/g, "/"),
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

export const getImage = async (req: Request, res: Response) => {
  try {
    const { imageId } = req.params;
    const image = await uploadModel.findById(imageId);
    if (image) {
      res
        .status(201)
        .json({ success: true, message: "Request Successfully", image });
    } else {
      res.status(404).json({ success: false, error: "Image not found" });
    }
  } catch (error : any) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message});
  }
};

export const getAllImages = async (req: Request, res: Response) => {
  try {
    const images = await uploadModel.find();
    if (images) {
      res.status(201).json({
        success: true,
        message: "View all images successfully",
        images,
      });
    } else {
      res.status(404).json({ success: false, message: "Images Not Found!" });
    }
  } catch (err: any) {
    console.log(err.message);
    res.status(500).json({ success: false, message: err.message });
  }
};
