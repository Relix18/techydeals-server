import mongoose from "mongoose";

export const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "techydeals",
    })
    .then((data) => console.log(`MongoDB connected: ${data.connection.host}`));
};
