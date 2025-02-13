'use client'
import ServicePageTemplate from '../../components/ServicePageTemplate';
import Chat from '../../components/Chat';
import ScrollToTop from '../../components/ScrollToTop';

export default function AIProcessAutomationPage() {
  return (
    <div>
      <ServicePageTemplate
        title="AI Process Automation"
        description="Transform your business operations with intelligent process automation that combines AI-powered decision making with seamless workflow execution. Our solutions streamline complex processes, reduce manual intervention, and deliver consistent, high-quality results while adapting to changing business needs."
        benefits={[
          "Increased Process Efficiency",
          "Reduced Operating Costs",
          "Enhanced Accuracy",
          "Faster Processing Times",
          "Improved Compliance",
          "Better Resource Utilization",
          "Scalable Operations",
          "Real-time Process Insights"
        ]}
        features={[
          "Intelligent Workflow Design",
          "Process Mining & Analysis",
          "Automated Decision Making",
          "Exception Handling",
          "Performance Monitoring",
          "Integration Framework",
          "Business Rules Engine",
          "Process Analytics"
        ]}
        useCases={[
          {
            title: "Intelligent Document Processing",
            description: "Automate the extraction, classification, and processing of various document types using AI-powered OCR and natural language processing, streamlining document-heavy workflows.",
            impact: "Reduced document processing time by 85% and improved accuracy to 99.9%"
          },
          {
            title: "Supply Chain Optimization",
            description: "Implement AI-driven process automation to optimize inventory management, demand forecasting, and supplier relationships, ensuring efficient supply chain operations.",
            impact: "Decreased inventory costs by 30% and improved delivery accuracy by 40%"
          },
          {
            title: "Financial Operations Automation",
            description: "Deploy AI automation for financial processes including accounts payable/receivable, reconciliation, and compliance reporting, reducing manual effort and errors.",
            impact: "Reduced processing costs by 70% and shortened month-end close by 60%"
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
