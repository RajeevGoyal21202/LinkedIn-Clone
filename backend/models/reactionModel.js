import mongoose from "mongoose";

const reactionSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "userModel",
    },
    postId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "postModel",
    },
    type: {
      type: String,
      enum: ["like", "celeberate", "support", "love", "funny"],
    },
  },
  { timestamps: true }
);

export const reactionModel = mongoose.model("reaction", reactionSchema);
