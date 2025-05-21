import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

type FormData = {
  name: string;
  email: string;
  message: string;
};

const Contact = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();
  const [submitting, setSubmitting] = useState(false);
  const { toast } = useToast();

  const contactInfo = [
    { 
      title: "Email", 
      value: "yashrajsalunkhe6@gmail.com", 
      link: "mailto:yashrajsalunkhe6@gmail.com", 
      icon: "fas fa-envelope" 
    },
    { 
      title: "Phone", 
      value: "+91 70200 70701", 
      link: "tel:+917020070701", 
      icon: "fas fa-phone" 
    },
    { 
      title: "LinkedIn", 
      value: "linkedin.com/in/yashraj-salunkhe", 
      link: "https://linkedin.com/in/yashraj-salunkhe", 
      icon: "fab fa-linkedin" 
    },
    { 
      title: "GitHub", 
      value: "github.com/Yashrajsalunkhe", 
      link: "https://github.com/Yashrajsalunkhe", 
      icon: "fab fa-github" 
    }
  ];

  const services = [
    "Full-Stack Development",
    "AI/ML Projects",
    "IoT Solutions",
    "Technical Consulting"
  ];

  const onSubmit = async (data: FormData) => {
    setSubmitting(true);
    try {
      await apiRequest("POST", "/api/contact", data);
      toast({
        title: "Message sent successfully!",
        description: "Thanks for contacting me. I'll get back to you soon.",
        variant: "default",
      });
      reset();
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "Please try again later or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-dark bg-pattern">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In <span className="text-gradient">Touch</span></h2>
          <p className="text-gray-300 max-w-2xl mx-auto">Have a project in mind or want to discuss a collaboration? I'd love to hear from you!</p>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded mx-auto mt-4"></div>
        </motion.div>
        
        <div className="flex flex-col md:flex-row gap-10">
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form 
              className="glass-card rounded-xl p-8 shadow-xl"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="mb-6">
                <label htmlFor="name" className="block text-white mb-2">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full bg-dark-lighter text-white rounded-lg p-3 border border-gray-700 focus:border-primary focus:ring focus:ring-primary/30 focus:outline-none transition-all duration-300" 
                  placeholder="John Doe" 
                  {...register("name", { required: "Name is required" })}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                )}
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block text-white mb-2">Your Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full bg-dark-lighter text-white rounded-lg p-3 border border-gray-700 focus:border-primary focus:ring focus:ring-primary/30 focus:outline-none transition-all duration-300" 
                  placeholder="john@example.com" 
                  {...register("email", { 
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address"
                    }
                  })}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-white mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows={5} 
                  className="w-full bg-dark-lighter text-white rounded-lg p-3 border border-gray-700 focus:border-primary focus:ring focus:ring-primary/30 focus:outline-none transition-all duration-300" 
                  placeholder="Your message here..." 
                  {...register("message", { required: "Message is required" })}
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                )}
              </div>
              
              <motion.button 
                type="submit" 
                className="w-full bg-gradient-to-r from-primary to-secondary text-white font-semibold py-3 px-6 rounded-lg hover:opacity-90 transition-all duration-300 shadow-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={submitting}
              >
                {submitting ? (
                  <span className="flex items-center justify-center">
                    <i className="fas fa-spinner fa-spin mr-2"></i> Sending...
                  </span>
                ) : (
                  "Send Message"
                )}
              </motion.button>
            </form>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="glass-card rounded-xl p-8 h-full">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mr-4 flex-shrink-0">
                      <i className={`${info.icon} text-primary`}></i>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-1">{info.title}</h4>
                      <a 
                        href={info.link} 
                        className="text-accent hover:text-white transition-colors duration-300"
                        target={info.title === "LinkedIn" || info.title === "GitHub" ? "_blank" : undefined}
                        rel={info.title === "LinkedIn" || info.title === "GitHub" ? "noopener noreferrer" : undefined}
                      >
                        {info.value}
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <motion.div 
                className="mt-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <h4 className="text-lg font-semibold mb-4">I'm available for:</h4>
                <div className="flex flex-wrap gap-3">
                  {services.map((service, index) => (
                    <motion.span 
                      key={index}
                      className="inline-block bg-dark-lighter rounded-full px-4 py-2 text-sm"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + (index * 0.1), duration: 0.4 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {service}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
