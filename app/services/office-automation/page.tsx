'use client'
import ServicePageTemplate from '../../components/ServicePageTemplate';
import Chat from '../../components/Chat';
import ScrollToTop from '../../components/ScrollToTop';

export default function OfficeAutomationPage() {
  return (
    <div>
      <ServicePageTemplate
        title="Office Automation"
        description="Transform your office operations with AI-powered automation solutions that streamline workflows, reduce manual tasks, and enhance productivity. Our intelligent systems optimize everyday office processes while ensuring accuracy and compliance."
        benefits={[
          "Increased Productivity",
          "Reduced Manual Work",
          "Improved Accuracy",
          "Better Resource Allocation",
          "Enhanced Collaboration",
          "Streamlined Workflows",
          "Cost Reduction",
          "Data-Driven Insights"
        ]}
        features={[
          "Document Processing",
          "Workflow Automation",
          "Meeting Scheduling",
          "Email Management",
          "Task Prioritization",
          "Resource Planning",
          "Performance Tracking",
          "Integration Capabilities"
        ]}
        useCases={[
          {
            title: "Intelligent Document Management",
            description: "Implement AI-powered document processing that automatically categorizes, extracts data, and routes documents to appropriate departments while maintaining searchable digital archives.",
            impact: "Reduced document processing time by 90% and improved document retrieval speed by 75%"
          },
          {
            title: "Smart Meeting Assistant",
            description: "Deploy AI systems that handle meeting scheduling, generate automated summaries, track action items, and facilitate follow-ups to ensure productive meetings and accountability.",
            impact: "Decreased meeting scheduling time by 80% and improved action item completion rate by 65%"
          },
          {
            title: "Email Intelligence",
            description: "Utilize AI to automatically categorize, prioritize, and respond to emails, while identifying important action items and maintaining organized communication threads.",
            impact: "Reduced email response time by 70% and improved email organization efficiency by 85%"
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
