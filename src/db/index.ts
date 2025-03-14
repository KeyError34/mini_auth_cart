import mongoose from 'mongoose';
import 'dotenv/config';

const uri = process.env.MONGO_URI;

const connctDB = async () => {
  try {
    await mongoose.connect(uri || '');
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection failed', error);
    process.exit(1);
  }
};
export default connctDB;
