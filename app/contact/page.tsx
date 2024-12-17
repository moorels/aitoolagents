'use client'
import { useState } from 'react';
import { useForm } from 'react-hook-form';

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  jobTitle: string;
  phone: string;
  inquiryType: string;
  projectScope: string;
  timeline: string;
  budget: string;
  message: string;
  preferredContact: string;
  newsletter: boolean;
}

export default function ContactPage() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const inquiryOptions = [
    "General Inquiry",
    "Product Information",
    "Demo Request",
    "Customer Support",
    "Feature Requests/Feedback",
    "Partnerships and Collaborations",
    "Career Opportunities",
    "Integration with Customer Service Processes",
    "AI Agent Customization",
    "Natural Language Processing",
    "Sentiment Analysis for Customer Feedback",
    "Automated Ticket Routing",
    "Chatbot Integration and Setup",
    "Personalized AI Assistant Solutions",
    "Real-Time Data Processing",
    "Multi-Channel Support (Email, Chat, Phone)",
    "Customer Segmentation for Personalization",
    "AI Agent Performance Metrics",
    "Knowledge Base Management and Updates",
    "AI Agent Integration with CRM Systems",
    "Voice Recognition and Speech-to-Text Features",
    "Handling of Complex Customer Queries",
    "Multi-Language Support",
    "Sentiment Analysis for Customer Churn Prediction",
    "Automated Response Generation",
    "Integration with Social Media Channels"
  ];

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      // Here you would typically send this to your backend
      // For now, we'll simulate sending an email using mailto
      const subject = encodeURIComponent(`New Contact Form Submission: ${data.inquiryType}`);
      const body = encodeURIComponent(`
        Name: ${data.firstName} ${data.lastName}
        Email: ${data.email}
        Company: ${data.company}
        Job Title: ${data.jobTitle}
        Phone: ${data.phone}
        Inquiry Type: ${data.inquiryType}
        Project Scope: ${data.projectScope}
        Timeline: ${data.timeline}
        Budget: ${data.budget}
        Message: ${data.message}
        Preferred Contact Method: ${data.preferredContact}
        Newsletter Signup: ${data.newsletter ? 'Yes' : 'No'}
      `);
      
      window.location.href = `mailto:info@aitoolagents.com.au?subject=${subject}&body=${body}`;
      setSubmitStatus('success');
      reset();
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen  py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-lg text-gray-300">
            We&apos;re here to help and answer any questions you might have.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 bg-gray-900 p-8 shadow-lg border border-gray-800">
          {/* Personal Information Section */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-white">Personal Information</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-300">
                  First Name *
                </label>
                <input
                  type="text"
                  {...register('firstName', { required: 'First name is required' })}
                  className="mt-1 block w-full border-gray-600 bg-gray-800 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 h-12 px-4"
                />
                {errors.firstName && (
                  <p className="mt-1 text-sm text-red-600">{errors.firstName.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-300">
                  Last Name *
                </label>
                <input
                  type="text"
                  {...register('lastName', { required: 'Last name is required' })}
                  className="mt-1 block w-full border-gray-600 bg-gray-800 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 h-12 px-4"
                />
                {errors.lastName && (
                  <p className="mt-1 text-sm text-red-600">{errors.lastName.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                  Email Address *
                </label>
                <input
                  type="email"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address'
                    }
                  })}
                  className="mt-1 block w-full border-gray-600 bg-gray-800 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 h-12 px-4"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300">
                  Phone Number
                </label>
                <input
                  type="tel"
                  {...register('phone')}
                  className="mt-1 block w-full border-gray-600 bg-gray-800 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 h-12 px-4"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-300">
                  Company Name
                </label>
                <input
                  type="text"
                  {...register('company')}
                  className="mt-1 block w-full border-gray-600 bg-gray-800 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 h-12 px-4"
                />
              </div>

              <div>
                <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-300">
                  Job Title
                </label>
                <input
                  type="text"
                  {...register('jobTitle')}
                  className="mt-1 block w-full border-gray-600 bg-gray-800 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 h-12 px-4"
                />
              </div>
            </div>
          </div>

          {/* Inquiry Details Section */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-white">Inquiry Details</h2>
            
            <div>
              <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-300">
                Type of Inquiry *
              </label>
              <select
                {...register('inquiryType', { required: 'Please select an inquiry type' })}
                className="mt-1 block w-full border-gray-600 bg-gray-800 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 h-12 px-4"
              >
                <option value="">Select an option</option>
                {inquiryOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              {errors.inquiryType && (
                <p className="mt-1 text-sm text-red-600">{errors.inquiryType.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="projectScope" className="block text-sm font-medium text-gray-300">
                Project Scope
              </label>
              <textarea
                {...register('projectScope')}
                rows={3}
                className="mt-1 block w-full border-gray-600 bg-gray-800 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 h-32 px-4 py-3"
                placeholder="Please describe the scope of your project..."
              />
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="timeline" className="block text-sm font-medium text-gray-300">
                  Expected Timeline
                </label>
                <select
                  {...register('timeline')}
                  className="mt-1 block w-full border-gray-600 bg-gray-800 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 h-12 px-4"
                >
                  <option value="">Select timeline</option>
                  <option value="immediate">Immediate</option>
                  <option value="1-3months">1-3 months</option>
                  <option value="3-6months">3-6 months</option>
                  <option value="6-12months">6-12 months</option>
                  <option value="12+months">12+ months</option>
                </select>
              </div>

              <div>
                <label htmlFor="budget" className="block text-sm font-medium text-gray-300">
                  Budget Range
                </label>
                <select
                  {...register('budget')}
                  className="mt-1 block w-full border-gray-600 bg-gray-800 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 h-12 px-4"
                >
                  <option value="">Select budget range</option>
                  <option value="<5k">Less than $5,000</option>
                  <option value="5k-10k">$5,000 - $10,000</option>
                  <option value="10k-25k">$10,000 - $25,000</option>
                  <option value="25k-50k">$25,000 - $50,000</option>
                  <option value="50k+">$50,000+</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                Additional Message *
              </label>
              <textarea
                {...register('message', { required: 'Please provide additional details' })}
                rows={6}
                className="mt-1 block w-full border-gray-600 bg-gray-800 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 h-48 px-4 py-3"
                placeholder="Please provide any additional details about your inquiry..."
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
              )}
            </div>
          </div>

          {/* Preferences Section */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-white">Preferences</h2>
            
            <div>
              <label htmlFor="preferredContact" className="block text-sm font-medium text-gray-300">
                Preferred Contact Method
              </label>
              <select
                {...register('preferredContact')}
                className="mt-1 block w-full border-gray-600 bg-gray-800 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 h-12 px-4"
              >
                <option value="email">Email</option>
                <option value="phone">Phone</option>
                <option value="video">Video Call</option>
              </select>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                {...register('newsletter')}
                className="h-4 w-4 border-gray-600 bg-gray-800 text-blue-600 focus:ring-blue-500"
              />
              <label htmlFor="newsletter" className="ml-2 block text-sm text-gray-300">
                Subscribe to our newsletter for updates and insights
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-6">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full flex justify-center py-4 px-4 border border-transparent shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 h-14 ${
                isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
            </button>
          </div>

          {/* Status Messages */}
          {submitStatus === 'success' && (
            <div className="mt-4 p-4 bg-green-900 text-green-100 rounded-md">
              Thank you for your inquiry! We will get back to you soon.
            </div>
          )}
          {submitStatus === 'error' && (
            <div className="mt-4 p-4 bg-red-900 text-red-100 rounded-md">
              There was an error submitting your inquiry. Please try again.
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
