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
          message: 'Message sent. I\'ll get back to you soon.',
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
    <section id="contact" className="py-16 bg-white dark:bg-black">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl text-gray-900 dark:text-white mb-8">Contact</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            Have a project in mind or want to discuss collaborations? Let's connect.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-2">
            <div className="minimal-card">
              <h3 className="text-lg text-gray-900 dark:text-white mb-4">Get in Touch</h3>
              
              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="font-normal text-gray-900 dark:text-white mb-1">LinkedIn</h4>
                  <a 
                    href="https://www.linkedin.com/in/tobin-zolkowski-844873200/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-gray-700 dark:text-gray-500 dark:hover:text-gray-300 flex items-center text-sm"
                  >
                    Connect <ExternalLink size={12} className="ml-1" />
                  </a>
                </div>

                <div>
                  <h4 className="font-normal text-gray-900 dark:text-white mb-1">GitHub</h4>
                  <a 
                    href="https://github.com/tzolkowski96" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-gray-700 dark:text-gray-500 dark:hover:text-gray-300 flex items-center text-sm"
                  >
                    View projects <ExternalLink size={12} className="ml-1" />
                  </a>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-normal text-gray-900 dark:text-white mb-2">Available For</h4>
                <ul className="space-y-1 text-sm text-gray-500 dark:text-gray-500">
                  <li>Data analysis projects</li>
                  <li>Machine learning implementation</li>
                  <li>Database optimization</li>
                  <li>Data pipeline development</li>
                </ul>
              </div>

              <div className="flex space-x-4 pt-4 border-t border-gray-200 dark:border-gray-800">
                <a 
                  href="https://github.com/tzolkowski96" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-500 dark:hover:text-gray-300"
                >
                  <Github size={18} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/tobin-zolkowski-844873200/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-500 dark:hover:text-gray-300"
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="minimal-card">
              <h3 className="text-lg text-gray-900 dark:text-white mb-4">Send Message</h3>
              
              {formStatus.submitted ? (
                <div className={`p-4 border ${
                  formStatus.error 
                    ? 'bg-red-50 border-red-200 dark:bg-red-900/20 dark:border-red-800' 
                    : 'bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-800'
                } flex items-center`}>
                  {formStatus.error ? 
                    <AlertCircle size={16} className="text-red-600 dark:text-red-400 mr-2" /> : 
                    <Check size={16} className="text-green-600 dark:text-green-400 mr-2" />
                  }
                  <div className="flex-1">
                    <p className={`text-sm ${formStatus.error ? 'text-red-800 dark:text-red-200' : 'text-green-800 dark:text-green-200'}`}>
                      {formStatus.message}
                    </p>
                    <button 
                      onClick={resetForm}
                      className="mt-1 text-xs underline hover:no-underline"
                    >
                      {formStatus.error ? 'Try again' : 'Send another'}
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="form-label">Name</label>
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
                      <label htmlFor="email" className="form-label">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`form-input ${errors.email ? 'error' : ''}`}
                        placeholder="your@email.com"
                      />
                      {errors.email && <p className="form-error">{errors.email}</p>}
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="form-label">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`form-input ${errors.subject ? 'error' : ''}`}
                      placeholder="Project inquiry"
                    />
                    {errors.subject && <p className="form-error">{errors.subject}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className={`form-input ${errors.message ? 'error' : ''}`}
                      placeholder="Tell me about your project..."
                    ></textarea>
                    {errors.message && <p className="form-error">{errors.message}</p>}
                  </div>
                  
                  <button
                    type="submit"
                    disabled={formStatus.loading}
                    className={`btn-primary flex items-center ${formStatus.loading ? 'opacity-50' : ''}`}
                  >
                    {formStatus.loading ? (
                      <>
                        <Loader size={16} className="animate-spin mr-2" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send size={16} className="mr-2" />
                        <span>Send</span>
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