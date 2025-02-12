'use client';

import { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

interface Feature {
  category: string;
  name: string;
  basePrice: number;
  description: string;
}

const categoryColors: Record<string, string> = {
  'Customer Service': '#FF6B6B',
  'Marketing': '#4ECDC4',
  'Inventory': '#45B7D1',
  'Staffing': '#96CEB4',
  'Analytics': '#FFEEAD',
  'Security': '#D4A5A5',
  'Automation': '#9B5DE5',
  'Enhanced': '#00BBF9'
};

const features: Feature[] = [
  // Customer Service
  { 
    category: 'Customer Service', 
    name: '24/7 Support', 
    basePrice: 99,
    description: 'Round-the-clock customer assistance'
  },
  { 
    category: 'Customer Service', 
    name: 'Escalation Agents', 
    basePrice: 129,
    description: 'Expert support for complex issues'
  },
  { 
    category: 'Customer Service', 
    name: 'Multilingual Support', 
    basePrice: 79,
    description: 'Support in multiple languages'
  },
  { 
    category: 'Customer Service', 
    name: 'Priority Queue', 
    basePrice: 69,
    description: 'VIP customer handling'
  },
  
  // Marketing
  { 
    category: 'Marketing', 
    name: 'Targeted Advertising', 
    basePrice: 69,
    description: 'AI-driven ad targeting'
  },
  { 
    category: 'Marketing', 
    name: 'Personalized Recommendations', 
    basePrice: 89,
    description: 'Custom product suggestions'
  },
  { 
    category: 'Marketing', 
    name: 'Campaign Analytics', 
    basePrice: 99,
    description: 'Detailed marketing insights'
  },
  { 
    category: 'Marketing', 
    name: 'Social Media Integration', 
    basePrice: 69,
    description: 'Automated social posting'
  },
  
  // Inventory
  { 
    category: 'Inventory', 
    name: 'Sales Trend Analysis', 
    basePrice: 119,
    description: 'Predictive inventory insights'
  },
  { 
    category: 'Inventory', 
    name: 'Dynamic Pricing', 
    basePrice: 129,
    description: 'Automated price optimization'
  },
  { 
    category: 'Inventory', 
    name: 'Stock Alerts', 
    basePrice: 69,
    description: 'Real-time inventory notifications'
  },
  { 
    category: 'Inventory', 
    name: 'Supplier Management', 
    basePrice: 99,
    description: 'Automated vendor coordination'
  },
  
  // Staffing
  { 
    category: 'Staffing', 
    name: 'Simulated Agents', 
    basePrice: 69,
    description: 'AI customer service agents'
  },
  { 
    category: 'Staffing', 
    name: 'Scalable Hours', 
    basePrice: 89,
    description: 'Flexible staffing solutions'
  },
  { 
    category: 'Staffing', 
    name: 'Training Module', 
    basePrice: 99,
    description: 'AI-powered staff training'
  },
  { 
    category: 'Staffing', 
    name: 'Performance Analytics', 
    basePrice: 69,
    description: 'Staff efficiency tracking'
  },
  
  // Analytics
  { 
    category: 'Analytics', 
    name: 'Real-Time Insights', 
    basePrice: 99,
    description: 'Live business analytics'
  },
  { 
    category: 'Analytics', 
    name: 'Custom Reports', 
    basePrice: 89,
    description: 'Tailored business reporting'
  },
  { 
    category: 'Analytics', 
    name: 'Predictive Analysis', 
    basePrice: 129,
    description: 'Future trend forecasting'
  },
  { 
    category: 'Analytics', 
    name: 'Data Visualization', 
    basePrice: 69,
    description: 'Interactive data dashboards'
  },
  
  // Security
  { 
    category: 'Security', 
    name: 'Fraud Detection', 
    basePrice: 129,
    description: 'AI-powered security monitoring'
  },
  { 
    category: 'Security', 
    name: 'Compliance Agents', 
    basePrice: 119,
    description: 'Automated compliance checks'
  },
  { 
    category: 'Security', 
    name: 'Data Encryption', 
    basePrice: 99,
    description: 'Enhanced data protection'
  },
  { 
    category: 'Security', 
    name: 'Access Control', 
    basePrice: 89,
    description: 'Smart permission management'
  },
  
  // Automation
  { 
    category: 'Automation', 
    name: 'Order Processing', 
    basePrice: 69,
    description: 'Automated order handling'
  },
  { 
    category: 'Automation', 
    name: 'Data Entry', 
    basePrice: 49,
    description: 'Automated data processing'
  },
  { 
    category: 'Automation', 
    name: 'Workflow Builder', 
    basePrice: 99,
    description: 'Custom automation flows'
  },
  { 
    category: 'Automation', 
    name: 'Task Scheduling', 
    basePrice: 69,
    description: 'Automated task management'
  },
  
  // Enhanced
  { 
    category: 'Enhanced', 
    name: 'Concierge Services', 
    basePrice: 99,
    description: 'Premium customer experience'
  },
  { 
    category: 'Enhanced', 
    name: 'API Integration', 
    basePrice: 129,
    description: 'Custom API development'
  },
  { 
    category: 'Enhanced', 
    name: 'White Labeling', 
    basePrice: 169,
    description: 'Branded AI solutions'
  },
  { 
    category: 'Enhanced', 
    name: 'Priority Support', 
    basePrice: 99,
    description: '24/7 dedicated support'
  },
];

export default function PricingCalculator() {
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [chartData, setChartData] = useState<any>(null);

  const handleFeatureToggle = (featureName: string) => {
    setSelectedFeatures(prev => 
      prev.includes(featureName)
        ? prev.filter(f => f !== featureName)
        : [...prev, featureName]
    );
  };

  const calculateCosts = () => {
    const categoryCosts = features.reduce((acc, feature) => {
      if (selectedFeatures.includes(feature.name)) {
        acc[feature.category] = (acc[feature.category] || 0) + feature.basePrice;
      }
      return acc;
    }, {} as Record<string, number>);

    return {
      labels: Object.keys(categoryCosts),
      datasets: [{
        label: 'Estimated Monthly Cost ($)',
        data: Object.values(categoryCosts),
        backgroundColor: Object.keys(categoryCosts).map(category => 
          categoryColors[category] ? `${categoryColors[category]}CC` : '#c49d17CC'
        ),
        borderColor: Object.keys(categoryCosts).map(category => 
          categoryColors[category] || '#c49d17'
        ),
        borderWidth: 1,
      }],
    };
  };

  useEffect(() => {
    setChartData(calculateCosts());
  }, [selectedFeatures]);

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          color: '#c49d17'
        }
      },
      title: {
        display: true,
        text: 'Cost Breakdown by Category',
        color: '#c49d17',
        font: {
          size: 16
        }
      },
      tooltip: {
        callbacks: {
          label: (context: any) => {
            return `Cost: $${context.raw}`;
          }
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Cost ($)',
          color: '#c49d17'
        },
        ticks: {
          color: '#c49d17'
        },
        grid: {
          color: 'rgba(196, 157, 23, 0.1)'
        }
      },
      x: {
        ticks: {
          color: '#c49d17'
        },
        grid: {
          color: 'rgba(196, 157, 23, 0.1)'
        }
      }
    },
  };

  const totalCost = selectedFeatures.reduce((sum, feature) => {
    const featureData = features.find(f => f.name === feature);
    return sum + (featureData?.basePrice || 0);
  }, 0);

  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-[#c49d17] mb-4">
          Build Your Perfect AI Solution
        </h2>
        <p className="text-xl text-white/90 max-w-3xl mx-auto mb-2">
          Customize your AI toolkit with our interactive cost calculator. Select the features that match your business needs and instantly see your personalized pricing estimate.
        </p>
        <p className="text-lg text-white/80 max-w-2xl mx-auto">
          Call us at 0468 609 702 to arrange a free consultation and demonstration.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {Array.from(new Set(features.map(f => f.category))).map(category => (
          <div 
            key={category} 
            className="border border-[#c49d17]/20 rounded-lg p-4 bg-gray-900/50 backdrop-blur-sm"
            style={{
              borderLeft: `8px solid ${categoryColors[category] || '#c49d17'}`
            }}
          >
            <h3 className="font-semibold mb-3 text-[#c49d17]">{category}</h3>
            {features.filter(f => f.category === category).map(feature => (
              <div key={feature.name} className="flex items-start mb-3">
                <input
                  type="checkbox"
                  id={feature.name}
                  checked={selectedFeatures.includes(feature.name)}
                  onChange={() => handleFeatureToggle(feature.name)}
                  className="mr-2 mt-1 accent-[#c49d17]"
                />
                <div>
                  <label htmlFor={feature.name} className="text-sm text-white hover:text-[#c49d17] transition-colors block">
                    {feature.name}
                  </label>
                  <span className="text-xs text-white/90">{feature.description}</span>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-[#c49d17]/20">
          <div className="text-center mb-4">
            <h3 className="text-xl font-semibold text-[#c49d17] mb-2">
              Selected Features Cost
            </h3>
            <p className="text-2xl font-bold text-[#c49d17]">
              ${totalCost}/month
            </p>
          </div>
          <div className="space-y-2">
            {selectedFeatures.map(feature => {
              const featureData = features.find(f => f.name === feature);
              return (
                <div key={feature} className="flex justify-between text-sm">
                  <span className="text-gray-300">{feature}</span>
                  <span className="text-[#c49d17]">${featureData?.basePrice}/mo</span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-gray-900/50 backdrop-blur-sm p-4 rounded-lg border border-[#c49d17]/20">
          {chartData && <Bar data={chartData} options={chartOptions} />}
        </div>
      </div>
    </div>
  );
}
