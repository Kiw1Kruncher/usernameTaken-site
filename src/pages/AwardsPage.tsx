

// Basic structure for the Awards Page component
export default function AwardsPage() {
  const awards = [
    { id: 1, name: 'Cyber Defender 2023', recipient: 'Alice Johnson', description: 'Awarded for exceptional contributions to incident response.' },
    { id: 2, name: 'Code Innovator 2024', recipient: 'Bob Williams', description: 'Recognized for groundbreaking open-source project development.' },
    { id: 3, name: 'Community Leader 2024', recipient: 'Charlie Brown', description: 'Honored for active participation and mentorship within the community.' },
  ];

  return (
    <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Community Awards</h1>
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Celebrating the achievements and contributions of our outstanding members.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {awards.map(award => (
          <div key={award.id} className="p-5 border border-yellow-300 bg-yellow-50 rounded-md shadow-sm">
            <h2 className="text-2xl font-semibold text-yellow-800 mb-2">{award.name}</h2>
            <p className="text-lg text-yellow-700 mb-1"><strong>Recipient:</strong> {award.recipient}</p>
            <p className="text-yellow-600">{award.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
