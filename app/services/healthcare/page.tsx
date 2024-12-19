'use client'
import ServicePage from '../../components/ServicePage';
import Chat from '../../components/Chat';

import { generateHealthcareMetadata } from '../../metadata-config';
export const metadata = generateHealthcareMetadata();


export default function HealthcarePage() {
  return (
    <div>
      <ServicePage
        title="Healthcare Solutions"
        description="Enhance patient care and streamline medical operations with our AI-powered healthcare solutions. We help healthcare providers optimize their processes, improve patient outcomes, and maintain regulatory compliance while reducing administrative burden."
        features={[
          "Patient Data Management",
          "Appointment Scheduling Automation",
          "Medical Record Processing",
          "Clinical Decision Support",
          "Healthcare Workflow Automation",
          "Patient Engagement Tools",
          "Compliance Monitoring",
          "Medical Billing Automation"
        ]}
        benefits={[
          "Improved Patient Care",
          "Reduced Administrative Burden",
          "Enhanced Clinical Decision Making",
          "Better Resource Allocation",
          "Increased Operational Efficiency",
          "Improved Patient Satisfaction"
        ]}
        useCases={[
          {
            title: "Automated Patient Scheduling",
            description: "Intelligent scheduling system that optimizes appointment booking, reduces no-shows, and manages patient flow efficiently."
          },
          {
            title: "Medical Records Management",
            description: "Automated processing and organization of medical records with intelligent data extraction and categorization."
          },
          {
            title: "Clinical Workflow Optimization",
            description: "Streamline clinical workflows with AI-powered task management and resource allocation systems."
          }
        ]}
      />
      <div className="fixed bottom-8 right-8 z-50">
        <Chat />
      </div>
    </div>
  );
}
