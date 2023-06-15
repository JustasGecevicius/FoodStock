import mongoose from 'mongoose';

export const Ingredient = mongoose.model(
  'Ingredient',
  new mongoose.Schema({
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    name: String,
    calories: Number,
    macros: {
      protein: Number,
      carbs: Number,
      fat: Number,
    },
  })
);
