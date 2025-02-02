'use client'
import ServicePageTemplate from '../../components/ServicePageTemplate';
import Chat from '../../components/Chat';

export default function DeploymentPage() {
  return (
    <div>
      <ServicePageTemplate
        title="Deployment"
        description="Streamline your AI solution deployment with our comprehensive deployment services that ensure smooth implementation, optimal performance, and seamless integration. Our expert team handles everything from infrastructure setup to monitoring and maintenance, ensuring your AI systems operate at peak efficiency."
        benefits={[
          "Rapid Implementation",
          "Minimal Disruption",
          "Optimized Performance",
          "Scalable Infrastructure",
          "Reliable Operations",
          "Continuous Monitoring",
          "Cost Efficiency",
          "Expert Support"
        ]}
        features={[
          "Automated Deployment",
          "Infrastructure Setup",
          "Performance Optimization",
          "Monitoring Systems",
          "Scaling Management",
          "Version Control",
          "Rollback Capabilities",
          "Documentation Support"
        ]}
        useCases={[
          {
            title: "Cloud-Native AI Deployment",
            description: "Deploy AI solutions using cloud-native architectures and containerization, ensuring scalability, reliability, and optimal resource utilization across multiple environments.",
            impact: "Achieved 99.99% system uptime and reduced deployment time by 75%"
          },
          {
            title: "Continuous Integration/Deployment",
            description: "Implement automated CI/CD pipelines for AI models and applications, enabling rapid updates and ensuring consistent quality across all deployments.",
            impact: "Reduced deployment cycles by 80% and improved deployment success rate to 99.5%"
          },
          {
            title: "Edge Computing Integration",
            description: "Deploy AI solutions to edge devices and local networks, optimizing performance and reducing latency while maintaining centralized management and monitoring.",
            impact: "Reduced latency by 90% and improved processing efficiency by 65%"
          }
        ]}
      />
      <div className="fixed bottom-8 right-8 z-50">
        <Chat />
      </div>
    </div>
  );
}
