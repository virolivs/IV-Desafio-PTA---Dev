import express from 'express';
import UserController from '@controllers/RestaurantController'

const routes = express.Router();
const RestaurantController = new RestaurantController();

routes.post('/restaurant', RestaurantController.create);
routes.get('/restaurant', RestaurantController.get);
routes.delete('/restaurant/:id', RestaurantController.delete);
routes.put('/restaurant/:id', RestaurantController.update);


export default routes;