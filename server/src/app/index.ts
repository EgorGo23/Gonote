import * as express from 'express';
// eslint-disable-next-line no-duplicate-imports
import { Application } from 'express';

const app: Application = express();
// const port = 4550;


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
