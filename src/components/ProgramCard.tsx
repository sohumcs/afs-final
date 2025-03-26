
import { ArrowRight } from 'lucide-react';

interface ProgramCardProps {
  title: string;
  description: string;
  level: string;
  duration: string;
  image: string;
}

const ProgramCard = ({ title, description, level, duration, image }: ProgramCardProps) => {
  return (
    <div className="card-hover glass-card overflow-hidden rounded-xl relative group">
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

export default ProgramCard;
