import express, { Request, Response, Application } from 'express';
import * as dotenv from 'dotenv';

dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 4550;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome');
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Application was started on ${PORT}`);
});
