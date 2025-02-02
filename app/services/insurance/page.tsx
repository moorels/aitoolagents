'use client'
import ServicePageTemplate from '../../components/ServicePageTemplate';
import Chat from '../../components/Chat';

export default function InsurancePage() {
  return (
    <div>
      <ServicePageTemplate
        title="Insurance"
        description="Transform insurance operations with AI-powered solutions that streamline underwriting, enhance risk assessment, and improve claims processing. Our intelligent systems help insurance providers make data-driven decisions while delivering superior customer service and maintaining regulatory compliance."
        benefits={[
          "Faster Claims Processing",
          "Improved Risk Assessment",
          "Reduced Fraud",
          "Enhanced Customer Service",
          "Automated Underwriting",
          "Better Decision Making",
          "Regulatory Compliance",
          "Cost Optimization"
        ]}
        features={[
          "Claims Automation",
          "Risk Analysis",
          "Fraud Detection",
          "Policy Management",
          "Customer Analytics",
          "Document Processing",
          "Compliance Monitoring",
          "Performance Tracking"
        ]}
        useCases={[
          {
            title: "Automated Claims Processing",
            description: "Deploy AI-powered systems to automate the entire claims lifecycle, from initial filing to assessment and settlement, while detecting potential fraud and ensuring compliance.",
            impact: "Reduced claims processing time by 75% and improved fraud detection by 60%"
          },
          {
            title: "Intelligent Underwriting",
            description: "Implement AI algorithms that analyze multiple data sources to assess risk accurately and automate underwriting decisions, providing faster and more consistent policy pricing.",
            impact: "Decreased underwriting time by 65% and improved risk assessment accuracy by 40%"
          },
          {
            title: "Predictive Customer Analytics",
            description: "Utilize AI to analyze customer behavior and risk patterns, enabling personalized policy recommendations and proactive risk management strategies.",
            impact: "Increased customer retention by 35% and reduced risk exposure by 45%"
          }
        ]}
      />
      <div className="fixed bottom-8 right-8 z-50">
        <Chat />
      </div>
    </div>
  );
}
