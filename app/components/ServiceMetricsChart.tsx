'use client';
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
import { motion } from 'framer-motion';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top' as const,
      labels: {
        color: '#ffffff',
      },
    },
    title: {
      display: true,
      text: 'Performance Metrics: Before vs After AI Implementation',
      color: '#dfb406',
      font: {
        size: 16,
      },
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      ticks: { 
        color: '#ffffff',
        callback: function(value: any) {
          return value + '%';
        }
      },
      grid: { color: 'rgba(255, 255, 255, 0.1)' },
    },
    x: {
      ticks: { color: '#ffffff' },
      grid: { color: 'rgba(255, 255, 255, 0.1)' },
    },
  },
};

const metricsData = {
  'customer-service': {
    labels: ['Response Time', 'Query Resolution', 'Customer Satisfaction', 'Agent Productivity', 'Service Coverage', 'First Contact Resolution'],
    datasets: [
      {
        label: 'After AI Implementation',
        data: [92, 88, 95, 90, 98, 85],
        backgroundColor: 'rgba(196, 157, 23, 0.8)',
      },
      {
        label: 'Before AI Implementation',
        data: [45, 50, 55, 40, 60, 35],
        backgroundColor: 'rgba(255, 115, 0, 0.8)',
      },
    ],
  },
  'office-automation': {
    labels: ['Task Completion', 'Document Processing', 'Workflow Efficiency', 'Resource Utilization', 'Error Reduction', 'Cost Savings'],
    datasets: [
      {
        label: 'After AI Implementation',
        data: [95, 90, 88, 92, 94, 89],
        backgroundColor: 'rgba(196, 157, 23, 0.8)',
      },
      {
        label: 'Before AI Implementation',
        data: [40, 35, 45, 50, 38, 42],
        backgroundColor: 'rgba(255, 115, 0, 0.8)',
      },
    ],
  },
  'retail-automation': {
    labels: ['Inventory Accuracy', 'Order Processing', 'Customer Experience', 'Sales Forecasting', 'Stock Management', 'Checkout Speed'],
    datasets: [
      {
        label: 'After AI Implementation',
        data: [96, 94, 90, 93, 95, 92],
        backgroundColor: 'rgba(196, 157, 23, 0.8)',
      },
      {
        label: 'Before AI Implementation',
        data: [55, 45, 50, 40, 48, 52],
        backgroundColor: 'rgba(255, 115, 0, 0.8)',
      },
    ],
  },
  'healthcare': {
    labels: ['Patient Care', 'Diagnosis Accuracy', 'Administrative Tasks', 'Treatment Planning', 'Record Management', 'Resource Allocation'],
    datasets: [
      {
        label: 'After AI Implementation',
        data: [90, 95, 93, 88, 94, 91],
        backgroundColor: 'rgba(196, 157, 23, 0.8)',
      },
      {
        label: 'Before AI Implementation',
        data: [60, 65, 45, 50, 55, 48],
        backgroundColor: 'rgba(255, 115, 0, 0.8)',
      },
    ],
  },
  'insurance': {
    labels: ['Claim Processing', 'Risk Assessment', 'Customer Service', 'Fraud Detection', 'Policy Management', 'Underwriting Speed'],
    datasets: [
      {
        label: 'After AI Implementation',
        data: [94, 96, 90, 98, 92, 95],
        backgroundColor: 'rgba(196, 157, 23, 0.8)',
      },
      {
        label: 'Before AI Implementation',
        data: [45, 50, 55, 60, 48, 52],
        backgroundColor: 'rgba(255, 115, 0, 0.8)',
      },
    ],
  },
  'property-management': {
    labels: ['Maintenance Response', 'Tenant Satisfaction', 'Occupancy Rate', 'Revenue Management', 'Operation Efficiency', 'Cost Control'],
    datasets: [
      {
        label: 'After AI Implementation',
        data: [92, 90, 95, 88, 93, 91],
        backgroundColor: 'rgba(196, 157, 23, 0.8)',
      },
      {
        label: 'Before AI Implementation',
        data: [50, 55, 60, 45, 48, 52],
        backgroundColor: 'rgba(255, 115, 0, 0.8)',
      },
    ],
  },
  'customer-care': {
    labels: ['Response Time', 'Issue Resolution', 'Customer Satisfaction', 'Service Quality', 'Agent Performance', 'Support Coverage'],
    datasets: [
      {
        label: 'After AI Implementation',
        data: [95, 92, 94, 90, 93, 96],
        backgroundColor: 'rgba(196, 157, 23, 0.8)',
      },
      {
        label: 'Before AI Implementation',
        data: [45, 50, 55, 48, 52, 42],
        backgroundColor: 'rgba(255, 115, 0, 0.8)',
      },
    ],
  },
  'custom-ai-solutions': {
    labels: ['Implementation Speed', 'System Performance', 'Scalability', 'Integration', 'Customization', 'ROI'],
    datasets: [
      {
        label: 'After AI Implementation',
        data: [90, 95, 93, 92, 96, 94],
        backgroundColor: 'rgba(196, 157, 23, 0.8)',
      },
      {
        label: 'Before AI Implementation',
        data: [40, 45, 50, 55, 48, 42],
        backgroundColor: 'rgba(255, 115, 0, 0.8)',
      },
    ],
  },
  'ai-agents': {
    labels: ['Task Automation', 'Decision Making', 'Learning Speed', 'Accuracy', 'Adaptability', 'Performance'],
    datasets: [
      {
        label: 'After AI Implementation',
        data: [94, 92, 95, 93, 96, 90],
        backgroundColor: 'rgba(196, 157, 23, 0.8)',
      },
      {
        label: 'Before AI Implementation',
        data: [40, 45, 35, 50, 42, 38],
        backgroundColor: 'rgba(255, 115, 0, 0.8)',
      },
    ],
  },
  'ai-agentic-solutions': {
    labels: ['Process Efficiency', 'Resource Usage', 'Task Completion', 'Accuracy', 'Adaptability', 'Integration'],
    datasets: [
      {
        label: 'After AI Implementation',
        data: [93, 95, 90, 94, 92, 96],
        backgroundColor: 'rgba(196, 157, 23, 0.8)',
      },
      {
        label: 'Before AI Implementation',
        data: [45, 40, 50, 42, 38, 48],
        backgroundColor: 'rgba(255, 115, 0, 0.8)',
      },
    ],
  },
  'ai-process-automation': {
    labels: ['Workflow Speed', 'Error Reduction', 'Cost Savings', 'Scalability', 'Efficiency', 'Accuracy'],
    datasets: [
      {
        label: 'After AI Implementation',
        data: [96, 94, 92, 95, 90, 93],
        backgroundColor: 'rgba(196, 157, 23, 0.8)',
      },
      {
        label: 'Before AI Implementation',
        data: [42, 45, 40, 38, 48, 50],
        backgroundColor: 'rgba(255, 115, 0, 0.8)',
      },
    ],
  },
  'ai-integrations': {
    labels: ['System Compatibility', 'Data Flow', 'Processing Speed', 'Reliability', 'Scalability', 'Security'],
    datasets: [
      {
        label: 'After AI Implementation',
        data: [92, 95, 90, 94, 93, 96],
        backgroundColor: 'rgba(196, 157, 23, 0.8)',
      },
      {
        label: 'Before AI Implementation',
        data: [50, 45, 42, 48, 40, 55],
        backgroundColor: 'rgba(255, 115, 0, 0.8)',
      },
    ],
  },
  'security': {
    labels: ['Threat Detection', 'Response Time', 'Prevention Rate', 'System Protection', 'Compliance', 'Risk Management'],
    datasets: [
      {
        label: 'After AI Implementation',
        data: [96, 94, 98, 95, 92, 93],
        backgroundColor: 'rgba(196, 157, 23, 0.8)',
      },
      {
        label: 'Before AI Implementation',
        data: [60, 55, 65, 58, 62, 50],
        backgroundColor: 'rgba(255, 115, 0, 0.8)',
      },
    ],
  },
  'deployment': {
    labels: ['Deployment Speed', 'System Stability', 'Resource Usage', 'Scalability', 'Integration', 'Monitoring'],
    datasets: [
      {
        label: 'After AI Implementation',
        data: [94, 92, 95, 90, 93, 96],
        backgroundColor: 'rgba(196, 157, 23, 0.8)',
      },
      {
        label: 'Before AI Implementation',
        data: [45, 50, 42, 48, 40, 52],
        backgroundColor: 'rgba(255, 115, 0, 0.8)',
      },
    ],
  },
};

interface ServiceMetricsChartProps {
  service: string;
}

export default function ServiceMetricsChart({ service }: ServiceMetricsChartProps) {
  const serviceKey = service.toLowerCase().replace(/\s+/g, '-');
  const data = metricsData[serviceKey as keyof typeof metricsData];

  if (!data) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full bg-gray-900/50 rounded-lg p-6 backdrop-blur-sm"
    >
      <div className="h-[400px]">
        <Bar options={chartOptions} data={data} />
      </div>
    </motion.div>
  );
}
