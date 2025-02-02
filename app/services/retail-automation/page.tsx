'use client'
import ServicePage from '../../components/ServicePage';
import Chat from '../../components/Chat';




export default function RetailAutomationPage() {
  return (
    <div>
      <ServicePage
        title="Retail Automation"
        description="Revolutionize your retail operations with AI-powered automation solutions that optimize inventory management, enhance customer experience, and drive sales growth. Our intelligent systems help you stay competitive in the evolving retail landscape."
        features={[
          "Inventory Management Optimization",
          "Automated Stock Replenishment",
          "Sales Forecasting",
          "Customer Behavior Analysis",
          "Dynamic Pricing Optimization",
          "Point of Sale Integration",
          "Supply Chain Automation",
          "Customer Loyalty Programs"
        ]}
        benefits={[
          "Optimized Inventory Levels",
          "Reduced Operational Costs",
          "Improved Customer Experience",
          "Enhanced Sales Performance",
          "Better Decision Making",
          "Streamlined Operations"
        ]}
        useCases={[
          {
            title: "Smart Inventory Management",
            description: "Automatically track, forecast, and optimize inventory levels across multiple locations using AI-powered analytics."
          },
          {
            title: "Personalized Customer Experience",
            description: "Deliver tailored product recommendations and promotions based on customer behavior and preferences."
          },
          {
            title: "Supply Chain Optimization",
            description: "Streamline supply chain operations with automated ordering, tracking, and delivery management systems."
          }
        ]}
      />
      <div className="fixed bottom-8 right-8 z-50">
        <Chat />
      </div>
    </div>
  );
}
