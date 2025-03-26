
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

interface CoachCardProps {
  name: string;
  title: string;
  bio: string;
  image: string;
  achievements: string[];
}

const CoachCard = ({ name, title, bio, image, achievements }: CoachCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="h-[500px] perspective-1000"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
        {/* Front of Card */}
        <div className="absolute w-full h-full backface-hidden">
          <div className="glass-card h-full rounded-xl overflow-hidden group">
            <div className="h-3/4 overflow-hidden">
              <img 
                src={image} 
                alt={name} 
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105" 
              />
            </div>
            <div className="p-6 text-white">
              <h3 className="text-xl font-bold mb-1">{name}</h3>
              <p className="text-white/70">{title}</p>
            </div>
          </div>
        </div>
        
        {/* Back of Card */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180">
          <div className="glass-card h-full rounded-xl p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-white mb-3">{name}</h3>
              <p className="text-white/80 mb-4 text-sm">{bio}</p>
              
              <h4 className="text-white text-sm font-semibold mb-2">Achievements:</h4>
              <ul className="text-white/70 text-sm space-y-1 mb-4">
                {achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-afs-orange mr-2">•</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <button className="flex items-center text-afs-orange hover:text-white transition-colors group/btn self-end">
              <span>Full Profile</span>
              <ArrowRight size={18} className="ml-2 transition-transform duration-300 group-hover/btn:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoachCard;
