import { commentService } from "../service/index.js";
import { errorHandler } from "../lib/utils.js";

const createComment = async (req, res) => {
  try {
    const response = await commentService.createComment(req);
    res.status(201).send({
      success: true,
      message: "new comment created successfully",
      comment: response.comment,
    });
  } catch (error) {
    errorHandler(req, error);
  }
};
const deleteComment = async (req, res) => {
  try {
    const response = await commentService.deleteComment(req);
    res.status(200).send({
      success: true,
      message: "new comment deleted successfully",
      comment: response.comment,
    });
  } catch (error) {
    errorHandler(req, error);
  }
};
const fetchComment = async (req, res) => {
  try {
    const response = await commentService.fetchComment(req);
    return res.status(200).send(response);
  } catch (error) {
    errorHandler(req, error);
  }
};
const updateComment = async (req, res) => {
  try {
    const response = await commentService.updateComment(req);
    console.log(req.body);
    res.status(200).json({
      success: true,
      data: response.data,
    });
  } catch (error) {
    errorHandler(req, error);
  }
};
const getAllcomments = async (req, res) => {
  let page = req.query.page; //starts from 0
  let comments = await commentService.getCommentPaginated(page);
  if (comments && comments.length > 0) {
    res.json(comments);
  } else {
    res.json("comments not found");
  }
};

const commentController = {
  getAllcomments,
  updateComment,
  deleteComment,
  createComment,
  fetchComment,
};
export default commentController;
