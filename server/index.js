import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import Router from './routes/route.js';


dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', Router);

mongoose.set('strictQuery', false);
const PORT = 8000;

mongoose.connect('mongodb+srv://riju:riju@cluster0.s4hmv.mongodb.net/Blogging-Site', {
    useNewUrlParser: true
}).then(() => console.log('MongoDb is connected'))
    .catch(err => console.log(err));

app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));