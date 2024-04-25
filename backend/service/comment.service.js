import { commentModel } from "../models/commentModel.js";

export const createComment = async (payload) => {
  const { comment } = payload.body;
  const { postId } = payload.params;
  const { _id } = payload.user;
  if (!comment && comment === " ") {
    throw Object.assign(new Error("comment is required"), { code: 400 });
  }
  const newCommentData = {
    userId: _id,
    postId,
    body: comment,
  };
  console.log("newCommentData: ", newCommentData);
  const response = await new commentModel(newCommentData).save();
  return response;
};
export const deleteComment = async (payload) => {
  const { userId } = payload.body;
  const comment = await commentModel.deleteOne({
    _id: payload.params.id,
    userId,
  });
  return comment;
};
export const fetchComment = async (payload) => {
  // console.log(payload.params)
  const postId = payload.params;
  console.log(" postId: ", postId);
  // console.log(postId);
  const comment = await commentModel
    .find(postId)
    .sort({ createdAt: "descending" })
    .limit(5);
  console.log(`${postId} comments are:- `, comment);
  return comment;
};
export const updateComment = async (payload) => {
  let data = await commentModel.findByIdAndUpdate(payload.params, {
    $set: payload.body,
  });
  3;
  return { data };
};
export const getCommentPaginated = async (page) => {
  let resultsPerPage = 1;

  return await commentModel
    .find({})
    .sort({ createdAt: "descending" })
    .lean()
    .limit(resultsPerPage)
    .skip(page * resultsPerPage);
};

const commentService = {
  createComment,
  deleteComment,
  fetchComment,
  updateComment,
  getCommentPaginated,
};

export default commentService;
