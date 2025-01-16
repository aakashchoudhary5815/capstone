import mongoose from "mongoose";
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Mongodb connected successfully");
  } catch (error) {
    console.log(error);
  }
};
export default connectDB;