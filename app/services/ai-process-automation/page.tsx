'use client'
import ServicePage from '../../components/ServicePage';

export default function AIProcessAutomationPage() {
  return (
    <ServicePage
      title="AI Process Automation"
      description="Transform your business processes with intelligent automation that combines AI-powered decision making with robust workflow management. Our solutions streamline operations while maintaining flexibility and adaptability to changing business needs."
      features={[
        "Intelligent Workflow Design",
        "Process Mining and Analysis",
        "Automated Decision Points",
        "Exception Handling",
        "Performance Monitoring",
        "Process Optimization",
        "Integration Capabilities",
        "Scalable Architecture"
      ]}
      benefits={[
        "Streamlined Operations",
        "Reduced Processing Time",
        "Improved Accuracy",
        "Cost Efficiency",
        "Better Resource Utilization",
        "Enhanced Compliance"
      ]}
      useCases={[
        {
          title: "Business Process Automation",
          description: "End-to-end automation of complex business processes with intelligent decision-making capabilities."
        },
        {
          title: "Workflow Optimization",
          description: "Continuous analysis and improvement of business workflows using AI-driven insights."
        },
        {
          title: "Intelligent Document Processing",
          description: "Automated processing and routing of documents with context-aware decision making."
        }
      ]}
    />
  );
}
