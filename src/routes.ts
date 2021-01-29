
import express, { request, response } from 'express';
import { Joi, celebrate} from 'celebrate';
import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';
import multer from 'multer';

import multerConfig from './config/multer';

const routes = express.Router();
const upload = multer(multerConfig);
const pointsController = new PointsController();
const itemsController = new ItemsController();

routes.get('/items', itemsController.index);

routes.post('/points', 
upload.single('image'), 
pointsController.create
);
routes.get('/points/:id', pointsController.show);
routes.get('/points', pointsController.index);   



export default routes;