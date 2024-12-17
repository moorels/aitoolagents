'use client'
import ServicePage from '../../components/ServicePage';

export default function SecurityPage() {
  return (
    <ServicePage
      title="AI Security Solutions"
      description="Protect your AI systems and data with our comprehensive security solutions. We ensure your AI implementations maintain the highest standards of security while complying with relevant regulations and industry best practices."
      features={[
        "AI Model Protection",
        "Data Security Protocols",
        "Access Control Management",
        "Threat Detection",
        "Privacy Preservation",
        "Compliance Monitoring",
        "Audit Trail Management",
        "Incident Response Planning"
      ]}
      benefits={[
        "Enhanced Data Protection",
        "Regulatory Compliance",
        "Risk Mitigation",
        "Secure Operations",
        "Protected AI Assets",
        "Stakeholder Trust"
      ]}
      useCases={[
        {
          title: "Secure AI Development",
          description: "Implement security measures throughout the AI development lifecycle to protect models and data."
        },
        {
          title: "Data Privacy Management",
          description: "Ensure AI systems handle sensitive data in compliance with privacy regulations and best practices."
        },
        {
          title: "Security Monitoring",
          description: "Continuous monitoring and protection of AI systems against potential security threats and vulnerabilities."
        }
      ]}
    />
  );
}
