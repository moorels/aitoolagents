'use client'
import ServicePage from '../../components/ServicePage';
import Chat from '../../components/Chat';

export default function AIAgenticSolutionsPage() {
  return (
    <div>
      <ServicePage
        title="AI Agentic Solutions"
        description="Revolutionize your business with advanced AI agentic solutions that combine autonomous decision-making with human-like reasoning capabilities. Our agentic AI systems work independently to solve complex problems while maintaining alignment with your business objectives."
        features={[
          "Autonomous Problem Solving",
          "Goal-Oriented Behavior",
          "Adaptive Learning Systems",
          "Multi-Agent Collaboration",
          "Human-AI Interaction",
          "Ethical Decision Framework",
          "Performance Self-Optimization",
          "Contextual Understanding"
        ]}
        benefits={[
          "Enhanced Problem-Solving",
          "Increased Autonomy",
          "Improved Adaptability",
          "Reduced Human Oversight",
          "Consistent Performance",
          "Scalable Operations"
        ]}
        useCases={[
          {
            title: "Complex Decision Making",
            description: "Deploy agentic AI systems that can analyze complex situations and make informed decisions autonomously while adhering to predefined business rules and ethical guidelines."
          },
          {
            title: "Autonomous Operations",
            description: "Implement self-managing AI agents that can handle complex operational tasks with minimal human intervention, adapting to changing conditions in real-time."
          },
          {
            title: "Intelligent Resource Management",
            description: "Utilize AI agents to optimize resource allocation and management across various business processes, ensuring maximum efficiency and effectiveness."
          }
        ]}
      />
      <div className="fixed bottom-8 right-8 z-50">
        <Chat />
      </div>
    </div>
  );
}
