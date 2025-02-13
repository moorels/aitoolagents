'use client'
import ServicePageTemplate from '../../components/ServicePageTemplate';
import Chat from '../../components/Chat';
import ScrollToTop from '../../components/ScrollToTop';

export default function CustomerServicePage() {
  return (
    <div>
      <ServicePageTemplate
        title="Customer Service"
        description="Transform your customer service operations with AI-powered solutions that enhance customer satisfaction, reduce response times, and optimize support efficiency. Our intelligent systems provide 24/7 support while maintaining a personal touch."
        benefits={[
          "24/7 Customer Support",
          "Reduced Response Time",
          "Improved Resolution Rate",
          "Cost Optimization",
          "Scalable Operations",
          "Personalized Service",
          "Multilingual Support",
          "Data-Driven Insights"
        ]}
        features={[
          "AI Chatbots",
          "Sentiment Analysis",
          "Ticket Management",
          "Knowledge Base Integration",
          "Voice Recognition",
          "Performance Analytics",
          "Automated Responses",
          "Customer Journey Tracking"
        ]}
        useCases={[
          {
            title: "Intelligent Customer Support",
            description: "Deploy AI-powered support systems that handle customer inquiries 24/7, automatically route complex issues to human agents, and provide instant responses to common questions.",
            impact: "Reduced response time by 80% and improved customer satisfaction by 45%"
          },
          {
            title: "Sentiment-Based Routing",
            description: "Implement real-time sentiment analysis to prioritize urgent cases and route customers to specialized agents based on their emotional state and issue complexity.",
            impact: "Increased first-contact resolution by 60% and reduced escalations by 40%"
          },
          {
            title: "Multilingual Support Automation",
            description: "Utilize AI for real-time translation and cultural context understanding, enabling seamless support across multiple languages and regions.",
            impact: "Expanded global support coverage by 300% and improved international customer satisfaction by 55%"
          }
        ]}
      />
      <div className="fixed bottom-8 right-8 z-50">
        <Chat />
      </div>
      <ScrollToTop />
    </div>
  );
}
