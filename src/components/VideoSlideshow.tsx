import { useState } from "react";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious,
  type CarouselApi
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

const videoData = [
  {
    id: 1,
    src: "/videos/training-1.mp4",
    poster: "/lovable-uploads/c7ba31d7-f07b-47e7-a561-2af118767e67.png",
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
  const [api, setApi] = useState<CarouselApi>();
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelect = () => {
    if (!api) return;
    setActiveIndex(api.selectedScrollSnap());
  };

  const setupCarousel = (carouselApi: CarouselApi) => {
    setApi(carouselApi);
    carouselApi.on("select", handleSelect);
    return () => {
      carouselApi.off("select", handleSelect);
    };
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
        
        <div className="relative group">
          <Carousel
            className="w-full"
            setApi={setupCarousel}
            opts={{
              loop: true,
              align: "center"
            }}
          >
            <CarouselContent className="ml-0">
              {videoData.map((video, index) => (
                <CarouselItem 
                  key={video.id} 
                  className="basis-full lg:basis-2/3 px-1 md:px-2"
                >
                  <div className={cn(
                    "relative transition-all duration-500",
                    activeIndex === index 
                      ? "opacity-100 scale-100 z-20"
                      : "opacity-70 scale-95 blur-[1px] z-10"
                  )}>
                    <div className={cn(
                      "p-[2px] rounded-xl",
                      activeIndex === index ? "bg-afs-orange" : "bg-transparent"
                    )}>
                      <div className="rounded-lg overflow-hidden w-full h-full">
                        <video
                          src={video.src}
                          poster={video.poster}
                          className="w-full h-full object-cover aspect-video"
                          loop
                          muted
                          autoPlay={activeIndex === index}
                          playsInline
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                        <div className="absolute bottom-0 left-0 w-full p-4 text-left">
                          <h3 className="text-white font-russo text-lg">{video.title}</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Enhanced Previous Arrow */}
            <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-30 
              h-12 w-12 rounded-full bg-white/10 backdrop-blur-lg border-2 border-afs-orange/30
              text-afs-orange hover:bg-afs-orange/20 hover:border-afs-orange/60
              transition-all duration-300 shadow-lg hover:shadow-afs-orange/30
              flex items-center justify-center
              group-hover:opacity-100 opacity-0 md:opacity-100
              hover:scale-110 transform-gpu
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-afs-orange">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className="w-6 h-6"
              >
                <path d="M15 18l-6-6 6-6"/>
              </svg>
              <span className="sr-only">Previous slide</span>
            </CarouselPrevious>
            
            {/* Enhanced Next Arrow */}
            <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-30
              h-12 w-12 rounded-full bg-white/10 backdrop-blur-lg border-2 border-afs-orange/30
              text-afs-orange hover:bg-afs-orange/20 hover:border-afs-orange/60
              transition-all duration-300 shadow-lg hover:shadow-afs-orange/30
              flex items-center justify-center
              group-hover:opacity-100 opacity-0 md:opacity-100
              hover:scale-110 transform-gpu
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-afs-orange">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className="w-6 h-6"
              >
                <path d="M9 18l6-6-6-6"/>
              </svg>
              <span className="sr-only">Next slide</span>
            </CarouselNext>
          </Carousel>
          
          {/* Navigation dots */}
          <div className="w-full flex justify-center mt-6 md:mt-8 md:absolute md:bottom-4 left-0 right-0 mx-auto">
            <div className="flex space-x-2 z-20 px-4 bg-afs-dark-accent/50 md:bg-transparent rounded-full py-2 md:py-0">
              {videoData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => api?.scrollTo(index)}
                  className={cn(
                    "h-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-afs-orange",
                    activeIndex === index ? "w-8 bg-afs-orange" : "w-2 bg-white/40"
                  )}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>  
  );
};

export default VideoSlideshow;