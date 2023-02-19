import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import mongoose from 'mongoose';
import cors from 'cors';
import 'dotenv/config';
import {authJwt} from './middlewares/auth';
import {errorHandler} from './helpers/error-handler';

const app = express();

//handle cors error
app.use(cors());
app.options('*', cors())

//middleware
app.use(bodyParser.json());
app.use(morgan('tiny'));
app.use(authJwt());
app.use("/public/uploads", express.static(__dirname + "/public/uploads"));
app.use(errorHandler);

//Routes
import categoriesRoutes from './routes/categories';
import{productsRoutes} from './routes/products';
import {usersRoutes} from './routes/users';
import {ordersRoutes} from './routes/orders';

const api = process.env.API_URL

app.use(`${api}/categories`, categoriesRoutes)
app.use(`${api}/products`, productsRoutes)
app.use(`${api}/users`, usersRoutes);
app.use(`${api}/orders`, ordersRoutes);

//Database
mongoose.connect(process.env.CONNECTION_STRING as string, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'eshop'
})
.then(()=>{
    console.log('Database Connection is ready...')
})
.catch((err)=> {
    console.log(err);
})

//Server
app.listen(3000, ()=>{
    console.log('server is running http://localhost:3000');
});

export default app;