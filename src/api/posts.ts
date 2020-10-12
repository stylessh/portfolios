import axios from "axios";

export const getPosts = async (start?: number) => {
  try {
    const { data } = await axios.get(
      `${process.env.SERVER_URI}/posts?_sort=created_at:DESC&_limit=3${
        start ? `&_start=${start}` : ""
      }`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getPostsNum = async () => {
  const { data } = await axios.get(`${process.env.SERVER_URI}/posts/count`);

  return data;
};

export const getPost = async (slug: string | string[]) => {
  const { data } = await axios.get(`${process.env.SERVER_URI}/posts/${slug}`);

  return data;
};
