import fetch from "node-fetch";

const API_URL = "https://jsonplaceholder.typicode.com/posts";

export const getAllPostsData = async () => {
  const res = await fetch(new URL(API_URL));
  const posts = await res.json();
  return posts;
};

export const getAllPostIds = async () => {
  const res = await fetch(new URL(API_URL));
  const posts = await res.json();
  return posts.map((post: PostType) => {
    return {
      params: { id: String(post.id) },
    };
  });
};

export const getPostData = async (id: PostType["id"]) => {
  const res = await fetch(new URL(`${API_URL}/${id}/`));
  const post = await res.json();
  return post;
};
