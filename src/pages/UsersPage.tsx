
import { Link } from 'react-router-dom';

// Basic structure for the Users Page component
export default function UsersPage() {
  // Mock data for demonstration purposes
  const users = [
    { id: 'alice', name: 'Alice Johnson', role: 'Security Analyst' },
    { id: 'bob', name: 'Bob Williams', role: 'DevOps Engineer' },
    { id: 'charlie', name: 'Charlie Brown', role: 'Threat Hunter' },
  ];

  return (
    <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Our Community Members</h1>
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Meet the talented individuals who make up our vibrant community. Click on a name to view their personal page.
      </p>

      <ul className="space-y-4">
        {users.map(user => (
          <li key={user.id} className="p-4 border border-gray-200 rounded-md shadow-sm bg-gray-50 hover:bg-gray-100 transition-colors duration-200 flex justify-between items-center">
            <span className="font-semibold text-gray-800 text-xl">{user.name}</span>
            <Link to={`/users/${user.id}`} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200">
              View Profile
            </Link>
          </li>
        ))}
      </ul>

      <div className="mt-8 text-center">
        <Link to="/users/awards" className="inline-block px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200 text-lg font-medium">
          View Community Awards
        </Link>
      </div>
    </div>
  );
}
