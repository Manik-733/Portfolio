import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllPosts, getPostBySlug } from './content/posts';
import {
  BookOpenIcon,
  ClockIcon,
  TagIcon,
  ChevronRightIcon,
  SearchIcon,
  SunIcon,
  MoonIcon
} from 'lucide-react';

const BlogPage = ({ isDark, setIsDark }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTag, setActiveTag] = useState('all');

  const theme = {
    dark: {
      bg: "bg-slate-900",
      text: "text-cyan-400",
      secondaryText: "text-slate-300",
      border: "border-cyan-500/20",
      cardBg: "bg-slate-800/50",
      hover: "hover:text-cyan-300",
      tagBg: "bg-cyan-500/10",
      tagText: "text-cyan-300",
    },
    light: {
      bg: "bg-slate-50",
      text: "text-blue-600",
      secondaryText: "text-slate-700",
      border: "border-blue-200",
      cardBg: "bg-white",
      hover: "hover:text-blue-500",
      tagBg: "bg-blue-100",
      tagText: "text-blue-700",
    }
  };

  const currentTheme = isDark ? theme.dark : theme.light;

    //step 1. after creating blogpage js, add blogpost here, go to index.js to make changes

  const blogPosts = [
    {
      id: 1,
      title: "Decrypting Diaries 1: Manik's Encryptor on AWS",
      excerpt: "Discover my journey with Manik's Encryptor: from concept to AWS deployment, facing technical challenges and personal growth.",
      date: "2025-02-01",
      readTime: "8 min",
      tags: ["security", "networking","case study"],
      image: "/dd1.jpg",
      slug: "decrypting-diaries-1"
    },

    {
      id: 2,
      title: "Decrypting Diaries 2: The Capital One Breach",
      excerpt: "An in-depth analysis of the Capital One data breach of 2019, its impact on cybersecurity, and the important lessons we can learn.",
      date: "2025-02-17",
      readTime: "10 min",
      tags: ["security", "breach"],
      image: "/dd2.jpg",
      slug: "decrypting-diaries-2"
    },

    {
      id: 3,
      title: "Decrypting Diaries 3: First Blood – My First Real Pentest",
      excerpt: "A step-by-step walkthrough of my first penetration test on Metasploitable 2 using Kali Linux — from reconnaissance to root access and persistent control.",
      date: "2025-04-21",
      readTime: "8 min",
      tags: ["security", "breach"],
      image: "/dd3.jpg",
      slug: "decrypting-diaries-3"
    },

  ];

  const allTags = ['all', ...new Set(blogPosts.flatMap(post => post.tags))];

  const filteredPosts = blogPosts
    .filter(post => 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(post => 
      activeTag === 'all' || post.tags.includes(activeTag)
    );

  return (
    <div className={`min-h-screen ${currentTheme.bg} ${currentTheme.text}`}>
      <button
        onClick={() => setIsDark(!isDark)}
        className={`fixed top-8 right-8 p-3 rounded-full ${currentTheme.cardBg} ${currentTheme.border} border`}
      >
        {isDark ? <SunIcon size={32} /> : <MoonIcon size={32} />}
      </button>

      <div className="container mx-auto py-16 px-4">
        <h1 className="text-5xl font-mono mb-6 flex items-center">
          <BookOpenIcon size={40} className="mr-4" />
          ./Blog
        </h1>
        <p className={`text-xl ${currentTheme.secondaryText} max-w-3xl`}>
          Exploring cybersecurity, network defense, and secure development practices
        </p>
      </div>

      <div className="container mx-auto px-4 mb-12">
        <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
          <div className={`relative flex-1 max-w-md ${currentTheme.cardBg} rounded-lg`}>
            <SearchIcon className="absolute left-4 top-3.5 h-5 w-5" />
            <input
              type="text"
              placeholder="Search posts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`w-full pl-12 pr-4 py-3 bg-transparent border ${currentTheme.border} rounded-lg focus:outline-none focus:ring-2 ${currentTheme.text}`}
            />
          </div>
          <div className="flex gap-4 flex-wrap">
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  activeTag === tag 
                    ? `${currentTheme.tagBg} ${currentTheme.tagText}`
                    : `${currentTheme.cardBg} ${currentTheme.border} border`
                }`}
              >
                {tag.charAt(0).toUpperCase() + tag.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map(post => (
            <Link
              key={post.id}
              to={`/blog/${post.slug}`}
              className={`block ${currentTheme.cardBg} rounded-lg border ${currentTheme.border} overflow-hidden
                hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}
            >
              <article>
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex gap-2 mb-4">
                    {post.tags.map(tag => (
                      <span
                        key={tag}
                        className={`${currentTheme.tagBg} ${currentTheme.tagText} px-3 py-1 rounded-full text-sm`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-2xl font-mono mb-3">{post.title}</h2>
                  <p className={`${currentTheme.secondaryText} mb-4`}>
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className={`${currentTheme.secondaryText} text-sm flex items-center`}>
                      <ClockIcon size={16} className="mr-2" />
                      {post.readTime}
                    </span>
                    <span className={`${currentTheme.hover} flex items-center`}>
                      Read More
                      <ChevronRightIcon size={16} className="ml-2" />
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;