'use client'
import ServicePage from '../../components/ServicePage';

export default function AIAgenticSolutionsPage() {
  return (
    <ServicePage
      title="AI Agentic Solutions"
      description="Experience the next generation of AI with our agentic solutions that demonstrate autonomous decision-making and proactive problem-solving capabilities. Our AI agents work independently while maintaining alignment with your business goals and ethical guidelines."
      features={[
        "Autonomous Decision Making",
        "Goal-Oriented Behavior",
        "Self-Learning Capabilities",
        "Ethical AI Framework",
        "Proactive Problem Solving",
        "Context-Aware Operations",
        "Multi-Agent Collaboration",
        "Adaptive Strategy Development"
      ]}
      benefits={[
        "Enhanced Operational Autonomy",
        "Reduced Human Intervention",
        "Improved Problem Resolution",
        "Strategic Decision Support",
        "Increased Operational Efficiency",
        "Future-Ready Solutions"
      ]}
      useCases={[
        {
          title: "Autonomous Operations",
          description: "AI agents that independently manage and optimize business processes while maintaining alignment with organizational goals."
        },
        {
          title: "Strategic Planning",
          description: "Agentic systems that analyze market trends and provide strategic recommendations for business growth."
        },
        {
          title: "Resource Optimization",
          description: "Self-learning agents that continuously optimize resource allocation and utilization across operations."
        }
      ]}
    />
  );
}
