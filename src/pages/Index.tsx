
import { useEffect } from "react";
import VideoHero from "../components/VideoHero";
import ProgramCard from "../components/ProgramCard";
import CoachCard from "../components/CoachCard";
import TestimonialSlider from "../components/TestimonialSlider";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ArrowRight } from "lucide-react";

const Index = () => {
  // Stats data
  const stats = [
    { value: "2,500+", label: "Players Trained" },
    { value: "18", label: "Professional Coaches" },
    { value: "95%", label: "Success Rate" },
    { value: "12", label: "Years Experience" },
  ];

  // Program data
  const programs = [
    {
      title: "Elite Training Program",
      description: "Advanced skills development for serious players looking to take their game to the professional level.",
      level: "Advanced",
      duration: "12 Weeks",
      image: "/images/program-1.jpg"
    },
    {
      title: "Youth Development",
      description: "Foundational basketball skills and fundamentals for young players just starting their basketball journey.",
      level: "Beginner",
      duration: "8 Weeks",
      image: "/images/program-2.jpg"
    },
    {
      title: "College Preparation",
      description: "Specialized training to help high school players prepare for college basketball tryouts and scholarships.",
      level: "Intermediate",
      duration: "16 Weeks",
      image: "/images/program-3.jpg"
    }
  ];

  // Coach data
  const coaches = [
    {
      name: "Marcus Johnson",
      title: "Head Coach",
      bio: "Former NBA player with 12 years of coaching experience. Specializes in offensive strategy and shooting mechanics.",
      image: "/images/coach-1.jpg",
      achievements: [
        "NBA Champion (2010)",
        "3x NCAA Championship Coach",
        "Coach of the Year (2018)",
        "Developed 14 NBA players"
      ]
    },
    {
      name: "Alicia Williams",
      title: "Skills Development Coach",
      bio: "Former WNBA All-Star with expertise in player development and ball handling techniques.",
      image: "/images/coach-2.jpg",
      achievements: [
        "5x WNBA All-Star",
        "Olympic Gold Medalist",
        "Top Skills Trainer Award",
        "Basketball Skills Academy Founder"
      ]
    },
    {
      name: "David Chen",
      title: "Performance Coach",
      bio: "Certified strength and conditioning specialist who focuses on basketball-specific athletic development.",
      image: "/images/coach-3.jpg",
      achievements: [
        "Master's in Sports Science",
        "Trained 30+ professional athletes",
        "Published author on athletic performance",
        "Developed revolutionary training program"
      ]
    }
  ];

  // Smooth reveal animations on scroll
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach((el) => {
      el.classList.add('opacity-0');
      observer.observe(el);
    });

    return () => {
      document.querySelectorAll('.reveal').forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-afs-dark text-white overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <VideoHero />
      
      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-b from-afs-dark to-afs-darkgray">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
            {stats.map((stat, index) => (
              <div key={index} className="text-center reveal" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="text-3xl md:text-5xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-afs-orange to-afs-red">{stat.value}</div>
                <div className="text-white/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section className="py-20 bg-afs-darkgray">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <span className="inline-block py-1 px-3 rounded-full text-xs uppercase tracking-wider mb-3 bg-afs-orange/20 text-afs-orange border border-afs-orange/10">About AFS Academy</span>
              <h2 className="afs-heading text-white mb-6">
                <span>Elevate Your Game</span> To New Heights
              </h2>
              <p className="text-white/80 mb-6">
                AFS Academy was founded by former professional players with a mission to develop elite basketball talent through personalized training and expert coaching. Our unique approach combines cutting-edge techniques with proven fundamentals.
              </p>
              <p className="text-white/80 mb-8">
                We focus on developing the complete player - from technical skills and basketball IQ to mental strength and physical conditioning. Our proven track record includes helping players reach collegiate and professional levels.
              </p>
              <button className="btn-primary">
                Learn More About Us
              </button>
            </div>
            
            <div className="relative reveal">
              <div className="aspect-[4/3] rounded-xl overflow-hidden glass-card">
                <img 
                  src="/images/about-academy.jpg" 
                  alt="AFS Academy Training" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 hero-gradient rounded-lg border border-white/20 flex items-center justify-center p-4 shadow-xl">
                <div className="text-center">
                  <div className="text-2xl font-bold">100%</div>
                  <div className="text-xs">Commitment to Excellence</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Programs Section */}
      <section className="py-20 bg-afs-dark">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12 reveal">
            <span className="inline-block py-1 px-3 rounded-full text-xs uppercase tracking-wider mb-3 bg-afs-orange/20 text-afs-orange border border-afs-orange/10">Our Programs</span>
            <h2 className="afs-heading text-white mb-6">
              <span>Training Programs</span> Designed For Success
            </h2>
            <p className="text-white/80">
              Choose from our specialized basketball training programs, each tailored to specific skill levels and goals. From beginners to elite players, we have the perfect program for your development.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {programs.map((program, index) => (
              <div key={index} className="reveal" style={{ animationDelay: `${index * 100}ms` }}>
                <ProgramCard {...program} />
              </div>
            ))}
          </div>
          
          <div className="text-center reveal">
            <button className="btn-secondary inline-flex items-center">
              <span>View All Programs</span>
              <ArrowRight size={18} className="ml-2" />
            </button>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="relative py-24 bg-afs-darkgray overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/cta-bg.jpg" 
            alt="Basketball court" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-afs-dark to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="reveal">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-afs-orange to-afs-red">dominate</span> the court?
              </h2>
              <p className="text-xl text-white/80 mb-8">
                Join AFS Academy today and start your journey to basketball excellence. Limited spots available for our elite training programs.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="btn-primary">
                  Enroll Now
                </button>
                <button className="btn-secondary">
                  Schedule Tour
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Coaches Section */}
      <section className="py-20 bg-afs-dark">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12 reveal">
            <span className="inline-block py-1 px-3 rounded-full text-xs uppercase tracking-wider mb-3 bg-afs-orange/20 text-afs-orange border border-afs-orange/10">Our Team</span>
            <h2 className="afs-heading text-white mb-6">
              <span>Expert Coaches</span> Leading The Way
            </h2>
            <p className="text-white/80">
              Our coaching staff consists of former professional players and certified trainers with years of experience developing basketball talent at all levels.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {coaches.map((coach, index) => (
              <div key={index} className="reveal" style={{ animationDelay: `${index * 100}ms` }}>
                <CoachCard {...coach} />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-b from-afs-darkgray to-afs-dark">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12 reveal">
            <span className="inline-block py-1 px-3 rounded-full text-xs uppercase tracking-wider mb-3 bg-afs-orange/20 text-afs-orange border border-afs-orange/10">Testimonials</span>
            <h2 className="afs-heading text-white mb-6">
              <span>Success Stories</span> From Our Players
            </h2>
            <p className="text-white/80">
              Hear what our players have to say about their experience training with AFS Academy and how it transformed their basketball careers.
            </p>
          </div>
          
          <div className="reveal">
            <TestimonialSlider />
          </div>
        </div>
      </section>
      
      {/* Contact Form */}
      <section className="py-20 bg-afs-darkgray">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="reveal">
              <span className="inline-block py-1 px-3 rounded-full text-xs uppercase tracking-wider mb-3 bg-afs-orange/20 text-afs-orange border border-afs-orange/10">Get In Touch</span>
              <h2 className="afs-heading text-white mb-6">
                <span>Questions?</span> Contact Us
              </h2>
              <p className="text-white/80 mb-8">
                Have questions about our programs or want to schedule a visit? Fill out the form and one of our team members will get back to you within 24 hours.
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-afs-orange/20 flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-5 h-5 text-afs-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-1">Location</h5>
                    <p className="text-white/70 text-sm">123 Basketball Avenue, Sports City, SC 10001</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-afs-orange/20 flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-5 h-5 text-afs-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-1">Email</h5>
                    <p className="text-white/70 text-sm">contact@afsacademy.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-afs-orange/20 flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-5 h-5 text-afs-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-1">Phone</h5>
                    <p className="text-white/70 text-sm">(123) 456-7890</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="reveal">
              <div className="glass-card rounded-xl p-6 md:p-8">
                <form className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-white/80 text-sm mb-2">Full Name</label>
                      <input 
                        type="text" 
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-afs-orange/50 text-white"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-white/80 text-sm mb-2">Email Address</label>
                      <input 
                        type="email" 
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-afs-orange/50 text-white"
                        placeholder="Your email"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-white/80 text-sm mb-2">Subject</label>
                    <input 
                      type="text" 
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-afs-orange/50 text-white"
                      placeholder="How can we help you?"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-white/80 text-sm mb-2">Message</label>
                    <textarea 
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-afs-orange/50 text-white h-32"
                      placeholder="Tell us more about your inquiry"
                    ></textarea>
                  </div>
                  
                  <button type="submit" className="btn-primary w-full">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
