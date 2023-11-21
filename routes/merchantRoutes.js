import express from 'express';

import { addMerchant, addProduct, deleteProduct, getAll, getMerchant } from '../controllers/merchantController.js';

const merchantRouter = express.Router();

merchantRouter.post('/add-merchant', addMerchant);

merchantRouter.patch('/add-product', addProduct);

merchantRouter.delete('/:productId', deleteProduct)

merchantRouter.post('/get-merchant', getMerchant)

merchantRouter.get('/get-all', getAll);

export default merchantRouter