import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ThreeColumnPage from './pages/ThreeColumnPage';
import ExamplesPage from './pages/ExamplesPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';

const App: React.FC = () => {
  return (
    <Router>
      <GlobalStyles />
      <Header />
      <main>
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/examples" element={<ExamplesPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/two-column-1" element={<ThreeColumnPage />} />
          <Route path="/two-column-2" element={<ThreeColumnPage />} />
          <Route path="/no-sidebar" element={<ThreeColumnPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
