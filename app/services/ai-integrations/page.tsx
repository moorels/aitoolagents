'use client'
import ServicePageTemplate from '../../components/ServicePageTemplate';
import Chat from '../../components/Chat';

export default function AIIntegrationsPage() {
  return (
    <div>
      <ServicePageTemplate
        title="AI Integrations"
        description="Seamlessly integrate AI capabilities into your existing systems and workflows with our comprehensive integration solutions. Our expert team ensures smooth implementation, robust connectivity, and optimal performance while maintaining security and scalability across your technology stack."
        benefits={[
          "Seamless System Integration",
          "Enhanced Functionality",
          "Improved Data Flow",
          "Increased Efficiency",
          "Future-Proof Architecture",
          "Reduced Development Time",
          "Cost-Effective Solutions",
          "Scalable Infrastructure"
        ]}
        features={[
          "API Development & Management",
          "Custom Connectors",
          "Data Pipeline Integration",
          "Security Implementation",
          "Performance Monitoring",
          "Error Handling",
          "Version Control",
          "Documentation Support"
        ]}
        useCases={[
          {
            title: "Enterprise System Integration",
            description: "Seamlessly integrate AI capabilities with existing enterprise systems (ERP, CRM, HR) through custom APIs and connectors, enabling intelligent automation across the organization.",
            impact: "Reduced integration time by 60% and improved system interoperability by 75%"
          },
          {
            title: "Real-time Data Pipeline",
            description: "Implement robust data pipelines that connect multiple data sources with AI processing systems, enabling real-time analytics and intelligent decision-making.",
            impact: "Achieved 99.9% data pipeline reliability and reduced data latency by 80%"
          },
          {
            title: "Legacy System Modernization",
            description: "Modernize legacy systems by integrating AI capabilities through custom middleware and APIs, extending functionality while preserving existing investments.",
            impact: "Reduced operational costs by 45% and improved system performance by 70%"
          }
        ]}
      />
      <div className="fixed bottom-8 right-8 z-50">
        <Chat />
      </div>
    </div>
  );
}
