import { Order } from '../models/order';
import express, { Router, Request, Response } from 'express';
import { OrderItem } from '../models/order-items';
import {
getTotalOrderSales,
deleteAnOrderById,
findOrderById,
getUserOrderByUserId,
getUserOrderCount,
getUserOrderedList,
postAnOrder,
updateOrderStatusById
} from '../controllers/orders'

const ordersRoutes: Router = express.Router();

ordersRoutes.get('/', getUserOrderedList);



ordersRoutes.get(`/:id`, findOrderById)

ordersRoutes.post('/', postAnOrder)

ordersRoutes.put('/:id', updateOrderStatusById)

ordersRoutes.delete('/:id', deleteAnOrderById)

ordersRoutes.get('/get/totalsales', getTotalOrderSales)

ordersRoutes.get(`/get/count`, getUserOrderCount)

ordersRoutes.get(`/get/userorders/:userid`,getUserOrderByUserId)


export {ordersRoutes}



