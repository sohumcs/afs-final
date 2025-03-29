
import { useState, useEffect } from "react";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

// Sample video data
const videoData = [
  {
    id: 1,
    src: "/videos/training-1.mp4",
    poster: "/lovable-uploads/c7ba31d7-f07b-47e7-a561-2af118767e67.png", // Using the provided image as fallback poster
    title: "Training Session 1"
  },
  {
    id: 2,
    src: "/videos/training-2.mp4",
    poster: "/lovable-uploads/c7ba31d7-f07b-47e7-a561-2af118767e67.png", 
    title: "Training Session 2"
  },
  {
    id: 3,
    src: "/videos/training-3.mp4",
    poster: "/lovable-uploads/c7ba31d7-f07b-47e7-a561-2af118767e67.png",
    title: "Training Session 3"
  },
  {
    id: 4,
    src: "/videos/training-4.mp4",
    poster: "/lovable-uploads/c7ba31d7-f07b-47e7-a561-2af118767e67.png",
    title: "Training Session 4"
  }
];

const VideoSlideshow = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Handle carousel item selection
  const handleSelect = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section className="relative py-10 bg-afs-dark-accent overflow-hidden dark:bg-black/50">
      <div className="absolute inset-0 bg-gradient-to-r from-afs-dark/70 to-afs-dark/70 z-0 dark:from-black/70 dark:to-black/70"></div>
      <div className="basketball-pattern absolute inset-0 opacity-15 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-10 reveal animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-russo mb-3">
            <span className="text-white">Featured</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-afs-orange to-afs-red">Training Sessions</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Get a glimpse of our specialized training sessions designed to improve your basketball skills
          </p>
        </div>
        
        <div className="relative">
          <Carousel
            className="w-full"
            opts={{
              loop: true,
              align: "center"
            }}
            onSelect={handleSelect}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {videoData.map((video, index) => (
                <CarouselItem 
                  key={video.id} 
                  className="pl-2 md:pl-4 md:basis-1/1 lg:basis-2/3 transition-all duration-300"
                >
                  <div className={cn(
                    "relative rounded-xl overflow-hidden transition-all duration-500",
                    activeIndex === index 
                      ? "opacity-100 scale-100 z-20"
                      : "opacity-70 scale-95 blur-[1px] z-10"
                  )}>
                    <video
                      src={video.src}
                      poster={video.poster}
                      className="w-full h-full object-cover aspect-video"
                      loop
                      muted
                      autoPlay
                      playsInline
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                    <div className="absolute bottom-0 left-0 w-full p-4 text-left">
                      <h3 className="text-white font-russo text-lg">{video.title}</h3>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 border-white/20 backdrop-blur-sm text-white hover:bg-white/20 h-10 w-10" />
            <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 border-white/20 backdrop-blur-sm text-white hover:bg-white/20 h-10 w-10" />
          </Carousel>
          
          <div className="hidden md:flex justify-center absolute -bottom-6 left-1/2 transform -translate-x-1/2 space-x-2 z-20">
            {videoData.map((_, index) => (
              <button
                key={index}
                className={cn(
                  "h-2 rounded-full transition-all duration-300",
                  activeIndex === index ? "w-8 bg-afs-orange" : "w-2 bg-white/40"
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSlideshow;
