
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  MessageSquare, 
  Calendar 
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    
    // Show success toast
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    });
  };
  
  return (
    <div className="min-h-screen bg-afs-dark text-white flex flex-col">
      <Navbar />
      
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full text-xs uppercase tracking-wider mb-3 bg-afs-orange/20 text-afs-orange border border-afs-orange/10">
              Get In Touch
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 afs-heading">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-afs-orange to-afs-red">
                Contact
              </span>{" "}
              Us
            </h1>
            <p className="text-white/70 max-w-2xl mx-auto">
              Have questions about our programs or ready to start your basketball journey? 
              Our team is here to help you take the next step.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="glass-card rounded-xl p-8 order-2 lg:order-1">
              <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-white/70 mb-2">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-white/70 mb-2">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white"
                      placeholder="Your email"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="phone" className="block text-white/70 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white"
                      placeholder="Your phone"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-white/70 mb-2">Subject *</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white"
                      required
                    >
                      <option value="" disabled>Select a subject</option>
                      <option value="Program Inquiry">Program Inquiry</option>
                      <option value="Schedule Training">Schedule Training</option>
                      <option value="Facility Rental">Facility Rental</option>
                      <option value="Coaching Opportunity">Coaching Opportunity</option>
                      <option value="General Question">General Question</option>
                    </select>
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-white/70 mb-2">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white"
                    placeholder="How can we help you?"
                    required
                  ></textarea>
                </div>
                
                <button type="submit" className="btn-primary w-full md:w-auto">
                  <Send size={18} />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
            
            {/* Contact Information */}
            <div className="order-1 lg:order-2">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-afs-orange/20 p-3 rounded-lg mr-4">
                    <MapPin className="text-afs-orange" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Our Location</h3>
                    <p className="text-white/70">123 Basketball Avenue, Sports City, SC 10001</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-afs-orange/20 p-3 rounded-lg mr-4">
                    <Phone className="text-afs-orange" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Phone Number</h3>
                    <p className="text-white/70">(123) 456-7890</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-afs-orange/20 p-3 rounded-lg mr-4">
                    <Mail className="text-afs-orange" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Email Address</h3>
                    <p className="text-white/70">contact@afsacademy.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-afs-orange/20 p-3 rounded-lg mr-4">
                    <Clock className="text-afs-orange" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Working Hours</h3>
                    <p className="text-white/70">Monday - Friday: 6:00 AM - 9:00 PM</p>
                    <p className="text-white/70">Saturday - Sunday: 8:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <button className="flex items-center justify-center bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg p-4 transition-colors">
                    <MessageSquare size={20} className="mr-2 text-afs-orange" />
                    <span>Live Chat</span>
                  </button>
                  
                  <button className="flex items-center justify-center bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg p-4 transition-colors">
                    <Calendar size={20} className="mr-2 text-afs-orange" />
                    <span>Book Appointment</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Map */}
          <div className="mt-16 rounded-xl overflow-hidden h-[400px]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215252779276!2d-73.98823492396909!3d40.757978834641066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855a96da09d%3A0x86cbc1af16d327b9!2sMadison%20Square%20Garden!5e0!3m2!1sen!2sus!4v1695926195717!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="AFS Academy Location"
            ></iframe>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Contact;
