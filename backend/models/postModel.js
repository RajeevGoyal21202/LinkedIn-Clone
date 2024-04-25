import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users", // add required attribute
  },
  title: {
    type: String,
    required: true,
  },
  image: {
    type:[String],
    default:[]
  },

  body: {
    type: String,
    // required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
export const postModel = mongoose.model("post", postSchema);
