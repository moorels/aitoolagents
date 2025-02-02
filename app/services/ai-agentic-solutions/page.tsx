'use client'
import ServicePageTemplate from '../../components/ServicePageTemplate';
import Chat from '../../components/Chat';

export default function AIAgenticSolutionsPage() {
  return (
    <div>
      <ServicePageTemplate
        title="AI Agentic Solutions"
        description="Revolutionize your business processes with advanced AI agentic solutions that combine autonomous decision-making with intelligent task execution. Our agentic AI systems learn, adapt, and evolve to provide increasingly sophisticated automation and decision support across your organization."
        benefits={[
          "Advanced Problem Solving",
          "Autonomous Operations",
          "Adaptive Learning",
          "Intelligent Automation",
          "Strategic Decision Support",
          "Resource Optimization",
          "Predictive Capabilities",
          "Enhanced Productivity"
        ]}
        features={[
          "Self-Learning Algorithms",
          "Goal-Oriented Behavior",
          "Dynamic Task Management",
          "Complex Problem Solving",
          "Adaptive Decision Making",
          "Multi-Agent Collaboration",
          "Real-Time Optimization",
          "Intelligent Resource Allocation"
        ]}
      />
      <div className="fixed bottom-8 right-8 z-50">
        <Chat />
      </div>
    </div>
  );
}
