import express from 'express';
import routes from './routes';
import dotenv from 'dotenv';
const app = express();
dotenv.config();

app.use(express.json());
app.use(routes);

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server started on port ${process.env.PORT}`);
});
