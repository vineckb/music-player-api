import express from 'express';
import path from 'path';
import cors from 'cors';
import helmet from 'helmet';
import database from './database';
import router from './router';
const morgan = require('morgan');

database();

const app = express();

app.use(helmet());
app.use(cors());

app.use(morgan('combined'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

router(app);

module.exports = app;
