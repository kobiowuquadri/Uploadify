import { Request, Response, NextFunction } from "express"
import multer from 'multer'
import path from "path"

// Multer configuration

const storage = multer.diskStorage({
  destination: 'public/uploads',
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
  },
})

const fileFilter = (req: Request, file: Express.Multer.File, cb: multer.FileFilterCallback) => {
  const allowedExtensions = [".jpg", ".jpeg", ".png", ".gif"]
  const fileExtension = path.extname(file.originalname).toLowerCase()

  if (allowedExtensions.includes(fileExtension)) {
    cb(null, true)
  } else {
    cb(new Error("Invalid file type, Only (.jpg, .jpeg, .png, and .gif) files are allowed."))
  }
}

export const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
})

export const handleMulterErrors = (err: any, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof multer.MulterError) {
    return res.status(400).json({ success: false, error: err.message })
  } else if (err) {
    return res.status(500).json({ success: false, message: err.message })
  }
  next()
}
