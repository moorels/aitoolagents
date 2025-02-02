'use client'
import ServicePageTemplate from '../../components/ServicePageTemplate';
import Chat from '../../components/Chat';

export default function RetailAutomationPage() {
  return (
    <div>
      <ServicePageTemplate
        title="Retail Automation"
        description="Transform your retail operations with AI-powered automation solutions that optimize inventory management, enhance customer experience, and boost sales performance. Our intelligent systems provide real-time insights, automate routine tasks, and create personalized shopping experiences."
        benefits={[
          "Inventory Accuracy Improved by 95%",
          "Reduced Stockouts and Overstock",
          "Enhanced Customer Experience",
          "Optimized Pricing Strategies",
          "Improved Sales Forecasting",
          "Reduced Operational Costs",
          "Better Staff Allocation",
          "Increased Customer Loyalty"
        ]}
        features={[
          "Real-time Inventory Management",
          "Automated Reordering System",
          "Dynamic Pricing Optimization",
          "Customer Behavior Analytics",
          "Personalized Product Recommendations",
          "Smart POS Integration",
          "Supply Chain Optimization",
          "Sales Performance Tracking"
        ]}
      />
      <div className="fixed bottom-8 right-8 z-50">
        <Chat />
      </div>
    </div>
  );
}
