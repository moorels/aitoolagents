'use client'
import ServicePageTemplate from '../../components/ServicePageTemplate';
import Chat from '../../components/Chat';

export default function AIAgenticSolutionsPage() {
  return (
    <div>
      <ServicePageTemplate
        title="AI Agentic Solutions"
        description="Empower your business with advanced AI agents that can think, learn, and act autonomously to solve complex problems. Our agentic solutions combine cutting-edge AI technologies with sophisticated decision-making capabilities to deliver intelligent automation across your organization."
        benefits={[
          "Autonomous Decision Making",
          "Continuous Learning",
          "Complex Problem Solving",
          "Adaptive Behavior",
          "Improved Efficiency",
          "Reduced Human Error",
          "Scalable Operations",
          "Real-time Optimization"
        ]}
        features={[
          "Multi-Agent Systems",
          "Reinforcement Learning",
          "Natural Language Processing",
          "Decision Support",
          "Task Automation",
          "Knowledge Management",
          "Adaptive Planning",
          "Performance Analytics"
        ]}
        useCases={[
          {
            title: "Autonomous Business Operations",
            description: "Deploy intelligent agents that autonomously manage and optimize business processes, making real-time decisions and adjustments based on changing conditions.",
            impact: "Improved operational efficiency by 70% and reduced decision-making time by 85%"
          },
          {
            title: "Collaborative Problem Solving",
            description: "Implement multi-agent systems that work together to solve complex business challenges, sharing information and coordinating actions across different domains.",
            impact: "Increased problem resolution speed by 60% and improved solution quality by 45%"
          },
          {
            title: "Adaptive Resource Management",
            description: "Utilize AI agents to dynamically allocate and optimize resources across your organization, adapting to changing demands and priorities in real-time.",
            impact: "Optimized resource utilization by 55% and reduced operational costs by 40%"
          }
        ]}
      />
      <div className="fixed bottom-8 right-8 z-50">
        <Chat />
      </div>
    </div>
  );
}
