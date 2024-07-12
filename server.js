import express  from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import morgan from 'morgan';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoute.js';
import categoryRoutes from './routes/CategoryRoutes.js';
import productRoutes from './routes/productRoute.js';
import cors from 'cors';
//config env
dotenv.config();

//database config
connectDB()
//rest onject
const app = express()


//middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));



//routes
app.use("/api/v1/auth",authRoutes);
app.use("/api/v1/category",categoryRoutes);
app.use("/api/v1/product", productRoutes);
//rest api
app.get('/', (req,res) => {
    res.send("<h1>welcome to ecommerce app</h1>");
    });

//PORT
const PORT = process.env.PORT || 8080;

//APP LISTEN
app.listen(PORT,() =>{
    console.log(`server is running on ${process.env.DEV_MODE} node on port ${process.env} ${PORT}`.bgCyan.white);
});