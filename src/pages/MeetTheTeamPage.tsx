export default function MeetTheTeamPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 to-purple-800 text-white p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Meet The Team</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20 text-center">
            <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-4"></div>
            <h3 className="text-xl font-semibold mb-2">Team Member 1</h3>
            <p className="text-gray-300 mb-4">Security Researcher</p>
            <a href="/team/member1" className="text-blue-400 hover:text-blue-300">View Profile →</a>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20 text-center">
            <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mx-auto mb-4"></div>
            <h3 className="text-xl font-semibold mb-2">Team Member 2</h3>
            <p className="text-gray-300 mb-4">Full Stack Developer</p>
            <a href="/team/member2" className="text-blue-400 hover:text-blue-300">View Profile →</a>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20 text-center">
            <div className="w-24 h-24 bg-gradient-to-r from-pink-500 to-red-500 rounded-full mx-auto mb-4"></div>
            <h3 className="text-xl font-semibold mb-2">Team Member 3</h3>
            <p className="text-gray-300 mb-4">DevOps Engineer</p>
            <a href="/team/member3" className="text-blue-400 hover:text-blue-300">View Profile →</a>
          </div>
        </div>
      </div>
    </div>
  );
}