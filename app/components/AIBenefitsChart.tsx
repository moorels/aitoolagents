import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { ChartData } from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const benefitsData = {
  "Virtual Customer Service Agents": {
    labels: ['Response Time', 'Customer Satisfaction', 'Cost Efficiency', 'Issue Resolution', 'Scalability', 'Availability'],
    datasets: [
      {
        label: 'After AI Implementation',
        data: [92, 88, 85, 90, 95, 98],
        backgroundColor: 'rgba(255, 180, 6, 0.8)',
        borderColor: 'rgba(255, 180, 6, 1)',
      },
      {
        label: 'Before AI Implementation',
        data: [45, 60, 40, 55, 30, 65],
        backgroundColor: 'rgba(75, 192, 192, 0.8)',
        borderColor: 'rgba(75, 192, 192, 1)',
      }
    ]
  },
  "AI-Powered Sales Assistants": {
    labels: ['Lead Conversion', 'Sales Efficiency', 'Customer Insights', 'Cross-selling', 'Time Savings', 'Deal Closure'],
    datasets: [
      {
        label: 'After AI Implementation',
        data: [88, 92, 95, 85, 90, 87],
        backgroundColor: 'rgba(255, 180, 6, 0.8)',
        borderColor: 'rgba(255, 180, 6, 1)',
      },
      {
        label: 'Before AI Implementation',
        data: [40, 45, 35, 30, 42, 38],
        backgroundColor: 'rgba(75, 192, 192, 0.8)',
        borderColor: 'rgba(75, 192, 192, 1)',
      }
    ]
  },
  "Automated Data Entry & Processing": {
    labels: ['Accuracy', 'Processing Speed', 'Error Reduction', 'Cost Savings', 'Data Volume', 'Compliance'],
    datasets: [
      {
        label: 'After AI Implementation',
        data: [98, 96, 95, 92, 94, 97],
        backgroundColor: 'rgba(255, 180, 6, 0.8)',
        borderColor: 'rgba(255, 180, 6, 1)',
      },
      {
        label: 'Before AI Implementation',
        data: [65, 35, 55, 40, 30, 60],
        backgroundColor: 'rgba(75, 192, 192, 0.8)',
        borderColor: 'rgba(75, 192, 192, 1)',
      }
    ]
  },
  "Customer Segmentation & Profiling": {
    labels: ['Targeting Accuracy', 'Personalization', 'Market Insights', 'ROI', 'Customer Retention', 'Campaign Success'],
    datasets: [
      {
        label: 'After AI Implementation',
        data: [94, 92, 96, 89, 91, 93],
        backgroundColor: 'rgba(255, 180, 6, 0.8)',
        borderColor: 'rgba(255, 180, 6, 1)',
      },
      {
        label: 'Before AI Implementation',
        data: [45, 40, 35, 42, 48, 38],
        backgroundColor: 'rgba(75, 192, 192, 0.8)',
        borderColor: 'rgba(75, 192, 192, 1)',
      }
    ]
  },
  "Automated Email Processing": {
    labels: ['Response Speed', 'Classification Accuracy', 'Volume Handling', 'Priority Detection', 'Integration', 'Automation'],
    datasets: [
      {
        label: 'After AI Implementation',
        data: [96, 93, 98, 92, 90, 95],
        backgroundColor: 'rgba(255, 180, 6, 0.8)',
        borderColor: 'rgba(255, 180, 6, 1)',
      },
      {
        label: 'Before AI Implementation',
        data: [40, 45, 35, 30, 42, 25],
        backgroundColor: 'rgba(75, 192, 192, 0.8)',
        borderColor: 'rgba(75, 192, 192, 1)',
      }
    ]
  },
  "Chatbot Development & Customization": {
    labels: ['Response Accuracy', 'User Engagement', 'Language Support', 'Integration Ease', 'Customization', 'Learning Rate'],
    datasets: [
      {
        label: 'After AI Implementation',
        data: [91, 89, 94, 93, 96, 92],
        backgroundColor: 'rgba(255, 180, 6, 0.8)',
        borderColor: 'rgba(255, 180, 6, 1)',
      },
      {
        label: 'Before AI Implementation',
        data: [35, 40, 30, 45, 38, 28],
        backgroundColor: 'rgba(75, 192, 192, 0.8)',
        borderColor: 'rgba(75, 192, 192, 1)',
      }
    ]
  },
  "AI-Powered Order Fulfillment": {
    labels: ['Order Accuracy', 'Processing Time', 'Inventory Management', 'Cost Reduction', 'Customer Updates', 'Scalability'],
    datasets: [
      {
        label: 'After AI Implementation',
        data: [97, 95, 93, 91, 94, 96],
        backgroundColor: 'rgba(255, 180, 6, 0.8)',
        borderColor: 'rgba(255, 180, 6, 1)',
      },
      {
        label: 'Before AI Implementation',
        data: [55, 40, 45, 35, 42, 30],
        backgroundColor: 'rgba(75, 192, 192, 0.8)',
        borderColor: 'rgba(75, 192, 192, 1)',
      }
    ]
  },
  "Intelligent Scheduling & Appointment Setting": {
    labels: ['Booking Accuracy', 'Resource Optimization', 'User Experience', 'Integration', 'Adaptability', 'Conflict Resolution'],
    datasets: [
      {
        label: 'After AI Implementation',
        data: [95, 93, 91, 94, 92, 96],
        backgroundColor: 'rgba(255, 180, 6, 0.8)',
        borderColor: 'rgba(255, 180, 6, 1)',
      },
      {
        label: 'Before AI Implementation',
        data: [45, 40, 50, 35, 38, 42],
        backgroundColor: 'rgba(75, 192, 192, 0.8)',
        borderColor: 'rgba(75, 192, 192, 1)',
      }
    ]
  },
  "AI-Driven Content Creation": {
    labels: ['Content Quality', 'Production Speed', 'SEO Performance', 'Engagement', 'Customization', 'Consistency'],
    datasets: [
      {
        label: 'After AI Implementation',
        data: [90, 98, 94, 89, 92, 95],
        backgroundColor: 'rgba(255, 180, 6, 0.8)',
        borderColor: 'rgba(255, 180, 6, 1)',
      },
      {
        label: 'Before AI Implementation',
        data: [55, 30, 40, 45, 35, 42],
        backgroundColor: 'rgba(75, 192, 192, 0.8)',
        borderColor: 'rgba(75, 192, 192, 1)',
      }
    ]
  },
  "Predictive Analytics & Forecasting": {
    labels: ['Prediction Accuracy', 'Data Processing', 'Model Adaptability', 'Real-time Analysis', 'Scalability', 'Integration'],
    datasets: [
      {
        label: 'After AI Implementation',
        data: [93, 95, 91, 94, 96, 92],
        backgroundColor: 'rgba(255, 180, 6, 0.8)',
        borderColor: 'rgba(255, 180, 6, 1)',
      },
      {
        label: 'Before AI Implementation',
        data: [40, 35, 30, 25, 38, 42],
        backgroundColor: 'rgba(75, 192, 192, 0.8)',
        borderColor: 'rgba(75, 192, 192, 1)',
      }
    ]
  },
  "AI-Powered Lead Scoring & Qualification": {
    labels: ['Scoring Accuracy', 'Processing Speed', 'Conversion Rate', 'Integration', 'Adaptability', 'ROI'],
    datasets: [
      {
        label: 'After AI Implementation',
        data: [94, 96, 92, 90, 93, 95],
        backgroundColor: 'rgba(255, 180, 6, 0.8)',
        borderColor: 'rgba(255, 180, 6, 1)',
      },
      {
        label: 'Before AI Implementation',
        data: [45, 35, 40, 38, 42, 30],
        backgroundColor: 'rgba(75, 192, 192, 0.8)',
        borderColor: 'rgba(75, 192, 192, 1)',
      }
    ]
  },
  "Real-Time Translation Services": {
    labels: ['Translation Accuracy', 'Processing Speed', 'Language Coverage', 'Cultural Context', 'Integration', 'Scalability'],
    datasets: [
      {
        label: 'After AI Implementation',
        data: [92, 97, 94, 90, 93, 95],
        backgroundColor: 'rgba(255, 180, 6, 0.8)',
        borderColor: 'rgba(255, 180, 6, 1)',
      },
      {
        label: 'Before AI Implementation',
        data: [55, 30, 40, 45, 35, 25],
        backgroundColor: 'rgba(75, 192, 192, 0.8)',
        borderColor: 'rgba(75, 192, 192, 1)',
      }
    ]
  }
} as const;

