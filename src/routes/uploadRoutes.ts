import express from 'express'
import { uploadImage, getImage } from '../controllers/uploadController'
import { upload } from '../middlewares/multerConfig'
import { handleMulterErrors } from '../middlewares/multerConfig'
const routers = express.Router()


routers.post('/upload', upload.single('image'), handleMulterErrors, uploadImage);

routers.get('/get_image/:imageId', getImage)

export default routers