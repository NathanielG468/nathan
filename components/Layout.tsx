
import React, { useMemo } from 'react';

interface LayoutProps {
  children: React.ReactNode;
  bgKeyword?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, bgKeyword }) => {
  // Use a reliable Unsplash URL pattern for thematic backgrounds
  const backgroundUrl = useMemo(() => {
    // Adding specific search qualifiers to make backgrounds feel more majestic and Christian-themed
    const keywords = bgKeyword ? `${bgKeyword} sacred religious` : 'sacred light cathedral';
    return `https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&q=80&w=1920&keywords=${encodeURIComponent(keywords)}`;
  }, [bgKeyword]);

  // Generate some random particles
  const particles = useMemo(() => {
    return Array.from({ length: 15 }).map((_, i) => ({
      left: `${Math.random() * 100}%`,
      bottom: `-${Math.random() * 20}%`,
      size: `${Math.random() * 4 + 1}px`,
      duration: `${Math.random() * 15 + 15}s`,
      delay: `${Math.random() * 10}s`,
    }));
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 text-white overflow-hidden relative transition-all duration-1000">
      {/* 1. Dynamic Background Image Layer */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center transition-all duration-1000 scale-110 blur-[3px]"
        style={{ 
          backgroundImage: backgroundUrl ? `url(${backgroundUrl})` : 'none',
          opacity: backgroundUrl ? 0.3 : 0
        }}
      />
      
      {/* 2. Base Sacred Gradient Overlay */}
      <div className="absolute inset-0 z-1 gradient-bg opacity-90 transition-opacity duration-1000"></div>

      {/* 3. Divine Light Effect */}
      <div className="divine-light"></div>

      {/* 4. Floating Particles */}
      <div className="particles">
        {particles.map((p, i) => (
          <div 
            key={i} 
            className="particle" 
            style={{ 
              left: p.left, 
              bottom: p.bottom, 
              width: p.size, 
              height: p.size, 
              animationDuration: p.duration,
              animationDelay: p.delay 
            }} 
          />
        ))}
      </div>

      {/* 5. Content Container */}
      <div className="w-full max-w-4xl z-10 flex flex-col items-center">
        {children}
      </div>
      
      {/* 6. Foreground Accents */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/50 to-transparent pointer-events-none z-2"></div>
    </div>
  );
};

export default Layout;
