import { authJwt } from '../middlewares/authJwt.mjs';
import { db } from '../models/index.mjs';
import { User } from '../models/user.model.mjs';

const Recipe = db.recipe;

export const createRecipe = async (req, res) => {
  const requestRecipe = req.body;
  console.log(requestRecipe, 'createRecipe');
  const recipe = new Recipe({
    name: requestRecipe.name,
    ingredients: requestRecipe.ingredients,
    steps: requestRecipe.steps,
    comments: requestRecipe.comments,
  });

  try {
    console.log(req.userId);
    const newRecipe = await recipe.save();
    const foundUser = await User.findById(req.userId);
    if (!foundUser) {
      res.status(500).send({ message: 'No User Found' });
      return;
    }
    console.log(foundUser);
    newRecipe.userId = foundUser._id;
    await newRecipe.save();
    res.send({ message: 'recipe saved' });
  } catch (error) {
    console.log(error);
  }
};
