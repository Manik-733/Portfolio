import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useParams, Link } from 'react-router-dom';
import { getAllPosts, getPostBySlug } from './content/posts';
import { ArrowLeftIcon, BookOpenIcon, HomeIcon } from 'lucide-react';




const BlogPost = ({ isDark }) => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);

  const theme = {
    dark: {
      bg: "bg-slate-900",
      text: "text-cyan-400",
      secondaryText: "text-slate-300",
      border: "border-cyan-500/20",
      cardBg: "bg-slate-800/50",
      hover: "hover:text-cyan-300",
      prose: "prose-invert"
    },
    light: {
      bg: "bg-slate-50",
      text: "text-blue-600",
      secondaryText: "text-slate-700",
      border: "border-blue-200",
      cardBg: "bg-white",
      hover: "hover:text-blue-500",
      prose: "prose-slate"
    }
  };

  const currentTheme = isDark ? theme.dark : theme.light;

  useEffect(() => {
    // In a real app, you would import the post content here
    const post = getPostBySlug(slug);
    setPost(post);
  }, [slug]);

  if (!post) return (
    <div className={`min-h-screen ${currentTheme.bg} ${currentTheme.text} flex items-center justify-center`}>
      <div className="text-2xl">Loading...</div>
    </div>
  );

  return (
    <div className={`min-h-screen ${currentTheme.bg} ${currentTheme.text}`}>
      {/* Header with Navigation */}
      <header className={`sticky top-0 z-40 ${currentTheme.bg} border-b ${currentTheme.border} backdrop-blur-sm bg-opacity-95`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center gap-4">
              <Link
                to="/blog"
                className={`flex items-center gap-2 ${currentTheme.hover} transition-colors`}
              >
                <ArrowLeftIcon size={24} />
                <span className="text-lg sm:text-xl font-mono hidden sm:inline">
                  Back to Blog
                </span>
              </Link>
            </div>
            <Link
              to="/"
              className={`flex items-center gap-2 ${currentTheme.hover} transition-colors`}
            >
              <HomeIcon size={24} />
              <span className="text-lg sm:text-xl font-mono hidden sm:inline">
                Home
              </span>
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <article className={`prose ${currentTheme.prose} lg:prose-xl max-w-4xl mx-auto`}>
          <div className="mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">{post.title}</h1>
            <div className={`flex gap-4 text-base sm:text-lg ${currentTheme.secondaryText}`}>
              <span>{new Date(post.date).toLocaleDateString()}</span>
              <span>·</span>
              <span>{post.readTime}</span>
            </div>
            {post.tags && (
              <div className="flex gap-2 mt-4 flex-wrap">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`${currentTheme.cardBg} ${currentTheme.text} px-3 py-1 rounded-full text-sm border ${currentTheme.border}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
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