import React, { useState, useRef } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Send, Check, AlertCircle, Loader, MessageSquare, Calendar, Phone, ArrowUpRight } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    loading: false,
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const formRef = useRef<HTMLFormElement>(null);
  const submitButtonRef = useRef<HTMLButtonElement>(null);

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validateForm = () => {
    const newErrors = {
      name: formData.name.trim() === '' ? 'Name is required' : '',
      email: formData.email.trim() === '' ? 'Email is required' : 
             !validateEmail(formData.email) ? 'Valid email is required' : '',
      subject: formData.subject.trim() === '' ? 'Subject is required' : '',
      message: formData.message.trim() === '' ? 'Message is required' : '',
    };
    
    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error !== '');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
    
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors({
        ...errors,
        [name]: '',
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!validateForm()) {
      // Find first error and focus that input
      const errorField = Object.keys(errors).find(key => errors[key as keyof typeof errors] !== '');
      if (errorField) {
        const element = document.getElementById(errorField);
        if (element) {
          element.focus();
        }
      }
      return;
    }
    
    setFormStatus({
      submitted: false,
      error: false,
      loading: true,
      message: '',
    });
    
    try {
      const response = await fetch("https://formspree.io/f/myzggjel", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setFormStatus({
          submitted: true,
          error: false,
          loading: false,
          message: 'Thank you for your message! I\'ll get back to you soon.',
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
        
        // Create a success confetti effect
        createConfetti();
        
        // Announce to screen readers
        const announcement = document.createElement('div');
        announcement.setAttribute('aria-live', 'assertive');
        announcement.className = 'screen-reader-text';
        announcement.textContent = 'Message sent successfully. Thank you for your message!';
        document.body.appendChild(announcement);
        setTimeout(() => announcement.remove(), 1000);
        
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      setFormStatus({
        submitted: true,
        error: true,
        loading: false,
        message: 'Oops! Something went wrong. Please try again later.',
      });
      
      // Announce to screen readers
      const announcement = document.createElement('div');
      announcement.setAttribute('aria-live', 'assertive');
      announcement.className = 'screen-reader-text';
      announcement.textContent = 'Error sending message. Please try again later.';
      document.body.appendChild(announcement);
      setTimeout(() => announcement.remove(), 1000);
    }
  };
  
  const createConfetti = () => {
    const confetti = document.createElement('div');
    confetti.className = 'confetti-container';
    confetti.style.position = 'absolute';
    confetti.style.top = '0';
    confetti.style.left = '0';
    confetti.style.width = '100%';
    confetti.style.height = '100%';
    confetti.style.overflow = 'hidden';
    confetti.style.pointerEvents = 'none';
    formRef.current?.appendChild(confetti);
    
    const colors = ['#3b82f6', '#60a5fa', '#93c5fd', '#818cf8', '#c084fc'];
    
    for (let i = 0; i < 100; i++) {
      const particle = document.createElement('div');
      particle.className = 'confetti-particle';
      particle.style.position = 'absolute';
      particle.style.width = `${Math.random() * 10 + 5}px`;
      particle.style.height = `${Math.random() * 10 + 5}px`;
      particle.style.background = colors[Math.floor(Math.random() * colors.length)];
      particle.style.borderRadius = '50%';
      particle.style.top = '50%';
      particle.style.left = '50%';
      particle.style.transform = `translate(-50%, -50%)`;
      particle.style.opacity = '0';
      
      confetti.appendChild(particle);
      
      // Animate each particle
      const angle = Math.random() * Math.PI * 2;
      const velocity = Math.random() * 100 + 50;
      const posX = Math.cos(angle) * velocity;
      const posY = Math.sin(angle) * velocity;
      
      // Using Web Animations API for better performance
      particle.animate([
        { transform: 'translate(-50%, -50%)', opacity: 1 },
        { transform: `translate(calc(-50% + ${posX}px), calc(-50% + ${posY}px))`, opacity: 0 }
      ], {
        duration: Math.random() * 1000 + 1000,
        easing: 'cubic-bezier(0.1, 0.8, 0.3, 1)',
        fill: 'forwards'
      });
    }
    
    // Remove confetti after animation completes
    setTimeout(() => {
      confetti.remove();
    }, 2500);
  };
  
  const handleTryAgain = () => {
    setFormStatus({
      submitted: false,
      error: false,
      loading: false,
      message: '',
    });
    
    // Focus first field after resetting
    setTimeout(() => {
      if (document.getElementById('name')) {
        (document.getElementById('name') as HTMLInputElement).focus();
      }
    }, 0);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-accent relative">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-blue-300 dark:bg-blue-700 mix-blend-multiply dark:mix-blend-soft-light transform translate-x-10"></div>
        <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-indigo-300 dark:bg-indigo-700 mix-blend-multiply dark:mix-blend-soft-light transform -translate-x-10 translate-y-10"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-purple-300 dark:bg-purple-700 mix-blend-multiply dark:mix-blend-soft-light transform translate-y-32"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 opacity-0 animate-fadeIn">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-gray-700 dark:text-gray-300 text-pretty">
            Have a project in mind or want to discuss potential collaborations? I'd love to hear from you! 
            Fill out the form below or connect through any of the provided channels.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Contact Information */}
          <div className="enhanced-card p-8 transform transition-all duration-500 hover:shadow-lg opacity-0 animate-fadeIn bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm" style={{animationDelay: '0.2s'}}>
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-6 flex items-center">
              <MessageSquare size={20} className="mr-2 text-blue-600 dark:text-blue-400" aria-hidden="true" />
              Contact Information
            </h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4">
                  <Mail className="text-blue-600 dark:text-blue-400" size={20} aria-hidden="true" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 dark:text-gray-200">Email</h4>
                  <div className="text-gray-700 dark:text-gray-300 flex items-center">
                    <span className="mr-2">Available via contact form</span>
                    <div 
                      className="text-blue-600 dark:text-blue-400 cursor-pointer"
                      onClick={() => {
                        document.getElementById('email')?.focus();
                      }}
                      onKeyDown={(e) => e.key === 'Enter' && document.getElementById('email')?.focus()}
                      tabIndex={0}
                      role="button"
                      aria-label="Focus email field"
                    >
                      <ArrowUpRight size={14} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4">
                  <Linkedin className="text-blue-600 dark:text-blue-400" size={20} aria-hidden="true" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 dark:text-gray-200">LinkedIn</h4>
                  <a 
                    href="https://www.linkedin.com/in/tobin-zolkowski-844873200/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 flex items-center focus:outline-none focus:ring-2 focus:ring-blue-200 focus:ring-offset-2 rounded"
                    aria-label="Connect with me on LinkedIn"
                  >
                    Connect with me <ExternalLink size={14} className="ml-1" aria-hidden="true" />
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4">
                  <Github className="text-blue-600 dark:text-blue-400" size={20} aria-hidden="true" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 dark:text-gray-200">GitHub</h4>
                  <a 
                    href="https://github.com/tzolkowski96" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 flex items-center focus:outline-none focus:ring-2 focus:ring-blue-200 focus:ring-offset-2 rounded"
                    aria-label="See my projects on GitHub"
                  >
                    See my projects <ExternalLink size={14} className="ml-1" aria-hidden="true" />
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4">
                  <Calendar className="text-blue-600 dark:text-blue-400" size={20} aria-hidden="true" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 dark:text-gray-200">Availability</h4>
                  <p className="text-gray-700 dark:text-gray-300">Flexible scheduling available</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4">
                  <Phone className="text-blue-600 dark:text-blue-400" size={20} aria-hidden="true" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 dark:text-gray-200">Phone</h4>
                  <p className="text-gray-700 dark:text-gray-300">Available upon request</p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4">Available For</h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-center bg-blue-50/80 dark:bg-blue-900/20 p-2 rounded-lg">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-2 flex-shrink-0"></div>
                  <span>Data analysis and visualization projects</span>
                </li>
                <li className="flex items-center bg-blue-50/80 dark:bg-blue-900/20 p-2 rounded-lg">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-2 flex-shrink-0"></div>
                  <span>Machine learning model implementation</span>
                </li>
                <li className="flex items-center bg-blue-50/80 dark:bg-blue-900/20 p-2 rounded-lg">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-2 flex-shrink-0"></div>
                  <span>SQL database design and optimization</span>
                </li>
                <li className="flex items-center bg-blue-50/80 dark:bg-blue-900/20 p-2 rounded-lg">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-2 flex-shrink-0"></div>
                  <span>Data pipeline development</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-2 enhanced-card p-8 transform transition-all duration-500 hover:shadow-lg opacity-0 animate-fadeIn bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm" style={{animationDelay: '0.4s'}} ref={formRef}>
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-6 flex items-center">
              <MessageSquare size={20} className="mr-2 text-blue-600 dark:text-blue-400" aria-hidden="true" />
              Send Me a Message
            </h3>
            
            {formStatus.submitted ? (
              <div className={`p-6 rounded-lg ${
                formStatus.error ? 'state-error' : 'state-success'
              } flex items-center transition-all duration-300`}>
                {formStatus.error ? 
                  <AlertCircle size={24} className="text-red-500 dark:text-red-400 mr-3 flex-shrink-0" aria-hidden="true" /> : 
                  <Check size={24} className="text-green-500 dark:text-green-400 mr-3 flex-shrink-0" aria-hidden="true" />
                }
                <div>
                  <p className="font-medium mb-2">{formStatus.message}</p>
                  {formStatus.error && (
                    <button 
                      onClick={handleTryAgain}
                      className="mt-3 px-4 py-2 bg-white dark:bg-gray-700 text-red-600 dark:text-red-400 border border-red-300 dark:border-red-700 rounded-md hover:bg-red-50 dark:hover:bg-red-900/10 transition-colors flex items-center"
                    >
                      Try Again
                    </button>
                  )}
                  {!formStatus.error && (
                    <button 
                      onClick={handleTryAgain}
                      className="mt-3 px-4 py-2 bg-white dark:bg-gray-700 text-green-600 dark:text-green-400 border border-green-300 dark:border-green-700 rounded-md hover:bg-green-50 dark:hover:bg-green-900/10 transition-colors flex items-center"
                    >
                      Send Another Message
                    </button>
                  )}
                </div>
              </div>
            ) : (
              <form 
                onSubmit={handleSubmit} 
                action="https://formspree.io/f/myzggjel" 
                method="POST" 
                className="space-y-6"
                noValidate
                aria-label="Contact form"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="form-label">
                      Your Name <span className="text-red-500" aria-hidden="true">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`form-input ${errors.name ? 'error' : ''}`}
                      aria-required="true"
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "name-error" : undefined}
                      placeholder="John Doe"
                      autoComplete="name"
                    />
                    {errors.name && (
                      <p id="name-error" className="form-error">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="email" className="form-label">
                      Email Address <span className="text-red-500" aria-hidden="true">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`form-input ${errors.email ? 'error' : ''}`}
                      aria-required="true"
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "email-error" : undefined}
                      placeholder="john.doe@example.com"
                      autoComplete="email"
                    />
                    {errors.email && (
                      <p id="email-error" className="form-error">{errors.email}</p>
                    )}
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="form-label">
                    Subject <span className="text-red-500" aria-hidden="true">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`form-input ${errors.subject ? 'error' : ''}`}
                    aria-required="true"
                    aria-invalid={!!errors.subject}
                    aria-describedby={errors.subject ? "subject-error" : undefined}
                    placeholder="Project Inquiry / Collaboration / Question"
                    autoComplete="off"
                  />
                  {errors.subject && (
                    <p id="subject-error" className="form-error">{errors.subject}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="message" className="form-label">
                    Message <span className="text-red-500" aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className={`form-input ${errors.message ? 'error' : ''}`}
                    aria-required="true"
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "message-error" : undefined}
                    placeholder="Tell me about your project, questions, or collaboration ideas..."
                  ></textarea>
                  {errors.message && (
                    <p id="message-error" className="form-error">{errors.message}</p>
                  )}
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    <span className="text-red-500" aria-hidden="true">*</span> Required fields
                  </p>
                  <button
                    type="submit"
                    disabled={formStatus.loading}
                    className={`px-6 py-3 ${formStatus.loading ? 'bg-blue-400 dark:bg-blue-600 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800'} text-white rounded-lg transition-all shadow-md hover:shadow-lg flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 relative overflow-hidden`}
                    aria-label={formStatus.loading ? 'Sending message...' : 'Send message'}
                    ref={submitButtonRef}
                  >
                    {formStatus.loading ? (
                      <>
                        <Loader size={20} className="animate-spin mr-2" aria-hidden="true" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send size={20} className="mr-2" aria-hidden="true" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
        
        {/* Alternative contact methods */}
        <div className="mt-16 max-w-3xl mx-auto text-center">
          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4">Other Ways to Connect</h3>
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <a 
              href="https://tzolkowski96.github.io/portfolio/" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full shadow-sm hover:shadow-md transition-all duration-300 flex items-center"
            >
              <span className="mr-2">Portfolio Website</span>
              <ExternalLink size={14} aria-hidden="true" />
            </a>
            <a 
              href="https://medium.com/@grateful_aqua_goat_147" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full shadow-sm hover:shadow-md transition-all duration-300 flex items-center"
            >
              <span className="mr-2">Medium Blog</span>
              <ExternalLink size={14} aria-hidden="true" />
            </a>
            <a 
              href="https://tobinzolkowski.substack.com/" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full shadow-sm hover:shadow-md transition-all duration-300 flex items-center"
            >
              <span className="mr-2">Substack Newsletter</span>
              <ExternalLink size={14} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;