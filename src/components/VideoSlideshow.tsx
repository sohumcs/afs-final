
import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const VideoSlideshow = () => {
  const [activeIndex, setActiveIndex] = useState(1); // Start with middle video active
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const autoplayIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Define video sources
  const videos = [
    { 
      id: 1,
      src: "/videos/basketball-game-1.mp4",
      title: "Championship Finals",
      description: "Highlights from our team's championship victory"
    },
    { 
      id: 2,
      src: "/videos/basketball-training.mp4", 
      title: "Elite Training Session",
      description: "Advanced drills from our elite development program"
    },
    { 
      id: 3,
      src: "/videos/basketball-game-2.mp4",
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
    <div className="py-8 bg-afs-dark overflow-hidden relative">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white font-russo flex items-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-afs-orange to-afs-red">Featured</span>&nbsp;Events
          </h2>
          <div className="hidden sm:flex items-center gap-2">
            <button 
              onClick={goToPrevious} 
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all text-white"
              aria-label="Previous video"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={goToNext} 
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all text-white"
              aria-label="Next video"
            >
              <ChevronRight size={20} />
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
                    {isActive && (
                      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
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
        <div className="flex justify-center mt-4 gap-2">
          {videos.map((_, index) => (
            <div 
              key={index}
              onClick={handleDotClick(index)}
              className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
                index === activeIndex 
                  ? 'bg-afs-orange scale-125' 
                  : 'bg-white/30 hover:bg-white/50'
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
      </div>
    </div>
  );
};

export default VideoSlideshow;
