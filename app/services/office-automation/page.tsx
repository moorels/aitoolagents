'use client'
import ServicePage from '../../components/ServicePage';
import Chat from '../../components/Chat';

import { generateOfficeAutomationMetadata } from '../../metadata-config';
export const metadata = generateOfficeAutomationMetadata();

export default function OfficeAutomationPage() {
  return (
    <div>
      <ServicePage
        title="Office Automation"
        description="Streamline your office operations with intelligent automation solutions that reduce manual tasks, improve workflow efficiency, and enhance productivity. Our AI-powered systems transform traditional office processes into seamless digital workflows."
        features={[
          "Intelligent Document Processing",
          "Automated Data Entry and Validation",
          "Smart Calendar Management",
          "Email Classification and Routing",
          "Meeting Scheduling and Coordination",
          "Document Version Control",
          "Automated Report Generation",
          "Digital Asset Management"
        ]}
        benefits={[
          "Increased Productivity",
          "Reduced Manual Errors",
          "Time and Cost Savings",
          "Improved Workflow Efficiency",
          "Enhanced Data Accuracy",
          "Better Resource Allocation"
        ]}
        useCases={[
          {
            title: "Document Processing",
            description: "Automatically process, categorize, and store documents while extracting key information for easy retrieval and analysis."
          },
          {
            title: "Meeting Management",
            description: "Streamline meeting scheduling, note-taking, and follow-up tasks with AI-powered coordination tools."
          },
          {
            title: "Workflow Automation",
            description: "Create intelligent workflows that automatically route tasks, notify relevant team members, and track progress."
          }
        ]}
      />
      <div className="fixed bottom-8 right-8 z-50">
        <Chat />
      </div>
    </div>
  );
}
