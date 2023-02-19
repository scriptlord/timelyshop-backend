import express from 'express';
import { usersRoutes } from './users';
import { productsRoutes } from './products';
import { ordersRoutes } from './orders';

const router = express.Router();

router.use('/users', usersRoutes);
router.use('/products', productsRoutes);
router.use('/orders', ordersRoutes);

export { router };