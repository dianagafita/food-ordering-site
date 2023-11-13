import { Schema, model } from "mongoose";

export const FoodSchema = new Schema(
  {
    name: { type: String, required: true },
    cookTime: { type: String, required: true },
    price: { type: Number, required: true },
    imageUrl: { type: String, required: true },
    origins: { type: [String], required: true },
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

export const FoodModel = model("food", FoodSchema);
