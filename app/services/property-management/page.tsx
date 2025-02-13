'use client'
import ServicePageTemplate from '../../components/ServicePageTemplate';
import Chat from '../../components/Chat';
import ScrollToTop from '../../components/ScrollToTop';

export default function PropertyManagementPage() {
  return (
    <div>
      <ServicePageTemplate
        title="Property Management"
        description="Transform property management with AI-powered solutions that streamline operations, enhance tenant satisfaction, and optimize property performance. Our intelligent systems automate routine tasks, provide predictive maintenance insights, and deliver real-time property analytics for better decision-making."
        benefits={[
          "Improved Tenant Satisfaction",
          "Reduced Maintenance Costs",
          "Enhanced Property Value",
          "Better Resource Allocation",
          "Increased Occupancy Rates",
          "Streamlined Operations",
          "Predictive Maintenance",
          "Real-time Performance Insights"
        ]}
        features={[
          "Automated Maintenance Requests",
          "Tenant Portal Integration",
          "Smart Building Management",
          "Rent Collection Automation",
          "Property Analytics Dashboard",
          "Inspection Management",
          "Vendor Management System",
          "Document Processing Automation"
        ]}
        useCases={[
          {
            title: "Smart Maintenance Management",
            description: "Deploy AI-powered systems to predict maintenance needs, automatically schedule repairs, and optimize resource allocation while tracking maintenance history and costs.",
            impact: "Reduced maintenance costs by 40% and improved response time by 65%"
          },
          {
            title: "Intelligent Tenant Experience",
            description: "Implement AI solutions that streamline tenant communications, automate rent collection, and provide personalized service through an integrated tenant portal.",
            impact: "Increased tenant satisfaction by 50% and reduced administrative tasks by 70%"
          },
          {
            title: "Predictive Property Analytics",
            description: "Utilize AI to analyze property performance metrics, occupancy patterns, and market trends to optimize pricing and identify improvement opportunities.",
            impact: "Improved occupancy rates by 25% and increased rental income by 30%"
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
