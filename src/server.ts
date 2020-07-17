import express from 'express';
import routes from './routes';
import dotenv from "dotenv";
const app = express();
dotenv.config();

app.use(express.json());
app.use(routes);

app.listen(3333, () => {
  console.log('Server started on port 3333');
});
