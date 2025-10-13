import { post as networkSecurity } from "./blog/network-security";
import { post as capitalOne } from "./blog/capital-one";
import { post as firstPentest } from "./blog/first-pentest";
import { post as stuxnet } from "./blog/stuxnet";

// step 2 add import statements here

const posts = [
  // step 3 add the post here
  networkSecurity,
  capitalOne,
  firstPentest,
  stuxnet,
];

export const getAllPosts = () => posts;

export const getPostBySlug = (slug) => {
  return posts.find((post) => post.slug === slug);
};
