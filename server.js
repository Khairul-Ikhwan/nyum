import express from "express";
import path from 'path';
import logger from 'morgan';
import favicon from 'serve-favicon';
import mongoose from "mongoose";
import dotenv from 'dotenv'
//* API ROUTE IMPORTS
import userRouter from "./routes/userRoutes.js";
import merchantRouter from "./routes/merchantRoutes.js";
import productRouter from "./routes/productRoutes.js";
import { Storage } from "@google-cloud/storage";
import Multer from "multer";

dotenv.config();

const storage = new Storage({
  keyFilename: 'mykey.json',
  projectId: process.env.GCP_PROJECTID,
});

const folderPath = 'nyum_images';
const storebucket = storage.bucket(folderPath);

const multerInstance = Multer({
  storage: Multer.memoryStorage(), //Prevents the image from being stored on our express router
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB limit (adjust as needed)
  },
});

const __filename = new URL(import.meta.url).pathname;
const __dirname = path.dirname(__filename);
const app = express();
const port = 3000;

app.post('/api/upload', multerInstance.single('imgfile'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).send('No file uploaded.');
    }

    const folderPath ='store_logos/'
    const blob = storebucket.file(folderPath + req.file.originalname);
    const blobStream = blob.createWriteStream();

    blobStream.on('error', (err) => {
      console.error(err);
      res.status(500).send('Error uploading the file.');
    });

    blobStream.on('finish', () => {
      // File successfully uploaded to Google Cloud Storage.
      res.status(200).send('File uploaded to Google Cloud Storage.');
    });

    blobStream.end(req.file.buffer);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});


//!!! Connect to MongoDB

const MONGODB_URI = process.env.MONGODB_URI;
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  dbName: process.env.DB_NAME,
});

//check db connection

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error: '));
db.once('open', ()=> {
  console.log('Connected to database: MongoDB')
})

app.use(logger('dev'));
app.use(express.json());
app.use(favicon(path.join(__dirname, 'dist', 'vite.svg')));

app.use(express.static(path.join(__dirname, 'dist')));

//!!! All Routes placed below
app.use('/api/users', userRouter);
app.use('/api/merchants', merchantRouter);
app.use('/api/products', productRouter);

// Serve the index.html for all routes (client-side routing)
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
