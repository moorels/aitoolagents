'use client'
import ServicePage from '../../components/ServicePage';
import Chat from '../../components/Chat';

export default function AIProcessAutomationPage() {
  return (
    <div>
      <ServicePage
        title="AI Process Automation"
        description="Transform your business operations with intelligent process automation powered by AI. Our solutions streamline workflows, reduce manual intervention, and optimize business processes through advanced machine learning and automation technologies."
        features={[
          "Intelligent Workflow Automation",
          "Machine Learning Integration",
          "Process Mining & Analysis",
          "Real-time Optimization",
          "Predictive Analytics",
          "Adaptive Process Control",
          "Error Detection & Handling",
          "Performance Monitoring"
        ]}
        benefits={[
          "Increased Operational Efficiency",
          "Reduced Processing Time",
          "Minimized Human Error",
          "Cost Optimization",
          "Improved Accuracy",
          "Enhanced Scalability"
        ]}
        useCases={[
          {
            title: "Business Process Automation",
            description: "Automate complex business processes with AI-driven workflows that adapt and optimize based on real-time data and performance metrics."
          },
          {
            title: "Intelligent Document Processing",
            description: "Implement smart document processing systems that can understand, extract, and process information from various document types automatically."
          },
          {
            title: "Workflow Optimization",
            description: "Leverage AI to analyze and optimize existing workflows, identifying bottlenecks and suggesting improvements for enhanced efficiency."
          }
        ]}
      />
      <div className="fixed bottom-8 right-8 z-50">
        <Chat />
      </div>
    </div>
  );
}
