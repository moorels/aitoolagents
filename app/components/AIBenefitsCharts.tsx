'use client';

import { motion } from "framer-motion";
import {
  ComposedChart, BarChart, LineChart, AreaChart, PieChart,
  Bar, Line, Area, Pie, Cell, Sector,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  ResponsiveContainer, RadarChart, PolarGrid,
  PolarAngleAxis, PolarRadiusAxis, Radar,
  Scatter, ScatterChart, ZAxis, Brush
} from "recharts";

// Complex dataset for AI implementation benefits
const timeSeriesData = Array.from({ length: 24 }, (_, i) => ({
  month: `${2023 + Math.floor(i / 12)}-${String(i % 12 + 1).padStart(2, '0')}`,
  revenue: 100000 + Math.random() * 5000 + (i * 5000),
  costs: 20000 + Math.random() * 3000 - (i * 900),
  efficiency: 70 + (i * 1.2) + (Math.random() * 5),
  customerSatisfaction: 75 + (i * 1.1) + (Math.random() * 3),
  automationLevel: 20 + (i * 3.2) + (Math.random() * 2),
}));

const departmentData = [
  { name: 'Customer Service', beforeAI: 100, afterAI: 35, improvement: 65 },
  { name: 'Sales', beforeAI: 85, afterAI: 25, improvement: 60 },
  { name: 'Operations', beforeAI: 95, afterAI: 30, improvement: 65 },
  { name: 'HR', beforeAI: 75, afterAI: 20, improvement: 55 },
  { name: 'Finance', beforeAI: 90, afterAI: 28, improvement: 62 },
  { name: 'IT Support', beforeAI: 88, afterAI: 22, improvement: 66 },
].map(item => ({
  ...item,
  savingsPercent: ((item.beforeAI - item.afterAI) / item.beforeAI * 100).toFixed(1)
}));

const processAutomationData = [
  { process: 'Data Entry', automation: 95, accuracy: 99, speedImprovement: 800 },
  { process: 'Customer Queries', automation: 85, accuracy: 92, speedImprovement: 600 },
  { process: 'Report Generation', automation: 90, accuracy: 98, speedImprovement: 750 },
  { process: 'Invoice Processing', automation: 88, accuracy: 97, speedImprovement: 550 },
  { process: 'Inventory Management', automation: 82, accuracy: 95, speedImprovement: 450 },
];

const resourceOptimizationData = [
  { resource: 'Time', saved: 65, reallocated: 45, optimized: 20 },
  { resource: 'Money', saved: 55, reallocated: 35, optimized: 20 },
  { resource: 'Workforce', saved: 45, reallocated: 30, optimized: 15 },
  { resource: 'Infrastructure', saved: 40, reallocated: 25, optimized: 15 },
  { resource: 'Energy', saved: 35, reallocated: 20, optimized: 15 },
];

const customerMetricsData = Array.from({ length: 12 }, (_, i) => ({
  month: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][i],
  satisfaction: 75 + (i * 1.5) + (Math.random() * 5),
  retention: 80 + (i * 1.2) + (Math.random() * 3),
  engagement: 70 + (i * 1.8) + (Math.random() * 4),
  support: 65 + (i * 2.5) + (Math.random() * 6),
}));

const aiCapabilityData = [
  { capability: 'Natural Language Processing', score: 92 },
  { capability: 'Machine Learning', score: 88 },
  { capability: 'Computer Vision', score: 85 },
  { capability: 'Predictive Analytics', score: 90 },
  { capability: 'Process Automation', score: 95 },
];

const businessImpactData = [
  { metric: 'Revenue Growth', value: 45 },
  { metric: 'Cost Reduction', value: 35 },
  { metric: 'Productivity', value: 60 },
  { metric: 'Customer Satisfaction', value: 40 },
  { metric: 'Market Share', value: 30 },
];

const staffWorkloadData = [
  { department: 'Customer Service', beforeHours: 160, afterHours: 60, taskTypes: 15 },
  { department: 'Sales', beforeHours: 150, afterHours: 55, taskTypes: 12 },
  { department: 'Operations', beforeHours: 170, afterHours: 65, taskTypes: 18 },
  { department: 'HR', beforeHours: 140, afterHours: 45, taskTypes: 10 },
  { department: 'IT Support', beforeHours: 155, afterHours: 50, taskTypes: 14 },
];

const COLORS = ['#111827', '#f8c90e'];

