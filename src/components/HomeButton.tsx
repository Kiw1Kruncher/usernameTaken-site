import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; // or `next/navigation` for Next.js
import { VscHome } from 'react-icons/vsc';

const HomeButton: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Don't show on the home page
  if (location.pathname === '/') return null;

  return (
    <button
      onClick={() => navigate('/')}
      style={{
        position: 'fixed',
        top: '1rem',
        left: '1rem',
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
      aria-label="Go to Home"
    >
      <VscHome size={24} color="#333" />
    </button>
  );
};

export default HomeButton;
