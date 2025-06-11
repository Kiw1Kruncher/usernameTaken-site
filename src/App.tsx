import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Import all your page components from src/pages/
// Removed .tsx extension from imports for better resolution
import HomePage from './pages/HomePage';
import UsersPage from './pages/UsersPage';
import AwardsPage from './pages/AwardsPage';
import CybersecurityPage from './pages/CybersecurityPage';
import ScriptsPage from './pages/ScriptsPage';
import CompetitionsPage from './pages/CompetitionsPage';
import ProjectsPage from './pages/ProjectsPage';
import TeamPage from './pages/TeamPage';
import PersonalPage from './pages/PersonalPage';
import TeamBlogsPage from './pages/TeamBlogsPage';
import MacroBlogPage from './pages/MacroBlogPage';
import ATProtoBlogPage from './pages/ATProtoBlogPage';
import BlogPostPage from './pages/BlogPostPage';

// You might also want to import Analytics from "@vercel/analytics/react";
// import { Analytics } from "@vercel/analytics/react";

// Main App component
export default function App() {
  return (
    // Router component to enable routing
    <Router>
      {/* Navigation Bar - styled with Tailwind CSS for a clean look */}
      <nav className="bg-gray-800 p-4 text-white shadow-lg">
        <ul className="flex justify-center space-x-6">
          <li>
            <Link to="/" className="hover:text-blue-400 transition-colors duration-200">Home</Link>
          </li>
          <li>
            <Link to="/users" className="hover:text-blue-400 transition-colors duration-200">Users</Link>
          </li>
          <li>
            <Link to="/cybersecurity" className="hover:text-blue-400 transition-colors duration-200">Cybersecurity</Link>
          </li>
          <li>
            <Link to="/projects" className="hover:text-blue-400 transition-colors duration-200">Projects</Link>
          </li>
          <li>
            <Link to="/team" className="hover:text-blue-400 transition-colors duration-200">Team</Link>
          </li>
          <li>
            <Link to="/blogs" className="hover:text-blue-400 transition-colors duration-200">Blogs</Link>
          </li>
          {/* Add more navigation links as needed */}
        </ul>
      </nav>

      {/* Main content area with padding */}
      <main className="p-8">
        {/* Routes define which component renders for a given URL path */}
        <Routes>
          <Route path="/" element={<HomePage />} />

          {/* Users and Awards routes */}
          <Route path="/users" element={<UsersPage />} />
          <Route path="/users/awards" element={<AwardsPage />} />
          {/* Dynamic route for individual personal pages (e.g., /users/john-doe) */}
          <Route path="/users/:userId" element={<PersonalPage />} />

          {/* Cybersecurity, Scripts, and Competitions routes */}
          <Route path="/cybersecurity" element={<CybersecurityPage />} />
          <Route path="/cybersecurity/scripts" element={<ScriptsPage />} />
          <Route path="/cybersecurity/competitions" element={<CompetitionsPage />} />

          {/* Projects route */}
          <Route path="/projects" element={<ProjectsPage />} />

          {/* Team and individual member pages */}
          <Route path="/team" element={<TeamPage />} />
          {/* Dynamic route for individual team member pages (e.g., /team/jane-smith) */}
          <Route path="/team/:memberId" element={<PersonalPage />} />

          {/* Blog related routes */}
          <Route path="/blogs" element={<TeamBlogsPage />} /> {/* Main blog index, or specific team blog */}
          <Route path="/blogs/macro" element={<MacroBlogPage />} />
          <Route path="/blogs/atproto" element={<ATProtoBlogPage />} />
          {/* Dynamic route for individual blog posts within any blog (e.g., /blogs/macro/my-first-post) */}
          <Route path="/blogs/:blogType/:postId" element={<BlogPostPage />} />

          {/* Fallback route for any undefined paths */}
          <Route path="*" element={<div className="text-center text-red-500 text-xl">404 - Page Not Found</div>} />
        </Routes>
      </main>

      {/* If you uncommented Analytics, make sure to add it here */}
      {/* <Analytics /> */}
    </Router>
  );
}
