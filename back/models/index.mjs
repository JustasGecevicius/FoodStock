import mongoose from 'mongoose';
import { User } from './user.model.mjs';
import { Role } from './role.model.mjs';
import { Recipe } from './recipe.model.mjs';
import { Ingredient } from './ingredient.model.mjs';

mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.user = User;
db.role = Role;
db.recipe = Recipe;
db.ingredient = Ingredient;

db.ROLES = ['user', 'admin', 'moderator'];

export { db };
