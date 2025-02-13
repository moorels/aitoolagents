'use client'
import ServicePageTemplate from '../../components/ServicePageTemplate';
import Chat from '../../components/Chat';
import ScrollToTop from '../../components/ScrollToTop';

export default function CustomAISolutionsPage() {
  return (
    <div>
      <ServicePageTemplate
        title="Custom AI Solutions"
        description="Transform your business with tailored AI solutions designed to address your unique challenges and opportunities. Our custom AI development services combine cutting-edge technology with deep industry expertise to deliver solutions that drive innovation and competitive advantage."
        benefits={[
          "Tailored to Your Needs",
          "Improved Operational Efficiency",
          "Competitive Advantage",
          "Scalable Solutions",
          "Future-Proof Technology",
          "Enhanced Decision Making",
          "Rapid Implementation",
          "Continuous Optimization"
        ]}
        features={[
          "Custom AI Model Development",
          "Industry-Specific Solutions",
          "Integration Services",
          "Scalable Architecture",
          "Performance Monitoring",
          "Continuous Learning",
          "Security Implementation",
          "API Development"
        ]}
        useCases={[
          {
            title: "Predictive Analytics for Manufacturing",
            description: "Develop custom AI models that analyze production data to predict equipment failures, optimize maintenance schedules, and improve quality control processes in manufacturing environments.",
            impact: "Reduced unplanned downtime by 75% and improved product quality by 45%"
          },
          {
            title: "AI-Powered Risk Assessment",
            description: "Create tailored risk assessment models for financial institutions that analyze multiple data sources to evaluate credit risks, detect fraud patterns, and automate underwriting processes.",
            impact: "Improved risk assessment accuracy by 60% and reduced fraud losses by 80%"
          },
          {
            title: "Healthcare Diagnosis Assistant",
            description: "Build specialized AI systems that assist healthcare professionals in diagnosis by analyzing patient data, medical imaging, and historical records to provide evidence-based recommendations.",
            impact: "Increased diagnostic accuracy by 40% and reduced diagnosis time by 50%"
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
