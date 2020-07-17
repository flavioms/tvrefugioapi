import { Router } from 'express';
import { checkout } from '../controllers/paymentsController';
const routes = Router();

routes.get('/', (request, response) => {
  return response.json({ message: 'Hello World' });
});

routes.post('/checkout', checkout);

routes.get('/success', (req, res) => {
  return res.render('success_screen');
});

routes.get('/pending', (req, res) => {
  return res.render('pending_screen');
});

routes.get('/failure', (req, res) => {
  return res.render('failure_screen');
});

export default routes;
