

export default function HomePage() {
  return (
    <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Welcome to usernameTaken!</h1>
      <p className="text-lg text-gray-700 leading-relaxed">
        This is the central hub for our community, offering insights into cybersecurity, exciting projects,
        team profiles, and engaging blog content. Explore the navigation above to get started!
      </p>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-4 border rounded-md shadow-sm bg-gray-50">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Our Mission</h2>
          <p className="text-gray-600">To foster innovation and knowledge sharing in the cybersecurity and tech community.</p>
        </div>
        <div className="p-4 border rounded-md shadow-sm bg-gray-50">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Latest Updates</h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>New blog post on ATproto integration.</li>
            <li>Project showcase updated.</li>
            <li>Upcoming cybersecurity competition announced!</li>
          </ul>
        </div>
        <div className="p-4 border rounded-md shadow-sm bg-gray-50">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Connect With Us</h2>
          <p className="text-gray-600">Find us on GitHub and social media for more.</p>
        </div>
      </div>
    </div>
  );
}
