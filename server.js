import express from "express";
import path from 'path';
import logger from 'morgan';
import favicon from 'serve-favicon';
import mongoose from "mongoose";
import dotenv from 'dotenv'
//* API ROUTE IMPORTS
import userRouter from "./routes/userRoutes.js";
import merchantRouter from "./routes/merchantRoutes.js";

dotenv.config();

const __filename = new URL(import.meta.url).pathname;
const __dirname = path.dirname(__filename);
const app = express();
const port = 3000;

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
app.use('/api/merchants', merchantRouter)

// Serve the index.html for all routes (client-side routing)
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
