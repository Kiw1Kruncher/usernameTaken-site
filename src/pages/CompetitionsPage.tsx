

// Basic structure for the Competitions Page component
export default function CompetitionsPage() {
  const competitions = [
    { id: 1, name: 'Capture The Flag 2024', date: 'October 25-27, 2024', status: 'Upcoming', link: 'https://example.com/ctf2024' },
    { id: 2, name: 'Ethical Hacking Challenge 2023', date: 'March 10-12, 2023', status: 'Past', link: 'https://example.com/ehc2023' },
    { id: 3, name: 'Defensive Security Games', date: 'July 1-3, 2024', status: 'Ongoing', link: 'https://example.com/dsg' },
  ];

  return (
    <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Cybersecurity Competitions</h1>
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Stay updated on past, ongoing, and upcoming cybersecurity challenges and competitions.
      </p>

      <div className="space-y-6">
        {competitions.map(comp => (
          <div key={comp.id} className="p-5 border border-indigo-300 bg-indigo-50 rounded-md shadow-sm">
            <h2 className="text-2xl font-semibold text-indigo-800 mb-2">{comp.name}</h2>
            <p className="text-indigo-700"><strong>Date:</strong> {comp.date}</p>
            <p className="text-indigo-700 mb-3"><strong>Status:</strong> <span className={`font-bold ${comp.status === 'Upcoming' ? 'text-green-600' : comp.status === 'Ongoing' ? 'text-yellow-600' : 'text-gray-600'}`}>{comp.status}</span></p>
            {comp.link && (
              <a href={comp.link} target="_blank" rel="noopener noreferrer" className="inline-block px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors duration-200">
                Learn More
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
