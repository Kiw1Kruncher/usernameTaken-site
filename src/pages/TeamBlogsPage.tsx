
import { Link } from 'react-router-dom';

// Basic structure for the Team Blogs Page component
export default function TeamBlogsPage() {
  return (
    <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Our Blogs</h1>
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Explore various blog categories from our team, covering a wide range of topics.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-5 border border-orange-300 bg-orange-50 rounded-md shadow-sm">
          <h2 className="text-2xl font-semibold text-orange-800 mb-2">Macro Blog</h2>
          <p className="text-orange-700 mb-4">
            Broader topics, industry trends, and high-level discussions.
          </p>
          <Link to="/blogs/macro" className="px-5 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-colors duration-200">
            Go to Macro Blog
          </Link>
        </div>

        <div className="p-5 border border-teal-300 bg-teal-50 rounded-md shadow-sm">
          <h2 className="text-2xl font-semibold text-teal-800 mb-2">ATproto Blog</h2>
          <p className="text-teal-700 mb-4">
            Deep dives into ATproto, decentralized technologies, and related development.
          </p>
          <Link to="/blogs/atproto" className="px-5 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition-colors duration-200">
            Go to ATproto Blog
          </Link>
        </div>
      </div>
    </div>
  );
}
