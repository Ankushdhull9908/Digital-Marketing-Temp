import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://ankushdhull9908_db_user:1234567890@cluster0.7u55ewu.mongodb.net/?appName=Cluster0");
    console.log("MongoDB Connected ✅");
  } catch (error) {
    console.log("DB Error ❌", error);
    process.exit(1);
  }
};

export default connectDB;