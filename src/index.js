import express from 'express';
import userRouter from './routes/userRouter';

const app = express();
const PORT = 5000;

app.use('/user', userRouter);

app.listen(PORT, () => console.log(221231231312123123));
