'use client'
import ServicePage from '../../components/ServicePage';
import Chat from '../../components/Chat';

export default function CustomAISolutionsPage() {
  return (
    <div>
      <ServicePage
        title="Custom AI Solutions"
        description="Transform your business with tailor-made AI solutions designed to address your unique challenges and opportunities. Our expert team develops custom AI applications that align perfectly with your business objectives and operational requirements."
        features={[
          "Customized AI Development",
          "Business Process Analysis",
          "Solution Architecture Design",
          "Integration Planning",
          "Performance Optimization",
          "Scalability Planning",
          "Custom Model Training",
          "Ongoing Support and Maintenance"
        ]}
        benefits={[
          "Tailored to Your Needs",
          "Competitive Advantage",
          "Improved Efficiency",
          "Scalable Solutions",
          "Future-Proof Technology",
          "ROI Optimization"
        ]}
        useCases={[
          {
            title: "Process Optimization",
            description: "Custom AI solutions that analyze and optimize your specific business processes for maximum efficiency."
          },
          {
            title: "Intelligent Automation",
            description: "Tailored automation solutions that address your unique operational challenges and requirements."
          },
          {
            title: "Data Analytics",
            description: "Custom AI models that extract meaningful insights from your specific data sources and formats."
          }
        ]}
      />
      <div className="fixed bottom-8 right-8 z-50">
        <Chat />
      </div>
    </div>
  );
}
