'use client'
import ServicePageTemplate from '../../components/ServicePageTemplate';
import Chat from '../../components/Chat';

export default function HealthcarePage() {
  return (
    <div>
      <ServicePageTemplate
        title="Healthcare"
        description="Transform healthcare delivery with AI-powered solutions that enhance patient care, streamline clinical workflows, and improve operational efficiency. Our intelligent systems support healthcare providers in making data-driven decisions while ensuring compliance and patient privacy."
        benefits={[
          "Enhanced Patient Care",
          "Improved Diagnosis Accuracy",
          "Reduced Medical Errors",
          "Streamlined Operations",
          "Better Resource Utilization",
          "Increased Efficiency",
          "Regulatory Compliance",
          "Cost Optimization"
        ]}
        features={[
          "Clinical Decision Support",
          "Patient Data Analytics",
          "Medical Imaging Analysis",
          "Treatment Planning",
          "Resource Management",
          "Workflow Optimization",
          "Compliance Monitoring",
          "Performance Tracking"
        ]}
        useCases={[
          {
            title: "AI-Powered Medical Imaging",
            description: "Deploy advanced AI algorithms for analyzing medical images (X-rays, MRIs, CT scans) to assist in early detection and diagnosis of conditions, improving accuracy and speed of diagnoses.",
            impact: "Increased diagnostic accuracy by 45% and reduced analysis time by 60%"
          },
          {
            title: "Patient Flow Optimization",
            description: "Implement AI systems to optimize patient scheduling, bed management, and resource allocation, reducing wait times and improving hospital efficiency.",
            impact: "Decreased average wait times by 55% and improved bed utilization by 40%"
          },
          {
            title: "Predictive Health Monitoring",
            description: "Utilize AI to analyze patient data in real-time, predicting potential health issues and enabling early intervention to prevent complications.",
            impact: "Reduced preventable complications by 65% and improved patient outcomes by 35%"
          }
        ]}
      />
      <div className="fixed bottom-8 right-8 z-50">
        <Chat />
      </div>
    </div>
  );
}
