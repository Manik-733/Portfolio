import "./index.css";
import { Link } from "react-router-dom";
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
  ArrowRightIcon,
  MenuIcon,
  XIcon,
} from "lucide-react";

const Portfolio = ({ isDark, setIsDark }) => {
  const [text, setText] = useState("");
  const fullText = "> Securing the Digital Frontier_";
  const [isTyping, setIsTyping] = useState(true);
  const [activeFilter, setActiveFilter] = useState("all");
  const [expOpen, setExpOpen] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  const BlogHighlight = () => {
    const latestPost = {
      title: "Decrypting Diaries 4: Stuxnet - When Code Went Nuclear",
      date: "Oct 13, 2025",
    };

    return (
      <div
        className={`mt-8 p-4 rounded-lg border ${currentTheme.border} inline-block`}
      >
        <div className="flex items-center gap-4">
          <div>
            <span className={`text-sm ${currentTheme.secondaryText}`}>
              Latest Blog: {latestPost.date}
            </span>
            <h3 className="font-medium">{latestPost.title}</h3>
          </div>
          <Link
            to="/blog/decrypting-diaries-4"
            className={`flex items-center gap-1 ${currentTheme.hover}`}
          >
            Read <ArrowRightIcon size={16} />
          </Link>
        </div>
      </div>
    );
  };

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
      link: "https://github.com/Manik-733/Manik-s-Encryptor",
      category: "security",
    },
    {
      title: "Network Traffic Analysis Tool",
      description:
        "Educational tool demonstrating network traffic analysis for anomaly detection. Implements data preprocessing, visualization, and Z-score based anomaly detection for identifying security threats.",
      tags: ["Python", "Data Analysis", "Security", "Pandas"],
      link: "https://github.com/Manik-733/Network-Analysis-Tool",
      category: "networking",
    },
  ];

  const companyLogos = {
    SAP: "/sap.jpg",
    "AbCellera Biologics Inc.": "/abcellera.jpg",
  };

  const experience = [
    {
      company: "SAP",
      role: "Support Engineer Intern (iXp, BTP Technical Support)",
      period: "Sep 2025 – May 2026",
      location: "Vancouver, BC · Hybrid",
      summary:
        "Delivered enterprise support for SAP BTP tenants, troubleshooting across Linux, Unix, and database environments.",
      details: [
        "Provided enterprise-level support for SAP Business Technology Platform tenants, resolving software, database, and integration issues.",
        "Troubleshot across Linux, Unix (Solaris / HP-UX / AIX), and databases (HANA, Oracle, SQL Server, DB2).",
        "Collaborated with global teams to stabilize and secure integrations using XML, HTTPS, and SAML.",
        "Performed log analysis and diagnostics to identify performance bottlenecks and prevent outages.",
        "Contributed to internal knowledge bases and documentation to streamline troubleshooting processes.",
      ],
    },
    {
      company: "AbCellera Biologics Inc.",
      role: "IT Help Desk Intern (Co-op)",
      period: "Jan 2025 – Aug 2025",
      location: "Vancouver, BC · On-site",
      summary:
        "Supported 600+ users; managed endpoints, accounts, and network security controls across macOS and Windows.",
      details: [
        "Delivered front-line IT support for over 600 employees using Jira and BeyondTrust.",
        "Managed endpoint compliance and deployment with Intune, Jamf, and Automox.",
        "Administered IAM via Okta and Google Admin (provisioning, MFA, group access).",
        "Documented technical workflows and SOPs in Confluence to enhance onboarding and efficiency.",
        "Strengthened email and network security by implementing SPF, DKIM, and DMARC configurations.",
      ],
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
        className={`fixed bottom-6 right-6 z-50 p-3 rounded-full ${currentTheme.cardBg} ${currentTheme.border} border shadow-lg`}
      >
        {isDark ? <SunIcon size={24} /> : <MoonIcon size={24} />}
      </button>

      {/* Header with Responsive Navigation */}
      <header
        className={`sticky top-0 z-40 ${currentTheme.bg} border-b ${currentTheme.border} backdrop-blur-sm bg-opacity-95`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center space-x-2 sm:space-x-3">
              <TerminalIcon size={28} className="sm:w-8 sm:h-8" />
              <span className="text-xl sm:text-2xl lg:text-3xl font-mono whitespace-nowrap">
                Manik's Fortress
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link
                to="/blog"
                className={`text-lg ${currentTheme.hover} transition-colors`}
              >
                Blog
              </Link>
              <a
                href="#about"
                className={`text-lg ${currentTheme.hover} transition-colors`}
              >
                About
              </a>
              <a
                href="#experience"
                className={`text-lg ${currentTheme.hover} transition-colors`}
              >
                Experience
              </a>
              <a
                href="#certifications"
                className={`text-lg ${currentTheme.hover} transition-colors`}
              >
                Certifications
              </a>
              <a
                href="#projects"
                className={`text-lg ${currentTheme.hover} transition-colors`}
              >
                Projects
              </a>
              <a
                href="#skills"
                className={`text-lg ${currentTheme.hover} transition-colors`}
              >
                Skills
              </a>
              <a
                href="#contact"
                className={`text-lg ${currentTheme.hover} transition-colors`}
              >
                Contact
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden p-2 rounded-md ${currentTheme.hover}`}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <XIcon size={28} /> : <MenuIcon size={28} />}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {mobileMenuOpen && (
            <nav className={`lg:hidden pb-4 ${currentTheme.bg}`}>
              <div className="flex flex-col space-y-3">
                <Link
                  to="/blog"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-lg ${currentTheme.hover} transition-colors py-2 px-4 rounded-md ${currentTheme.cardBg}`}
                >
                  Blog
                </Link>
                <a
                  href="#about"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-lg ${currentTheme.hover} transition-colors py-2 px-4 rounded-md ${currentTheme.cardBg}`}
                >
                  About
                </a>
                <a
                  href="#experience"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-lg ${currentTheme.hover} transition-colors py-2 px-4 rounded-md ${currentTheme.cardBg}`}
                >
                  Experience
                </a>
                <a
                  href="#certifications"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-lg ${currentTheme.hover} transition-colors py-2 px-4 rounded-md ${currentTheme.cardBg}`}
                >
                  Certifications
                </a>
                <a
                  href="#projects"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-lg ${currentTheme.hover} transition-colors py-2 px-4 rounded-md ${currentTheme.cardBg}`}
                >
                  Projects
                </a>
                <a
                  href="#skills"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-lg ${currentTheme.hover} transition-colors py-2 px-4 rounded-md ${currentTheme.cardBg}`}
                >
                  Skills
                </a>
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-lg ${currentTheme.hover} transition-colors py-2 px-4 rounded-md ${currentTheme.cardBg}`}
                >
                  Contact
                </a>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          <div className="flex-1 text-center lg:text-left">
            <h1
              className={`font-mono text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 ${currentTheme.text}`}
            >
              Manik Singh
            </h1>
            <div className="font-mono text-lg sm:text-xl md:text-2xl lg:text-3xl mb-6 sm:mb-8 flex items-center justify-center lg:justify-start gap-2">
              {text}
              {isTyping && <span className="animate-pulse">|</span>}
            </div>
            <p
              className={`text-base sm:text-lg ${currentTheme.secondaryText} max-w-3xl mb-6 sm:mb-8 mx-auto lg:mx-0`}
            >
              Computer Science @ Thompson Rivers University
            </p>
            <p
              className={`text-sm sm:text-base lg:text-lg ${currentTheme.secondaryText} max-w-2xl leading-relaxed mx-auto lg:mx-0`}
            >
              Cybersecurity enthusiast with hands-on experience in network
              defense, endpoint management, and cloud automation. Skilled at
              turning complex security concepts into functional, real-world
              solutions.
            </p>

            <div className="flex justify-center lg:justify-start">
              <BlogHighlight />
            </div>
          </div>

          <div className="flex-1 flex justify-center mt-8 lg:mt-0">
            <div
              className={`p-2 rounded-full ${
                isDark ? "bg-cyan-400/10" : "bg-blue-400/10"
              }`}
            >
              <div
                className={`w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 ${
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
      <section
        id="about"
        className={`py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 ${currentTheme.cardBg}`}
      >
        <div className="container mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-mono mb-6 sm:mb-8 flex items-center">
            <ShieldIcon size={28} className="mr-3 sm:mr-4 sm:w-8 sm:h-8" />
            ./About
          </h2>
          <div
            className={`${
              isDark ? "bg-slate-900" : "bg-white"
            } p-8 rounded-lg border ${currentTheme.border}`}
          >
            <p
              className={`${currentTheme.secondaryText} text-base sm:text-lg leading-relaxed`}
            >
              I’m a Computer Science student at Thompson Rivers University with
              a strong focus on cybersecurity and cloud systems. Through co-op
              experiences at AbCellera and SAP iXp, I’ve worked hands-on with
              enterprise infrastructure, endpoint protection, and security
              automation — blending technical curiosity with practical defense.
              My work spans tools like AWS, Intune, Okta, Jamf, and SentinelOne,
              and I’m constantly exploring how development, infrastructure, and
              security intersect. Whether it’s building secure applications,
              auditing systems, or experimenting with forensics and network
              defense, I aim to create solutions that make technology safer,
              smarter, and more resilient.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8"
      >
        <div className="container mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-mono mb-6 sm:mb-8 flex items-center">
            <LockIcon size={28} className="mr-3 sm:mr-4 sm:w-8 sm:h-8" />
            ./Experience
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {experience.map((exp, idx) => {
              const open = expOpen === idx;
              return (
                <div
                  key={idx}
                  className={`${currentTheme.cardBg} p-8 rounded-lg border ${currentTheme.border} transition-all`}
                >
                  <h3 className="text-2xl font-mono mb-2 flex items-center gap-3">
                    {companyLogos[exp.company] && (
                      <img
                        src={companyLogos[exp.company]}
                        alt={`${exp.company} logo`}
                        className={`h-9 w-9 object-contain opacity-90 rounded ${
                          exp.company === "SAP" && isDark ? "bg-white p-1" : ""
                        }`}
                        title={exp.company}
                      />
                    )}
                    {exp.company}
                  </h3>

                  <p
                    className={`${currentTheme.secondaryText} text-base sm:text-lg mb-1`}
                  >
                    {exp.role}
                  </p>
                  <p
                    className={`${currentTheme.secondaryText} text-sm sm:text-base mb-4`}
                  >
                    {exp.period} • {exp.location}
                  </p>

                  <p
                    className={`${currentTheme.secondaryText} text-sm sm:text-base mb-4`}
                  >
                    {exp.summary}
                  </p>

                  {open && (
                    <ul
                      className={`space-y-2 ${currentTheme.secondaryText} text-sm sm:text-base mb-4`}
                    >
                      {exp.details.map((d, i) => (
                        <li key={i} className="flex">
                          <span
                            className={`mt-2 mr-3 w-2 h-2 rounded-full ${currentTheme.dot}`}
                          ></span>
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  <button
                    onClick={() => setExpOpen(open ? null : idx)}
                    className={`inline-flex items-center text-sm sm:text-base ${currentTheme.hover}`}
                  >
                    {open ? "Show less" : "Know more"}
                    <ArrowRightIcon
                      size={18}
                      className={`ml-2 transform transition-transform ${
                        open ? "rotate-90" : ""
                      }`}
                    />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section
        id="certifications"
        className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8"
      >
        <div className="container mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-mono mb-6 sm:mb-8 flex items-center">
            <ShieldIcon size={28} className="mr-3 sm:mr-4 sm:w-8 sm:h-8" />
            ./Certifications
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* CompTIA Security+ */}
            <div
              className={`${
                isDark ? "bg-slate-900" : "bg-white"
              } p-8 rounded-lg border ${currentTheme.border}`}
            >
              <h3 className="text-xl sm:text-2xl font-mono mb-2">
                CompTIA Security+
              </h3>
              <p className={`${currentTheme.secondaryText} text-sm mb-2`}>
                Issued Aug 2025 · Expires Aug 2028
              </p>
              <p
                className={`${currentTheme.secondaryText} text-sm sm:text-base mb-3`}
              >
                Industry-recognized cybersecurity credential demonstrating
                skills in threat detection, risk mitigation, and network
                defense.
              </p>
              <a
                href="https://www.credly.com/badges/fda9c7b1-d278-4b41-be10-427c4b1a26c7/"
                target="_blank"
                rel="noopener noreferrer"
                className={`${currentTheme.hover} text-sm sm:text-base flex items-center gap-2`}
              >
                Verify Credential <ExternalLinkIcon size={18} />
              </a>
            </div>

            {/* Atlassian ITSM */}
            <div
              className={`${
                isDark ? "bg-slate-900" : "bg-white"
              } p-8 rounded-lg border ${currentTheme.border}`}
            >
              <h3 className="text-xl sm:text-2xl font-mono mb-2">
                Atlassian: Jira Service Management for ITSM
              </h3>
              <p className={`${currentTheme.secondaryText} text-sm mb-2`}>
                Issued Dec 2024
              </p>
              <p
                className={`${currentTheme.secondaryText} text-sm sm:text-base mb-3`}
              >
                Practical certification on IT Service Management workflows,
                ticketing automation, and SLA configuration in Jira Service
                Management.
              </p>
            </div>

            {/* Programming in Python */}
            <div
              className={`${
                isDark ? "bg-slate-900" : "bg-white"
              } p-8 rounded-lg border ${currentTheme.border}`}
            >
              <h3 className="text-xl sm:text-2xl font-mono mb-2">
                Meta Programming in Python
              </h3>
              <p className={`${currentTheme.secondaryText} text-sm mb-2`}>
                Issued Oct 2023
              </p>
              <p
                className={`${currentTheme.secondaryText} text-sm sm:text-base mb-3`}
              >
                Python fundamentals, data structures, and logic foundations for
                secure back-end development.
              </p>
              <a
                href="https://coursera.org/verify/DXLC86THG4XR"
                target="_blank"
                rel="noopener noreferrer"
                className={`${currentTheme.hover} text-sm sm:text-base flex items-center gap-2`}
              >
                Verify Credential <ExternalLinkIcon size={18} />
              </a>
            </div>

            {/* Meta Back-End */}
            <div
              className={`${
                isDark ? "bg-slate-900" : "bg-white"
              } p-8 rounded-lg border ${currentTheme.border}`}
            >
              <h3 className="text-xl sm:text-2xl font-mono mb-2">
                Meta Back-End Development
              </h3>
              <p className={`${currentTheme.secondaryText} text-sm mb-2`}>
                Issued Sep 2023
              </p>
              <p
                className={`${currentTheme.secondaryText} text-sm sm:text-base mb-3`}
              >
                Focuses on APIs, databases, and server-side architecture using
                Node.js and Express.
              </p>
              <a
                href="https://coursera.org/verify/MCTUMT4AXNBD"
                target="_blank"
                rel="noopener noreferrer"
                className={`${currentTheme.hover} text-sm sm:text-base flex items-center gap-2`}
              >
                Verify Credential <ExternalLinkIcon size={18} />
              </a>
            </div>

            {/* Meta Front-End */}
            <div
              className={`${
                isDark ? "bg-slate-900" : "bg-white"
              } p-8 rounded-lg border ${currentTheme.border}`}
            >
              <h3 className="text-xl sm:text-2xl font-mono mb-2">
                Meta Front-End Development
              </h3>
              <p className={`${currentTheme.secondaryText} text-sm mb-2`}>
                Issued Sep 2023
              </p>
              <p
                className={`${currentTheme.secondaryText} text-sm sm:text-base mb-3`}
              >
                Covers HTML, CSS, JavaScript, and React principles for building
                responsive user interfaces.
              </p>
              <a
                href="https://coursera.org/verify/RTRBU48NRFUV"
                target="_blank"
                rel="noopener noreferrer"
                className={`${currentTheme.hover} text-sm sm:text-base flex items-center gap-2`}
              >
                Verify Credential <ExternalLinkIcon size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8"
      >
        <div className="container mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-mono mb-6 sm:mb-8 flex items-center">
            <CodeIcon size={28} className="mr-3 sm:mr-4 sm:w-8 sm:h-8" />
            ./Projects
          </h2>

          <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8">
            {filters.map((filter) => (
              <button
                key={filter.name}
                onClick={() => setActiveFilter(filter.name)}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 text-sm sm:text-base rounded-lg transition-colors duration-300 ${
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
                <h3 className="text-xl sm:text-2xl font-mono mb-3 flex items-center">
                  {project.category === "security" ? (
                    <LockIcon size={20} className="mr-2" />
                  ) : (
                    <NetworkIcon size={20} className="mr-2" />
                  )}
                  {project.title}
                </h3>
                <p
                  className={`${currentTheme.secondaryText} text-sm sm:text-base mb-4`}
                >
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className={`text-xs sm:text-sm ${currentTheme.tagBg} ${currentTheme.tagText} px-3 py-1 rounded`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center text-sm sm:text-base ${currentTheme.hover} transition-colors`}
                >
                  Visit <ExternalLinkIcon size={20} className="ml-2" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className={`py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 ${currentTheme.cardBg}`}
      >
        <div className="container mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-mono mb-6 sm:mb-8 flex items-center">
            <BookIcon size={28} className="mr-3 sm:mr-4 sm:w-8 sm:h-8" />
            ./Skills
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Cybersecurity Domains */}
            <div
              className={`${
                isDark ? "bg-slate-900" : "bg-white"
              } p-8 rounded-lg border ${currentTheme.border}`}
            >
              <h3 className="text-xl sm:text-2xl font-mono mb-4">
                Cybersecurity Domains
              </h3>
              <ul
                className={`space-y-3 ${currentTheme.secondaryText} text-sm sm:text-base`}
              >
                <li className="flex items-center">
                  <span
                    className={`w-4 h-4 ${currentTheme.dot} rounded-full mr-3`}
                  ></span>
                  Security Analysis
                </li>
                <li className="flex items-center">
                  <span
                    className={`w-4 h-4 ${currentTheme.dot} rounded-full mr-3`}
                  ></span>
                  Incident Response
                </li>
                <li className="flex items-center">
                  <span
                    className={`w-4 h-4 ${currentTheme.dot} rounded-full mr-3`}
                  ></span>
                  Network Security
                </li>
                <li className="flex items-center">
                  <span
                    className={`w-4 h-4 ${currentTheme.dot} rounded-full mr-3`}
                  ></span>
                  Penetration Testing
                </li>
                <li className="flex items-center">
                  <span
                    className={`w-4 h-4 ${currentTheme.dot} rounded-full mr-3`}
                  ></span>
                  Digital Forensics
                </li>
                <li className="flex items-center">
                  <span
                    className={`w-4 h-4 ${currentTheme.dot} rounded-full mr-3`}
                  ></span>
                  Encryption
                </li>
              </ul>
            </div>

            {/* Security Tools & Platforms */}
            <div
              className={`${
                isDark ? "bg-slate-900" : "bg-white"
              } p-8 rounded-lg border ${currentTheme.border}`}
            >
              <h3 className="text-xl sm:text-2xl font-mono mb-4">
                Security Tools & Platforms
              </h3>
              <ul
                className={`space-y-3 ${currentTheme.secondaryText} text-sm sm:text-base`}
              >
                <li className="flex items-center">
                  <span
                    className={`w-4 h-4 ${currentTheme.dot} rounded-full mr-3`}
                  ></span>
                  SentinelOne
                </li>
                <li className="flex items-center">
                  <span
                    className={`w-4 h-4 ${currentTheme.dot} rounded-full mr-3`}
                  ></span>
                  Wireshark
                </li>

                <li className="flex items-center">
                  <span
                    className={`w-4 h-4 ${currentTheme.dot} rounded-full mr-3`}
                  ></span>
                  BeyondTrust
                </li>
                <li className="flex items-center">
                  <span
                    className={`w-4 h-4 ${currentTheme.dot} rounded-full mr-3`}
                  ></span>
                  HoxHunt
                </li>

                <li className="flex items-center">
                  <span
                    className={`w-4 h-4 ${currentTheme.dot} rounded-full mr-3`}
                  ></span>
                  Linux
                </li>
                <li className="flex items-center">
                  <span
                    className={`w-4 h-4 ${currentTheme.dot} rounded-full mr-3`}
                  ></span>
                  Windows Server / PowerShell
                </li>
              </ul>
            </div>

            {/* Cloud & Infrastructure */}
            <div
              className={`${
                isDark ? "bg-slate-900" : "bg-white"
              } p-8 rounded-lg border ${currentTheme.border}`}
            >
              <h3 className="text-xl sm:text-2xl font-mono mb-4">
                Cloud & Infrastructure
              </h3>
              <ul
                className={`space-y-3 ${currentTheme.secondaryText} text-sm sm:text-base`}
              >
                <li className="flex items-center">
                  <span
                    className={`w-4 h-4 ${currentTheme.dot} rounded-full mr-3`}
                  ></span>
                  AWS
                </li>
                <li className="flex items-center">
                  <span
                    className={`w-4 h-4 ${currentTheme.dot} rounded-full mr-3`}
                  ></span>
                  Okta
                </li>
                <li className="flex items-center">
                  <span
                    className={`w-4 h-4 ${currentTheme.dot} rounded-full mr-3`}
                  ></span>
                  Azure
                </li>
                <li className="flex items-center">
                  <span
                    className={`w-4 h-4 ${currentTheme.dot} rounded-full mr-3`}
                  ></span>
                  Intune
                </li>
                <li className="flex items-center">
                  <span
                    className={`w-4 h-4 ${currentTheme.dot} rounded-full mr-3`}
                  ></span>
                  Jamf
                </li>
                <li className="flex items-center">
                  <span
                    className={`w-4 h-4 ${currentTheme.dot} rounded-full mr-3`}
                  ></span>
                  Automox
                </li>
                <li className="flex items-center">
                  <span
                    className={`w-4 h-4 ${currentTheme.dot} rounded-full mr-3`}
                  ></span>
                  Jira Service Management
                </li>

                <li className="flex items-center">
                  <span
                    className={`w-4 h-4 ${currentTheme.dot} rounded-full mr-3`}
                  ></span>
                  GitHub
                </li>
              </ul>
            </div>

            {/* Programming & Web Development */}
            <div
              className={`${
                isDark ? "bg-slate-900" : "bg-white"
              } p-8 rounded-lg border ${currentTheme.border}`}
            >
              <h3 className="text-xl sm:text-2xl font-mono mb-4">
                Programming
              </h3>
              <ul
                className={`space-y-3 ${currentTheme.secondaryText} text-sm sm:text-base`}
              >
                <li className="flex items-center">
                  <span
                    className={`w-4 h-4 ${currentTheme.dot} rounded-full mr-3`}
                  ></span>
                  Python
                </li>
                <li className="flex items-center">
                  <span
                    className={`w-4 h-4 ${currentTheme.dot} rounded-full mr-3`}
                  ></span>
                  C
                </li>
                <li className="flex items-center">
                  <span
                    className={`w-4 h-4 ${currentTheme.dot} rounded-full mr-3`}
                  ></span>
                  C++
                </li>
                <li className="flex items-center">
                  <span
                    className={`w-4 h-4 ${currentTheme.dot} rounded-full mr-3`}
                  ></span>
                  Java
                </li>
                <li className="flex items-center">
                  <span
                    className={`w-4 h-4 ${currentTheme.dot} rounded-full mr-3`}
                  ></span>
                  JavaScript
                </li>
                <li className="flex items-center">
                  <span
                    className={`w-4 h-4 ${currentTheme.dot} rounded-full mr-3`}
                  ></span>
                  React / Next.js
                </li>
                <li className="flex items-center">
                  <span
                    className={`w-4 h-4 ${currentTheme.dot} rounded-full mr-3`}
                  ></span>
                  HTML
                </li>
                <li className="flex items-center">
                  <span
                    className={`w-4 h-4 ${currentTheme.dot} rounded-full mr-3`}
                  ></span>
                  CSS
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8"
      >
        <div className="container mx-auto">
          <h2 className="text-2xl sm:text-3xl font-mono mb-6 sm:mb-8 flex items-center justify-center lg:justify-start">
            <MailIcon size={28} className="mr-3 sm:mr-4 sm:w-8 sm:h-8" />
            ./Contact
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 lg:gap-12 justify-center items-center">
            <a
              href="https://github.com/Manik-733"
              className={`flex items-center space-x-2 text-base sm:text-lg ${currentTheme.hover} transition-colors`}
            >
              <GithubIcon size={24} />
              <span>GitHub</span>
            </a>
            <a
              href="https://ca.linkedin.com/in/manik-singh-62b236298/"
              className={`flex items-center space-x-2 text-base sm:text-lg ${currentTheme.hover} transition-colors`}
            >
              <LinkedinIcon size={24} />
              <span>LinkedIn</span>
            </a>
            <a
              href="mailto:maniksingh733@gmail.com"
              className={`flex items-center space-x-2 text-base sm:text-lg ${currentTheme.hover} transition-colors`}
            >
              <MailIcon size={24} />
              <span>Email</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className={`py-6 sm:py-8 px-4 sm:px-6 lg:px-8 border-t ${currentTheme.border}`}
      >
        <div className="container mx-auto text-center text-base sm:text-lg text-gray-400">
          <p>© 2025 Manik Singh. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

// At the bottom of Portfolio.jsx
export default Portfolio;
