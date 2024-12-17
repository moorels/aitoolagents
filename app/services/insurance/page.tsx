'use client'
import ServicePage from '../../components/ServicePage';

export default function InsurancePage() {
  return (
    <ServicePage
      title="Insurance Solutions"
      description="Transform your insurance operations with AI-powered automation solutions that streamline claims processing, enhance risk assessment, and improve customer service. Our intelligent systems help insurance providers deliver faster, more accurate services while reducing operational costs."
      features={[
        "Automated Claims Processing",
        "Risk Assessment Automation",
        "Policy Management",
        "Fraud Detection",
        "Customer Data Analysis",
        "Document Processing",
        "Underwriting Automation",
        "Compliance Monitoring"
      ]}
      benefits={[
        "Faster Claims Processing",
        "Improved Risk Assessment",
        "Reduced Operational Costs",
        "Enhanced Fraud Detection",
        "Better Customer Service",
        "Increased Accuracy"
      ]}
      useCases={[
        {
          title: "Automated Claims Processing",
          description: "Streamline claims processing with AI-powered document analysis, validation, and decision-making support."
        },
        {
          title: "Intelligent Risk Assessment",
          description: "Enhance underwriting processes with automated risk assessment and policy recommendation systems."
        },
        {
          title: "Fraud Detection",
          description: "Identify potential fraud patterns using advanced AI algorithms and data analysis."
        }
      ]}
    />
  );
}
