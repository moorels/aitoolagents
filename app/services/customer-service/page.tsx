'use client'
import ServicePageTemplate from '../../components/ServicePageTemplate';

export default function CustomerServicePage() {
  return (
    <ServicePageTemplate
      title="Customer Service"
      description="Transform your customer support with AI-powered solutions that deliver 24/7 assistance, instant response times, and personalized interactions. Our AI customer service agents handle routine inquiries, route complex issues, and maintain consistent service quality while reducing operational costs."
      benefits={[
        "24/7 Customer Support Availability",
        "Instant Response to Common Queries",
        "Reduced Operational Costs by up to 60%",
        "Consistent Service Quality",
        "Multilingual Support Capabilities",
        "Scalable During Peak Periods",
        "Improved Customer Satisfaction",
        "Detailed Analytics and Insights"
      ]}
      features={[
        "Natural Language Processing for Human-Like Interactions",
        "Multi-Channel Support Integration",
        "Automated Ticket Routing and Prioritization",
        "Real-Time Language Translation",
        "Sentiment Analysis and Response Adaptation",
        "Knowledge Base Integration and Self-Learning",
        "Custom Response Templates",
        "Performance Analytics Dashboard"
      ]}
    />
  );
}
