import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getAllPosts, getPostBySlug } from "./content/posts";
import {
  BookOpenIcon,
  ClockIcon,
  TagIcon,
  ChevronRightIcon,
  SearchIcon,
  SunIcon,
  MoonIcon,
  ArrowLeftIcon,
  HomeIcon,
} from "lucide-react";

const BlogPage = ({ isDark, setIsDark }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTag, setActiveTag] = useState("all");

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
    },
  };

  const currentTheme = isDark ? theme.dark : theme.light;

  //step 1. after creating blogpage js, add blogpost here, then go to index.js to make changes

  const blogPosts = [
    {
      id: 1,
      title: "Decrypting Diaries 1: Manik's Encryptor on AWS",
      excerpt:
        "Discover my journey with Manik's Encryptor: from concept to AWS deployment, facing technical challenges and personal growth.",
      date: "2025-02-01",
      readTime: "8 min",
      tags: ["Cloud", "Project"],
      image: "/dd1.jpg",
      slug: "decrypting-diaries-1",
    },

    {
      id: 2,
      title: "Decrypting Diaries 2: The Capital One Breach",
      excerpt:
        "An in-depth analysis of the Capital One data breach of 2019, its impact on cybersecurity, and the important lessons we can learn.",
      date: "2025-02-17",
      readTime: "10 min",
      tags: ["Breach", "Case Study"],
      image: "/dd2.jpg",
      slug: "decrypting-diaries-2",
    },

    {
      id: 3,
      title: "Decrypting Diaries 3: First Blood – My First Real Pentest",
      excerpt:
        "A step-by-step walkthrough of my first penetration test on Metasploitable 2 using Kali Linux — from reconnaissance to root access and persistent control.",
      date: "2025-04-21",
      readTime: "8 min",
      tags: ["Breach", "Project"],
      image: "/dd3.jpg",
      slug: "decrypting-diaries-3",
    },

    {
      id: 4,
      title: "Decrypting Diaries 4: Stuxnet - When Code Went Nuclear",
      excerpt:
        "A deep dive into Stuxnet, the world’s first cyber weapon that used code to cause real-world physical destruction.",
      date: "2025-10-13",
      readTime: "7 min",
      tags: ["Breach", "Case Study"],
      image: "dd4.jpg",
      slug: "decrypting-diaries-4",
    },
  ];

  const allTags = ["all", ...new Set(blogPosts.flatMap((post) => post.tags))];

  const filteredPosts = blogPosts
    .filter(
      (post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((post) => activeTag === "all" || post.tags.includes(activeTag));

  return (
    <div
      className={`min-h-screen ${currentTheme.bg} ${currentTheme.text} pb-8`}
    >
      {/* Theme Toggle */}
      <button
        onClick={() => setIsDark(!isDark)}
        className={`fixed bottom-6 right-6 z-50 p-3 rounded-full ${currentTheme.cardBg} ${currentTheme.border} border shadow-lg`}
      >
        {isDark ? <SunIcon size={24} /> : <MoonIcon size={24} />}
      </button>

      {/* Header with Navigation */}
      <header
        className={`sticky top-0 z-40 ${currentTheme.bg} border-b ${currentTheme.border} backdrop-blur-sm bg-opacity-95`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link
              to="/"
              className={`flex items-center gap-2 ${currentTheme.hover} transition-colors`}
            >
              <ArrowLeftIcon size={24} />
              <HomeIcon size={24} />
              <span className="text-lg sm:text-xl font-mono hidden sm:inline">
                Back to Home
              </span>
            </Link>
            <div className="flex items-center space-x-2 sm:space-x-3">
              <BookOpenIcon size={28} className="sm:w-8 sm:h-8" />
              <span className="text-xl sm:text-2xl lg:text-3xl font-mono">
                Blog
              </span>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto py-10 sm:py-12 px-6 sm:px-8 lg:px-12">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-mono mb-3 sm:mb-4 flex items-center">
          <BookOpenIcon size={28} className="mr-3 sm:mr-4 sm:w-8 sm:h-8" />
          Decrypting Diaries
        </h1>
        <p
          className={`text-sm sm:text-base lg:text-lg ${currentTheme.secondaryText} max-w-3xl`}
        >
          Exploring cybersecurity, network defense, and secure development
          practices
        </p>
      </div>

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 mb-12">
        <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
          <div
            className={`relative flex-1 max-w-md ${currentTheme.cardBg} rounded-lg`}
          >
            <SearchIcon className="absolute left-4 top-3.5 h-5 w-5" />
            <input
              type="text"
              placeholder="Search posts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`w-full pl-12 pr-4 py-3 bg-transparent border ${currentTheme.border} rounded-lg focus:outline-none focus:ring-2 ${currentTheme.text}`}
            />
          </div>
          <div className="flex gap-2 sm:gap-3 flex-wrap">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`px-3 py-1.5 text-sm rounded-lg transition-colors ${
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

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 pb-16 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredPosts.map((post) => (
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
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <div className="flex gap-2 mb-3">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`${currentTheme.tagBg} ${currentTheme.tagText} px-2 py-1 rounded-full text-xs`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-lg sm:text-xl font-mono mb-2 leading-snug">
                    {post.title}
                  </h2>
                  <p
                    className={`${currentTheme.secondaryText} mb-3 text-sm leading-relaxed`}
                  >
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span
                      className={`${currentTheme.secondaryText} text-xs flex items-center`}
                    >
                      <ClockIcon size={14} className="mr-1" />
                      {post.readTime}
                    </span>
                    <span
                      className={`${currentTheme.hover} flex items-center text-sm`}
                    >
                      Read More
                      <ChevronRightIcon size={14} className="ml-1" />
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
