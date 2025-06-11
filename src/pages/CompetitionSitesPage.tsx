// src/pages/CompetitionSitesPage.tsx
export default function CompetitionSitesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Competition Sites</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20">
            <h3 className="text-xl font-semibold mb-2">TryHackMe</h3>
            <p className="text-gray-300 mb-4">Learn cybersecurity through hands-on challenges</p>
            <a href="https://tryhackme.com" target="_blank" rel="noopener noreferrer" 
               className="text-blue-400 hover:text-blue-300">Visit Site →</a>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20">
            <h3 className="text-xl font-semibold mb-2">HackTheBox</h3>
            <p className="text-gray-300 mb-4">Penetration testing labs and challenges</p>
            <a href="https://hackthebox.com" target="_blank" rel="noopener noreferrer" 
               className="text-blue-400 hover:text-blue-300">Visit Site →</a>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20">
            <h3 className="text-xl font-semibold mb-2">CTFtime</h3>
            <p className="text-gray-300 mb-4">Archive of CTF events and rankings</p>
            <a href="https://ctftime.org" target="_blank" rel="noopener noreferrer" 
               className="text-blue-400 hover:text-blue-300">Visit Site →</a>
          </div>
        </div>
      </div>
    </div>
  );
}