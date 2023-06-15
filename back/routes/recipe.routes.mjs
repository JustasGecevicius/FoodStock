import { createRecipe } from '../controllers/recipes.controller.mjs';
import { authJwt } from '../middlewares/authJwt.mjs';

export default (app) => {
  console.log('RECIPE');
  app.use((req, res, next) => {
    res.header(
      'Access-Control-Allow-Headers',
      'x-access-token, Origin, Content-Type, Accept'
    );
    next();
  });

  app.post('/api/recipe/create', [authJwt.verifyToken], createRecipe);
};
