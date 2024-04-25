import { postService } from "../service/post.service.js";
import { errorHandler } from "../lib/utils.js";

export const createPost = async (req, res) => {
  try {
    const response = postService.createPost(req);
    console.log("dfsjkklsdajflksjflksd", req.files);
    res.status(201).send({
      success: true,
      message: "new post created successfully",
      post: response.post,
      image: req.files[0].filename,
    });
  } catch (error) {
    console.log("create post", error);
    errorHandler(res, error);
  }
};
export const getAllPost = async (req, res) => {
  console.log("controller", req.params);
  let response = await postService.getPostPaginated(req);
  if (response.posts && response.posts.length > 0) {
    res.status(200).send({
      success: true,
      message: "Posts fetched successfully",
      posts: response.posts,
    });
  } else {
    res.status(204);
  }
};

export const getPost = async (req, res) => {
  try {
    const response = await postService.getPost(req);
    res.status(200).send({
      success: true,
      message: "Post fetched successfully",
      post: response.post,
    });
  } catch (error) {
    errorHandler(res, error);
  }
};

export const deletePost = async (req, res) => {
  try {
    const response = await postService.deletePost(req);

    return res.status(200).send({
      success: true,
      message: "post deleted successfully",
      data: response.data,
    });
  } catch (error) {
    errorHandler(res, error);
  }
};

export const updatePost = async (req, res) => {
  try {
    const response = await postService.updatePost(req);
    console.log(response.data);
    return res.send({
      success: true,
      message: "post updated successfully",
      // data: response.data,
    });
  } catch (error) {
    errorHandler(res, error);
  }
};

export default {
  updatePost,
  deletePost,
  createPost,
  getAllPost,
};
