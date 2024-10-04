import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config({ path: './config/.env' });


const connectDB = async () => {
    try {
        if (!process.env.DB_STRING) {
            throw new Error('DB_STRING is not defined in the environment variables');
        }
        const conn = await mongoose.connect(process.env.DB_STRING);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1);
    }
};

export default connectDB;