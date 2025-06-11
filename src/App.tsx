import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import all your page components from src/pages/
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



// You might also want to import Analytics from "@vercel/analytics/react";
// import { Analytics } from "@vercel/analytics/react";

// Main App component
const App: React.FC = () => {
  return (
    // Router component to enable routing
    <Router>
      {/* Main content area */}
      <main className="min-h-screen">
        {/* Routes define which component renders for a given URL path */}
        <Routes>
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
      </main>



      {/* If you uncommented Analytics, make sure to add it here */}
      {/* <Analytics /> */}
    </Router>
  );
};

export default App;