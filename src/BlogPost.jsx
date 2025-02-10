import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useParams } from 'react-router-dom';
import { getAllPosts, getPostBySlug } from './content/posts';




const BlogPost = ({ isDark }) => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);

  const theme = {
    dark: {
      bg: "bg-slate-900",
      text: "text-cyan-400",
      secondaryText: "text-slate-300",
      prose: "prose-invert"
    },
    light: {
      bg: "bg-slate-50",
      text: "text-blue-600",
      secondaryText: "text-slate-700",
      prose: "prose-slate"
    }
  };

  const currentTheme = isDark ? theme.dark : theme.light;

  useEffect(() => {
    // In a real app, you would import the post content here
    const post = getPostBySlug(slug);
    setPost(post);
  }, [slug]);

  if (!post) return <div>Loading...</div>;

  return (
    <div className={`min-h-screen ${currentTheme.bg} ${currentTheme.text}`}>
      <div className="container mx-auto py-16 px-4">
        <article className={`prose ${currentTheme.prose} max-w-4xl mx-auto`}>
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
            <div className="flex gap-4 text-sm">
              <span>{new Date(post.date).toLocaleDateString()}</span>
              <span>·</span>
              <span>{post.readTime}</span>
            </div>
          </div>
          <ReactMarkdown 
            remarkPlugins={[remarkGfm]}
            components={{
              code({ node, inline, className, children, ...props }) {
                return (
                  <code className={`${className} rounded-md`} {...props}>
                    {children}
                  </code>
                );
              }
            }}
          >
            {post.content}
          </ReactMarkdown>
        </article>
      </div>
    </div>
  );
};

export default BlogPost;