'use client'
import ServicePage from '../../components/ServicePage';
import Chat from '../../components/Chat';




export default function CustomerCarePage() {
  return (
    <div>
      <ServicePage
        title="Customer Care Solutions"
        description="Elevate your customer care with advanced AI-powered solutions that provide personalized, proactive support across all channels. Our intelligent systems help you build stronger relationships with your customers while optimizing support operations."
        features={[
          "Multi-channel Support Integration",
          "AI-powered Response Suggestions",
          "Customer Sentiment Analysis",
          "Automated Issue Resolution",
          "Proactive Customer Outreach",
          "Performance Analytics Dashboard",
          "Knowledge Base Management",
          "Quality Assurance Automation"
        ]}
        benefits={[
          "Enhanced Customer Experience",
          "Faster Resolution Times",
          "Improved Agent Efficiency",
          "Consistent Service Quality",
          "Reduced Support Costs",
          "Increased Customer Loyalty"
        ]}
        useCases={[
          {
            title: "Intelligent Support Routing",
            description: "Automatically direct customer inquiries to the most qualified agents based on expertise, availability, and issue complexity."
          },
          {
            title: "Proactive Customer Support",
            description: "Identify and address potential customer issues before they escalate using predictive analytics and behavior patterns."
          },
          {
            title: "Automated Quality Management",
            description: "Monitor and analyze customer interactions to ensure service quality and compliance with support standards."
          }
        ]}
      />
      <div className="fixed bottom-8 right-8 z-50">
        <Chat />
      </div>
    </div>
  );
}
