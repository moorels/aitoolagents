'use client'
import ServicePage from '../../components/ServicePage';
import Chat from '../../components/Chat';



export default function AIIntegrationsPage() {
  return (
    <div>
      <ServicePage
        title="AI Integrations"
        description="Seamlessly integrate AI capabilities into your existing systems and workflows. Our integration solutions ensure smooth connectivity between AI services and your business applications while maintaining security and performance."
        features={[
          "API Integration Framework",
          "Custom Connectors",
          "Real-time Data Sync",
          "Secure Data Transfer",
          "Scalable Architecture",
          "Multi-platform Support",
          "Error Handling",
          "Performance Monitoring"
        ]}
        benefits={[
          "Seamless System Integration",
          "Enhanced Functionality",
          "Improved Data Flow",
          "Reduced Implementation Time",
          "Cost-effective Solutions",
          "Future-proof Architecture"
        ]}
        useCases={[
          {
            title: "Enterprise System Integration",
            description: "Connect AI capabilities with existing enterprise systems like CRM, ERP, and other business applications for enhanced functionality."
          },
          {
            title: "Data Pipeline Integration",
            description: "Establish robust data pipelines between AI services and data sources for real-time processing and analysis."
          },
          {
            title: "API Integration Services",
            description: "Implement custom API integrations to connect various AI services with third-party applications and platforms."
          }
        ]}
      />
      <div className="fixed bottom-8 right-8 z-50">
        <Chat />
      </div>
    </div>
  );
}
