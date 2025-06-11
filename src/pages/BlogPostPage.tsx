import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown'; // You'll need to install this: npm install react-markdown

// Mock content for blog posts
const mockBlogContent: { [key: string]: { [key: string]: { title: string; author: string; date: string; content: string } } } = {
  macro: {
    'intro-ai-cyber': {
      title: 'Introduction to AI in Cybersecurity',
      author: 'John Doe',
      date: '2025-05-10',
      content: `
# Introduction to AI in Cybersecurity

Artificial Intelligence (AI) is rapidly transforming the cybersecurity landscape. From anomaly detection to automated threat response, AI offers powerful capabilities to enhance our defense mechanisms.

## How AI Helps

* **Threat Detection:** AI models can analyze vast amounts of data to identify patterns indicative of malicious activity that might be missed by traditional methods.
* **Vulnerability Management:** AI can help prioritize vulnerabilities and suggest remediation strategies.
* **Automated Response:** In some cases, AI can initiate automated responses to contain threats, reducing human reaction time.

## Challenges

Despite its promise, AI in cybersecurity also presents challenges, such as the need for high-quality data, the risk of adversarial AI attacks, and the ethical implications of autonomous decision-making.

This is a **markdown example** of a blog post!
      `,
    },
    'future-of-privacy': {
      title: 'The Future of Digital Privacy',
      author: 'Jane Smith',
      date: '2025-04-22',
      content: `
# The Future of Digital Privacy

In an increasingly interconnected world, digital privacy has become a paramount concern. New technologies and regulatory frameworks are shaping how our personal data is collected, used, and protected.

## Key Trends

1.  **Privacy-Enhancing Technologies (PETs):** Tools like homomorphic encryption and zero-knowledge proofs are emerging to enable data processing without exposing raw information.
2.  **Data Sovereignty:** Individuals and nations are demanding greater control over their data, leading to stricter data localization and transfer rules.
3.  **Ethical AI:** The development of AI is prompting discussions about fair use of data and algorithmic transparency to protect individual rights.

The debate around privacy is far from over, and it will continue to evolve with technological advancements.
      `,
    },
  },
  atproto: {
    'atproto-intro': {
      title: 'Getting Started with ATproto',
      author: 'Bob Williams',
      date: '2025-06-01',
      content: `
# Getting Started with ATproto

The Authenticated Transfer Protocol (ATproto) is a new decentralized social networking protocol. It aims to provide a robust and open foundation for a diverse ecosystem of applications.

## Core Concepts

* **DID (Decentralized Identifier):** A unique identifier for users and services.
* **PDS (Personal Data Server):** Where your data lives, giving you ownership and portability.
* **Relays:** Services that aggregate public data from PDSs to create global feeds.

## Why ATproto?

ATproto focuses on allowing users to move their data between providers easily, promoting open innovation, and offering moderation at scale.
      `,
    },
    // Add more ATproto blog post mock content here
  },
};

// Basic structure for the Blog Post Page component (dynamic)
export default function BlogPostPage() {
  const { blogType, postId } = useParams<{ blogType?: string; postId?: string }>();
  const [post, setPost] = useState<{ title: string; author: string; date: string; content: string } | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    const fetchPost = async () => {
      // Simulate API call or data lookup
      await new Promise(resolve => setTimeout(resolve, 500)); // Simulate network delay

      if (blogType && postId && mockBlogContent[blogType] && mockBlogContent[blogType][postId]) {
        setPost(mockBlogContent[blogType][postId]);
      } else {
        setError('Blog post not found.');
      }
      setLoading(false);
    };

    fetchPost();
  }, [blogType, postId]); // Re-fetch if blogType or postId changes

  if (loading) return <div className="text-center text-blue-500 text-xl mt-8">Loading post...</div>;
  if (error) return <div className="text-center text-red-500 text-xl mt-8">Error: {error}</div>;
  if (!post) return <div className="text-center text-gray-500 text-xl mt-8">No post data available.</div>;

  return (
    <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-2">{post.title}</h1>
      <p className="text-lg text-gray-600 mb-4">By {post.author} on {post.date}</p>
      <article className="prose lg:prose-xl max-w-none text-gray-800">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </article>
      {/* You might want to add comments section or related posts here */}
    </div>
  );
}
