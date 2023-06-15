import mongoose from 'mongoose';

export const Recipe = mongoose.model(
  'Recipe',
  new mongoose.Schema({
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    name: String,
    ingredients: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Ingredient',
      },
    ],
    steps: Object,
    comments: Array,
  })
);
