import express from 'express';
import path from 'path';
import cors from 'cors';
import helmet from 'helmet';
import database from './database.js';
import router from './router.js';
import config from '../config/app.js';

database();

const app = express();

app.set('secretKey', config.secret);

app.use(helmet());
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

router(app);

export default app;
