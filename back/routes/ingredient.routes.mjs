import {
  createIngredient,
  getAllIngredients,
} from '../controllers/ingredient.controlles.mjs';
import { authJwt } from '../middlewares/authJwt.mjs';

export default (app) => {
  console.log('INGREDIENT');
  app.use((req, res, next) => {
    res.header(
      'Access-Control-Allow-Headers',
      'x-access-token, Origin, Content-Type, Accept'
    );
    next();
  });

  app.post('/api/ingredient/create', [authJwt.verifyToken], createIngredient);
  app.get('/api/ingredient/all', [authJwt.verifyToken], getAllIngredients);
};
