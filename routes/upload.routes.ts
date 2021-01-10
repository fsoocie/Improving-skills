import {Router} from 'express'
import {multerUploads, dataUri} from '../core/multer'
import {cloudinary} from '../core/cloudinary'

const router = Router()

router.post('/', multerUploads, function (req, res) {
  if (req.file) {
    const file = dataUri(req).content
    if (file) {
      cloudinary.v2.uploader.upload(file, (error, result) => {
        if (error) {
          return res.status(400).json({status: 'error', message: error.message})
        }
        const data = {
          url: result?.url,
          width: result?.width,
          height: result?.height,
          bytes: result?.bytes
        }
        return res.status(201).json({status: 'success', data})
      })
    }
  } else {
    return res.status(400).json({status: 'error', message: 'No file uploaded'})
  }

})

export default router
