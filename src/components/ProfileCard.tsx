import React from 'react';
import './ProfileCard.css';

interface SimpleProfileCardProps {
  avatarUrl: string;
  name: string;
  handle: string;
  index: number; // Index for animation delay
}

const SimpleProfileCard: React.FC<SimpleProfileCardProps> = ({ avatarUrl, name, handle, index }) => {
  return (
    // The --i custom property is used by the CSS for animation-delay
    <a href={`/user/${handle}`} className="simple-card" style={{ '--i': index } as React.CSSProperties}>
      <img
        src={avatarUrl}
        alt={`Profile of ${name}`}
        className="simple-card-avatar"
      />
      <h3 className="simple-card-name">{name}</h3>
      <p className="simple-card-handle">@{handle}</p>
    </a>
  );
};

export default SimpleProfileCard;