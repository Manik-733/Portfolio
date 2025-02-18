import { post as networkSecurity } from "./blog/network-security";
import { post as capitalOne } from "./blog/capital-one";

//add import statements here

const posts = [
  //add the post here
  networkSecurity,
  capitalOne,
];

export const getAllPosts = () => posts;

export const getPostBySlug = (slug) => {
  return posts.find((post) => post.slug === slug);
};
