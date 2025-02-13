'use client';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement,
  RadialLinearScale,
  Filler,
} from 'chart.js';
import { Bar, Pie, Line, Doughnut } from 'react-chartjs-2';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import ScrollToTop from '../components/ScrollToTop';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement,
  RadialLinearScale,
  Filler
);

const baseOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'bottom' as const,
      labels: {
        color: '#ffffff',
      },
    },
    title: {
      display: true,
      color: '#ffffff',
    },
  },
};

const lineOptions = {
  ...baseOptions,
  scales: {
    y: {
      ticks: { color: '#ffffff' },
      grid: { color: 'rgba(255, 255, 255, 0.1)' },
    },
    x: {
      ticks: { color: '#ffffff' },
      grid: { color: 'rgba(255, 255, 255, 0.1)' },
    },
  },
};

const radarOptions = {
  ...baseOptions,
  scales: {
    r: {
      ticks: { color: '#ffffff' },
      grid: { color: 'rgba(255, 255, 255, 0.1)' },
      pointLabels: { color: '#ffffff' },
    },
  },
};

export default function BusinessAnalytics() {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const revenueGrowthData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'With AI (Millions $)',
        data: [1.2, 1.5, 1.8, 2.2, 2.5, 2.8, 3.2, 3.5, 3.8, 4.2, 4.5, 4.8],
        borderColor: 'rgba(196, 157, 23, 1)',
        backgroundColor: 'rgba(196, 157, 23, 0.2)',
        fill: true,
      },
      {
        label: 'Without AI (Millions $)',
        data: [1.0, 1.1, 1.15, 1.2, 1.25, 1.3, 1.35, 1.4, 1.45, 1.5, 1.55, 1.6],
        borderColor: 'rgba(255, 115, 0, 1)',
        backgroundColor: 'rgba(255, 115, 0, 0.2)',
        fill: true,
      },
      {
        label: 'Growth Rate (%)',
        data: [20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75],
        borderColor: 'rgba(241, 177, 0, 1)',
        backgroundColor: 'rgba(241, 177, 0, 0.2)',
        fill: true,
      },
    ],
  };

  const costReductionData = {
    labels: [
      'Labor Costs',
      'Operations',
      'Maintenance',
      'Training',
      'Infrastructure',
      'Software Licenses',
      'Customer Service',
      'Quality Control',
    ],
    datasets: [
      {
        data: [30, 25, 20, 15, 10, 12, 18, 15],
        backgroundColor: [
          'rgba(196, 157, 23, 0.8)',
          'rgba(255, 115, 0, 0.8)',
          'rgba(241, 177, 0, 0.8)',
          'rgba(248, 190, 0, 0.8)',
          'rgba(255, 203, 0, 0.8)',
          'rgba(255, 220, 0, 0.8)',
          'rgba(255, 235, 0, 0.8)',
          'rgba(255, 248, 0, 0.8)',
        ],
      },
    ],
  };

  const metricsOverTimeData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Productivity Score',
        data: [85, 88, 92, 95, 97, 98, 98.5, 99, 99.2, 99.5, 99.7, 99.8],
        borderColor: 'rgba(196, 157, 23, 1)',
        backgroundColor: 'rgba(196, 157, 23, 0.2)',
        fill: true,
      },
      {
        label: 'Quality Score',
        data: [80, 85, 88, 92, 94, 96, 97, 98, 98.5, 99, 99.2, 99.5],
        borderColor: 'rgba(255, 115, 0, 1)',
        backgroundColor: 'rgba(255, 115, 0, 0.2)',
        fill: true,
      },
      {
        label: 'Employee Satisfaction',
        data: [75, 80, 85, 88, 90, 92, 94, 95, 96, 97, 98, 99],
        borderColor: 'rgba(241, 177, 0, 1)',
        backgroundColor: 'rgba(241, 177, 0, 0.2)',
        fill: true,
      },
    ],
  };

  const departmentImpactData2 = {
    labels: ['Sales', 'Marketing', 'Operations', 'Finance', 'HR', 'IT', 'R&D', 'Customer Support'],
    datasets: [
      {
        label: 'After AI Implementation (%)',
        data: [92, 88, 95, 85, 90, 98, 93, 96],
        backgroundColor: 'rgba(196, 157, 23, 0.8)',
      },
      {
        label: 'Before AI Implementation (%)',
        data: [70, 65, 72, 68, 70, 75, 71, 73],
        backgroundColor: 'rgba(255, 115, 0, 0.8)',
      },
      {
        label: 'Improvement (%)',
        data: [22, 23, 23, 17, 20, 23, 22, 23],
        backgroundColor: 'rgba(241, 177, 0, 0.8)',
      },
    ],
  };

  const processAutomationData = {
    labels: [
      'Workflow Automation',
      'Data Processing',
      'Report Generation',
      'Customer Support',
      'Quality Control',
      'Document Management',
      'Email Processing',
      'Invoice Processing',
    ],
    datasets: [
      {
        label: 'Automation Level (%)',
        data: [88, 95, 92, 85, 90, 87, 93, 91],
        backgroundColor: [
          'rgba(196, 157, 23, 0.8)',
          'rgba(255, 115, 0, 0.8)',
          'rgba(241, 177, 0, 0.8)',
          'rgba(248, 190, 0, 0.8)',
          'rgba(255, 203, 0, 0.8)',
          'rgba(255, 220, 0, 0.8)',
          'rgba(255, 235, 0, 0.8)',
          'rgba(255, 248, 0, 0.8)',
        ],
      },
    ],
  };

  const resourceOptimizationData2 = {
    labels: ['Q1-2024', 'Q2-2024', 'Q3-2024', 'Q4-2024', 'Q1-2025', 'Q2-2025'],
    datasets: [
      {
        label: 'Resource Utilization (%)',
        data: [75, 85, 92, 95, 97, 98],
        borderColor: 'rgba(196, 157, 23, 1)',
        backgroundColor: 'rgba(196, 157, 23, 0.2)',
        fill: true,
      },
      {
        label: 'Cost Efficiency (%)',
        data: [70, 82, 88, 93, 95, 97],
        borderColor: 'rgba(255, 115, 0, 1)',
        backgroundColor: 'rgba(255, 115, 0, 0.2)',
        fill: true,
      },
      {
        label: 'Waste Reduction (%)',
        data: [65, 75, 82, 88, 92, 95],
        borderColor: 'rgba(241, 177, 0, 1)',
        backgroundColor: 'rgba(241, 177, 0, 0.2)',
        fill: true,
      },
    ],
  };

  const customerExperienceData2 = {
    labels: [
      'Response Time',
      'First Contact Resolution',
      'CSAT Score',
      'NPS',
      'Customer Effort',
      'Issue Resolution Time',
      'Support Quality',
      'Customer Retention',
    ],
    datasets: [
      {
        label: 'Current Performance (%)',
        data: [95, 88, 92, 90, 87, 93, 91, 94],
        backgroundColor: 'rgba(196, 157, 23, 0.8)',
      },
      {
        label: 'Previous Performance (%)',
        data: [75, 70, 72, 68, 65, 71, 69, 73],
        backgroundColor: 'rgba(255, 115, 0, 0.8)',
      },
      {
        label: 'Industry Average (%)',
        data: [82, 78, 80, 76, 75, 79, 77, 81],
        backgroundColor: 'rgba(241, 177, 0, 0.8)',
      },
    ],
  };

  const aiCapabilityData2 = {
    labels: [
      'Machine Learning',
      'Natural Language Processing',
      'Computer Vision',
      'Predictive Analytics',
      'Automation',
      'Deep Learning',
      'Speech Recognition',
      'Expert Systems',
    ],
    datasets: [
      {
        label: 'Capability Score (%)',
        data: [92, 88, 85, 90, 95, 87, 89, 91],
        backgroundColor: [
          'rgba(196, 157, 23, 0.8)',
          'rgba(255, 115, 0, 0.8)',
          'rgba(241, 177, 0, 0.8)',
          'rgba(248, 190, 0, 0.8)',
          'rgba(255, 203, 0, 0.8)',
          'rgba(255, 220, 0, 0.8)',
          'rgba(255, 235, 0, 0.8)',
          'rgba(255, 248, 0, 0.8)',
        ],
      },
    ],
  };

  const efficiencyAutomationData2 = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Efficiency Score (%)',
        data: [70, 78, 85, 90, 93, 95, 96, 97, 98, 98.5, 99, 99.5],
        borderColor: 'rgba(196, 157, 23, 1)',
        backgroundColor: 'rgba(196, 157, 23, 0.2)',
        fill: true,
      },
      {
        label: 'Automation Level (%)',
        data: [65, 75, 82, 88, 92, 95, 96, 97, 98, 98.5, 99, 99.5],
        borderColor: 'rgba(255, 115, 0, 1)',
        backgroundColor: 'rgba(255, 115, 0, 0.2)',
        fill: true,
      },
      {
        label: 'Cost Savings (%)',
        data: [60, 70, 78, 85, 89, 92, 94, 95, 96, 97, 98, 99],
        borderColor: 'rgba(241, 177, 0, 1)',
        backgroundColor: 'rgba(241, 177, 0, 0.2)',
        fill: true,
      },
    ],
  };

  const workloadReductionData2 = {
    labels: [
      'Manual Tasks',
      'Data Entry',
      'Report Generation',
      'Customer Support',
      'Administrative',
      'Documentation',
      'Quality Checks',
      'Training',
    ],
    datasets: [
      {
        label: 'Current Workload (Hours/Week)',
        data: [30, 25, 20, 35, 28, 22, 18, 15],
        backgroundColor: 'rgba(196, 157, 23, 0.8)',
      },
      {
        label: 'Previous Workload (Hours/Week)',
        data: [100, 100, 100, 100, 100, 100, 100, 100],
        backgroundColor: 'rgba(255, 115, 0, 0.8)',
      },
      {
        label: 'Time Saved (%)',
        data: [70, 75, 80, 65, 72, 78, 82, 85],
        backgroundColor: 'rgba(241, 177, 0, 0.8)',
      },
    ],
  };

  const satisfactionMetricsData = {
    labels: ['Very Satisfied', 'Satisfied', 'Neutral', 'Dissatisfied', 'Very Dissatisfied'],
    datasets: [
      {
        label: 'After AI',
        data: [45, 35, 15, 4, 1],
        backgroundColor: 'rgba(196, 157, 23, 0.8)',
      },
      {
        label: 'Before AI',
        data: [20, 30, 25, 15, 10],
        backgroundColor: 'rgba(255, 115, 0, 0.8)',
      },
    ],
  };

  const inventoryOptimizationData = {
    labels: ['Stock Accuracy', 'Order Fulfillment', 'Storage Efficiency', 'Demand Prediction', 'Supply Chain'],
    datasets: [
      {
        label: 'Current Performance',
        data: [95, 92, 88, 94, 90],
        backgroundColor: 'rgba(196, 157, 23, 0.8)',
      },
      {
        label: 'Previous Performance',
        data: [75, 72, 68, 74, 70],
        backgroundColor: 'rgba(255, 115, 0, 0.8)',
      },
    ],
  };

  const employeeEfficiencyData = {
    labels: ['Task Completion', 'Quality', 'Collaboration', 'Innovation', 'Learning'],
    datasets: [
      {
        label: 'Current',
        data: [90, 85, 88, 92, 87],
        backgroundColor: 'rgba(196, 157, 23, 0.5)',
      },
      {
        label: 'Previous',
        data: [70, 65, 68, 72, 67],
        backgroundColor: 'rgba(255, 115, 0, 0.5)',
      },
    ],
  };

  const customerEngagementData = {
    labels: ['Website', 'Mobile App', 'Social Media', 'Email', 'Chat'],
    datasets: [
      {
        data: [35, 25, 20, 15, 5],
        backgroundColor: [
          'rgba(196, 157, 23, 0.8)',
          'rgba(255, 115, 0, 0.8)',
          'rgba(241, 177, 0, 0.8)',
          'rgba(248, 190, 0, 0.8)',
          'rgba(255, 203, 0, 0.8)',
        ],
      },
    ],
  };

  const operationalEfficiencyData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Efficiency Score',
        data: [75, 82, 88, 92, 95, 98],
        borderColor: 'rgba(196, 157, 23, 1)',
        backgroundColor: 'rgba(196, 157, 23, 0.2)',
        fill: true,
      },
    ],
  };

  const marketingROIData = {
    labels: ['Digital', 'Social', 'Email', 'Content', 'PPC'],
    datasets: [
      {
        label: 'ROI %',
        data: [250, 180, 220, 190, 210],
        backgroundColor: [
          'rgba(196, 157, 23, 0.8)',
          'rgba(255, 115, 0, 0.8)',
          'rgba(241, 177, 0, 0.8)',
          'rgba(248, 190, 0, 0.8)',
          'rgba(255, 203, 0, 0.8)',
        ],
      },
    ],
  };

  const aiPredictionData = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [
      {
        label: 'Prediction Accuracy',
        data: [92, 94, 96, 98],
        borderColor: 'rgba(196, 157, 23, 1)',
        backgroundColor: 'rgba(196, 157, 23, 0.2)',
        fill: true,
      },
    ],
  };

  const customerLifetimeData = {
    labels: ['Segment A', 'Segment B', 'Segment C', 'Segment D'],
    datasets: [
      {
        label: 'After AI',
        data: [2500, 1800, 1200, 800],
        backgroundColor: 'rgba(196, 157, 23, 0.8)',
      },
      {
        label: 'Before AI',
        data: [1500, 1000, 700, 400],
        backgroundColor: 'rgba(255, 115, 0, 0.8)',
      },
    ],
  };

  const crossSellingData = {
    labels: ['Product A', 'Product B', 'Product C', 'Product D', 'Product E'],
    datasets: [
      {
        label: 'Success Rate',
        data: [85, 78, 82, 75, 80],
        backgroundColor: 'rgba(196, 157, 23, 0.8)',
      },
      {
        label: 'Target Rate',
        data: [90, 85, 88, 82, 85],
        backgroundColor: 'rgba(255, 115, 0, 0.8)',
      },
    ],
  };

  const chatbotPerformanceData = {
    labels: ['Resolution Rate', 'Response Time', 'User Satisfaction', 'Accuracy', 'Availability'],
    datasets: [
      {
        label: '24-Hour Performance',
        data: [92, 95, 88, 90, 100],
        backgroundColor: 'rgba(196, 157, 23, 0.8)',
        borderColor: 'rgba(196, 157, 23, 1)',
        fill: true,
      },
    ],
  };

  const multilingualSupportData = {
    labels: ['English', 'Spanish', 'French', 'German', 'Chinese', 'Japanese'],
    datasets: [
      {
        label: 'Support Coverage',
        data: [100, 95, 90, 85, 80, 75],
        backgroundColor: [
          'rgba(196, 157, 23, 0.8)',
          'rgba(255, 115, 0, 0.8)',
          'rgba(241, 177, 0, 0.8)',
          'rgba(248, 190, 0, 0.8)',
          'rgba(255, 203, 0, 0.8)',
          'rgba(255, 220, 0, 0.8)',
        ],
      },
    ],
  };

  const resolutionDistributionData = {
    labels: ['AI Resolved', 'Human Assisted', 'Escalated'],
    datasets: [
      {
        data: [70, 20, 10],
        backgroundColor: [
          'rgba(196, 157, 23, 0.8)',
          'rgba(255, 115, 0, 0.8)',
          'rgba(241, 177, 0, 0.8)',
        ],
      },
    ],
  };

  const customerJourneyData = {
    labels: ['Awareness', 'Consideration', 'Purchase', 'Retention', 'Advocacy'],
    datasets: [
      {
        label: 'Current Stage',
        data: [95, 88, 92, 90, 85],
        backgroundColor: [
          'rgba(196, 157, 23, 0.8)',
          'rgba(255, 115, 0, 0.8)',
          'rgba(241, 177, 0, 0.8)',
          'rgba(248, 190, 0, 0.8)',
          'rgba(255, 203, 0, 0.8)',
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Interactive Business Analytics</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-800 p-6 rounded-lg shadow-lg"
        >
          <h2 className="text-xl font-semibold mb-4">Revenue Growth Comparison</h2>
          <div className="h-80">
            <Line options={lineOptions} data={revenueGrowthData} />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-800 p-6 rounded-lg shadow-lg"
        >
          <h2 className="text-xl font-semibold mb-4">Cost Reduction Analysis</h2>
          <div className="h-80">
            <Pie options={baseOptions} data={costReductionData} />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-800 p-6 rounded-lg shadow-lg"
        >
          <h2 className="text-xl font-semibold mb-4">Satisfaction Metrics</h2>
          <div className="h-80">
            <Bar options={lineOptions} data={satisfactionMetricsData} />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-800 p-6 rounded-lg shadow-lg"
        >
          <h2 className="text-xl font-semibold mb-4">Inventory Optimization</h2>
          <div className="h-80">
            <Bar options={lineOptions} data={inventoryOptimizationData} />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-800 p-6 rounded-lg shadow-lg"
        >
          <h2 className="text-xl font-semibold mb-4">Employee Efficiency</h2>
          <div className="h-80">
            <Bar options={lineOptions} data={employeeEfficiencyData} />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-800 p-6 rounded-lg shadow-lg"
        >
          <h2 className="text-xl font-semibold mb-4">Customer Engagement</h2>
          <div className="h-80">
            <Doughnut options={baseOptions} data={customerEngagementData} />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-800 p-6 rounded-lg shadow-lg"
        >
          <h2 className="text-xl font-semibold mb-4">Operational Efficiency</h2>
          <div className="h-80">
            <Line options={lineOptions} data={operationalEfficiencyData} />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-800 p-6 rounded-lg shadow-lg"
        >
          <h2 className="text-xl font-semibold mb-4">Marketing ROI</h2>
          <div className="h-80">
            <Pie options={baseOptions} data={marketingROIData} />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-800 p-6 rounded-lg shadow-lg"
        >
          <h2 className="text-xl font-semibold mb-4">AI Sales Prediction</h2>
          <div className="h-80">
            <Line options={lineOptions} data={aiPredictionData} />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-800 p-6 rounded-lg shadow-lg"
        >
          <h2 className="text-xl font-semibold mb-4">Customer Lifetime Value</h2>
          <div className="h-80">
            <Bar options={lineOptions} data={customerLifetimeData} />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-800 p-6 rounded-lg shadow-lg"
        >
          <h2 className="text-xl font-semibold mb-4">Cross-Selling Success</h2>
          <div className="h-80">
            <Bar options={lineOptions} data={crossSellingData} />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-800 p-6 rounded-lg shadow-lg"
        >
          <h2 className="text-xl font-semibold mb-4">24-Hour Chatbot Performance</h2>
          <div className="h-80">
            <Line options={lineOptions} data={chatbotPerformanceData} />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-800 p-6 rounded-lg shadow-lg"
        >
          <h2 className="text-xl font-semibold mb-4">Multilingual Support</h2>
          <div className="h-80">
            <Bar options={lineOptions} data={multilingualSupportData} />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-800 p-6 rounded-lg shadow-lg"
        >
          <h2 className="text-xl font-semibold mb-4">Resolution Distribution</h2>
          <div className="h-80">
            <Doughnut options={baseOptions} data={resolutionDistributionData} />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-800 p-6 rounded-lg shadow-lg"
        >
          <h2 className="text-xl font-semibold mb-4">Customer Journey</h2>
          <div className="h-80">
            <Doughnut options={baseOptions} data={customerJourneyData} />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-800 p-6 rounded-lg shadow-lg"
        >
          <h2 className="text-xl font-semibold mb-4">Performance Metrics Over Time</h2>
          <div className="h-80">
            <Line options={lineOptions} data={metricsOverTimeData} />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-800 p-6 rounded-lg shadow-lg"
        >
          <h2 className="text-xl font-semibold mb-4">Department-wise Impact</h2>
          <div className="h-80">
            <Bar options={lineOptions} data={departmentImpactData2} />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-800 p-6 rounded-lg shadow-lg"
        >
          <h2 className="text-xl font-semibold mb-4">Process Automation Metrics</h2>
          <div className="h-80">
            <Doughnut options={baseOptions} data={processAutomationData} />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-800 p-6 rounded-lg shadow-lg"
        >
          <h2 className="text-xl font-semibold mb-4">Resource Optimization</h2>
          <div className="h-80">
            <Line options={lineOptions} data={resourceOptimizationData2} />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-800 p-6 rounded-lg shadow-lg"
        >
          <h2 className="text-xl font-semibold mb-4">Customer Experience Metrics</h2>
          <div className="h-80">
            <Bar options={lineOptions} data={customerExperienceData2} />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-800 p-6 rounded-lg shadow-lg"
        >
          <h2 className="text-xl font-semibold mb-4">AI Capability Assessment</h2>
          <div className="h-80">
            <Pie options={baseOptions} data={aiCapabilityData2} />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-800 p-6 rounded-lg shadow-lg"
        >
          <h2 className="text-xl font-semibold mb-4">Efficiency vs Automation Level</h2>
          <div className="h-80">
            <Line options={lineOptions} data={efficiencyAutomationData2} />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-800 p-6 rounded-lg shadow-lg"
        >
          <h2 className="text-xl font-semibold mb-4">Staff Workload Reduction Analysis</h2>
          <div className="h-80">
            <Bar options={lineOptions} data={workloadReductionData2} />
          </div>
        </motion.div>
      </div>

      <ScrollToTop />
    </div>
  );
}
