import mongoose from "mongoose"

const notificationSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref:"users", require: true },
    title: { type: String },
    type: { type: Number},
    text: { type: String, },
    read: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
)
export const notificationModel = mongoose.model('notifications',notificationSchema)