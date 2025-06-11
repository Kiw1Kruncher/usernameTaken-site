
import { Link } from 'react-router-dom';

// Basic structure for the Team Page component
export default function TeamPage() {
  const teamMembers = [
    { id: 'eva', name: 'Eva Green', role: 'Lead Developer', bio: 'Specializes in full-stack web development.' },
    { id: 'frank', name: 'Frank White', role: 'Cybersecurity Expert', bio: 'Focuses on vulnerability research.' },
    { id: 'grace', name: 'Grace Lee', role: 'UI/UX Designer', bio: 'Passionate about creating intuitive user interfaces.' },
  ];

  return (
    <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Meet Our Team</h1>
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Get to know the individuals behind usernameTaken. Click on a member's name to see their personal profile.
      </p>

      <ul className="space-y-6">
        {teamMembers.map(member => (
          <li key={member.id} className="p-5 border border-purple-200 bg-purple-50 rounded-md shadow-sm hover:bg-purple-100 transition-colors duration-200">
            <h2 className="text-2xl font-semibold text-purple-800 mb-2">{member.name}</h2>
            <p className="text-purple-700 mb-3"><strong>Role:</strong> {member.role}</p>
            <p className="text-purple-600 mb-4">{member.bio}</p>
            <Link to={`/team/${member.id}`} className="px-5 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors duration-200">
              View Personal Page
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
