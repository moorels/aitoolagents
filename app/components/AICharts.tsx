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
} from 'chart.js';
import { Bar, Pie, Line, Radar } from 'react-chartjs-2';
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
  LineElement,
  RadialLinearScale
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
      color: '#ffffff',
    },
  },
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

const pieOptions = {
  ...chartOptions,
  scales: undefined,
};

const radarOptions = {
  ...chartOptions,
  scales: {
    r: {
      ticks: { color: '#ffffff' },
      grid: { color: 'rgba(255, 255, 255, 0.1)' },
      pointLabels: { color: '#ffffff' },
    },
  },
};

export default function AICharts() {
  const productivityData = {
    labels: ['Customer Service', 'Data Entry', 'Task Management', 'Document Processing'],
    datasets: [
      {
        label: 'Productivity Increase (%)',
        data: [65, 80, 45, 70],
        backgroundColor: 'rgba(196, 157, 23, 0.8)',
      },
    ],
  };

  const costReductionPie = {
    labels: ['Labor Costs', 'Error-Related Costs', 'Training Costs', 'Operational Costs'],
    datasets: [
      {
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

  const timelineData = {
    labels: ['Month 1', 'Month 2', 'Month 3', 'Month 4', 'Month 6', 'Month 12'],
    datasets: [
      {
        label: 'ROI Timeline',
        data: [0, 20, 50, 100, 180, 300],
        borderColor: 'rgba(196, 157, 23, 1)',
        backgroundColor: 'rgba(196, 157, 23, 0.2)',
        fill: true,
      },
    ],
  };

  const industryAdoption = {
    labels: ['Retail', 'Healthcare', 'Finance', 'Manufacturing', 'Real Estate'],
    datasets: [
      {
        label: 'Current Adoption',
        data: [45, 35, 60, 40, 30],
        backgroundColor: 'rgba(196, 157, 23, 0.8)',
      },
      {
        label: 'Projected Growth',
        data: [75, 70, 85, 65, 60],
        backgroundColor: 'rgba(255, 115, 0, 0.8)',
      },
    ],
  };

  const taskAutomation = {
    labels: ['Email Responses', 'Data Entry', 'Scheduling', 'Report Generation', 'Customer Queries'],
    datasets: [
      {
        label: 'Automation Potential',
        data: [80, 90, 75, 85, 70],
        backgroundColor: [
          'rgba(196, 157, 23, 0.8)',
          'rgba(255, 115, 0, 0.8)',
          'rgba(241, 177, 0, 0.8)',
          'rgba(248, 190, 0, 0.8)',
          'rgba(220, 180, 0, 0.8)',
        ],
      },
    ],
  };

  const businessImpact = {
    labels: [
      'Customer Satisfaction',
      'Employee Productivity',
      'Cost Efficiency',
      'Error Reduction',
      'Process Speed',
    ],
    datasets: [
      {
        label: 'Impact Score',
        data: [90, 85, 80, 95, 88],
        backgroundColor: 'rgba(196, 157, 23, 0.2)',
        borderColor: 'rgba(196, 157, 23, 1)',
        pointBackgroundColor: 'rgba(196, 157, 23, 1)',
      },
    ],
  };

  const employeeSatisfaction = {
    labels: ['Before AI', 'After AI'],
    datasets: [
      {
        label: 'Job Satisfaction',
        data: [65, 85],
        backgroundColor: ['rgba(255, 115, 0, 0.8)', 'rgba(196, 157, 23, 0.8)'],
      },
      {
        label: 'Work-Life Balance',
        data: [60, 90],
        backgroundColor: ['rgba(241, 177, 0, 0.8)', 'rgba(248, 190, 0, 0.8)'],
      },
    ],
  };

  const customerMetrics = {
    labels: ['Response Time', 'Issue Resolution', 'Customer Satisfaction', 'Support Coverage'],
    datasets: [
      {
        label: 'Improvement (%)',
        data: [75, 65, 80, 95],
        backgroundColor: 'rgba(196, 157, 23, 0.8)',
      },
    ],
  };

  const errorReduction = {
    labels: ['Data Entry', 'Customer Service', 'Compliance', 'Reporting'],
    datasets: [
      {
        label: 'Error Reduction (%)',
        data: [90, 75, 85, 80],
        backgroundColor: [
          'rgba(196, 157, 23, 0.8)',
          'rgba(255, 115, 0, 0.8)',
          'rgba(241, 177, 0, 0.8)',
          'rgba(248, 190, 0, 0.8)',
        ],
      },
    ],
  };

  const scalabilityMetrics = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [
      {
        label: 'Tasks Handled',
        data: [1000, 2500, 5000, 10000],
        borderColor: 'rgba(196, 157, 23, 1)',
        backgroundColor: 'rgba(196, 157, 23, 0.2)',
        fill: true,
      },
    ],
  };

  return (
    <div className="w-full space-y-12 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Productivity Increase */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gray-800/50 p-6 rounded-lg"
        >
          <h3 className="text-xl font-semibold mb-4 text-[#c49d17]">Productivity Increase by Department</h3>
          <div className="h-[300px]">
            <Bar options={chartOptions} data={productivityData} />
          </div>
        </motion.div>

        {/* Cost Reduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-gray-800/50 p-6 rounded-lg"
        >
          <h3 className="text-xl font-semibold mb-4 text-[#c49d17]">Cost Reduction Distribution</h3>
          <div className="h-[300px]">
            <Pie options={pieOptions} data={costReductionPie} />
          </div>
        </motion.div>

        {/* ROI Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-gray-800/50 p-6 rounded-lg"
        >
          <h3 className="text-xl font-semibold mb-4 text-[#c49d17]">ROI Timeline (% Return)</h3>
          <div className="h-[300px]">
            <Line options={chartOptions} data={timelineData} />
          </div>
        </motion.div>

        {/* Industry Adoption */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-gray-800/50 p-6 rounded-lg"
        >
          <h3 className="text-xl font-semibold mb-4 text-[#c49d17]">Industry Adoption Rates (%)</h3>
          <div className="h-[300px]">
            <Bar options={chartOptions} data={industryAdoption} />
          </div>
        </motion.div>

        {/* Task Automation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-gray-800/50 p-6 rounded-lg"
        >
          <h3 className="text-xl font-semibold mb-4 text-[#c49d17]">Task Automation Potential (%)</h3>
          <div className="h-[300px]">
            <Pie options={pieOptions} data={taskAutomation} />
          </div>
        </motion.div>

        {/* Business Impact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-gray-800/50 p-6 rounded-lg"
        >
          <h3 className="text-xl font-semibold mb-4 text-[#c49d17]">Business Impact Analysis</h3>
          <div className="h-[300px]">
            <Radar options={radarOptions} data={businessImpact} />
          </div>
        </motion.div>

        {/* Employee Satisfaction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="bg-gray-800/50 p-6 rounded-lg"
        >
          <h3 className="text-xl font-semibold mb-4 text-[#c49d17]">Employee Satisfaction Comparison</h3>
          <div className="h-[300px]">
            <Bar options={chartOptions} data={employeeSatisfaction} />
          </div>
        </motion.div>

        {/* Customer Service Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="bg-gray-800/50 p-6 rounded-lg"
        >
          <h3 className="text-xl font-semibold mb-4 text-[#c49d17]">Customer Service Improvements</h3>
          <div className="h-[300px]">
            <Bar options={chartOptions} data={customerMetrics} />
          </div>
        </motion.div>

        {/* Error Reduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="bg-gray-800/50 p-6 rounded-lg"
        >
          <h3 className="text-xl font-semibold mb-4 text-[#c49d17]">Error Reduction by Department</h3>
          <div className="h-[300px]">
            <Pie options={pieOptions} data={errorReduction} />
          </div>
        </motion.div>

        {/* Scalability */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="bg-gray-800/50 p-6 rounded-lg"
        >
          <h3 className="text-xl font-semibold mb-4 text-[#c49d17]">Scalability Demonstration</h3>
          <div className="h-[300px]">
            <Line options={chartOptions} data={scalabilityMetrics} />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
