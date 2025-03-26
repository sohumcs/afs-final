
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-afs-dark text-white flex flex-col">
      <Navbar />
      
      <div className="flex-grow flex items-center justify-center py-20">
        <div className="container mx-auto px-4 text-center">
          <span className="inline-block py-1 px-3 rounded-full text-xs uppercase tracking-wider mb-6 bg-afs-orange/20 text-afs-orange border border-afs-orange/10">
            Error 404
          </span>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 afs-heading">
            <span>Page Not Found</span>
          </h1>
          
          <p className="text-white/80 text-xl max-w-2xl mx-auto mb-8">
            The page you're looking for doesn't exist or has been moved. 
            Let's get you back on the court!
          </p>
          
          <Link to="/" className="btn-primary inline-block">
            Return to Homepage
          </Link>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;
