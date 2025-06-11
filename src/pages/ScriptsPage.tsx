

// Basic structure for the Scripts Page component
export default function ScriptsPage() {
  const scripts = [
    { id: 1, name: 'Network Scanner', description: 'A Python script to scan for open ports.', link: 'https://github.com/yourorg/network-scanner' },
    { id: 2, name: 'Password Auditor', description: 'Tool for checking password strength.', link: 'https://github.com/yourorg/password-auditor' },
    { id: 3, name: 'Log Analyzer', description: 'Automated log file parsing for security events.', link: 'https://github.com/yourorg/log-analyzer' },
  ];

  return (
    <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Cybersecurity Scripts & Tools</h1>
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        A curated collection of useful scripts and tools for various cybersecurity tasks.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {scripts.map(script => (
          <div key={script.id} className="p-5 border border-gray-200 bg-gray-50 rounded-md shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">{script.name}</h2>
            <p className="text-gray-700 mb-3">{script.description}</p>
            {script.link && (
              <a href={script.link} target="_blank" rel="noopener noreferrer" className="inline-block px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition-colors duration-200">
                View on GitHub
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
