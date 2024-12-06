import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connctDB from './db/index';
const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());
connctDB()
app.listen(port, () => {
  console.log(`Server ranning http://localhost:${port}`);
});
