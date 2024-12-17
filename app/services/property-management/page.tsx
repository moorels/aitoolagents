'use client'
import ServicePage from '../../components/ServicePage';

export default function PropertyManagementPage() {
  return (
    <ServicePage
      title="Property Management Solutions"
      description="Revolutionize property management with AI-powered solutions that streamline operations, enhance tenant experience, and optimize maintenance processes. Our intelligent systems help property managers increase efficiency and reduce costs while improving service quality."
      features={[
        "Tenant Communication Automation",
        "Maintenance Request Management",
        "Rent Collection Automation",
        "Property Inspection Tools",
        "Lease Management",
        "Vendor Management",
        "Financial Reporting",
        "Occupancy Optimization"
      ]}
      benefits={[
        "Improved Tenant Satisfaction",
        "Reduced Administrative Work",
        "Better Maintenance Management",
        "Enhanced Property Performance",
        "Streamlined Operations",
        "Increased Revenue"
      ]}
      useCases={[
        {
          title: "Automated Maintenance Management",
          description: "Streamline maintenance requests with intelligent routing, scheduling, and follow-up systems."
        },
        {
          title: "Tenant Communication",
          description: "Automate tenant communications and inquiries with AI-powered response systems."
        },
        {
          title: "Property Performance Analytics",
          description: "Monitor and optimize property performance with advanced analytics and reporting tools."
        }
      ]}
    />
  );
}
