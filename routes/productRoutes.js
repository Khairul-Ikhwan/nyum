import express from 'express';
import { getAll } from '../controllers/productController.js';

const productRouter = express.Router();

productRouter.get('/get-all', getAll)

export default productRouter