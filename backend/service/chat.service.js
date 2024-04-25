import { chatModel } from "../models/chatModel.js";
import { userModel } from "../models/userModel.js";

export const createChat = async (req) => {
  const userId = req.body.userId;
  console.log("userid",userId)
  if (!userId) {
    throw Object.assign(new Error(), {
      name: "BAD_REQUEST",
      message: "userId is required",
    });
  }
  var isChat = await chatModel
    .find({
      isGroupChat: false,
      $and: [
        { user: { $elemMatch: { $eq: req.user } } },
        { user: { $elemMatch: { $eq: userId } } },
      ],
    }).populate({
      path: 'user',
      select: ['_id', 'email', 'firstName', 'avatar'],
      match: { _id: { $ne: req.user } }
       });
   
  if (isChat.length > 0) {
    return { chat: isChat[0] };
  } else {
    var ChatData = {
      chatName: "sender",
      isGroupChat: false,
      user: [req.user, userId],
    };
    try {
      const createdChat = await chatModel.create(ChatData);
      const fullChat = await chatModel
        .findOne({ _id: createdChat._id }).populate({
          path: 'user',
          select: ['_id', 'email', 'firstName', 'avatar'],
          match: { _id: { $ne: req.user } }
           });  
       
      return { chat: fullChat }
    } catch (error) {
      throw error;
    }
  }
};


export const fetchChat = async (req) => {
  const result = await chatModel.find({ user: { $elemMatch: { $eq: req.user } } })
    .populate({
      path: 'user',
      select: ['_id', 'email', 'firstName', 'avatar'],
      match: { _id: { $ne: req.user } }
       });
  return result;

}
export const createGroupChat = async (req) => {
  if (!req.body.users || !req.body.name) {
    throw Object.assign(new Error(), {
      name: "BAD_REQUEST",
      message: "Group Name and users is requires is required",
    });

  }
  var users = JSON.parse(req.body.users);

  if (users.length < 2) {
    throw Object.assign(new Error(), {
      name: "BAD_REQUEST",
      message: "More than 2 user required to create a group",
    });


  }
  users.push(req.user)
  try {
    const groupChat = await chatModel.create({
      chatName: req.body.name,
      user: users,
      isGroupChat: true,
      groupAdmin: req.user
    })
    const fullGroupChat = await chatModel.findOne({ _id: groupChat._id })
      .populate("user", "-password").populate("groupAdmin", "-password");
    return fullGroupChat
  }
  catch (error) {
    console.log(error)
  }

}
export const chatService = {
  createChat,
  fetchChat,
  createGroupChat
};
