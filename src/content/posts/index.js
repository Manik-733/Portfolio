import { post as networkSecurity } from './blog/network-security';
//add import statements here

const posts = [

    //add the post here
    networkSecurity,
];

export const getAllPosts = () => posts;

export const getPostBySlug = (slug) => {
    return posts.find(post => post.slug === slug);
};