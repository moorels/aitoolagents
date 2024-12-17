'use client'
import ServicePage from '../../components/ServicePage';

export default function CustomerCarePage() {
  return (
    <ServicePage
      title="Customer Care Excellence"
      description="Elevate your customer care to new heights with AI-powered solutions that provide personalized, proactive support. Our intelligent systems help you build stronger customer relationships while maintaining efficiency and consistency across all touchpoints."
      features={[
        "Proactive Customer Support",
        "Personalized Interaction Management",
        "Customer Journey Tracking",
        "Sentiment Analysis",
        "Multi-channel Support Integration",
        "Customer Feedback Analysis",
        "Service Quality Monitoring",
        "Customer Retention Tools"
      ]}
      benefits={[
        "Enhanced Customer Loyalty",
        "Improved First Contact Resolution",
        "Personalized Customer Experience",
        "Reduced Response Times",
        "Better Customer Insights",
        "Increased Customer Satisfaction"
      ]}
      useCases={[
        {
          title: "Proactive Customer Engagement",
          description: "Identify and address customer needs before they become issues using predictive analytics and behavior patterns."
        },
        {
          title: "Personalized Support Experience",
          description: "Deliver tailored support based on customer history, preferences, and behavior patterns."
        },
        {
          title: "Customer Feedback Management",
          description: "Automatically collect, analyze, and act on customer feedback to improve service quality."
        }
      ]}
    />
  );
}
