

// Basic structure for the Projects Page component
export default function ProjectsPage() {
  const projects = [
    { id: 1, name: 'Secure Chat App', description: 'An end-to-end encrypted chat application.', githubUrl: 'https://github.com/yourorg/secure-chat-app' },
    { id: 2, name: 'IoT Security Framework', description: 'A framework for securing IoT devices.', githubUrl: 'https://github.com/yourorg/iot-security-framework' },
    { id: 3, name: 'Decentralized Identity Solution', description: 'Exploring blockchain for secure identity management.', githubUrl: 'https://github.com/yourorg/decentralized-identity' },
  ];

  return (
    <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Our Projects</h1>
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Discover the innovative projects our team is working on, with links to their GitHub repositories.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map(project => (
          <div key={project.id} className="p-5 border border-green-300 bg-green-50 rounded-md shadow-sm">
            <h2 className="text-2xl font-semibold text-green-800 mb-2">{project.name}</h2>
            <p className="text-green-700 mb-3">{project.description}</p>
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-block px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors duration-200">
                View on GitHub
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
