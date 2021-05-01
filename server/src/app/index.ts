import express, { Application } from 'express';
import cors from 'cors';

import { db } from './models';
import { router } from './routes';

const PORT = process.env.PORT || 4550;

const app: Application = express();

app.use(express.json());
app.use('/api', router);

const start = async () => {
  try {
    await db.sequelize.authenticate();
    await db.sequelize.sync({ force: true });

    app.listen(PORT, () => {
      // eslint-disable-next-line no-console
      console.log(`Application was started on ${PORT}`);
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
};

start();

