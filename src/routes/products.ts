import express from 'express';
import {
    filterProductByCategory, 
    addProductToCategory, 
    countAllUserProduct, 
    deleteProduct, 
    editProductInCategory,
    getFeaturedProducts, 
    getProductById} from '../controllers/product'



const productsRoutes = express.Router();

productsRoutes.get(`/`, filterProductByCategory)

productsRoutes.get(`/:id`, getProductById);

productsRoutes.post(`/`, addProductToCategory)

productsRoutes.put('/:id', editProductInCategory)

productsRoutes.delete('/:id', deleteProduct)

productsRoutes.get(`/get/count`, countAllUserProduct)

productsRoutes.get(`/get/featured/:count`, getFeaturedProducts)


export {productsRoutes};