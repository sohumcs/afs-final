
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Trophy, Award, Star, Users } from "lucide-react";

const Coaches = () => {
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

  const coaches = [
    {
      id: 1,
      name: "Michael Thompson",
      role: "Head Coach",
      bio: "Former NBA player with 15 years of coaching experience. Specializes in offensive strategy and shooting techniques.",
      experience: "15+ years",
      specialties: ["Offensive Strategy", "Shooting Techniques", "Team Building"],
      image: "/images/coach-michael.jpg",
      achievements: ["NBA Champion (2003)", "NCAA Coach of the Year (2010)"]
    },
    {
      id: 2,
      name: "Sarah Wilson",
      role: "Skills Development Coach",
      bio: "Former WNBA star with expertise in fundamentals and skills training. Known for transforming average players into exceptional athletes.",
      experience: "12 years",
      specialties: ["Player Development", "Guard Skills", "Agility Training"],
      image: "/images/coach-sarah.jpg",
      achievements: ["WNBA All-Star (2006-2009)", "Olympic Gold Medalist"]
    },
    {
      id: 3,
      name: "David Chen",
      role: "Youth Development Coach",
      bio: "Specialized in youth basketball with a focus on proper technique and fundamental skill building in a fun, engaging environment.",
      experience: "8 years",
      specialties: ["Youth Fundamentals", "Basketball IQ", "Team Dynamics"],
      image: "/images/coach-david.jpg",
      achievements: ["Youth Coach of the Year (2019)", "State Championship Coach (2018)"]
    },
    {
      id: 4,
      name: "Marcus Johnson",
      role: "Strength & Conditioning",
      bio: "Certified strength coach with background in sports science. Creates custom training programs to enhance athletic performance.",
      experience: "10 years",
      specialties: ["Strength Training", "Injury Prevention", "Athletic Performance"],
      image: "/images/coach-marcus.jpg",
      achievements: ["Certified Strength & Conditioning Specialist", "Master's in Sports Science"]
    }
  ];

  return (
    <div className="min-h-screen bg-afs-dark text-white flex flex-col">
      <Navbar />
      
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 reveal ${isVisible ? 'animated' : ''}`}>
            <span className="inline-block py-1 px-3 rounded-full text-xs uppercase tracking-wider mb-3 bg-afs-orange/20 text-afs-orange border border-afs-orange/10">
              Our Team
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 afs-heading">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-afs-orange to-afs-red">
                Expert
              </span>{" "}
              Coaches
            </h1>
            <p className="text-white/70 max-w-2xl mx-auto">
              Our coaching staff brings professional experience, passion, and proven methods
              to help every player reach their full potential.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
            {coaches.map((coach) => (
              <HoverCard key={coach.id} openDelay={100} closeDelay={100}>
                <HoverCardTrigger asChild>
                  <div className={`card-hover glass-card overflow-hidden rounded-xl animate-fade-in relative cursor-pointer reveal ${isVisible ? 'animated' : ''}`}>
                    <div className="aspect-[3/4] relative overflow-hidden">
                      <img
                        src={coach.image}
                        alt={coach.name}
                        className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-afs-dark/90 via-transparent to-transparent"></div>
                      <div className="absolute bottom-0 left-0 p-6">
                        <h3 className="text-2xl font-bold">{coach.name}</h3>
                        <p className="text-afs-orange">{coach.role}</p>
                      </div>
                    </div>
                  </div>
                </HoverCardTrigger>
                
                <HoverCardContent className="w-96 glass-card border border-white/10 text-white animate-fade-in p-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{coach.name}</h3>
                    <p className="text-afs-orange mb-4">{coach.role}</p>
                    <p className="text-white/80 mb-6">{coach.bio}</p>
                    
                    <div className="flex items-center mb-3">
                      <Trophy size={18} className="text-afs-orange mr-2" />
                      <span className="text-white/80">Experience: {coach.experience}</span>
                    </div>
                    
                    <h4 className="text-lg font-bold mb-2">Specialties:</h4>
                    <ul className="space-y-1 mb-6">
                      {coach.specialties.map((specialty, index) => (
                        <li key={index} className="flex items-start">
                          <Star size={16} className="text-afs-orange mr-2 mt-1 flex-shrink-0" />
                          <span className="text-white/80">{specialty}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <h4 className="text-lg font-bold mb-2">Achievements:</h4>
                    <ul className="space-y-1">
                      {coach.achievements.map((achievement, index) => (
                        <li key={index} className="flex items-start">
                          <Award size={16} className="text-afs-orange mr-2 mt-1 flex-shrink-0" />
                          <span className="text-white/80">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <button className="btn-primary mt-6 w-full">
                    <Users size={18} />
                    <span>Schedule Training</span>
                  </button>
                </HoverCardContent>
              </HoverCard>
            ))}
          </div>
          
          <div className={`max-w-3xl mx-auto text-center reveal ${isVisible ? 'animated' : ''}`}>
            <div className="bg-white/5 border border-white/10 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">Join Our Coaching Team</h3>
              <p className="text-white/70 mb-6">
                AFS Academy is always looking for experienced coaches with a passion for 
                developing young basketball talent. If you have a background in basketball 
                and a desire to help players improve, we'd love to hear from you.
              </p>
              <button className="btn-primary">
                Apply to Coach
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Coaches;
