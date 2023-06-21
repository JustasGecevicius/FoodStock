import { authJwt } from '../middlewares/authJwt.mjs';
import { db } from '../models/index.mjs';
import { User } from '../models/user.model.mjs';

const Recipe = db.recipe;

export const createRecipe = async (req, res) => {
  const requestRecipe = req.body;
  const recipe = new Recipe({
    name: requestRecipe.name,
    ingredients: requestRecipe.recipeIngredients,
    steps: requestRecipe.steps,
    comments: requestRecipe.comments,
  });

  try {
    const newRecipe = await recipe.save();
    const foundUser = await User.findById(req.userId);
    if (!foundUser) {
      res.status(500).send({ message: 'No User Found' });
      return;
    }
    newRecipe.userId = foundUser._id;
    await newRecipe.save();
    res.send({ message: 'recipe saved' });
  } catch (error) {
    console.log(error);
  }
};
