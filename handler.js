import serverless from 'serverless-http';
import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import multer from 'multer';
import routes from './src/modules/routes';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use(cookieParser());

app.use(cors());

app.use('/pukara', routes);

app.use(
  multer({
    dest: './uploads/',
    rename(fieldname, filename) {
      return filename;
    },
  })
);

export const handler = serverless(app);
