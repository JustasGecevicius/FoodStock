import { authJwt } from '../middlewares/authJwt.mjs';
import { db } from '../models/index.mjs';
import { User } from '../models/user.model.mjs';

const Ingredient = db.ingredient;

export const createIngredient = async (req, res) => {
  const requestIngredient = req.body;
  console.log(requestIngredient, 'createIngredient');
  const ingredient = new Ingredient({
    name: requestIngredient.name,
    calories: requestIngredient.calories,
    macros: requestIngredient.macros,
  });

  try {
    console.log(req.userId);
    const newIngredient = await ingredient.save();
    const foundUser = await User.findById(req.userId);
    if (!foundUser) {
      res.status(500).send({ message: 'No User Found' });
      return;
    }
    console.log(foundUser);
    newIngredient.userId = foundUser._id;
    await newIngredient.save();
    res.send({ message: 'ingredient saved' });
  } catch (error) {
    console.log(error);
  }
};
