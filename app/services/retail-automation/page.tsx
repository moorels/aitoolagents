'use client'
import ServicePageTemplate from '../../components/ServicePageTemplate';
import Chat from '../../components/Chat';

export default function RetailAutomationPage() {
  return (
    <div>
      <ServicePageTemplate
        title="Retail Automation"
        description="Transform your retail operations with AI-powered automation solutions that optimize inventory management, enhance customer experience, and streamline operations. Our intelligent systems help you make data-driven decisions while improving efficiency and reducing costs."
        benefits={[
          "Improved Inventory Management",
          "Enhanced Customer Experience",
          "Reduced Operational Costs",
          "Optimized Pricing Strategy",
          "Better Demand Forecasting",
          "Streamlined Operations",
          "Increased Sales",
          "Real-time Analytics"
        ]}
        features={[
          "Inventory Optimization",
          "Dynamic Pricing",
          "Customer Analytics",
          "Supply Chain Management",
          "POS Integration",
          "Demand Forecasting",
          "Personalized Marketing",
          "Loss Prevention"
        ]}
        useCases={[
          {
            title: "Smart Inventory Management",
            description: "Implement AI-powered inventory management that predicts demand patterns, automates reordering, and optimizes stock levels across multiple locations in real-time.",
            impact: "Reduced stockouts by 75% and decreased carrying costs by 35%"
          },
          {
            title: "Dynamic Pricing Optimization",
            description: "Deploy AI algorithms that analyze market conditions, competitor pricing, and demand patterns to automatically adjust prices for maximum profitability.",
            impact: "Increased profit margins by 25% and improved sales volume by 40%"
          },
          {
            title: "Personalized Shopping Experience",
            description: "Utilize AI to analyze customer behavior and preferences, delivering personalized recommendations and targeted promotions across all channels.",
            impact: "Boosted customer engagement by 65% and increased repeat purchases by 45%"
          }
        ]}
      />
      <div className="fixed bottom-8 right-8 z-50">
        <Chat />
      </div>
    </div>
  );
}
