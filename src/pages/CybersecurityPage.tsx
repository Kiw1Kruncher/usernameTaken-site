
import { Link } from 'react-router-dom';

// Basic structure for the Cybersecurity Page component
export default function CybersecurityPage() {
  return (
    <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Cybersecurity Resources</h1>
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Dive into our collection of cybersecurity scripts, tools, and information about past and upcoming competitions.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-5 border border-blue-300 bg-blue-50 rounded-md shadow-sm">
          <h2 className="text-2xl font-semibold text-blue-800 mb-2">Scripts & Tools</h2>
          <p className="text-blue-700 mb-4">
            Browse our repository of useful cybersecurity scripts and open-source tools.
          </p>
          <Link to="/cybersecurity/scripts" className="px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200">
            View Scripts
          </Link>
        </div>

        <div className="p-5 border border-purple-300 bg-purple-50 rounded-md shadow-sm">
          <h2 className="text-2xl font-semibold text-purple-800 mb-2">Competitions</h2>
          <p className="text-purple-700 mb-4">
            Find information about past cybersecurity competitions and sign up for new ones.
          </p>
          <Link to="/cybersecurity/competitions" className="px-5 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors duration-200">
            Explore Competitions
          </Link>
        </div>
      </div>
    </div>
  );
}
