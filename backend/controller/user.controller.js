import { userService } from "../service/user.service.js";
import { errorHandler } from "../lib/utils.js";

export const register = async (req, res) => {
  try {
    const response = await userService.register(req);

    return res.status(201).send({
      success: true,
      message: "user Register Successfully",
      user: response.user,
    });
  } catch (error) {
    errorHandler(res, error);
  }
};

export const login = async (req, res) => {
  try {
    const response = await userService.login(req);
    return res.status(200).send({
      success: true,
      message: `Login Sucessfully`,
      user: response.user,
      token: response.token,
    });
  } catch (error) {
    errorHandler(res, error);
  }
};
export const getUser = async (req, res) => {
  try {
    const response = await userService.getUser(req);
    return res.status(200).send({
      success: true,
      message: "user fetch successfully",
      users: response,
    });
  } catch (error) {
    console.log(error);
  }
};
export const update = async (req, res) => {
  try {
    const response = await userService.update(req);
    return res.status(200).send({
      success: true,
      message: "user updated successfully",
      users: response,
    });
  } catch (error) {
    console.log(error);
  }
};
const userController = {
  register,
  login,
  getUser,
  update,
};

export default userController;
