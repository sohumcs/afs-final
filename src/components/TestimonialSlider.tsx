
import { useState, useEffect } from 'react';

interface Testimonial {
  id: number;
  text: string;
  author: string;
  position: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    text: "AFS Academy transformed my game completely. The coaches pushed me beyond my limits and taught me skills I never thought I could master.",
    author: "Michael Johnson",
    position: "College Basketball Player",
    image: "/images/testimonial-1.jpg"
  },
  {
    id: 2,
    text: "The personalized training program at AFS Academy helped me improve my shooting accuracy by 30% in just two months! Incredible results.",
    author: "Sarah Williams",
    position: "High School Basketball Team Captain",
    image: "/images/testimonial-2.jpg"
  },
  {
    id: 3,
    text: "As a parent, I'm amazed at the confidence my son has gained since joining AFS Academy. The coaches focus on character as much as skills.",
    author: "Robert Chen",
    position: "Parent",
    image: "/images/testimonial-3.jpg"
  }
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="py-12 overflow-hidden relative">
      <div className="max-w-5xl mx-auto px-4">
        <div className="glass-card rounded-2xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 hero-gradient"></div>
          
          <div className="text-center relative z-10">
            <svg className="w-10 h-10 mx-auto mb-6 text-afs-orange opacity-75" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
              <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
            </svg>
            
            <div className="relative h-64 md:h-48 overflow-hidden">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={testimonial.id}
                  className={`absolute w-full transition-all duration-700 ease-in-out ${
                    index === currentIndex 
                      ? 'opacity-100 translate-x-0' 
                      : index < currentIndex 
                        ? 'opacity-0 -translate-x-full' 
                        : 'opacity-0 translate-x-full'
                  }`}
                >
                  <p className="text-white/90 text-lg md:text-xl italic mb-8">"{testimonial.text}"</p>
                  <div className="flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-afs-orange">
                      <img src={testimonial.image} alt={testimonial.author} className="w-full h-full object-cover" />
                    </div>
                    <div className="text-left">
                      <div className="font-bold text-white">{testimonial.author}</div>
                      <div className="text-white/70 text-sm">{testimonial.position}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-afs-orange scale-125' : 'bg-white/30'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
