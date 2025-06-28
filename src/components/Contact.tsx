import React, { useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Send, Check, AlertCircle, Loader, MessageSquare, Calendar, Phone } from 'lucide-react';

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
        
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
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
    }
  };
  
  const handleTryAgain = () => {
    setFormStatus({
      submitted: false,
      error: false,
      loading: false,
      message: '',
    });
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-black relative">
      {/* Communication network pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 200 200" className="text-gray-400">
          <defs>
            <pattern id="network-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1" fill="currentColor" />
              <path d="M20,20 L30,10 M20,20 L10,30 M20,20 L30,30" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#network-pattern)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Let's Connect</h2>
            <div className="section-divider"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Ready to discuss data opportunities? Whether you have a project in mind, want to explore collaborations, 
              or simply connect with a fellow data enthusiast, I'd love to hear from you.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Information with data professional focus */}
            <div className="lg:col-span-1">
              <div className="minimal-card data-pattern-bg">
                <div className="flex items-center mb-6">
                  <div className="p-3 border border-gray-200 dark:border-gray-800 rounded-lg mr-4">
                    <MessageSquare size={24} className="text-gray-600 dark:text-gray-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Contact Information</h3>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg mr-3">
                      <Mail size={16} className="text-gray-600 dark:text-gray-400" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white mb-1">Email</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">Available via contact form</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg mr-3">
                      <Linkedin size={16} className="text-gray-600 dark:text-gray-400" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white mb-1">LinkedIn</h4>
                      <a 
                        href="https://www.linkedin.com/in/tobin-zolkowski-844873200/" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white flex items-center transition-colors interactive-element text-sm ds-accent"
                      >
                        Professional Network <ExternalLink size={12} className="ml-1" aria-hidden="true" />
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg mr-3">
                      <Github size={16} className="text-gray-600 dark:text-gray-400" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white mb-1">GitHub</h4>
                      <a 
                        href="https://github.com/tzolkowski96" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white flex items-center transition-colors interactive-element text-sm ds-accent"
                      >
                        Code Portfolio <ExternalLink size={12} className="ml-1" aria-hidden="true" />
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg mr-3">
                      <Calendar size={16} className="text-gray-600 dark:text-gray-400" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white mb-1">Availability</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">Open to new opportunities</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg mr-3">
                      <Phone size={16} className="text-gray-600 dark:text-gray-400" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white mb-1">Phone</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">Available upon request</p>
                    </div>
                  </div>
                </div>

                {/* Data services offered */}
                <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-800">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-4">Data Services Available:</h4>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-gray-900 dark:bg-white rounded-full mr-2"></div>
                      Data analysis and visualization projects
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-gray-900 dark:bg-white rounded-full mr-2"></div>
                      Machine learning model development
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-gray-900 dark:bg-white rounded-full mr-2"></div>
                      SQL database design and optimization
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-gray-900 dark:bg-white rounded-full mr-2"></div>
                      ETL pipeline development
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-gray-900 dark:bg-white rounded-full mr-2"></div>
                      Business intelligence consulting
                    </li>
                  </ul>
                </div>

                {/* Social links */}
                <div className="flex justify-center space-x-4 mt-8 pt-6 border-t border-gray-200 dark:border-gray-800">
                  <a 
                    href="https://github.com/tzolkowski96" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors interactive-element border border-gray-200 dark:border-gray-800 rounded-lg"
                    aria-label="GitHub profile"
                  >
                    <Github size={20} aria-hidden="true" />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/tobin-zolkowski-844873200/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors interactive-element border border-gray-200 dark:border-gray-800 rounded-lg"
                    aria-label="LinkedIn profile"
                  >
                    <Linkedin size={20} aria-hidden="true" />
                  </a>
                  <a 
                    href="#contact" 
                    className="p-3 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors interactive-element border border-gray-200 dark:border-gray-800 rounded-lg"
                    aria-label="Contact"
                  >
                    <Mail size={20} aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>

            {/* Enhanced Contact Form */}
            <div className="lg:col-span-2">
              <div className="minimal-card data-pattern-bg">
                <div className="flex items-center mb-6">
                  <div className="p-3 border border-gray-200 dark:border-gray-800 rounded-lg mr-4">
                    <Send size={24} className="text-gray-600 dark:text-gray-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Send Me a Message</h3>
                </div>
                
                {formStatus.submitted ? (
                  <div className={`p-6 rounded-lg border ${
                    formStatus.error 
                      ? 'bg-red-50 border-red-200 dark:bg-red-900/20 dark:border-red-800' 
                      : 'bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-800'
                  } flex items-center`}>
                    {formStatus.error ? 
                      <AlertCircle size={20} className="text-red-600 dark:text-red-400 mr-3 flex-shrink-0" aria-hidden="true" /> : 
                      <Check size={20} className="text-green-600 dark:text-green-400 mr-3 flex-shrink-0" aria-hidden="true" />
                    }
                    <div className="flex-1">
                      <p className={`font-medium ${formStatus.error ? 'text-red-800 dark:text-red-200' : 'text-green-800 dark:text-green-200'}`}>
                        {formStatus.message}
                      </p>
                      <button 
                        onClick={handleTryAgain}
                        className="mt-2 text-sm underline hover:no-underline transition-all interactive-element"
                      >
                        {formStatus.error ? 'Try Again' : 'Send Another Message'}
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="form-label">Name *</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className={`form-input ${errors.name ? 'error' : ''}`}
                          placeholder="Your name"
                        />
                        {errors.name && <p className="form-error">{errors.name}</p>}
                      </div>
                      <div>
                        <label htmlFor="email" className="form-label">Email *</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`form-input ${errors.email ? 'error' : ''}`}
                          placeholder="your.email@example.com"
                        />
                        {errors.email && <p className="form-error">{errors.email}</p>}
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="form-label">Subject *</label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className={`form-input ${errors.subject ? 'error' : ''}`}
                        placeholder="Data Project Inquiry / Collaboration / Question"
                      />
                      {errors.subject && <p className="form-error">{errors.subject}</p>}
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="form-label">Message *</label>
                      <textarea
                        id="message"
                        name="message"
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        className={`form-input ${errors.message ? 'error' : ''}`}
                        placeholder="Tell me about your data project, questions, or collaboration ideas..."
                      ></textarea>
                      {errors.message && <p className="form-error">{errors.message}</p>}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-gray-500 dark:text-gray-500">* Required fields</p>
                      <button
                        type="submit"
                        disabled={formStatus.loading}
                        className={`btn-primary interactive-element flex items-center ${formStatus.loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                      >
                        {formStatus.loading ? (
                          <>
                            <Loader size={18} className="animate-spin mr-2" aria-hidden="true" />
                            <span>Sending...</span>
                          </>
                        ) : (
                          <>
                            <Send size={18} className="mr-2" aria-hidden="true" />
                            <span>Send Message</span>
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
          
          {/* Additional connection methods */}
          <div className="text-center mt-16">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Other Ways to Connect</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="https://tzolkowski96.github.io/portfolio/" 
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 border border-gray-300 dark:border-gray-700 rounded text-sm hover:border-gray-900 dark:hover:border-white transition-colors flex items-center interactive-element"
              >
                Portfolio Website
                <ExternalLink size={14} className="ml-1" aria-hidden="true" />
              </a>
              <a 
                href="https://medium.com/@grateful_aqua_goat_147" 
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 border border-gray-300 dark:border-gray-700 rounded text-sm hover:border-gray-900 dark:hover:border-white transition-colors flex items-center interactive-element"
              >
                Data Blog
                <ExternalLink size={14} className="ml-1" aria-hidden="true" />
              </a>
              <a 
                href="https://tobinzolkowski.substack.com/" 
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 border border-gray-300 dark:border-gray-700 rounded text-sm hover:border-gray-900 dark:hover:border-white transition-colors flex items-center interactive-element"
              >
                Newsletter
                <ExternalLink size={14} className="ml-1" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;