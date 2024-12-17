'use client'
import ServicePage from '../../components/ServicePage';

export default function CustomerServicePage() {
  return (
    <ServicePage
      title="Customer Service Solutions"
      description="Transform your customer service operations with AI-powered solutions that enhance efficiency, improve customer satisfaction, and reduce response times. Our intelligent systems work seamlessly alongside your team to deliver exceptional customer experiences."
      features={[
        "24/7 Automated Customer Support",
        "Natural Language Processing for Customer Inquiries",
        "Intelligent Ticket Routing and Prioritization",
        "Real-time Customer Sentiment Analysis",
        "Multi-channel Support Integration",
        "Automated Response Generation",
        "Customer Interaction History Analysis",
        "Customizable Response Templates"
      ]}
      benefits={[
        "Reduced Response Times",
        "Increased Customer Satisfaction",
        "Lower Operational Costs",
        "Improved Service Consistency",
        "Enhanced Customer Insights",
        "Scalable Support Operations"
      ]}
      useCases={[
        {
          title: "Automated Inquiry Handling",
          description: "Implement AI-powered chatbots to handle common customer inquiries instantly, reducing wait times and freeing up human agents for complex issues."
        },
        {
          title: "Intelligent Routing",
          description: "Automatically analyze and route customer inquiries to the most qualified agent based on expertise and availability."
        },
        {
          title: "Proactive Support",
          description: "Identify and address potential customer issues before they escalate using predictive analytics and pattern recognition."
        }
      ]}
    />
  );
}
