
import { useEffect, useRef } from 'react';
import { ArrowDown, Ball, Award, TrendingUp } from 'lucide-react';

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
      <div className="absolute inset-0 basketball-pattern z-[1] opacity-30"></div>
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
        <span className="inline-flex items-center text-sm uppercase tracking-widest mb-4 font-montserrat font-bold">
          <Ball className="mr-2 text-afs-orange animate-ball-bounce" size={20} />
          Welcome to
        </span>
        <h1 className="afs-heading mb-6">
          <div className="flex items-center justify-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-afs-orange to-afs-red">AFS</span>
            <span className="mx-2">Academy</span>
            <Ball className="text-afs-orange animate-ball-bounce ml-2" size={40} />
          </div>
        </h1>
        <p className="max-w-2xl mb-8 text-lg font-montserrat">
          Elevate your game with professional basketball training
          designed to unlock your full potential on the court.
        </p>
        <div className="space-x-4 flex flex-wrap justify-center gap-4">
          <button className="btn-primary flex items-center">
            <Ball className="mr-2" size={20} />
            Explore Programs
          </button>
          <button className="btn-secondary flex items-center">
            <Award className="mr-2" size={20} />
            Meet Our Coaches
          </button>
        </div>
        
        {/* Basketball Stats Quick View */}
        <div className="flex flex-wrap justify-center gap-6 mt-12 w-full max-w-4xl">
          <div className="glass-card py-3 px-6 rounded-lg flex items-center">
            <TrendingUp className="text-afs-orange mr-2" size={20} />
            <span className="font-russo">90%</span>
            <span className="ml-2 text-white/70 text-sm">Success Rate</span>
          </div>
          <div className="glass-card py-3 px-6 rounded-lg flex items-center">
            <Award className="text-afs-orange mr-2" size={20} />
            <span className="font-russo">15+</span>
            <span className="ml-2 text-white/70 text-sm">Pro Coaches</span>
          </div>
          <div className="glass-card py-3 px-6 rounded-lg flex items-center">
            <Ball className="text-afs-orange mr-2" size={20} />
            <span className="font-russo">2,500+</span>
            <span className="ml-2 text-white/70 text-sm">Players Trained</span>
          </div>
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
