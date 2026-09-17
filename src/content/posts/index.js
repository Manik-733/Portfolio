import { post as networkSecurity } from "./blog/network-security";
import { post as capitalOne } from "./blog/capital-one";
import { post as firstPentest } from "./blog/first-pentest";
import { post as stuxnet } from "./blog/stuxnet";
import { post as cybersecurityHackers } from "./blog/cybersecurity-hackers";

const posts = [
  networkSecurity,
  capitalOne,
  firstPentest,
  stuxnet,
  cybersecurityHackers,
];

export const getAllPosts = () => posts;

export const getPostBySlug = (slug) => {
  return posts.find((post) => post.slug === slug);
};
