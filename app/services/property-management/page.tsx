'use client'
import ServicePage from '../../components/ServicePage';
import Chat from '../../components/Chat';

import { generatePropertyManagementMetadata } from '../../metadata-config';
export const metadata = generatePropertyManagementMetadata();

export default function PropertyManagementPage() {
  return (
    <div>
      <ServicePage
        title="Property Management Solutions"
        description="Transform property management operations with AI-powered solutions that streamline maintenance, optimize tenant experiences, and maximize property value. Our intelligent systems help property managers automate routine tasks and make data-driven decisions."
        features={[
          "Automated Maintenance Scheduling",
          "Smart Building Management",
          "Tenant Portal Integration",
          "Rent Collection Automation",
          "Property Inspection Tools",
          "Lease Management System",
          "Utility Usage Optimization",
          "Security System Integration"
        ]}
        benefits={[
          "Reduced Operating Costs",
          "Improved Tenant Satisfaction",
          "Enhanced Property Value",
          "Streamlined Maintenance",
          "Better Resource Allocation",
          "Increased Energy Efficiency"
        ]}
        useCases={[
          {
            title: "Smart Maintenance Management",
            description: "Implement predictive maintenance systems that identify potential issues before they become problems, automatically schedule repairs, and track maintenance history."
          },
          {
            title: "Automated Tenant Services",
            description: "Provide a digital platform for tenant communications, maintenance requests, rent payments, and document management."
          },
          {
            title: "Building Performance Optimization",
            description: "Monitor and optimize building systems for energy efficiency, comfort, and sustainability using IoT sensors and AI analytics."
          }
        ]}
      />
      <div className="fixed bottom-8 right-8 z-50">
        <Chat />
      </div>
    </div>
  );
}
