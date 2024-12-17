'use client'
import ServicePage from '../../components/ServicePage';

export default function AIAgentsPage() {
  return (
    <ServicePage
      title="AI Agents"
      description="Empower your operations with intelligent AI agents that work alongside your team to enhance productivity and decision-making. Our advanced AI agents adapt to your business processes and continuously learn to provide better results over time."
      features={[
        "Autonomous Task Execution",
        "Natural Language Processing",
        "Adaptive Learning Capabilities",
        "Multi-Agent Coordination",
        "Process Automation",
        "Decision Support",
        "Real-time Monitoring",
        "Performance Analytics"
      ]}
      benefits={[
        "Increased Productivity",
        "24/7 Operation Capability",
        "Reduced Human Error",
        "Scalable Operations",
        "Consistent Performance",
        "Continuous Improvement"
      ]}
      useCases={[
        {
          title: "Automated Customer Support",
          description: "AI agents that handle customer inquiries and support tickets automatically, learning and improving from each interaction."
        },
        {
          title: "Process Automation",
          description: "Intelligent agents that automate complex business processes while adapting to changing conditions."
        },
        {
          title: "Decision Support",
          description: "AI agents that assist human decision-makers by analyzing data and providing actionable insights."
        }
      ]}
    />
  );
}
