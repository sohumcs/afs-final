
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ArrowRight } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface ProgramCardProps {
  title: string;
  description: string;
  level: string;
  duration: string;
  image: string;
}

// Integrated ProgramCard component directly in the page file
const ProgramCard = ({ title, description, level, duration, image }: ProgramCardProps) => {
  return (
    <div className="overflow-hidden rounded-xl relative group glass-card animate-fade-in">
      <div className="aspect-video w-full overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-afs-dark/90 to-transparent"></div>
      </div>
      
      <div className="p-6 relative z-10">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-white">{title}</h3>
          <span className="text-xs py-1 px-3 rounded-full uppercase tracking-wider bg-afs-orange/30 text-white border border-afs-orange/20">
            {level}
          </span>
        </div>
        
        <p className="text-white/80 mb-4 text-sm">
          {description}
        </p>
        
        <div className="flex justify-between items-center">
          <span className="text-white/60 text-sm">
            {duration}
          </span>
          
          <button className="flex items-center text-afs-orange hover:text-white transition-colors group/btn">
            <span>Enroll Now</span>
            <ArrowRight size={18} className="ml-2 transition-transform duration-300 group-hover/btn:translate-x-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

const Programs = () => {
  const [selectedLevel, setSelectedLevel] = useState<string>("all");
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Make elements visible immediately on component mount
    setIsVisible(true);
    
    // Add observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animated');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    // Observe all elements with the 'reveal' class
    document.querySelectorAll('.reveal').forEach((element) => {
      observer.observe(element);
    });
    
    return () => {
      // Clean up observer
      document.querySelectorAll('.reveal').forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);
  
  const programs = [
    {
      id: 1,
      title: "Elite Skills Training",
      description: "Intensive program focused on advanced skill development for serious players looking to compete at higher levels.",
      level: "Advanced",
      duration: "12 Weeks",
      image: "/images/program-elite.jpg"
    },
    {
      id: 2,
      title: "Youth Development",
      description: "Foundational basketball skills and fundamentals for young players ages 8-14, focusing on proper technique and basketball IQ.",
      level: "Beginner",
      duration: "10 Weeks",
      image: "/images/program-youth.jpg"
    },
    {
      id: 3,
      title: "College Prep Academy",
      description: "Comprehensive training program designed to prepare high school athletes for college basketball with position-specific training.",
      level: "Advanced",
      duration: "16 Weeks",
      image: "/images/program-college.jpg"
    },
    {
      id: 4,
      title: "Pro Skills Workshop",
      description: "Specialized training focusing on professional-level skills and techniques taught by former NBA players and coaches.",
      level: "Expert",
      duration: "8 Weeks",
      image: "/images/program-pro.jpg"
    },
    {
      id: 5,
      title: "Summer Intensive Camp",
      description: "Full-day summer camp offering comprehensive basketball training, team play, and competitive games for all skill levels.",
      level: "Intermediate",
      duration: "4 Weeks",
      image: "/images/program-summer.jpg"
    },
    {
      id: 6,
      title: "Shooting Fundamentals",
      description: "Specialized program focusing exclusively on shooting mechanics, form, and consistency for players wanting to improve scoring.",
      level: "Beginner",
      duration: "6 Weeks",
      image: "/images/program-shooting.jpg"
    }
  ];

  const filteredPrograms = selectedLevel === "all" 
    ? programs 
    : programs.filter(program => program.level.toLowerCase() === selectedLevel.toLowerCase());

  return (
    <div className="min-h-screen bg-afs-dark text-white flex flex-col">
      <Navbar />
      
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 reveal ${isVisible ? 'animated' : ''}`}>
            <span className="inline-block py-1 px-3 rounded-full text-xs uppercase tracking-wider mb-3 bg-afs-orange/20 text-afs-orange border border-afs-orange/10">
              Training Programs
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 afs-heading">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-afs-orange to-afs-red">
                Elevate
              </span>{" "}
              Your Game
            </h1>
            <p className="text-white/70 max-w-2xl mx-auto">
              Choose from our comprehensive selection of basketball training programs, 
              each designed to target specific skills and tailored for different experience levels.
            </p>
          </div>
          
          <Tabs defaultValue="all" className={`mb-12 reveal ${isVisible ? 'animated' : ''}`}>
            <div className="flex justify-center">
              <TabsList className="bg-white/5 border border-white/10">
                <TabsTrigger 
                  value="all" 
                  onClick={() => setSelectedLevel("all")}
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-afs-orange data-[state=active]:to-afs-red"
                >
                  All Programs
                </TabsTrigger>
                <TabsTrigger 
                  value="beginner" 
                  onClick={() => setSelectedLevel("beginner")}
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-afs-orange data-[state=active]:to-afs-red"
                >
                  Beginner
                </TabsTrigger>
                <TabsTrigger 
                  value="intermediate" 
                  onClick={() => setSelectedLevel("intermediate")}
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-afs-orange data-[state=active]:to-afs-red"
                >
                  Intermediate
                </TabsTrigger>
                <TabsTrigger 
                  value="advanced" 
                  onClick={() => setSelectedLevel("advanced")}
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-afs-orange data-[state=active]:to-afs-red"
                >
                  Advanced
                </TabsTrigger>
                <TabsTrigger 
                  value="expert" 
                  onClick={() => setSelectedLevel("expert")}
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-afs-orange data-[state=active]:to-afs-red"
                >
                  Expert
                </TabsTrigger>
              </TabsList>
            </div>
            
            {["all", "beginner", "intermediate", "advanced", "expert"].map((level) => (
              <TabsContent key={level} value={level} className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredPrograms.map((program) => (
                    <ProgramCard 
                      key={program.id}
                      title={program.title}
                      description={program.description}
                      level={program.level}
                      duration={program.duration}
                      image={program.image}
                    />
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>

          <div className={`mt-16 text-center reveal ${isVisible ? 'animated' : ''}`}>
            <div className="max-w-3xl mx-auto bg-white/5 border border-white/10 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">Not sure which program is right for you?</h3>
              <p className="text-white/70 mb-6">
                Our expert coaches can help assess your current skill level and recommend 
                the perfect training program to match your goals and abilities.
              </p>
              <button className="btn-primary">
                Schedule a Free Assessment
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Programs;
