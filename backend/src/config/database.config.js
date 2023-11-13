import { connect, set } from "mongoose";
import { UserModel } from "../Models/user.model.js";
import { FoodModel } from "../Models/food.model.js";
import { sample_foods } from "../data.js";
import { sample_users } from "../data.js";
import bcrypt from "bcryptjs";

const PASSWORD_HASH_SALT_ROUNDS = 10;

set("strictQuery", true);

export const dbconnect = async () => {
  try {
    connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    await seedUsers();
    await seedFood();

    console.log("connected successfully---");
  } catch (error) {
    console.log(error);
  }
};

async function seedUsers() {
  const userCount = await UserModel.countDocuments();
  if (userCount > 0) {
    console.log("Users seed is already done!");
    return;
  }
  for (let user of sample_users) {
    user.password = await bcrypt.hash(user.password, PASSWORD_HASH_SALT_ROUNDS);
    await UserModel.create(user);
  }
  console.log("Users seed is  done!");
}

async function seedFood() {
  const foodCount = await FoodModel.countDocuments();
  if (foodCount > 0) {
    console.log("Food seed is already done!");
    return;
  }

  for (let food of sample_foods) {
    food.imageUrl = `/foods/${food.imageUrl}`;
    await FoodModel.create(food);
  }
}
