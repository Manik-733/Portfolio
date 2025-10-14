import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Portfolio from "./portfolio.jsx"; // Add .jsx extension
import BlogPage from "./BlogPage.jsx"; // Add .jsx extension
import BlogPost from "./BlogPost.jsx"; // Add .jsx extension


import { useState, useEffect } from "react";

const App = () => {
  // Initialize dark mode from localStorage or default to false
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved ? JSON.parse(saved) : false;
  });

  // Save to localStorage whenever dark mode changes
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(isDark));
  }, [isDark]);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Portfolio isDark={isDark} setIsDark={setIsDark} />}
        />
        <Route
          path="/blog"
          element={<BlogPage isDark={isDark} setIsDark={setIsDark} />}
        />
        <Route path="/blog/:slug" element={<BlogPost isDark={isDark} setIsDark={setIsDark} />} />
      </Routes>
    </Router>
  );
};

export default App;
