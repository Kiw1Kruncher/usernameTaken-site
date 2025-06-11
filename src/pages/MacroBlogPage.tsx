
import { Link } from 'react-router-dom';

// Basic structure for the Macro Blog Page component
export default function MacroBlogPage() {
  const posts = [
    { id: 'intro-ai-cyber', title: 'Introduction to AI in Cybersecurity', date: '2025-05-10', author: 'John Doe' },
    { id: 'future-of-privacy', title: 'The Future of Digital Privacy', date: '2025-04-22', author: 'Jane Smith' },
    { id: 'web3-security', title: 'Understanding Web3 Security Risks', date: '2025-03-15', author: 'Alice Johnson' },
  ];

  return (
    <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Macro Blog</h1>
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Broad perspectives and comprehensive articles on industry trends and significant topics.
      </p>

      <div className="space-y-6">
        {posts.map(post => (
          <div key={post.id} className="p-5 border border-red-300 bg-red-50 rounded-md shadow-sm">
            <h2 className="text-2xl font-semibold text-red-800 mb-2">
              <Link to={`/blogs/macro/${post.id}`} className="hover:underline">{post.title}</Link>
            </h2>
            <p className="text-red-700 text-sm mb-2">By {post.author} on {post.date}</p>
            <p className="text-red-600">A brief summary or first few lines of the post...</p>
          </div>
        ))}
      </div>
    </div>
  );
}
