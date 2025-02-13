'use client'
import ServicePageTemplate from '../../components/ServicePageTemplate';
import Chat from '../../components/Chat';
import ScrollToTop from '../../components/ScrollToTop';

export default function AIAgentsPage() {
  return (
    <div>
      <ServicePageTemplate
        title="AI Agents"
        description="Empower your business with intelligent AI agents that automate complex tasks, make informed decisions, and adapt to changing conditions. Our AI agents combine advanced machine learning with robust decision-making capabilities to deliver autonomous, efficient, and scalable solutions."
        benefits={[
          "Autonomous Task Execution",
          "Intelligent Decision Making",
          "Continuous Learning",
          "Improved Efficiency",
          "Reduced Human Error",
          "24/7 Operation Capability",
          "Scalable Performance",
          "Adaptable Solutions"
        ]}
        features={[
          "Advanced Machine Learning",
          "Natural Language Processing",
          "Autonomous Decision Making",
          "Real-time Adaptation",
          "Multi-agent Coordination",
          "Task Automation",
          "Performance Analytics",
          "Integration Capabilities"
        ]}
        useCases={[
          {
            title: "Customer Service Automation",
            description: "Implement AI agents to handle customer inquiries 24/7, providing instant responses to common questions and seamlessly escalating complex issues to human agents when necessary.",
            impact: "Reduced response time by 80% and increased customer satisfaction scores by 35%"
          },
          {
            title: "Intelligent Process Orchestration",
            description: "Deploy AI agents to coordinate and optimize complex business processes across multiple departments, automatically handling task allocation, monitoring progress, and adapting to bottlenecks.",
            impact: "Improved process efficiency by 60% and reduced operational costs by 40%"
          },
          {
            title: "Predictive Maintenance",
            description: "Utilize AI agents to monitor equipment performance, predict potential failures, and automatically schedule maintenance before issues occur, ensuring optimal operation of critical systems.",
            impact: "Decreased equipment downtime by 75% and maintenance costs by 50%"
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
