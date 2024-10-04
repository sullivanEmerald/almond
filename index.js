import express from 'express';
import connectDB from './config/database.js';
import dotenv from 'dotenv';
import logger from 'morgan'
import cors from 'cors'
import session from 'express-session'
import MongoStore from 'connect-mongo'
import  mongoose from 'mongoose'


// App Routes
import productRoutes from './product/routes/product.js'


// Giving expressa an app
const app = express();

// Initializing environment variable
dotenv.config({ path: './config/.env' });


// connecting database for the app by calling the function
connectDB();


// app setting
app.use(express.urlencoded({extended :true}))
app.use(express.json())
app.use(cors())
app.use(logger('dev'))

// initializing session
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
        mongoUrl: process.env.DB_STRING, 
        mongooseConnection: mongoose.connection, 
    })
}));

app.use('/products', productRoutes)


app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});