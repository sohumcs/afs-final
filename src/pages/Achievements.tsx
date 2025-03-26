
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious 
} from "@/components/ui/pagination";
import { Medal, Trophy, Users, Award, Star } from "lucide-react";

const Achievements = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const achievementsPerPage = 6;
  
  const achievements = [
    {
      id: 1,
      year: 2023,
      title: "National Youth Championship",
      description: "Our U-16 team won the National Youth Championship with an undefeated season.",
      image: "/images/achievement-1.jpg",
      category: "Team Championship"
    },
    {
      id: 2,
      year: 2022,
      title: "Division 1 College Placements",
      description: "15 of our graduates received Division 1 college basketball scholarships this year.",
      image: "/images/achievement-2.jpg",
      category: "Player Development"
    },
    {
      id: 3,
      year: 2022,
      title: "Coach of the Year Award",
      description: "Head Coach Michael Thompson received the Regional Coach of the Year award.",
      image: "/images/achievement-3.jpg",
      category: "Coaching Excellence"
    },
    {
      id: 4,
      year: 2021,
      title: "State Tournament Finals",
      description: "Our U-18 team reached the State Tournament Finals, showcasing exceptional skill and teamwork.",
      image: "/images/achievement-4.jpg",
      category: "Team Achievement"
    },
    {
      id: 5,
      year: 2021,
      title: "NBA Draft Selection",
      description: "Former AFS Academy player Marcus Wilson was selected in the first round of the NBA Draft.",
      image: "/images/achievement-5.jpg",
      category: "Alumni Success"
    },
    {
      id: 6,
      year: 2020,
      title: "Summer League Champions",
      description: "Our elite team dominated the Regional Summer League, winning the championship title.",
      image: "/images/achievement-6.jpg",
      category: "Team Championship"
    },
    {
      id: 7,
      year: 2020,
      title: "All-Star Selections",
      description: "8 AFS Academy players were selected for the Regional All-Star Game.",
      image: "/images/achievement-7.jpg",
      category: "Player Recognition"
    },
    {
      id: 8,
      year: 2019,
      title: "International Tournament Bronze",
      description: "AFS Academy team took 3rd place in the International Youth Basketball Tournament.",
      image: "/images/achievement-8.jpg",
      category: "International Competition"
    },
    {
      id: 9,
      year: 2019,
      title: "Training Facility Expansion",
      description: "Opened our new state-of-the-art 25,000 sq ft training facility with 4 full courts.",
      image: "/images/achievement-9.jpg",
      category: "Academy Growth"
    },
    {
      id: 10,
      year: 2018,
      title: "Coaching Staff Recognition",
      description: "AFS Academy recognized as having the top youth coaching staff in the state.",
      image: "/images/achievement-10.jpg",
      category: "Coaching Excellence"
    },
    {
      id: 11,
      year: 2018,
      title: "Scholarship Program Launch",
      description: "Launched our scholarship program providing training opportunities to underprivileged youth.",
      image: "/images/achievement-11.jpg",
      category: "Community Impact"
    },
    {
      id: 12,
      year: 2017,
      title: "Academy Foundation",
      description: "AFS Academy was founded with a mission to develop elite basketball players through expert coaching.",
      image: "/images/achievement-12.jpg",
      category: "Milestone"
    }
  ];
  
  // Pagination logic
  const indexOfLastAchievement = currentPage * achievementsPerPage;
  const indexOfFirstAchievement = indexOfLastAchievement - achievementsPerPage;
  const currentAchievements = achievements.slice(indexOfFirstAchievement, indexOfLastAchievement);
  const totalPages = Math.ceil(achievements.length / achievementsPerPage);
  
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Team Championship":
        return <Trophy className="text-afs-orange" />;
      case "Player Development":
      case "Player Recognition":
        return <Users className="text-afs-orange" />;
      case "Coaching Excellence":
        return <Award className="text-afs-orange" />;
      case "Alumni Success":
      case "International Competition":
        return <Medal className="text-afs-orange" />;
      default:
        return <Star className="text-afs-orange" />;
    }
  };
  
  return (
    <div className="min-h-screen bg-afs-dark text-white flex flex-col">
      <Navbar />
      
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full text-xs uppercase tracking-wider mb-3 bg-afs-orange/20 text-afs-orange border border-afs-orange/10">
              Our Success
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 afs-heading">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-afs-orange to-afs-red">
                Academy
              </span>{" "}
              Achievements
            </h1>
            <p className="text-white/70 max-w-2xl mx-auto">
              A timeline of AFS Academy's milestones, championships, and player development successes 
              that demonstrate our commitment to basketball excellence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {currentAchievements.map((achievement) => (
              <div key={achievement.id} className="card-hover glass-card rounded-xl overflow-hidden">
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={achievement.image} 
                    alt={achievement.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  />
                  <div className="absolute top-3 left-3 py-1 px-3 rounded-full bg-afs-dark/80 backdrop-blur-sm text-white text-xs font-medium">
                    {achievement.year}
                  </div>
                  <div className="absolute top-3 right-3 p-2 rounded-full bg-afs-dark/80 backdrop-blur-sm">
                    {getCategoryIcon(achievement.category)}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold">{achievement.title}</h3>
                  </div>
                  <p className="text-white/70 mb-3">{achievement.description}</p>
                  <span className="text-xs py-1 px-2 rounded-full bg-white/10 text-white/80">
                    {achievement.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
          
          {/* Pagination */}
          <Pagination className="mt-12">
            <PaginationContent>
              {currentPage > 1 && (
                <PaginationItem>
                  <PaginationPrevious 
                    onClick={() => setCurrentPage(currentPage - 1)} 
                    className="cursor-pointer" 
                  />
                </PaginationItem>
              )}
              
              {Array.from({ length: totalPages }).map((_, index) => (
                <PaginationItem key={index}>
                  <PaginationLink
                    isActive={currentPage === index + 1}
                    onClick={() => setCurrentPage(index + 1)}
                    className="cursor-pointer"
                  >
                    {index + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}
              
              {currentPage < totalPages && (
                <PaginationItem>
                  <PaginationNext 
                    onClick={() => setCurrentPage(currentPage + 1)} 
                    className="cursor-pointer" 
                  />
                </PaginationItem>
              )}
            </PaginationContent>
          </Pagination>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Achievements;
