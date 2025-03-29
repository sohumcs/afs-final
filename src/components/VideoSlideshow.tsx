
import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

const VideoSlideshow = () => {
  const [activeIndex, setActiveIndex] = useState(1); // Start with middle video active
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const autoplayIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Define video sources with more appealing sample videos
  const videos = [
    { 
      id: 1,
      src: "https://assets.mixkit.co/videos/preview/mixkit-basketball-player-dribbling-then-dunking-2285-large.mp4",
      title: "Championship Finals",
      description: "Highlights from our team's championship victory"
    },
    { 
      id: 2,
      src: "https://assets.mixkit.co/videos/preview/mixkit-basketball-player-performing-a-fade-away-dunk-2284-large.mp4", 
      title: "Elite Training Session",
      description: "Advanced drills from our elite development program"
    },
    { 
      id: 3,
      src: "https://assets.mixkit.co/videos/preview/mixkit-young-basketball-player-dribbling-2286-large.mp4",
      title: "Summer Tournament",
      description: "Action from the annual summer showcase event"
    }
  ];

  // Handle autoplay functionality
  useEffect(() => {
    // Start autoplay
    autoplayIntervalRef.current = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % videos.length);
    }, 5000);

    // Clear interval on unmount
    return () => {
      if (autoplayIntervalRef.current) {
        clearInterval(autoplayIntervalRef.current);
      }
    };
  }, [videos.length]);

  // Pause autoplay when user interacts
  const pauseAutoplay = () => {
    if (autoplayIntervalRef.current) {
      clearInterval(autoplayIntervalRef.current);
    }
  };

  // Resume autoplay after user interaction
  const resumeAutoplay = () => {
    pauseAutoplay();
    autoplayIntervalRef.current = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % videos.length);
    }, 5000);
  };

  // Navigation functions
  const goToPrevious = () => {
    pauseAutoplay();
    setActiveIndex(prev => (prev === 0 ? videos.length - 1 : prev - 1));
    resumeAutoplay();
  };

  const goToNext = () => {
    pauseAutoplay();
    setActiveIndex(prev => (prev + 1) % videos.length);
    resumeAutoplay();
  };

  const goToSlide = (index: number) => {
    pauseAutoplay();
    setActiveIndex(index);
    resumeAutoplay();
  };

  // Fix the TypeScript error by using an appropriate event handler
  const handleDotClick = (index: number) => (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    goToSlide(index);
  };

  return (
    <div className="py-16 bg-gradient-to-b from-afs-dark-accent to-afs-dark overflow-hidden relative">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-4xl font-bold text-white font-russo flex items-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-afs-orange to-afs-red">Featured</span>&nbsp;Events
          </h2>
          <div className="hidden sm:flex items-center gap-3">
            <button 
              onClick={goToPrevious} 
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-afs-orange/20 flex items-center justify-center transition-all text-white hover:text-afs-orange"
              aria-label="Previous video"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={goToNext} 
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-afs-orange/20 flex items-center justify-center transition-all text-white hover:text-afs-orange"
              aria-label="Next video"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <div ref={videoContainerRef} className="relative py-8 overflow-hidden">
          <div className="flex justify-center items-center gap-4 md:gap-8">
            {videos.map((video, index) => {
              const isActive = index === activeIndex;
              const isPrevious = (index === activeIndex - 1) || (activeIndex === 0 && index === videos.length - 1);
              const isNext = (index === activeIndex + 1) || (activeIndex === videos.length - 1 && index === 0);
              
              return (
                <div 
                  key={video.id}
                  className={`video-slide transition-all duration-500 relative ${
                    isActive 
                      ? 'z-30 w-full md:w-2/3 lg:w-1/2 scale-100 opacity-100' 
                      : isPrevious || isNext 
                        ? 'z-20 w-3/4 md:w-1/2 lg:w-1/3 scale-90 opacity-60'
                        : 'z-10 hidden md:block w-1/2 lg:w-1/4 scale-80 opacity-40'
                  }`}
                >
                  <div className="aspect-video relative rounded-xl overflow-hidden shadow-xl">
                    <video 
                      src={video.src}
                      className={`w-full h-full object-cover ${isActive ? '' : 'blur-sm'}`}
                      autoPlay 
                      loop 
                      muted 
                    />
                    
                    {/* Play button overlay */}
                    {isActive && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 md:w-20 md:h-20 bg-afs-orange/80 rounded-full flex items-center justify-center cursor-pointer hover:bg-afs-orange transition-all hover:scale-110">
                          <Play size={32} fill="white" className="ml-1" />
                        </div>
                      </div>
                    )}
                    
                    {isActive && (
                      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 via-black/70 to-transparent">
                        <h3 className="text-xl font-bold text-white mb-1">{video.title}</h3>
                        <p className="text-white/80 text-sm">{video.description}</p>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Dots navigation */}
        <div className="flex justify-center mt-6 gap-3">
          {videos.map((_, index) => (
            <div 
              key={index}
              onClick={handleDotClick(index)}
              className={`cursor-pointer transition-all ${
                index === activeIndex 
                  ? 'w-8 h-3 bg-afs-orange rounded-full' 
                  : 'w-3 h-3 bg-white/30 hover:bg-white/50 rounded-full'
              }`}
            />
          ))}
        </div>

        {/* Mobile navigation */}
        <div className="flex sm:hidden justify-center mt-6 gap-4">
          <button 
            onClick={goToPrevious} 
            className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all text-white"
            aria-label="Previous video"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={goToNext} 
            className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all text-white"
            aria-label="Next video"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* View All Events Button */}
        <div className="text-center mt-12">
          <button className="btn-primary">
            View All Events
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoSlideshow;
