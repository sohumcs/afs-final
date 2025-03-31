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
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-orange-500"
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
                    <p className="text-white/70">1st Floor Terrace Area Sky Line Plaza-1, Sushant Golf City, Behind Lulu Mall (Gate-5), Lucknow</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-afs-orange/20 p-3 rounded-lg mr-4">
                    <Phone className="text-afs-orange" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Phone Number</h3>
                    <p className="text-white/70">7275546210</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-afs-orange/20 p-3 rounded-lg mr-4">
                    <Mail className="text-afs-orange" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Email Address</h3>
                    <p className="text-white/70">afstrainingacademy@gmail.com</p>
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
            </div>
          </div>
          
          {/* Map - Updated to Lucknow, India with wider view and adjusted zoom */}
          <div className="mt-16 rounded-xl overflow-hidden h-[500px] w-full">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28464.9771274079!2d80.90972843476561!3d26.846687500000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd991f32b16b%3A0x93ccba8909978be7!2sLucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1711890000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="AFS Academy Location - Lucknow"
            ></iframe>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Contact;