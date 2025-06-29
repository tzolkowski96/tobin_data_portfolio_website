import React, { useState } from 'react';
import { Send, Check, AlertCircle } from 'lucide-react';

interface FormStatus {
  isSubmitting: boolean;
  isSubmitted: boolean;
  error: string | null;
}

const ContactForm: React.FC = () => {
  const [status, setStatus] = useState<FormStatus>({
    isSubmitting: false,
    isSubmitted: false,
    error: null
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus({ isSubmitting: true, isSubmitted: false, error: null });

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/myzggjel', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus({ isSubmitting: false, isSubmitted: true, error: null });
        form.reset();
      } else {
        const data = await response.json();
        throw new Error(data.errors?.[0]?.message || 'Failed to send message');
      }
    } catch (error) {
      setStatus({ 
        isSubmitting: false, 
        isSubmitted: false, 
        error: error instanceof Error ? error.message : 'Failed to send message. Please try again.' 
      });
    }
  };

  const resetForm = () => {
    setStatus({ isSubmitting: false, isSubmitted: false, error: null });
  };

  if (status.isSubmitted) {
    return (
      <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
        <div className="flex items-center mb-4">
          <Check size={20} className="text-green-600 dark:text-green-400 mr-3" />
          <div>
            <h3 className="font-medium text-green-800 dark:text-green-200">Message sent successfully!</h3>
            <p className="text-sm text-green-600 dark:text-green-400">I'll get back to you within 24 hours.</p>
          </div>
        </div>
        <button
          onClick={resetForm}
          className="text-sm text-green-600 dark:text-green-400 hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Your name"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="your@email.com"
          />
        </div>
      </div>
      
      <div>
        <label htmlFor="subject" className="block text-sm font-medium mb-2">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          required
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Project inquiry"
        />
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Tell me about your project or opportunity..."
        />
      </div>

      {/* Hidden honeypot field for spam protection */}
      <input type="text" name="_gotcha" style={{ display: 'none' }} />

      {status.error && (
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
          <div className="flex items-center">
            <AlertCircle size={20} className="text-red-600 dark:text-red-400 mr-3" />
            <p className="text-sm text-red-600 dark:text-red-400">{status.error}</p>
          </div>
        </div>
      )}
      
      <button
        type="submit"
        disabled={status.isSubmitting}
        className="w-full inline-flex items-center justify-center px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded-md hover:opacity-80 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status.isSubmitting ? (
          <>
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white dark:border-black mr-2"></div>
            Sending...
          </>
        ) : (
          <>
            <Send size={16} className="mr-2" />
            Send Message
          </>
        )}
      </button>
    </form>
  );
};

export default ContactForm;