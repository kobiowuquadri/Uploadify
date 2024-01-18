import express from 'express'
import { uploadImage } from '../controllers/uploadController'
import { upload } from '../middlewares/multerConfig'
const routers = express.Router()


routers.post('/upload-image', upload.single('image'), uploadImage)

export default routers