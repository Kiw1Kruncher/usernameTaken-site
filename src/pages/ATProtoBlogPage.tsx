
import { Link } from 'react-router-dom';

// Basic structure for the ATProto Blog Page component
export default function ATProtoBlogPage() {
  const posts = [
    { id: 'atproto-intro', title: 'Getting Started with ATproto', date: '2025-06-01', author: 'Bob Williams' },
    { id: 'pds-basics', title: 'Personal Data Servers (PDS) Explained', date: '2025-05-20', author: 'Eva Green' },
    { id: 'custom-feeds', title: 'Building Custom Feeds on Bluesky', date: '2025-05-05', author: 'Frank White' },
  ];

  return (
    <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-4">ATproto Blog</h1>
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Dedicated articles on the AT Protocol, Bluesky, and decentralized web technologies.
      </p>

      <div className="space-y-6">
        {posts.map(post => (
          <div key={post.id} className="p-5 border border-cyan-300 bg-cyan-50 rounded-md shadow-sm">
            <h2 className="text-2xl font-semibold text-cyan-800 mb-2">
              <Link to={`/blogs/atproto/${post.id}`} className="hover:underline">{post.title}</Link>
            </h2>
            <p className="text-cyan-700 text-sm mb-2">By {post.author} on {post.date}</p>
            <p className="text-cyan-600">A brief summary or first few lines of the post...</p>
          </div>
        ))}
      </div>
    </div>
  );
}
