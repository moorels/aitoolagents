'use client'
import ServicePageTemplate from '../../components/ServicePageTemplate';
import Chat from '../../components/Chat';

export default function CustomerCarePage() {
  return (
    <div>
      <ServicePageTemplate
        title="Customer Care"
        description="Elevate your customer care with AI-powered solutions that deliver personalized, proactive support while building lasting relationships. Our intelligent systems combine empathy with efficiency to provide exceptional customer experiences at scale."
        benefits={[
          "Personalized Interactions",
          "Proactive Support",
          "Enhanced Customer Loyalty",
          "Reduced Wait Times",
          "Improved First Contact Resolution",
          "Consistent Service Quality",
          "Scalable Support",
          "Customer Journey Insights"
        ]}
        features={[
          "AI-Powered Personalization",
          "Predictive Support",
          "Omnichannel Integration",
          "Customer Journey Mapping",
          "Sentiment Analysis",
          "Issue Prevention",
          "Automated Follow-ups",
          "Performance Monitoring"
        ]}
        useCases={[
          {
            title: "Proactive Issue Resolution",
            description: "Implement AI systems that predict and address potential customer issues before they become problems, using historical data and behavior patterns.",
            impact: "Reduced support tickets by 50% and improved customer satisfaction by 65%"
          },
          {
            title: "Personalized Customer Journeys",
            description: "Create tailored customer experiences by analyzing interaction history, preferences, and behavior to provide contextually relevant support and recommendations.",
            impact: "Increased customer retention by 40% and improved engagement rates by 75%"
          },
          {
            title: "Automated Customer Success",
            description: "Deploy AI-driven customer success programs that automatically monitor usage patterns, provide timely assistance, and identify opportunities for customer growth.",
            impact: "Boosted customer lifetime value by 55% and reduced churn by 35%"
          }
        ]}
      />
      <div className="fixed bottom-8 right-8 z-50">
        <Chat />
      </div>
    </div>
  );
}
