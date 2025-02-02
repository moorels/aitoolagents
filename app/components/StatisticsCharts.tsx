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
} from 'chart.js';
import { Bar, Pie } from 'react-chartjs-2';
import { motion } from 'framer-motion';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement
);

const chartOptions = {
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
      color: '#c49d17',
      font: {
        size: 16,
        weight: 'bold',
      },
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      ticks: { color: '#ffffff' },
      grid: { color: 'rgba(255, 255, 255, 0.1)' },
    },
    x: {
      ticks: { color: '#ffffff' },
      grid: { color: 'rgba(255, 255, 255, 0.1)' },
    },
  },
};

const pieOptions = {
  ...chartOptions,
  scales: undefined,
};

export default function StatisticsCharts() {
  const clientGrowthData = {
    labels: ['2021', '2022', '2023', '2024', '2025'],
    datasets: [
      {
        label: 'Clients Served',
        data: [20, 45, 89, 145, 197],
        backgroundColor: 'rgba(196, 157, 23, 0.8)',
      },
    ],
  };

  const serviceDistributionData = {
    labels: [
      'AI Process Automation',
      'Customer Service Solutions',
      'Data Analytics',
      'Custom AI Development',
    ],
    datasets: [
      {
        label: 'Service Distribution',
        data: [35, 25, 20, 20],
        backgroundColor: [
          'rgba(196, 157, 23, 0.8)',
          'rgba(255, 115, 0, 0.8)',
          'rgba(241, 177, 0, 0.8)',
          'rgba(248, 190, 0, 0.8)',
        ],
      },
    ],
  };

  const performanceData = {
    labels: ['System Uptime', 'Client Satisfaction', 'Service Reliability', 'Response Time'],
    datasets: [
      {
        label: 'Performance Metrics',
        data: [99, 95, 97, 94],
        backgroundColor: 'rgba(196, 157, 23, 0.8)',
      },
    ],
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <motion.div
        className="bg-gray-800/50 p-6 rounded-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <div className="h-[300px]">
          <Bar
            options={{
              ...chartOptions,
              plugins: {
                ...chartOptions.plugins,
                title: {
                  ...chartOptions.plugins.title,
                  text: 'Client Growth Over Years',
                },
              },
            }}
            data={clientGrowthData}
          />
        </div>
      </motion.div>

      <motion.div
        className="bg-gray-800/50 p-6 rounded-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div className="h-[300px]">
          <Pie
            options={{
              ...pieOptions,
              plugins: {
                ...pieOptions.plugins,
                title: {
                  ...pieOptions.plugins.title,
                  text: 'Service Distribution',
                },
              },
            }}
            data={serviceDistributionData}
          />
        </div>
      </motion.div>

      <motion.div
        className="bg-gray-800/50 p-6 rounded-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <div className="h-[300px]">
          <Bar
            options={{
              ...chartOptions,
              plugins: {
                ...chartOptions.plugins,
                title: {
                  ...chartOptions.plugins.title,
                  text: 'Performance Metrics (%)',
                },
              },
              scales: {
                ...chartOptions.scales,
                y: {
                  ...chartOptions.scales.y,
                  max: 100,
                },
              },
            }}
            data={performanceData}
          />
        </div>
      </motion.div>
    </div>
  );
}
