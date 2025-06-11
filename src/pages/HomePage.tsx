import React from 'react';
import { 
  VscHome, 
  VscAccount, 
  VscShield, 
  VscCode, 
  VscStarFull, 
  VscGlobe, 
  VscNotebook,
  VscGithub,
  VscFile
} from 'react-icons/vsc';
import { useNavigate } from 'react-router-dom'; // ⬅️ import this
import FuzzyText from '../components/FuzzyText';
import Particles from '../components/Particles';
import Dock from '../components/Dock';

export default function HomePage() {
  const navigate = useNavigate(); // ⬅️ create navigate function

  const containerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
    minHeight: '100vh',
    paddingBottom: '120px',
    zIndex: 0,
    background: 'linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 25%, #dcdcdc 50%, #e8e8e8 75%, #f5f5f5 100%)',
  };

  const items = [
    { icon: <VscHome size={18} />, label: 'Home', onClick: () => navigate('/') },
    { icon: <VscAccount size={18} />, label: 'Meet the Team', onClick: () => navigate('/team') },
    { icon: <VscFile size={18} />, label: 'Personal Pages', onClick: () => navigate('/personal') },
    { icon: <VscShield size={18} />, label: 'Cybersecurity', onClick: () => navigate('/cybersecurity') },
    { icon: <VscCode size={18} />, label: 'Projects', onClick: () => navigate('/projects') },
    { icon: <VscNotebook size={18} />, label: 'Scripts', onClick: () => navigate('/scripts') },
    { icon: <VscStarFull size={18} />, label: 'Competitions', onClick: () => navigate('/competitions') },
    { icon: <VscGithub size={18} />, label: 'GitHub', onClick: () => window.open('https://github.com', '_blank') },
    { icon: <VscGlobe size={18} />, label: 'Blog', onClick: () => navigate('/blog') },
  ];

  return (
    <>
      <div style={containerStyle}>
        <FuzzyText
          baseIntensity={0.01}
          hoverIntensity={0.5}
          enableHover={true}
          fontSize={100}
          color='#2c2c2c'
        >
          Username
        </FuzzyText>
        <FuzzyText
          baseIntensity={0.01}
          hoverIntensity={0.5}
          enableHover={true}
          fontSize={100}
          color='#dc2626'
        >
          Taken
        </FuzzyText>
        <div style={{   position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
          overflow: 'visible',
          pointerEvents: 'none'
          }}>
          <Particles
            particleColors={[
              '#dc2626',
              '#ef4444',
              '#f87171',
              '#fca5a5',
              '#b91c1c',
              '#991b1b'
            ]}
            particleCount={200}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover={false}
            alphaParticles={false}
            disableRotation={false}
          />
        </div>
      </div>

      <Dock
        items={items}
        panelHeight={68}
        baseItemSize={50}
        magnification={70}
        className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50"
      />
    </>
  );
}
