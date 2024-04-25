import { axiosApi } from "../config";

const PATHS = {
  post: "/connection/",
  getR: "/connection",
  //   fetch: "/comment/",
};

export const post = async (userId, config) => {
  console.log(config);

  await axiosApi.post(`${PATHS.post}${userId}`, config);
};
export const recieve = async(config) => {
  console.log(config);

  await axiosApi.get(`${PATHS.getR}`, config);
};
// export const fetch = async (payload, config) => {
//   // console.log("payload: ", payload);
//   await axiosApi.get(`${PATHS.fetch}${payload}`, config);
// };
