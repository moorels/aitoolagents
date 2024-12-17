'use client'
import ServicePage from '../../components/ServicePage';
import Chat from '../../components/Chat';

export default function DeploymentPage() {
  return (
    <div>
      <ServicePage
        title="AI Deployment Solutions"
        description="Streamline your AI deployment process with our comprehensive deployment solutions. We ensure smooth transition from development to production while maintaining performance, scalability, and reliability of your AI systems."
        features={[
          "Automated Deployment",
          "Environment Management",
          "Version Control",
          "Performance Monitoring",
          "Scalability Options",
          "Rollback Capabilities",
          "Deployment Testing",
          "Infrastructure Management"
        ]}
        benefits={[
          "Faster Time-to-Market",
          "Reduced Deployment Risks",
          "Improved Reliability",
          "Cost Optimization",
          "Seamless Updates",
          "Enhanced Monitoring"
        ]}
        useCases={[
          {
            title: "Production Deployment",
            description: "Deploy AI models to production environments with automated testing, monitoring, and rollback capabilities to ensure reliable operation."
          },
          {
            title: "Scalable Infrastructure",
            description: "Implement scalable infrastructure solutions that can handle growing demands while maintaining optimal performance and cost efficiency."
          },
          {
            title: "Continuous Integration",
            description: "Set up continuous integration and deployment pipelines for seamless updates and maintenance of AI systems."
          }
        ]}
      />
      <div className="fixed bottom-8 right-8 z-50">
        <Chat />
      </div>
    </div>
  );
}
