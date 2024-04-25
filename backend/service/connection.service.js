import { connectionModel } from "../models/connectionModel.js";

export const postRequest = async (req) => {
  try {
    const userId = req.params.userId;

    // console.log('userId: ', userId);
    const { _id } = req.user;
    // console.log('_id: ', _id);

    console.log("userId: ", userId, _id);
    const newRequest = new connectionModel({
      connectionBy: _id,
      connectedTo: userId,
    }).save();
    // const data = {
    //   user: userId,
    //   type:1,
    //   text:   
    // }
    return newRequest;
  } catch (error) {
    throw error;
  }
};
export const getRequest = async (req) => {
  try {
    const { _id } = req.user;

    const findRequest = connectionModel
      .find({
        $and: [{ connectedTo: _id }, { status: "pending" }],
      })
      .populate("connectionBy", ["firstName", "website"]);
    return findRequest;
  } catch (error) {
    throw error;
  }
};
export const updateRequest = async (req) => {
  try {
    const userId = req.params.userId;
    const { _id } = req.user;
    const request = connectionModel.findOneAndUpdate(
      { connectedTo: _id, connectionBy: userId, status: "pending" },
      { status: "accepted" }
    );
    return request;
  } catch (error) {
    throw error;
  }
};
export const deleteRequest = async (req) => {
  try {
    const connectionId = req.params.userId;
    console.log("connectionId: ", connectionId);

    const request = await connectionModel.findOneAndDelete({
      _id: connectionId,
    });
    return request;
  } catch (error) {
    throw error;
  }
};
export const getSenderRequest = async (req) => {
  try {
    const { _id } = req.user;
    console.log("_id:", _id);

    const findRequest = await connectionModel
      .find({
        $and: [{ connectionBy: _id }, { status: "pending" }],
      })
      .populate("connectedTo", ["firstName", "website"]);
    console.log("findRequest: ", findRequest);
    return findRequest;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
export const getConnection = async (req) => {
  try {
    const { _id } = req.user;

    const connection = connectionModel.find({
      $and: [{ connectedBy: _id }, { status: "accepted" }],
    });
    return connection;
  } catch (error) {
    throw error;
  }
};
export const connectionService = {
  postRequest,
  getRequest,
  updateRequest,
  deleteRequest,
  getSenderRequest,
  getConnection,
};
