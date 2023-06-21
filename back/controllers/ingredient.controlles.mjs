import { authJwt } from '../middlewares/authJwt.mjs';
import { db } from '../models/index.mjs';
import { User } from '../models/user.model.mjs';
import { getStorage } from 'firebase-admin/storage';

const Ingredient = db.ingredient;

// const bucket = getStorage().bucket();

export const createIngredient = async (req, res) => {
  console.log(req.body, req.files);
  // const refS = db.storage();
  const requestIngredient = req.body;
  // console.log(requestIngredient, 'createIngredient');
  const ingredient = new Ingredient({
    name: requestIngredient.name,
    calories: JSON.parse(requestIngredient.calories),
    macros: JSON.parse(requestIngredient.macros),
  });

  try {
    // console.log(req.userId);
    const newIngredient = await ingredient.save();
    const foundUser = await User.findById(req.userId);
    if (!foundUser) {
      res.status(500).send({ message: 'No User Found' });
      return;
    }
    // console.log(foundUser);
    newIngredient.userId = foundUser._id;
    await newIngredient.save();
    res.send({ message: 'ingredient saved' });
  } catch (error) {
    console.log(error);
  }
};

export const getAllIngredients = async (req, res) => {
  const ingredients = await Ingredient.find();
  res.status(200).send({ ingredients, message: 'All Ingredients' });
};
