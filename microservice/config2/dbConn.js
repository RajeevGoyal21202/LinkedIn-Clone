import mongoose from "mongoose";
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://3241rajeev:rajeeb@cluster0.4mch06z.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log(`connected with database successfully ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
  }
};
export default connectDB;