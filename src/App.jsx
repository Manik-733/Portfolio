import "./index.css";

import React, { useState, useEffect } from "react";
import {
  TerminalIcon,
  ShieldIcon,
  CodeIcon,
  BookIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  SunIcon,
  MoonIcon,
  LockIcon,
  NetworkIcon,
  ExternalLinkIcon,
} from "lucide-react";

const Portfolio = () => {
  const [text, setText] = useState("");
  const fullText = "> Securing the Digital Frontier_";
  const [isTyping, setIsTyping] = useState(true);
  const [isDark, setIsDark] = useState(true);
  const [activeFilter, setActiveFilter] = useState("all");

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
      dot: "bg-cyan-500/20",
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
      dot: "bg-blue-200",
    },
  };

  const currentTheme = isDark ? theme.dark : theme.light;

  useEffect(() => {
    if (text.length < fullText.length) {
      const timeout = setTimeout(() => {
        setText(fullText.slice(0, text.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      setIsTyping(false);
    }
  }, [text]);

  const projects = [
    {
      title: "Manik's Encryptor",
      description:
        "A Flask-based web application providing secure AES encryption and decryption services for files. Features automatic key generation and a user-friendly interface for secure data management.",
      tags: ["Python", "Flask", "Cryptography", "Cloud"],
      link: "https://github.com/Manik-733/Manik-s-Encryptor ",
      category: "security",
    },
    {
      title: "Network Traffic Analysis Tool",
      description:
        "Educational tool demonstrating network traffic analysis for anomaly detection. Implements data preprocessing, visualization, and Z-score based anomaly detection for identifying security threats.",
      tags: ["Python", "Data Analysis", "Security", "Pandas"],
      link: "https://github.com/Manik-733/Network-Analysis-Tool ",
      category: "networking",
    },
  ];

  const filters = [
    { name: "all", label: "All Projects" },
    { name: "security", label: "Security" },
    { name: "networking", label: "Networking" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <div
      className={`min-h-screen ${currentTheme.bg} ${currentTheme.text} transition-colors duration-300`}
    >
      {/* Theme Toggle */}
      <button
        onClick={() => setIsDark(!isDark)}
        className={`fixed top-8 right-8 p-3 rounded-full ${currentTheme.cardBg} ${currentTheme.border} border`}
      >
        {isDark ? <SunIcon size={32} /> : <MoonIcon size={32} />}
      </button>

      {/* Header */}
      <header className={`p-8 border-b ${currentTheme.border}`}>
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <TerminalIcon size={32} />
            <span className="text-2xl font-mono">Manik's Fortress</span>
          </div>
          <nav className="space-x-12">
            <a
              href="#about"
              className={`text-xl ${currentTheme.hover} transition-colors`}
            >
              About
            </a>
            <a
              href="#projects"
              className={`text-xl ${currentTheme.hover} transition-colors`}
            >
              Projects
            </a>
            <a
              href="#skills"
              className={`text-xl ${currentTheme.hover} transition-colors`}
            >
              Skills
            </a>
            <a
              href="#contact"
              className={`text-xl ${currentTheme.hover} transition-colors`}
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-32 px-8">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1">
            <h1
              className={`font-mono text-7xl font-bold mb-6 ${currentTheme.text}`}
            >
              Manik Singh
            </h1>
            <div className="font-mono text-3xl mb-8 flex items-center gap-2">
              {text}
              {isTyping && <span className="animate-pulse">|</span>}
            </div>
            <p
              className={`text-2xl ${currentTheme.secondaryText} max-w-3xl mb-8`}
            >
              Computer Science @ Thompson Rivers University
            </p>
            <p
              className={`text-xl ${currentTheme.secondaryText} max-w-2xl leading-relaxed`}
            >
              Passionate about securing digital landscapes and developing robust
              security solutions. Focused on cyber defense, network security,
              and secure software development.
            </p>
          </div>

          <div className="flex-1 flex justify-center">
            <div
              className={`p-2 rounded-full ${
                isDark ? "bg-cyan-400/10" : "bg-blue-400/10"
              }`}
            >
              <div
                className={`w-96 h-96 rounded-full overflow-hidden border-4 ${
                  currentTheme.text
                } shadow-xl 
                ${isDark ? "shadow-cyan-500/20" : "shadow-blue-500/20"}`}
              >
                <img
                  src="/pic1.jpg"
                  alt="Manik Singh"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-32 px-8 ${currentTheme.cardBg}`}>
        <div className="container mx-auto">
          <h2 className="text-4xl font-mono mb-12 flex items-center">
            <ShieldIcon size={40} className="mr-4" />
            ./About
          </h2>
          <div
            className={`${
              isDark ? "bg-slate-900" : "bg-white"
            } p-8 rounded-lg border ${currentTheme.border}`}
          >
            <p
              className={`${currentTheme.secondaryText} text-xl leading-relaxed`}
            >
              I'm a Computer Science student at Thompson Rivers University, with
              a love for cybersecurity. My passion lies in understanding and
              implementing robust security measures to protect digital assets.
              While I pursue higher knowledge in this field, I love to make
              projects that resonate with my learnings. If you share the same
              passion or just want need a friend's guidance, feel free to
              connect.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-8">
        <div className="container mx-auto">
          <h2 className="text-4xl font-mono mb-12 flex items-center">
            <CodeIcon size={40} className="mr-4" />
            ./Projects
          </h2>

          <div className="flex gap-6 mb-12">
            {filters.map((filter) => (
              <button
                key={filter.name}
                onClick={() => setActiveFilter(filter.name)}
                className={`px-6 py-3 text-lg rounded-lg transition-colors duration-300 ${
                  activeFilter === filter.name
                    ? `${currentTheme.tagBg} ${currentTheme.tagText}`
                    : `${currentTheme.cardBg} ${currentTheme.border} border`
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className={`${currentTheme.cardBg} p-8 rounded-lg border ${currentTheme.border}
                  hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}
              >
                <h3 className="text-2xl font-mono mb-4 flex items-center">
                  {project.category === "security" ? (
                    <LockIcon size={24} className="mr-3" />
                  ) : (
                    <NetworkIcon size={24} className="mr-3" />
                  )}
                  {project.title}
                </h3>
                <p className={`${currentTheme.secondaryText} text-lg mb-6`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-3 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className={`text-lg ${currentTheme.tagBg} ${currentTheme.tagText} px-4 py-2 rounded`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center text-lg ${currentTheme.hover} transition-colors`}
                >
                  View Project <ExternalLinkIcon size={20} className="ml-2" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={`py-32 px-8 ${currentTheme.cardBg}`}>
        <div className="container mx-auto">
          <h2 className="text-4xl font-mono mb-12 flex items-center">
            <BookIcon size={40} className="mr-4" />
            ./Skills
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div
              className={`${
                isDark ? "bg-slate-900" : "bg-white"
              } p-8 rounded-lg border ${currentTheme.border}`}
            >
              <h3 className="text-2xl font-mono mb-6">Security Skills</h3>
              <ul className={`space-y-4 ${currentTheme.secondaryText} text-lg`}>
                <li className="flex items-center">
                  <span
                    className={`w-4 h-4 ${currentTheme.dot} rounded-full mr-3`}
                  ></span>
                  Network Security & Analysis
                </li>
                <li className="flex items-center">
                  <span
                    className={`w-4 h-4 ${currentTheme.dot} rounded-full mr-3`}
                  ></span>
                  Encryption
                </li>
                <li className="flex items-center">
                  <span
                    className={`w-4 h-4 ${currentTheme.dot} rounded-full mr-3`}
                  ></span>
                  Security Auditing
                </li>
                <li className="flex items-center">
                  <span
                    className={`w-4 h-4 ${currentTheme.dot} rounded-full mr-3`}
                  ></span>
                  Incident Response
                </li>
              </ul>
            </div>
            <div
              className={`${
                isDark ? "bg-slate-900" : "bg-white"
              } p-8 rounded-lg border ${currentTheme.border}`}
            >
              <h3 className="text-2xl font-mono mb-6">Technical Skills</h3>
              <ul className={`space-y-4 ${currentTheme.secondaryText} text-lg`}>
                <li className="flex items-center">
                  <span
                    className={`w-4 h-4 ${currentTheme.dot} rounded-full mr-3`}
                  ></span>
                  Python, Java, C++
                </li>
                <li className="flex items-center">
                  <span
                    className={`w-4 h-4 ${currentTheme.dot} rounded-full mr-3`}
                  ></span>
                  Linux Systems
                </li>
                <li className="flex items-center">
                  <span
                    className={`w-4 h-4 ${currentTheme.dot} rounded-full mr-3`}
                  ></span>
                  Web Development
                </li>
                <li className="flex items-center">
                  <span
                    className={`w-4 h-4 ${currentTheme.dot} rounded-full mr-3`}
                  ></span>
                  Database Management
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-8">
        <div className="container mx-auto">
          <h2 className="text-4xl font-mono mb-12 flex items-center">
            <MailIcon size={40} className="mr-4" />
            ./Contact
          </h2>
          <div className="flex space-x-12 justify-center">
            <a
              href="https://github.com/Manik-733"
              className={`flex items-center space-x-3 text-xl ${currentTheme.hover} transition-colors`}
            >
              <GithubIcon size={32} />
              <span>GitHub</span>
            </a>
            <a
              href="https://ca.linkedin.com/in/manik-singh-62b236298/"
              className={`flex items-center space-x-3 text-xl ${currentTheme.hover} transition-colors`}
            >
              <LinkedinIcon size={32} />
              <span>LinkedIn</span>
            </a>
            <a
              href="mailto:maniksingh733@gmail.com"
              className={`flex items-center space-x-3 text-xl ${currentTheme.hover} transition-colors`}
            >
              <MailIcon size={32} />
              <span>Email</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 px-8 border-t ${currentTheme.border}`}>
        <div className="container mx-auto text-center text-lg text-gray-400">
          <p>© 2024 Manik Singh. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
