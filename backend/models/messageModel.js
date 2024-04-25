import mongoose from "mongoose";
const messageSchema = new mongoose.Schema(
  {
    senderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
    content: {
      type: String,
       trim: true 
      },
    chatId: {
       type: mongoose.Schema.Types.ObjectId,
       ref: "chat",
    }
  },
  { timestamps: true }
);

export const messageModel = mongoose.model("message", messageSchema);
