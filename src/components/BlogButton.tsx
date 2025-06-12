import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

// SVG Book Icon to avoid external dependency issues
const BookIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#333"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
  </svg>
);

const BlogButton: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Don't render the button if the user is already on a blog page
  if (location.pathname.startsWith('/blogs')) return null;

  return (
    <button
      onClick={() => navigate('/blogs')}
      style={{
        position: 'fixed',
        top: '1rem',
        right: '1rem', // Positioned on the top-right
        width: '48px',
        height: '48px',
        borderRadius: '50%',
        backdropFilter: 'blur(10px)',
        background: 'rgba(255, 255, 255, 0.15)',
        border: '1px solid rgba(255, 255, 255, 0.25)',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'all 0.2s ease-in-out',
        zIndex: 9999,
        cursor: 'pointer',
      }}
      onMouseEnter={(e) => {
        (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.3)');
        (e.currentTarget.style.transform = 'scale(1.1)');
        (e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.3)');
      }}
      onMouseLeave={(e) => {
        (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)');
        (e.currentTarget.style.transform = 'scale(1)');
        (e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)');
      }}
      aria-label="Go to Blog"
    >
      <BookIcon />
    </button>
  );
};

export default BlogButton;
