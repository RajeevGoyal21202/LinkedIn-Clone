import mongoose from "mongoose";
const connectdb = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://3241rajeev:3242rajeev@cluster0.h2taedf.mongodb.net/"
    );
    console.log(`connected with database successfully ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
  }
};
export default connectdb;
