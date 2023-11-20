import express from 'express';
import { addCart, addUser, getAllUsers, getCart, getUser } from '../controllers/userController.js';

const userRouter = express.Router();

userRouter.post('/add-user', addUser);

userRouter.post('/add-to-cart/:productId', addCart);

userRouter.get('/get-cart', getCart);

userRouter.get('/getUser/:userId', getUser);

userRouter.get('/getAllUsers/:request', getAllUsers)

export default userRouter;