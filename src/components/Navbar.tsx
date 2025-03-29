
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, CircleDot, Moon, Sun } from "lucide-react";
import { Toggle } from "@/components/ui/toggle";
import { useTheme } from "@/hooks/useTheme";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Programs", path: "/programs" },
    { name: "Coaches", path: "/coaches" },
    { name: "Achievements", path: "/achievements" },
    { name: "Contact", path: "/contact" },
  ];

  const BasketballToggle = () => (
    <div 
      className="cursor-pointer relative flex items-center" 
      onClick={toggleTheme}
      role="button"
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <Sun className="text-afs-dark h-6 w-6" />
      ) : (
        <div className="relative">
          <CircleDot className="text-afs-orange h-6 w-6 animate-ball-bounce" />
        </div>
      )}
    </div>
  );

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-afs-dark/90 backdrop-blur-md py-2 shadow-lg dark:bg-black/80"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link
            to="/"
            className="flex items-center"
          >
            <CircleDot className="text-afs-orange mr-2 animate-ball-bounce" size={28} />
            <span className="text-white text-2xl font-russo tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-afs-orange to-afs-red">AFS</span> Academy
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-white hover:text-afs-orange transition-colors nav-link-hover font-montserrat font-semibold"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            {/* Theme Toggle */}
            <BasketballToggle />
            <Link to="/login" className="btn-primary">
              Login
            </Link>
          </div>

          {/* Mobile Navigation Toggle */}
          <button
            className="md:hidden text-white"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden fixed left-0 right-0 top-[56px] p-4 mt-2 bg-afs-dark/95 backdrop-blur-lg shadow-lg transition-transform duration-300 ease-in-out dark:bg-black/90 ${
            isOpen ? "translate-y-0 opacity-100" : "translate-y-[-100%] opacity-0 pointer-events-none"
          }`}
        >
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-white hover:text-afs-orange py-2 border-b border-white/10 font-montserrat font-semibold"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex items-center justify-between py-2 border-b border-white/10">
              <span className="text-white font-montserrat font-semibold">Theme</span>
              <BasketballToggle />
            </div>
            <Link
              to="/login"
              className="btn-primary text-center"
              onClick={() => setIsOpen(false)}
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
