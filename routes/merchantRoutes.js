import express from 'express';

import { addMerchant } from '../controllers/merchantController.js';

const merchantRouter = express.Router();

merchantRouter.post('/add-merchant', addMerchant );

export default merchantRouter