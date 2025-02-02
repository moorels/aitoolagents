'use client'
import ServicePageTemplate from '../../components/ServicePageTemplate';
import Chat from '../../components/Chat';

export default function CustomerCarePage() {
  return (
    <div>
      <ServicePageTemplate
        title="Customer Care"
        description="Elevate your customer care with AI-powered solutions that provide personalized, efficient, and proactive support. Our intelligent systems enhance customer satisfaction through quick response times, personalized interactions, and data-driven insights while reducing operational costs."
        benefits={[
          "Enhanced Customer Experience",
          "Faster Response Times",
          "Reduced Support Costs",
          "24/7 Service Availability",
          "Improved First Contact Resolution",
          "Personalized Support",
          "Better Customer Insights",
          "Increased Customer Loyalty"
        ]}
        features={[
          "AI-Powered Chat Support",
          "Sentiment Analysis",
          "Automated Ticket Management",
          "Customer Journey Tracking",
          "Predictive Support",
          "Multi-channel Integration",
          "Knowledge Base Automation",
          "Performance Analytics"
        ]}
        useCases={[
          {
            title: "Proactive Customer Support",
            description: "Implement AI-driven systems that anticipate customer needs and proactively address potential issues before they escalate, using predictive analytics and behavioral patterns.",
            impact: "Reduced support tickets by 45% and increased customer satisfaction by 60%"
          },
          {
            title: "Multilingual Customer Service",
            description: "Deploy AI-powered language processing to provide seamless support across multiple languages, ensuring consistent service quality regardless of customer location or language preference.",
            impact: "Expanded market reach by 300% and improved international customer satisfaction by 55%"
          },
          {
            title: "Automated Issue Resolution",
            description: "Utilize AI to automatically diagnose and resolve common customer issues, providing instant solutions while maintaining high accuracy and customer satisfaction.",
            impact: "Achieved 70% automated resolution rate and reduced average handling time by 65%"
          }
        ]}
      />
      <div className="fixed bottom-8 right-8 z-50">
        <Chat />
      </div>
    </div>
  );
}
