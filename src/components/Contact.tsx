import React, { useState } from 'react';
import { Github, Linkedin, ExternalLink, Send, Check, AlertCircle, Loader } from 'lucide-react';

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
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validateForm = () => {
    const newErrors = {
      name: formData.name.trim() === '' ? 'Required' : '',
      email: formData.email.trim() === '' ? 'Required' : 
             !validateEmail(formData.email) ? 'Invalid email' : '',
      subject: formData.subject.trim() === '' ? 'Required' : '',
      message: formData.message.trim() === '' ? 'Required' : '',
    };
    
    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error !== '');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (errors[name as keyof typeof errors]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setFormStatus({ submitted: false, error: false, loading: true, message: '' });
    
    try {
      const response = await fetch("https://formspree.io/f/myzggjel", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setFormStatus({
          submitted: true,
          error: false,
          loading: false,
          message: 'Message sent successfully. I\'ll get back to you soon.',
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Failed');
      }
    } catch (error) {
      setFormStatus({
        submitted: true,
        error: true,
        loading: false,
        message: 'Something went wrong. Please try again.',
      });
    }
  };
  
  const resetForm = () => {
    setFormStatus({ submitted: false, error: false, loading: false, message: '' });
  };

  return (
    <section className="section-dark section-padding">
      <div className="container-medium">
        
        {/* Large Section Header */}
        <div className="section-header">
          <h2 className="display-3">Let's Connect</h2>
          <p className="body-large">
            <strong>Ready to discuss opportunities?</strong> Whether you have a specific project in mind 
            or want to explore potential collaborations, I'd love to hear about your data challenges.
          </p>
        </div>

        {/* Contact Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="text-center p-6 border-2 border-gray-600">
            <div className="heading-2 mb-2">24hrs</div>
            <div className="caption text-gray-400">Typical Response Time</div>
          </div>
          <div className="text-center p-6 border-2 border-gray-600">
            <div className="heading-2 mb-2">Remote</div>
            <div className="caption text-gray-400">Work Preference</div>
          </div>
          <div className="text-center p-6 border-2 border-gray-600">
            <div className="heading-2 mb-2">Available</div>
            <div className="caption text-gray-400">New Opportunities</div>
          </div>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          
          {/* Contact Info */}
          <div className="lg:col-span-2">
            <div className="minimal-card">
              <h3 className="heading-2 mb-8">Contact Information</h3>
              
              <div className="space-y-8 mb-8">
                <div>
                  <h4 className="heading-3 mb-3">Email</h4>
                  <a 
                    href="mailto:contact@example.com"
                    className="text-gray-400 hover:text-white body-regular transition-colors"
                  >
                    Available via contact form
                  </a>
                </div>
                
                <div>
                  <h4 className="heading-3 mb-3">LinkedIn</h4>
                  <a 
                    href="https://www.linkedin.com/in/tobin-zolkowski-844873200/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white flex items-center body-regular group transition-colors"
                  >
                    Professional profile & network
                    <ExternalLink size={16} className="ml-2 group-hover:transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </a>
                </div>

                <div>
                  <h4 className="heading-3 mb-3">GitHub</h4>
                  <a 
                    href="https://github.com/tzolkowski96" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white flex items-center body-regular group transition-colors"
                  >
                    Code repositories & projects
                    <ExternalLink size={16} className="ml-2 group-hover:transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </a>
                </div>
              </div>

              <div className="mb-8">
                <h4 className="heading-3 mb-4">Areas of Interest</h4>
                <ul className="space-y-2 body-regular text-gray-400">
                  <li>• <strong>Full-time positions</strong> in data analytics</li>
                  <li>• <strong>Contract projects</strong> with defined scope</li>
                  <li>• <strong>Consulting opportunities</strong> for ML implementation</li>
                  <li>• Data pipeline development</li>
                </ul>
              </div>

              <div className="flex space-x-6 pt-8 border-t border-gray-600">
                <a 
                  href="https://github.com/tzolkowski96" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Github size={24} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/tobin-zolkowski-844873200/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="minimal-card">
              <h3 className="heading-2 mb-8">Start a Conversation</h3>
              
              {formStatus.submitted ? (
                <div className={`p-6 border-2 ${
                  formStatus.error 
                    ? 'form-error' 
                    : 'form-success'
                } flex items-start`}>
                  {formStatus.error ? 
                    <AlertCircle size={24} className="text-gray-900 dark:text-white mr-4 flex-shrink-0 mt-1" /> : 
                    <Check size={24} className="text-gray-900 dark:text-white mr-4 flex-shrink-0 mt-1" />
                  }
                  <div className="flex-1">
                    <p className="body-large mb-4">
                      {formStatus.message}
                    </p>
                    <button 
                      onClick={resetForm}
                      className="btn-outline"
                    >
                      {formStatus.error ? 'Try Again' : 'Send Another Message'}
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="form-label-large">Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`form-input-large ${errors.name ? 'error' : ''}`}
                        placeholder="Your name"
                      />
                      {errors.name && <p className="body-small text-gray-900 dark:text-white mt-2">{errors.name}</p>}
                    </div>
                    <div>
                      <label htmlFor="email" className="form-label-large">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`form-input-large ${errors.email ? 'error' : ''}`}
                        placeholder="your@email.com"
                      />
                      {errors.email && <p className="body-small text-gray-900 dark:text-white mt-2">{errors.email}</p>}
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="form-label-large">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`form-input-large ${errors.subject ? 'error' : ''}`}
                      placeholder="Project inquiry"
                    />
                    {errors.subject && <p className="body-small text-gray-900 dark:text-white mt-2">{errors.subject}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="form-label-large">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className={`form-input-large ${errors.message ? 'error' : ''}`}
                      placeholder="Tell me about your project..."
                    ></textarea>
                    {errors.message && <p className="body-small text-gray-900 dark:text-white mt-2">{errors.message}</p>}
                  </div>
                  
                  <button
                    type="submit"
                    disabled={formStatus.loading}
                    className={`btn-large flex items-center ${formStatus.loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    {formStatus.loading ? (
                      <>
                        <Loader size={20} className="animate-spin mr-3" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send size={20} className="mr-3" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;