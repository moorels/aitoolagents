'use client'
import ServicePage from '../../components/ServicePage';

export default function AIIntegrationsPage() {
  return (
    <ServicePage
      title="AI Integrations"
      description="Seamlessly integrate AI capabilities into your existing systems and workflows. Our integration solutions ensure smooth communication between AI components and your current technology stack while maintaining security and performance."
      features={[
        "API Integration Framework",
        "Custom Connectors",
        "Data Pipeline Management",
        "Real-time Synchronization",
        "Legacy System Integration",
        "Cross-platform Compatibility",
        "Scalable Architecture",
        "Performance Monitoring"
      ]}
      benefits={[
        "Seamless System Integration",
        "Enhanced Functionality",
        "Improved Data Flow",
        "Reduced Implementation Time",
        "System Reliability",
        "Future-proof Solutions"
      ]}
      useCases={[
        {
          title: "Enterprise System Integration",
          description: "Connect AI capabilities with existing enterprise systems for enhanced functionality and automation."
        },
        {
          title: "Data Integration",
          description: "Establish robust data pipelines between AI systems and various data sources for real-time processing."
        },
        {
          title: "API Management",
          description: "Create and manage APIs for seamless communication between AI services and external systems."
        }
      ]}
    />
  );
}
