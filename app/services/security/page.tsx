'use client'
import ServicePageTemplate from '../../components/ServicePageTemplate';
import Chat from '../../components/Chat';
import ScrollToTop from '../../components/ScrollToTop';

export default function SecurityPage() {
  return (
    <div>
      <ServicePageTemplate
        title="Security"
        description="Protect your AI systems and data with our comprehensive security solutions that combine advanced threat detection, proactive monitoring, and intelligent response mechanisms. Our security framework ensures robust protection while maintaining system performance and accessibility."
        benefits={[
          "Enhanced Threat Protection",
          "Proactive Security Measures",
          "Reduced Security Risks",
          "Compliance Assurance",
          "Real-time Monitoring",
          "Rapid Incident Response",
          "Data Protection",
          "Business Continuity"
        ]}
        features={[
          "AI-Powered Threat Detection",
          "Access Control Management",
          "Encryption Implementation",
          "Security Monitoring",
          "Incident Response System",
          "Compliance Framework",
          "Vulnerability Assessment",
          "Security Analytics"
        ]}
        useCases={[
          {
            title: "Intelligent Threat Detection",
            description: "Deploy AI-powered security systems that continuously monitor network traffic and system behavior to identify and respond to potential threats in real-time.",
            impact: "Reduced threat detection time by 85% and improved incident response by 70%"
          },
          {
            title: "Automated Compliance Management",
            description: "Implement AI solutions that automate compliance monitoring, documentation, and reporting across multiple regulatory frameworks while ensuring continuous compliance.",
            impact: "Achieved 99.9% compliance rate and reduced audit preparation time by 60%"
          },
          {
            title: "Advanced Access Control",
            description: "Utilize AI for intelligent access management, including behavioral biometrics and contextual authentication, to enhance security while maintaining user convenience.",
            impact: "Reduced unauthorized access attempts by 95% and improved user authentication speed by 40%"
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
