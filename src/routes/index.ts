import { Router } from 'express';
import { checkout } from '../controllers/paymentsController';
const routes = Router();

routes.get('/', (request, response) => {
  return response.json({ message: 'Hello World' });
});

routes.post('/checkout', checkout);

routes.get('/success', (req, res) => {
  return res.send(res.statusMessage);
});

routes.get('/pending', (req, res) => {
  return res.send(res.statusMessage);
});

routes.get('/failure', (req, res) => {
  return res.send(res.statusMessage);
});

export default routes;
