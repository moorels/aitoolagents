'use client'
import ServicePageTemplate from '../../components/ServicePageTemplate';
import Chat from '../../components/Chat';
import ServiceMetricsChart from '../../components/ServiceMetricsChart';

export default function EmployeeTrainingPage() {
  return (
    <div>
      <ServicePageTemplate
        title="Employee Training"
        description="Revolutionize your employee onboarding and training with AI-powered contextual learning systems. Our intelligent chatbots leverage your company's documentation to provide personalized training experiences, ensuring consistent knowledge transfer and adherence to company policies, work ethics, and procedures."
        benefits={[
          "Personalized Learning",
          "24/7 Training Availability",
          "Consistent Knowledge Transfer",
          "Real-time Policy Updates",
          "Progress Tracking",
          "Cost-Effective Training",
          "Scalable Solutions",
          "Improved Compliance"
        ]}
        features={[
          "Contextual Learning",
          "Policy Database Integration",
          "Interactive Q&A",
          "Progress Assessment",
          "Custom Training Paths",
          "Documentation Access",
          "Performance Analytics",
          "Multi-language Support"
        ]}
        useCases={[
          {
            title: "Policy and Compliance Training",
            description: "AI chatbots provide instant access to company policies, procedures, and compliance requirements, offering contextual explanations and real-world examples to ensure thorough understanding.",
            impact: "Achieved 95% policy compliance rate and reduced policy-related queries by 80%"
          },
          {
            title: "Role-Specific Onboarding",
            description: "Deliver personalized onboarding experiences tailored to specific roles, departments, and experience levels, ensuring new employees quickly understand their responsibilities and company culture.",
            impact: "Reduced onboarding time by 60% while improving new hire satisfaction rates by 85%"
          },
          {
            title: "Continuous Learning Support",
            description: "Provide ongoing training and support through AI-powered assistants that help employees stay updated with new policies, procedures, and best practices while tracking their progress.",
            impact: "Increased employee engagement by 70% and reduced training-related support tickets by 75%"
          }
        ]}
      />
     
      <div className="fixed bottom-8 right-8 z-50">
        <Chat />
      </div>
    </div>
  );
}
