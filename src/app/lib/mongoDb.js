import mongoose from "mongoose";

export const connectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_ACCESS_URI);
  } catch (e) {
    console.log(e);
  }
};
