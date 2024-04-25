import { errorHandler } from "../lib/utils.js";
import { reaction_service } from "../service/index.js";
export const saveReactions = async (req, res) => {
  try {
    const response = await reaction_service.saveReaction(req);

    return res.status(201).json({ response });
  } catch (err) {
    console.log(err);
    console.log("saveReaction",err)
    errorHandler(res,err)
  }
};

export const getReactions = async (req, res) => {
  try {
    const response = await reaction_service.getReactions();
    return res.status(200).json(response);
  } catch (err) {
    console.log("getReaction",err);
    errorHandler(res,err)
  }
};

export const updateReaction = async (req, res) => {
  try {
    const response = await reaction_service.updateReaction(req);
    return res.status(202).json(response);
  } catch (err) {
    console.log("updateReaction",err);
    errorHandler(res,err)
  }
};

export const removeReaction = async (req, res) => {
  try {
    const response = await reaction_service.removeReaction(req);
    return res.status(202).json(response);
  } catch (err) {
    console.log("removeReaction",err);
    errorHandler(res,err)
 
  }
};
export default {
  removeReaction,
  updateReaction,
  getReactions,
  saveReactions,
};
