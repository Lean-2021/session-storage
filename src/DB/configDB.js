import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export const connectDB = async () => {
  try {
    const URI = process.env.URI;
    await mongoose.connect(URI);
    console.log("Connected Mongo DB");
  } catch (error) {
    console.log("Error en la conexión a mongoDB", error);
  }
};
