import React from 'react';
// Import BrowserRouter, Routes, and Route from react-router-dom
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
// Import AnimatePresence from framer-motion for animations
import { AnimatePresence } from 'framer-motion';

// Import all your page components
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
import CompetitionSitesPage from './pages/CompetitionSitesPage';
import MeetTheTeamPage from './pages/MeetTheTeamPage';

const App: React.FC = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

// We create a separate component to be able to use the useLocation hook,
// which must be inside the <Router>.
const AppContent: React.FC = () => {
  const location = useLocation();

  return (
    <main className="min-h-screen">
      {/* AnimatePresence enables the animation of components that have been removed from the tree. */}
      {/* The `mode="wait"` prop ensures the outgoing page finishes its exit animation before the new one enters. */}
      <AnimatePresence mode="wait">
        {/* The key={location.pathname} is crucial. It tells AnimatePresence that a new component is rendering. */}
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />

          {/* Users section */}
          <Route path="/users" element={<UsersPage />} />
          <Route path="/users/awards" element={<AwardsPage />} />
          <Route path="/users/:userId" element={<PersonalPage />} />

          {/* Cybersecurity section */}
          <Route path="/cybersecurity" element={<CybersecurityPage />} />
          <Route path="/cybersecurity/scripts" element={<ScriptsPage />} />
          <Route path="/cybersecurity/competitions" element={<CompetitionsPage />} />
          <Route path="/cybersecurity/competitions/sites" element={<CompetitionSitesPage />} />

          {/* Projects section */}
          <Route path="/projects" element={<ProjectsPage />} />

          {/* Team section */}
          <Route path="/team" element={<TeamPage />} />
          <Route path="/team/meet" element={<MeetTheTeamPage />} />
          <Route path="/team/:memberId" element={<PersonalPage />} />

          {/* Blog section */}
          <Route path="/blogs" element={<TeamBlogsPage />} />
          <Route path="/blogs/macro" element={<MacroBlogPage />} />
          <Route path="/blogs/atproto" element={<ATProtoBlogPage />} />
          <Route path="/blogs/:blogType/:postId" element={<BlogPostPage />} />

          {/* External GitHub redirect */}
          <Route path="/github" element={<div>Redirecting to GitHub...</div>} />

          {/* Fallback route for any undefined paths */}
          <Route
            path="*"
            element={
              <div className="flex items-center justify-center min-h-screen text-center text-red-500 text-xl">
                404 - Page Not Found
              </div>
            }
          />
        </Routes>
      </AnimatePresence>
    </main>
  );
};

export default App;