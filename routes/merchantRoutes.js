import express from 'express';

import { addMerchant, addProduct, deleteProduct } from '../controllers/merchantController.js';

const merchantRouter = express.Router();

merchantRouter.post('/add-merchant', addMerchant);

merchantRouter.patch('/add-product', addProduct);

merchantRouter.delete('/:productId', deleteProduct)

export default merchantRouter