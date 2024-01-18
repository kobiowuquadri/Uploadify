import express from 'express'
import { uploadImage } from '../controllers/uploadController'
import { upload } from '../middlewares/multerConfig'
import { handleMulterErrors } from '../middlewares/multerConfig'
const routers = express.Router()


routers.post('/upload-image', upload.single('image'), handleMulterErrors, uploadImage);


export default routers