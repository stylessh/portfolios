import axios from "axios";

export const getProjects = async () => {
  const { data } = await axios.get(`${process.env.SERVER_URI}/projects`);

  return data;
};