type BenefitsDataKey = keyof typeof benefitsData;

interface AIBenefitsChartProps {
  service: BenefitsDataKey;
}

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
      position: 'top' as const,
      labels: {
        color: '#ffffff',
      }
    },
    title: {
      display: true,
      text: 'Before vs After AI Implementation',
      color: '#dfb406',
      font: {
        size: 16,
      },
    },
    tooltip: {
      callbacks: {
        label: function(context: any) {
          return `${context.dataset.label}: ${context.raw}%`;
        }
      }
    }
  },
  scales: {
    y: {
      beginAtZero: true,
      max: 100,
      grid: {
        color: 'rgba(255, 255, 255, 0.1)',
      },
      ticks: {
        color: '#ffffff',
      }
    },
    x: {
      grid: {
        display: false,
      },
      ticks: {
        color: '#ffffff',
        maxRotation: 45,
        minRotation: 45,
      }
    }
  },
};

const AIBenefitsChart: React.FC<AIBenefitsChartProps> = ({ service }) => {
  const chartData: ChartData<'bar'> = {
    labels: [...benefitsData[service].labels],
    datasets: benefitsData[service].datasets.map(dataset => ({
      ...dataset
    }))
  };

  return (
    <div className="w-full h-[400px] p-4">
      <Bar options={options} data={chartData} />
    </div>
  );
};

export default AIBenefitsChart;
