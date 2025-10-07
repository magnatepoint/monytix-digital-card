import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Github, 
  Globe,
  Sparkles,
  Zap,
  Brain,
  TrendingUp,
  Download,
  Share2,
  User,
  Building
} from 'lucide-react';
import monytixLogo from './assets/monytix (500 x 150 px).png';
import './App.css';

function App() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  const contactInfo = {
    name: "Sandeep Malla VH",
    title: "Cofounder, CEO",
    company: "Monytix",
    email: "sandeep@monytix.ai",
    phone: "+91 96031 13359",
    website: "monytix.ai",
    linkedin: "https://www.linkedin.com/in/sandeepmalla",
    twitter: "@sandeepmalla",
    github: "sandeepmalla"
  };

  const handleContact = (type, value) => {
    switch (type) {
      case 'email':
        window.open(`mailto:${value}`);
        break;
      case 'phone':
        window.open(`tel:${value}`);
        break;
      case 'website':
        window.open(`https://${value}`);
        break;
      case 'linkedin':
        window.open(`https://linkedin.com/company/${value}`);
        break;
      case 'twitter':
        window.open(`https://twitter.com/${value.replace('@', '')}`);
        break;
      case 'github':
        window.open(`https://github.com/${value}`);
        break;
      default:
        break;
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      position: 'relative',
      overflow: 'hidden',
      background: '#0E1116'
    }}>
      {/* Background Particles */}
      <div className="floating-particles">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>

      {/* Main Container */}
      <div style={{
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        gap: isMobile ? '1.5rem' : '2rem',
        maxWidth: '1200px',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: isMobile ? '1rem' : '2rem'
      }}>
        
        {/* Left Panel - Personal Card */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{
            position: 'relative',
            width: isMobile ? '100%' : '400px',
            maxWidth: isMobile ? '350px' : '400px',
            height: isMobile ? '400px' : '500px',
            perspective: '1000px'
          }}
        >
          <motion.div
            animate={{ rotateY: isFlipped ? 180 : 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            style={{
              width: '100%',
              height: '100%',
              position: 'relative',
              transformStyle: 'preserve-3d',
              cursor: 'pointer'
            }}
            onClick={() => setIsFlipped(!isFlipped)}
          >
            {/* Front Side */}
            <div style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              backfaceVisibility: 'hidden',
              borderRadius: '1.5rem',
              padding: isMobile ? '1.5rem' : '2rem',
              background: '#151A21',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}>
              {/* Monytix Logo */}
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                marginBottom: '1.5rem'
              }}>
                <img 
                  src={monytixLogo} 
                  alt="Monytix Logo" 
                  className="monytix-logo"
                  style={{
                    height: isMobile ? '50px' : '60px',
                    width: 'auto',
                    filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2))'
                  }}
                />
              </div>

              {/* Name and Title */}
              <div>
                <h1 style={{
                  fontSize: isMobile ? '1.5rem' : '1.875rem',
                  fontWeight: 'bold',
                  color: 'white',
                  marginBottom: '0.5rem',
                  lineHeight: '1.2'
                }}>
                  {contactInfo.name}
                </h1>
                <p style={{
                  fontSize: isMobile ? '1rem' : '1.125rem',
                  color: '#A0A8B5',
                  marginBottom: '0.25rem'
                }}>
                  {contactInfo.title}
                </p>
                <p style={{
                  fontSize: '1rem',
                  color: 'rgba(255, 255, 255, 0.6)'
                }}>
                  {contactInfo.company}
                </p>
              </div>

              {/* Contact Information */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <Phone style={{ width: '1.25rem', height: '1.25rem', color: 'white' }} />
                  <span style={{ color: 'white', fontSize: '0.95rem' }}>{contactInfo.phone}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <Mail style={{ width: '1.25rem', height: '1.25rem', color: 'white' }} />
                  <span style={{ color: 'white', fontSize: '0.95rem' }}>{contactInfo.email}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <Globe style={{ width: '1.25rem', height: '1.25rem', color: 'white' }} />
                  <span style={{ color: 'white', fontSize: '0.95rem' }}>{contactInfo.website}</span>
                </div>
              </div>

              {/* Click to flip hint */}
              <p style={{
                fontSize: '0.75rem',
                color: 'rgba(255, 255, 255, 0.5)',
                textAlign: 'center',
                marginTop: '1rem'
              }}>
                Click to flip
              </p>
            </div>

            {/* Back Side */}
            <div style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              backfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)',
              borderRadius: '1.5rem',
              padding: isMobile ? '1.5rem' : '2rem',
              background: '#151A21',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center'
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                marginBottom: '1.5rem'
              }}>
                <img 
                  src={monytixLogo} 
                  alt="Monytix Logo" 
                  className="monytix-logo"
                  style={{
                    height: isMobile ? '40px' : '50px',
                    width: 'auto',
                    filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2))'
                  }}
                />
              </div>
              <h2 style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                color: 'white',
                marginBottom: '1rem'
              }}>
                AI-Powered Solutions
              </h2>
              <p style={{
                fontSize: '1rem',
                color: 'rgba(255, 255, 255, 0.8)',
                lineHeight: '1.5',
                marginBottom: '2rem'
              }}>
                Revolutionizing fintech with intelligent automation and cutting-edge technology.
              </p>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <Sparkles style={{ width: '1.5rem', height: '1.5rem', color: '#00E0A1' }} />
                <Zap style={{ width: '1.5rem', height: '1.5rem', color: '#00C48C' }} />
                <TrendingUp style={{ width: '1.5rem', height: '1.5rem', color: '#00E676' }} />
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Panel - Quick Actions */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          style={{
            width: isMobile ? '100%' : '350px',
            maxWidth: isMobile ? '350px' : '350px',
            height: isMobile ? '400px' : '500px',
            borderRadius: '1.5rem',
            padding: isMobile ? '1.5rem' : '2rem',
            background: '#1E252E',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}
        >
          {/* Header */}
          <div>
            <h2 style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              color: 'white',
              marginBottom: '0.5rem'
            }}>
              Digital Visiting Card
            </h2>
            <p style={{
              fontSize: '0.875rem',
              color: '#A0A8B5'
            }}>
              Save, share, and connect instantly
            </p>
          </div>

          {/* Main Action Buttons */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              style={{
                width: '100%',
                padding: '1rem 1.5rem',
                borderRadius: '0.75rem',
                background: 'white',
                color: '#00E0A1',
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: 'pointer',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                transition: 'all 0.3s ease'
              }}
            >
              <Download style={{ width: '1.25rem', height: '1.25rem' }} />
              Save to Contacts
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              style={{
                width: '100%',
                padding: '1rem 1.5rem',
                borderRadius: '0.75rem',
                background: 'linear-gradient(90deg, #00E0A1, #00BFA5)',
                color: 'white',
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: 'pointer',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                transition: 'all 0.3s ease'
              }}
            >
              <Share2 style={{ width: '1.25rem', height: '1.25rem' }} />
              Share Card
            </motion.button>
          </div>

          {/* Quick Actions */}
          <div>
            <p style={{
              fontSize: '0.75rem',
                  color: '#6C7380',
              marginBottom: '1rem',
              textAlign: 'center'
            }}>
              • Quick Actions
            </p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '0.75rem'
            }}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleContact('email', contactInfo.email)}
                style={{
                  padding: '1rem',
                  borderRadius: '0.75rem',
                  background: '#151A21',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '0.5rem',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              >
                <Mail style={{ width: '1.5rem', height: '1.5rem', color: 'white' }} />
                <span style={{ color: 'white', fontSize: '0.75rem', fontWeight: '500' }}>Email</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleContact('phone', contactInfo.phone)}
                style={{
                  padding: '1rem',
                  borderRadius: '0.75rem',
                  background: '#151A21',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '0.5rem',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              >
                <Phone style={{ width: '1.5rem', height: '1.5rem', color: 'white' }} />
                <span style={{ color: 'white', fontSize: '0.75rem', fontWeight: '500' }}>Call</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleContact('website', contactInfo.website)}
                style={{
                  padding: '1rem',
                  borderRadius: '0.75rem',
                  background: '#151A21',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '0.5rem',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              >
                <Globe style={{ width: '1.5rem', height: '1.5rem', color: 'white' }} />
                <span style={{ color: 'white', fontSize: '0.75rem', fontWeight: '500' }}>Website</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleContact('linkedin', contactInfo.linkedin)}
                style={{
                  padding: '1rem',
                  borderRadius: '0.75rem',
                  background: '#151A21',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '0.5rem',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              >
                <Linkedin style={{ width: '1.5rem', height: '1.5rem', color: 'white' }} />
                <span style={{ color: 'white', fontSize: '0.75rem', fontWeight: '500' }}>LinkedIn</span>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default App;