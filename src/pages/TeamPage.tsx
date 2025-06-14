import { motion } from 'framer-motion';
import HomeButton from '../components/HomeButton';
import BlogButton from '../components/BlogButton';
import SimpleProfileCard from '../components/ProfileCard';
import Particles from '../components/Particles';
import FuzzyText from '../components/FuzzyText';
import '../components/ProfileCard.css';

const profiles = [
  { name: 'Aaron Ashclarke', handle: 'Aaron' },
  { name: 'August Lam', handle: 'August' },
  { name: 'Benjamin Kerr', handle: 'Benjamin' },
  { name: 'Dylan Woods', handle: 'Dylan' },
  { name: 'Katelyn Bell', handle: 'Kiw1Kruncher' },
  { name: 'Olivia Zhao', handle: 'Olivia' },
  { name: 'Sam Katevatis', handle: 'Sam' },
  { name: 'Steven Su', handle: 'Steven' },
  { name: 'Sunny He', handle: 'Sunny' },
];

const TeamPage = () => {
  
  const blankPfpUrl = 'https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg';

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.4 }}
    >
      <style>{`
        .scrollable-content {
          height: 100vh;
          overflow-y: auto;
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollable-content::-webkit-scrollbar {
          display: none;
        }
        .content-wrapper {
          position: relative;
          z-index: 1;
          padding: 80px 40px 40px 40px;
        }
        .team-page-title {
          color: #1A1A1A;
          font-size: 3rem;
          font-weight: 700;
          font-family: serif;
          text-align: center;
        }
        @media (max-width: 768px) {
          .content-wrapper {
            padding: 80px 20px 20px 20px;
          }
          .team-page-title {
            font-size: 2.5rem;
          }
        }
      `}</style>
      
      <div style={{
          position: 'relative',
          width: '100%',
          minHeight: '100vh',
          background: 'linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 25%, #dcdcdc 50%, #e8e8e8 75%, #f5f5f5 100%)',
      }}>
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, overflow: 'hidden', pointerEvents: 'none' }}>
            <Particles
              particleColors={['#dc2626', '#b91c1c', '#991b1b']}
              particleCount={50}
              particleSpread={20}
              speed={0.1}
              particleBaseSize={100}
              moveParticlesOnHover={false}
              alphaParticles={false}
              disableRotation={false}
            />
          </div>

          <div style={{ position: 'fixed', top: '20px', left: '20px', zIndex: 1000 }}>
            <HomeButton />
          </div>

          <div className="scrollable-content">
            <div className='content-wrapper'>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '8px',
                marginBottom: '40px',
              }}>
                <h1 className="team-page-title">
                  <FuzzyText
                    baseIntensity={0.01}
                    hoverIntensity={0.5}
                    enableHover={true}
                    fontSize={75}
                    color='#2c2c2c'
                  >
                    Meet the Team
                  </FuzzyText>
                </h1>
                    <div style={{ position: 'fixed', top: '20px', left: '20px', zIndex: 1000 }}>
                      <BlogButton />
                    </div>
              </div>

              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '30px',
                maxWidth: '1400px',
                margin: '0 auto',
              }}>
                {profiles.map((profile, index) => (
                  <SimpleProfileCard
                    key={profile.handle}
                    index={index}
                    avatarUrl={blankPfpUrl}
                    name={profile.name}
                    handle={profile.handle}
                  />
                ))}
              </div>
            </div>
          </div>
      </div>
    </motion.div>
  );
};

export default TeamPage;