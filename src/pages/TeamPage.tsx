import { useEffect, useRef, useCallback } from "react";
import type { CSSProperties, MouseEvent } from "react";

// Define proper types for the component props
interface ProfileCardProps {
  name?: string;
  title?: string;
  handle?: string;
  contactText?: string;
  showUserInfo?: boolean;
  onContactClick?: () => void;
  className?: string;
  avatarUrl?: string;
  enableTilt?: boolean;
}

const ProfileCardComponent = ({
  name = "Javi A. Torres",
  title = "Software Engineer",
  handle = "javicodes",
  contactText = "Contact",
  showUserInfo = true,
  onContactClick,
  className = "",
  avatarUrl,
  enableTilt = true
}: ProfileCardProps) => {
  const wrapRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  // Changed the type of the event parameter to native PointerEvent
  const handlePointerMove = useCallback((event: PointerEvent) => {
    if (!enableTilt) return;

    const card = cardRef.current;
    const wrap = wrapRef.current;
    if (!card || !wrap) return;

    const rect = card.getBoundingClientRect();
    const width = card.clientWidth;
    const height = card.clientHeight;

    const offsetX = event.clientX - rect.left;
    const offsetY = event.clientY - rect.top;

    const percentX = Math.min(Math.max((100 / width) * offsetX, 0), 100);
    const percentY = Math.min(Math.max((100 / height) * offsetY, 0), 100);

    const centerX = percentX - 50;
    const centerY = percentY - 50;

    wrap.style.setProperty('--pointer-x', `${percentX}%`);
    wrap.style.setProperty('--pointer-y', `${percentY}%`);
    wrap.style.setProperty('--rotate-x', `${-(centerX / 8)}deg`);
    wrap.style.setProperty('--rotate-y', `${centerY / 8}deg`);
  }, [enableTilt]);

  // Removed 'event' parameter as it's not used
  const handlePointerEnter = useCallback(() => {
    if (!enableTilt) return;

    const wrap = wrapRef.current;
    const card = cardRef.current;
    if (!wrap || !card) return;

    wrap.classList.add('active');
    card.classList.add('active');
  }, [enableTilt]);

  // Removed 'event' parameter as it's not used
  const handlePointerLeave = useCallback(() => {
    if (!enableTilt) return;

    const wrap = wrapRef.current;
    const card = cardRef.current;
    if (!wrap || !card) return;

    wrap.classList.remove('active');
    card.classList.remove('active');

    // Reset transform smoothly
    wrap.style.setProperty('--rotate-x', '0deg');
    wrap.style.setProperty('--rotate-y', '0deg');
  }, [enableTilt]);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    if (enableTilt) {
      // Cast the callback functions to EventListener as they are used with native DOM addEventListener
      card.addEventListener("pointerenter", handlePointerEnter as EventListener);
      card.addEventListener("pointermove", handlePointerMove as EventListener);
      card.addEventListener("pointerleave", handlePointerLeave as EventListener);
    } else {
      // Ensure listeners are removed if enableTilt becomes false
      card.removeEventListener("pointerenter", handlePointerEnter as EventListener);
      card.removeEventListener("pointermove", handlePointerMove as EventListener);
      card.removeEventListener("pointerleave", handlePointerLeave as EventListener);
      // Ensure styles are reset if tilt is disabled mid-render
      const wrap = wrapRef.current;
      if (wrap) {
        wrap.style.setProperty('--rotate-x', '0deg');
        wrap.style.setProperty('--rotate-y', '0deg');
      }
    }


    return () => {
      // Clean up all listeners
      card.removeEventListener("pointerenter", handlePointerEnter as EventListener);
      card.removeEventListener("pointermove", handlePointerMove as EventListener);
      card.removeEventListener("pointerleave", handlePointerLeave as EventListener);
    };
  }, [handlePointerMove, handlePointerEnter, handlePointerLeave, enableTilt]);


  const cardWrapperStyle: CSSProperties & { [key: string]: any } = {
    '--pointer-x': '50%',
    '--pointer-y': '50%',
    '--rotate-x': '0deg',
    '--rotate-y': '0deg',
    perspective: '500px',
    position: 'relative',
    touchAction: 'none'
  };

  const cardStyle: CSSProperties = {
    height: '300px',
    width: '280px',
    borderRadius: '20px',
    position: 'relative',
    background: `
      radial-gradient(farthest-side circle at var(--pointer-x) var(--pointer-y),
        hsla(0, 30%, 80%, 0.2) 4%,
        hsla(0, 20%, 70%, 0.15) 10%,
        hsla(0, 15%, 60%, 0.1) 50%,
        hsla(0, 0%, 50%, 0) 100%),
      linear-gradient(135deg,
        #f87171 0%,
        #fca5a5 25%,
        #fed7d7 50%,
        #fca5a5 75%,
        #f87171 100%)
    `,
    boxShadow: '0 10px 30px rgba(248, 113, 113, 0.2)',
    transition: enableTilt ? 'transform 0.3s ease' : 'none',
    transform: enableTilt ? 'rotateX(var(--rotate-y)) rotateY(var(--rotate-x))' : 'none',
    overflow: 'hidden',
    cursor: enableTilt ? 'pointer' : 'default'
  };

  const insideStyle: CSSProperties = {
    position: 'absolute',
    inset: '1px',
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderRadius: '19px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2rem',
    textAlign: 'center',
    gap: '1rem'
  };

  const avatarStyle: CSSProperties = {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginBottom: '1rem',
    border: '3px solid #f87171',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
  };


  const nameStyle: CSSProperties = {
    fontSize: '1.5rem',
    fontWeight: '700',
    margin: 0,
    color: '#2c2c2c',
    textShadow: '0 1px 2px rgba(0, 0, 0, 0.1)'
  };

  const titleStyle: CSSProperties = {
    fontSize: '1rem',
    fontWeight: '500',
    margin: 0,
    color: '#f87171',
    marginBottom: '0.5rem'
  };

  const handleStyle: CSSProperties = {
    fontSize: '0.9rem',
    fontWeight: '400',
    color: '#6b7280',
    margin: 0
  };

  const contactBtnStyle: CSSProperties = {
    border: '2px solid #f87171',
    borderRadius: '10px',
    padding: '8px 16px',
    fontSize: '0.9rem',
    fontWeight: '600',
    color: '#f87171',
    background: 'transparent',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    marginTop: '1rem'
  };

  const handleButtonMouseEnter = (e: MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement;
    target.style.backgroundColor = '#f87171';
    target.style.color = 'white';
    target.style.transform = 'translateY(-2px)';
    target.style.boxShadow = '0 4px 12px rgba(248, 113, 113, 0.3)';
  };

  const handleButtonMouseLeave = (e: MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement;
    target.style.backgroundColor = 'transparent';
    target.style.color = '#f87171';
    target.style.transform = 'translateY(0)';
    target.style.boxShadow = 'none';
  };

  return (
    <div
      ref={wrapRef}
      className={`profile-card-wrapper ${className}`.trim()}
      style={cardWrapperStyle}
    >
      <div ref={cardRef} style={cardStyle}>
        <div style={insideStyle}>
          {avatarUrl && <img src={avatarUrl} alt={`${name}'s avatar`} style={avatarStyle} />}
          <div>
            <h3 style={nameStyle}>{name}</h3>
            <p style={titleStyle}>{title}</p>
            <p style={handleStyle}>@{handle}</p>
          </div>

          {showUserInfo && (
            <button
              style={contactBtnStyle}
              onClick={onContactClick}
              onMouseEnter={handleButtonMouseEnter}
              onMouseLeave={handleButtonMouseLeave}
              type="button"
              aria-label={`Contact ${name}`}
            >
              {contactText}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};


const HomeButton = () => {
  const buttonStyle: CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '42px',
    height: '42px',
    borderRadius: '12px',
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
    border: '1px solid rgba(255, 255, 255, 0.4)',
    backdropFilter: 'blur(8px)',
    WebkitBackdropFilter: 'blur(8px)', // for Safari
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
    padding: '0',
  };

  const svgStyle: CSSProperties = {
    width: '20px',
    height: '20px',
    fill: '#f87171'
  };

  const handleMouseEnter = (e: MouseEvent<HTMLButtonElement>) => {
    const target = e.currentTarget;
    target.style.transform = 'scale(1.05)';
    target.style.boxShadow = '0 4px 12px rgba(248, 113, 113, 0.2)';
  };

  const handleMouseLeave = (e: MouseEvent<HTMLButtonElement>) => {
    const target = e.currentTarget;
    target.style.transform = 'scale(1)';
    target.style.boxShadow = '0 2px 6px rgba(0, 0, 0, 0.1)';
  };

  const handleGoHome = () => {
    window.location.href = '/';
  };

  return (
    <button
      style={buttonStyle}
      onClick={handleGoHome}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      aria-label="Go to Home"
    >
      <svg style={svgStyle} viewBox="0 0 24 24">
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
      </svg>
    </button>
  );
};


interface Profile {
  name: string;
  title: string;
  handle: string;
  contactText: string;
  avatarUrl: string;
}

const profiles: Profile[] = [
  {
    name: 'Javi A. Torres', title: 'Software Engineer', handle: 'javicodes', contactText: 'Contact Me', avatarUrl: '/avatars/javi.jpg'
  },
  {
    name: 'Sophia Lin', title: 'UI/UX Designer', handle: 'sophialin', contactText: 'Reach Out', avatarUrl: '/avatars/sophia.jpg'
  },
  {
    name: 'Daniel Kim', title: 'DevOps Engineer', handle: 'dankim', contactText: 'Contact', avatarUrl: '/avatars/daniel.jpg'
  },
  {
    name: 'Ava Patel', title: 'Frontend Developer', handle: 'avap', contactText: 'Say Hello', avatarUrl: '/avatars/ava.jpg'
  },
  {
    name: 'Liam Chen', title: 'Backend Developer', handle: 'liamc', contactText: 'Ping Me', avatarUrl: '/avatars/liam.jpg'
  },
  {
    name: 'Emily Nguyen', title: 'Data Scientist', handle: 'emilyai', contactText: 'Contact', avatarUrl: '/avatars/emily.jpg'
  },
  {
    name: 'Ethan Brown', title: 'Security Engineer', handle: 'ethansec', contactText: 'Message', avatarUrl: '/avatars/ethan.jpg'
  },
  {
    name: 'Maya Rodriguez', title: 'Product Manager', handle: 'mayar', contactText: 'Let\'s Talk', avatarUrl: '/avatars/maya.jpg'
  },
  {
    name: 'Noah Davis', title: 'Mobile Developer', handle: 'noahdev', contactText: 'Chat', avatarUrl: '/avatars/noah.jpg'
  },
  {
    name: 'Isabella Lee', title: 'QA Engineer', handle: 'izzyqa', contactText: 'QA Talk', avatarUrl: '/avatars/isabella.jpg'
  },
  {
    name: 'Oliver Smith', title: 'Full Stack Developer', handle: 'olivers', contactText: 'Meet Me', avatarUrl: '/avatars/oliver.jpg'
  },
  {
    name: 'Chloe Zhao', title: 'AI Engineer', handle: 'chloez', contactText: 'Say Hi', avatarUrl: '/avatars/chloe.jpg'
  }
];

export default function TeamPage() {
  const containerStyle: CSSProperties = {
    background: 'linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 25%, #dcdcdc 50%, #e8e8e8 75%, #f5f5f5 100%)',
    width: '100%',
    minHeight: '100vh',
    overflowX: 'hidden',
  };

  const headerStyle: CSSProperties = {
    position: 'fixed',
    top: '16px',
    left: '16px',
    zIndex: 1000,
  };

  const contentStyle: CSSProperties = {
    padding: '2rem',
    paddingTop: '6rem', // Account for fixed header
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%', // Ensure content takes full width to align grid
    boxSizing: 'border-box', // Include padding in width calculation
  };

  const titleStyle: CSSProperties = {
    fontSize: '3rem',
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: '3rem',
    color: '#2c2c2c',
    textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
  };

  const gridStyle: CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '2rem',
    width: '100%', // Take full width of parent (contentStyle)
    maxWidth: '1400px',
    padding: '2rem', // Keep padding
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    borderRadius: '20px',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    boxSizing: 'border-box', // Crucial to prevent padding from causing overflow
  };

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <HomeButton />
      </div>

      <div style={contentStyle}>
        <h1 style={titleStyle}>Meet the Team</h1>
        <div style={gridStyle}>
          {profiles.map((profile, index) => (
            <ProfileCardComponent
              key={index}
              name={profile.name}
              title={profile.title}
              handle={profile.handle}
              contactText={profile.contactText}
              avatarUrl={profile.avatarUrl}
              showUserInfo={true}
              enableTilt={true}
              onContactClick={() => console.log(`${profile.name} Contact clicked`)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}