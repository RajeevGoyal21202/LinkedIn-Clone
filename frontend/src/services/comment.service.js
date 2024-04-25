import { axiosApi } from "../config";

const PATHS = {
  create: "/comment/",
  fetch: "/comment/",
};

export const create = async (payload, config) => {
  await axiosApi.post(
    `${PATHS.create}${payload.postId}`,
    {
      comment: payload.comment,
    },
    config
  );
};
export const fetch = async (payload, config) => {
  console.log('payload: ', payload);
  // console.log("payload: ", payload);
  await axiosApi.get(`${PATHS.fetch}${payload}`,config);
};