const AIBenefitsCharts = () => {
  return (
    <div className="space-y-8 p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold text-[#f8c90e] mb-4">
          AI Implementation Benefits Analysis
        </h2>
        <p className="text-[#1111111] max-w-3xl mx-auto">
          Comprehensive visualization of the transformative impact of AI automation across various business metrics
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Time Series Performance Chart */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-[#111827] pl-[44px] pr-6 pt-6 pb-6 rounded-xl shadow-lg"
        >
          <h3 className="text-xl font-semibold mb-4 text-[#f8c90e]">Performance Metrics Over Time</h3>
          <div className="h-[400px] -ml-6">
            <ResponsiveContainer width="95%" height="100%">
              <ComposedChart
                data={timeSeriesData}
                margin={{ left: 40, right: 20, top: 10, bottom: 10 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" style={{ fontSize: '12px', fill: '#FFFFFF' }} />
                <YAxis yAxisId="left" style={{ fontSize: '12px', fill: '#FFFFFF' }} />
                <YAxis yAxisId="right" orientation="right" style={{ fontSize: '12px', fill: '#FFFFFF' }} />
                <Tooltip />
                <Legend />
                <Bar yAxisId="left" dataKey="revenue" fill="#f8c90e" name="Revenue ($)" />
                <Bar yAxisId="left" dataKey="costs" fill="#ff7300" name="Costs ($)" />
                <Line yAxisId="right" type="monotone" dataKey="efficiency" stroke="#413ea0" name="Efficiency %" />
                <Line yAxisId="right" type="monotone" dataKey="automationLevel" stroke="#ffc658" name="Automation %" />
                <Brush dataKey="month" height={30} stroke="#111827" />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Department Impact Radar Chart */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-[#111827] pl-[44px] pr-6 pt-6 pb-6 rounded-xl shadow-lg"
        >
          <h3 className="text-xl font-semibold mb-4 text-[#f8c90e]">Department-wise Impact</h3>
          <div className="h-[400px] -ml-6">
            <ResponsiveContainer width="95%" height="100%">
              <RadarChart
                data={departmentData}
                margin={{ left: 40, right: 20, top: 10, bottom: 10 }}
              >
                <PolarGrid />
                <PolarAngleAxis dataKey="name" style={{ fontSize: '12px', fill: '#FFFFFF' }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} style={{ fontSize: '12px', fill: '#FFFFFF' }} />
                <Radar name="Before AI" dataKey="beforeAI" stroke="#f8c90e" fill="#f8c90e" fillOpacity={0.6} />
                <Radar name="After AI" dataKey="afterAI" stroke="#ff7300" fill="#ff7300" fillOpacity={0.6} />
                <Tooltip />
                <Legend />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Process Automation Metrics */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-[#111827] pl-[44px] pr-6 pt-6 pb-6 rounded-xl shadow-lg"
        >
          <h3 className="text-xl font-semibold mb-4 text-[#f8c90e]">Process Automation Metrics</h3>
          <div className="h-[400px] -ml-6">
            <ResponsiveContainer width="95%" height="100%">
              <ComposedChart
                data={processAutomationData}
                margin={{ left: 40, right: 20, top: 10, bottom: 10 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="process" style={{ fontSize: '12px', fill: '#FFFFFF' }} />
                <YAxis yAxisId="left" style={{ fontSize: '12px', fill: '#FFFFFF' }} />
                <YAxis yAxisId="right" orientation="right" style={{ fontSize: '12px', fill: '#FFFFFF' }} />
                <Tooltip />
                <Legend />
                <Bar yAxisId="left" dataKey="automation" fill="#f8c90e" name="Automation %" />
                <Bar yAxisId="left" dataKey="accuracy" fill="#ff7300" name="Accuracy %" />
                <Line yAxisId="right" type="monotone" dataKey="speedImprovement" stroke="#413ea0" name="Speed Improvement %" />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Resource Optimization Stacked Area Chart */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-[#111827] pl-[44px] pr-6 pt-6 pb-6 rounded-xl shadow-lg"
        >
          <h3 className="text-xl font-semibold mb-4 text-[#f8c90e]">Resource Optimization</h3>
          <div className="h-[400px] -ml-6">
            <ResponsiveContainer width="95%" height="100%">
              <AreaChart
                data={resourceOptimizationData}
                margin={{ left: 40, right: 20, top: 10, bottom: 10 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="resource" style={{ fontSize: '12px', fill: '#FFFFFF' }} />
                <YAxis style={{ fontSize: '12px', fill: '#FFFFFF' }} />
                <Tooltip />
                <Legend />
                <Area type="monotone" dataKey="saved" stackId="1" stroke="#f8c90e" fill="#f8c90e" name="Saved %" />
                <Area type="monotone" dataKey="reallocated" stackId="1" stroke="#ff7300" fill="#ff7300" name="Reallocated %" />
                <Area type="monotone" dataKey="optimized" stackId="1" stroke="#413ea0" fill="#413ea0" name="Optimized %" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Customer Metrics Multi-line Chart */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-[#111827] pl-[44px] pr-6 pt-6 pb-6 rounded-xl shadow-lg"
        >
          <h3 className="text-xl font-semibold mb-4 text-[#f8c90e]">Customer Experience Metrics</h3>
          <div className="h-[400px] -ml-6">
            <ResponsiveContainer width="95%" height="100%">
              <LineChart
                data={customerMetricsData}
                margin={{ left: 40, right: 20, top: 10, bottom: 10 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" style={{ fontSize: '12px', fill: '#FFFFFF' }} />
                <YAxis style={{ fontSize: '12px', fill: '#FFFFFF' }} />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="satisfaction" stroke="#f8c90e" name="Satisfaction" />
                <Line type="monotone" dataKey="retention" stroke="#ff7300" name="Retention" />
                <Line type="monotone" dataKey="engagement" stroke="#413ea0" name="Engagement" />
                <Line type="monotone" dataKey="support" stroke="#ffc658" name="Support Quality" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* AI Capability Assessment */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-[#111827] pl-[44px] pr-6 pt-6 pb-6 rounded-xl shadow-lg"
        >
          <h3 className="text-xl font-semibold mb-4 text-[#f8c90e]">AI Capability Assessment</h3>
          <div className="h-[400px] -ml-6">
            <ResponsiveContainer width="95%" height="100%">
              <RadarChart
                data={aiCapabilityData}
                margin={{ left: 40, right: 20, top: 10, bottom: 10 }}
              >
                <PolarGrid />
                <PolarAngleAxis dataKey="capability" style={{ fontSize: '12px', fill: '#FFFFFF' }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} style={{ fontSize: '12px', fill: '#FFFFFF' }} />
                <Radar name="Capability Score" dataKey="score" stroke="#f8c90e" fill="#f8c90e" fillOpacity={0.6} />
                <Tooltip />
                <Legend />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Business Impact Distribution */}
        

        {/* Efficiency Scatter Plot */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-[#111827] pl-[44px] pr-6 pt-6 pb-6 rounded-xl shadow-lg"
        >
          <h3 className="text-xl font-semibold mb-4 text-[#f8c90e]">Efficiency vs Automation Level</h3>
          <div className="h-[400px] -ml-6">
            <ResponsiveContainer width="95%" height="100%">
              <ScatterChart
                margin={{ left: 40, right: 20, top: 10, bottom: 10 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" dataKey="automationLevel" name="Automation Level" unit="%" style={{ fontSize: '12px', fill: '#FFFFFF' }} />
                <YAxis type="number" dataKey="efficiency" name="Efficiency" unit="%" style={{ fontSize: '12px', fill: '#FFFFFF' }} />
                <ZAxis type="number" dataKey="revenue" name="Revenue" unit="$" />
                <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                <Legend />
                <Scatter name="Performance Metrics" data={timeSeriesData} fill="#f8c90e">
                  {timeSeriesData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Scatter>
              </ScatterChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Staff Workload Reduction Analysis */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-[#111827] pl-[44px] pr-6 pt-6 pb-6 rounded-xl shadow-lg"
        >
          <h3 className="text-xl font-semibold mb-4 text-[#f8c90e]">Staff Workload Reduction Analysis</h3>
          <div className="h-[400px] -ml-6">
            <ResponsiveContainer width="95%" height="100%">
              <ComposedChart
                data={staffWorkloadData}
                margin={{ left: 40, right: 20, top: 10, bottom: 10 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="department" style={{ fontSize: '12px', fill: '#FFFFFF' }} />
                <YAxis yAxisId="left" style={{ fontSize: '12px', fill: '#FFFFFF' }} />
                <YAxis yAxisId="right" orientation="right" style={{ fontSize: '12px', fill: '#FFFFFF' }} />
                <Tooltip />
                <Legend />
                <Bar yAxisId="left" dataKey="beforeHours" fill="#f8c90e" name="Monthly Hours Before AI" />
                <Bar yAxisId="left" dataKey="afterHours" fill="#ff7300" name="Monthly Hours After AI" />
                <Line yAxisId="right" type="monotone" dataKey="taskTypes" stroke="#413ea0" name="Automated Task Types" />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AIBenefitsCharts;
