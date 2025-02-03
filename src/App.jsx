import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Portfolio from './portfolio.jsx';  // Add .jsx extension
import BlogPage from './BlogPage.jsx';    // Add .jsx extension
import { useState } from 'react';

const App = () => {
    const [isDark, setIsDark] = useState(false);

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Portfolio isDark={isDark} setIsDark={setIsDark} />} />
                <Route path="/blog" element={<BlogPage isDark={isDark} setIsDark={setIsDark} />} />

</Routes>
        </Router>
    );
};

export default App;