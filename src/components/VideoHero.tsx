
import { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';

const VideoHero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.8;
    }
  }, []);

  const scrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="video-container">
      <video 
        ref={videoRef}
        autoPlay 
        muted 
        loop 
        playsInline
        className="video-bg"
        poster="/images/basketball-poster.jpg"
      >
        <source src="/videos/basketball-hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="video-overlay"></div>
      
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4 text-white text-center">
        <span className="text-sm uppercase tracking-widest mb-4 animate-fade-in">Welcome to</span>
        <h1 className="afs-heading mb-6 animate-fade-in" style={{ animationDelay: '200ms' }}>
          <span>AFS Academy</span>
        </h1>
        <p className="max-w-2xl mb-8 text-lg animate-fade-in" style={{ animationDelay: '400ms' }}>
          Elevate your game with professional basketball training
          designed to unlock your full potential on the court.
        </p>
        <div className="space-x-4 animate-fade-in" style={{ animationDelay: '600ms' }}>
          <button className="btn-primary">
            Explore Programs
          </button>
          <button className="btn-secondary">
            Meet Our Coaches
          </button>
        </div>
      </div>
      
      <button 
        onClick={scrollDown}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce-slow z-10"
        aria-label="Scroll down"
      >
        <ArrowDown size={32} />
      </button>
    </div>
  );
};

export default VideoHero;
