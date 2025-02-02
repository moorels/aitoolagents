'use client'
import ServicePage from '../../components/ServicePage';
import Chat from '../../components/Chat';



export default function SecurityPage() {
  return (
    <div>
      <ServicePage
        title="AI Security Solutions"
        description="Protect your AI systems and data with our comprehensive security solutions. We implement robust security measures to ensure the integrity, confidentiality, and reliability of your AI operations while maintaining compliance with industry standards."
        features={[
          "AI Model Protection",
          "Data Encryption",
          "Access Control",
          "Threat Detection",
          "Security Monitoring",
          "Compliance Management",
          "Vulnerability Assessment",
          "Incident Response"
        ]}
        benefits={[
          "Enhanced Data Protection",
          "Regulatory Compliance",
          "Risk Mitigation",
          "Operational Security",
          "Trust and Reliability",
          "Business Continuity"
        ]}
        useCases={[
          {
            title: "AI Model Security",
            description: "Implement comprehensive security measures to protect AI models from unauthorized access, tampering, and theft while ensuring their integrity and reliability."
          },
          {
            title: "Data Security",
            description: "Secure sensitive data used in AI operations through encryption, access controls, and continuous monitoring for potential security threats."
          },
          {
            title: "Compliance Management",
            description: "Ensure AI systems comply with industry regulations and standards while maintaining robust security measures for data protection."
          }
        ]}
      />
      <div className="fixed bottom-8 right-8 z-50">
        <Chat />
      </div>
    </div>
  );
}
