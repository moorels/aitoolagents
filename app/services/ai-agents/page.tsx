'use client'
import ServicePage from '../../components/ServicePage';
import Chat from '../../components/Chat';

export default function AIAgentsPage() {
  return (
    <div>
      <ServicePage
        title="AI Agents Solutions"
        description="Empower your operations with intelligent AI agents that automate complex tasks and decision-making processes. Our advanced agents combine machine learning, natural language processing, and autonomous decision-making capabilities to handle sophisticated workflows and interactions."
        features={[
          "Autonomous Decision Making",
          "Natural Language Understanding",
          "Task Automation",
          "Learning and Adaptation",
          "Multi-Agent Coordination",
          "Process Optimization",
          "Real-time Response",
          "Contextual Awareness"
        ]}
        benefits={[
          "Enhanced Operational Efficiency",
          "Reduced Manual Intervention",
          "Improved Decision Making",
          "24/7 Operation Capability",
          "Scalable Performance",
          "Consistent Service Delivery"
        ]}
        useCases={[
          {
            title: "Intelligent Process Automation",
            description: "Deploy AI agents to automate complex business processes with intelligent decision-making capabilities."
          },
          {
            title: "Customer Interaction Management",
            description: "Implement AI agents that handle customer inquiries and support requests with natural language understanding."
          },
          {
            title: "Workflow Optimization",
            description: "Utilize AI agents to analyze and optimize business workflows for maximum efficiency and effectiveness."
          }
        ]}
      />
      <div className="fixed bottom-8 right-8 z-50">
        <Chat />
      </div>
    </div>
  );
}
