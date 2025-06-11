import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

interface MemberData {
  id: string;
  name: string;
  role: string;
  bio: string;
  specialties: string[];
  github?: string;
  linkedin?: string;
  awards?: string[];
}

// Basic structure for the Personal Page component (dynamic)
export default function PersonalPage() {
  const { userId, memberId } = useParams<{ userId?: string; memberId?: string }>(); // Get ID from URL
  const idToFetch = userId || memberId; // Use either userId from /users/ or memberId from /team/

  const [person, setPerson] = useState<MemberData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPerson = async () => {
      setLoading(true);
      setError(null);
      // Simulate API call for user/member data
      await new Promise(resolve => setTimeout(resolve, 500)); // Simulate network delay

      const mockData: MemberData[] = [
        { id: 'alice', name: 'Alice Johnson', role: 'Security Analyst', bio: 'Dedicated to uncovering and mitigating cyber threats. Expertise in SIEM and incident response.', specialties: ['SIEM', 'Incident Response', 'Network Security'], github: 'https://github.com/alice', awards: ['Cyber Defender 2023'] },
        { id: 'bob', name: 'Bob Williams', role: 'DevOps Engineer', bio: 'Passionate about automating infrastructure and securing CI/CD pipelines.', specialties: ['Cloud Security', 'DevOps', 'Automation'], linkedin: 'https://linkedin.com/in/bob' },
        { id: 'charlie', name: 'Charlie Brown', role: 'Threat Hunter', bio: 'Proactive in searching for malicious activities within systems. Loves reverse engineering.', specialties: ['Malware Analysis', 'Threat Intelligence', 'Reverse Engineering'] },
        { id: 'eva', name: 'Eva Green', role: 'Lead Developer', bio: 'A seasoned full-stack developer with a focus on scalable web applications. Strong advocate for clean code.', specialties: ['React', 'Node.js', 'Database Design'], github: 'https://github.com/eva' },
        { id: 'frank', name: 'Frank White', role: 'Cybersecurity Expert', bio: 'Deep knowledge in cryptography and secure communication protocols. Enjoys penetration testing.', specialties: ['Cryptography', 'Penetration Testing', 'Security Audits'], linkedin: 'https://linkedin.com/in/frank' },
        { id: 'grace', name: 'Grace Lee', role: 'UI/UX Designer', bio: 'Creates intuitive and visually appealing interfaces. Believes in user-centered design.', specialties: ['Figma', 'User Research', 'Interaction Design'] },
      ];

      const foundPerson = mockData.find(p => p.id === idToFetch);
      if (foundPerson) {
        setPerson(foundPerson);
      } else {
        setError(`Person with ID "${idToFetch}" not found.`);
      }
      setLoading(false);
    };

    if (idToFetch) {
      fetchPerson();
    } else {
      setError('No user or member ID provided.');
      setLoading(false);
    }
  }, [idToFetch]); // Dependency array: re-run if idToFetch changes

  if (loading) return <div className="text-center text-blue-500 text-xl mt-8">Loading profile...</div>;
  if (error) return <div className="text-center text-red-500 text-xl mt-8">Error: {error}</div>;
  if (!person) return <div className="text-center text-gray-500 text-xl mt-8">No profile data available.</div>;

  return (
    <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-2">{person.name}</h1>
      <p className="text-xl text-gray-600 mb-4">{person.role}</p>

      <p className="text-lg text-gray-700 leading-relaxed mb-6">{person.bio}</p>

      {person.specialties.length > 0 && (
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">Specialties</h2>
          <ul className="flex flex-wrap gap-2">
            {person.specialties.map((spec, index) => (
              <li key={index} className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                {spec}
              </li>
            ))}
          </ul>
        </div>
      )}

      {(person.github || person.linkedin) && (
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">Connect</h2>
          <div className="flex space-x-4">
            {person.github && (
              <a href={person.github} target="_blank" rel="noopener noreferrer" className="px-5 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-800 transition-colors duration-200">
                GitHub Profile
              </a>
            )}
            {person.linkedin && (
              <a href={person.linkedin} target="_blank" rel="noopener noreferrer" className="px-5 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition-colors duration-200">
                LinkedIn Profile
              </a>
            )}
          </div>
        </div>
      )}

      {person.awards && person.awards.length > 0 && (
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">Awards & Recognition</h2>
          <ul className="list-disc list-inside text-gray-700">
            {person.awards.map((award, index) => (
              <li key={index}>{award}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
