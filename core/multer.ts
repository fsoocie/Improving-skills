import express from 'express'
import multer from 'multer';
import path from 'path'
import DatauriParser from 'datauri/parser';

const storage = multer.memoryStorage();
const multerUploads = multer({storage}).single('image');

const dUri = new DatauriParser();

const dataUri = (req: express.Request) => dUri.format(
  path.extname(req.file.originalname).toString(),
  req.file.buffer
);

export {multerUploads, dataUri};
