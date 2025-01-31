'use client';

import React from 'react';
import { motion } from "framer-motion";
import {
  BarChart, Bar, LineChart, Line, AreaChart, Area, PieChart, Pie,
  RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
  ComposedChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  ResponsiveContainer, Cell, Scatter, ScatterChart, Treemap
} from "recharts";

import AIBenefitsCharts from '../components/AIBenefitsCharts';

const revenueData = [
  { month: "Jan", traditional: 4000, withAI: 6000 },
  { month: "Feb", traditional: 4200, withAI: 6800 },
  { month: "Mar", traditional: 4100, withAI: 7200 },
  { month: "Apr", traditional: 4300, withAI: 7800 },
  { month: "May", traditional: 4400, withAI: 8500 },
  { month: "Jun", traditional: 4600, withAI: 9200 },
];

const productivityData = [
  { category: "Customer Service", improvement: 85 },
  { category: "Sales Process", improvement: 70 },
  { category: "Data Analysis", improvement: 90 },
  { category: "Task Automation", improvement: 95 },
  { category: "Resource Management", improvement: 75 },
];

const costReductionData = [
  { name: "Labor Costs", reduction: 30 },
  { name: "Operating Expenses", reduction: 25 },
  { name: "Training Costs", reduction: 40 },
  { name: "Error-Related Costs", reduction: 60 },
  { name: "Customer Service Costs", reduction: 45 },
];

const satisfactionData = [
  { metric: "Response Time", before: 30, after: 90 },
  { metric: "Resolution Rate", before: 40, after: 95 },
  { metric: "Customer Satisfaction", before: 50, after: 88 },
  { metric: "Employee Satisfaction", before: 45, after: 85 },
  { metric: "Process Efficiency", before: 35, after: 92 },
];

const inventoryOptimizationData = [
  { month: "Jan", stockouts: 25, overstock: 30, optimized: 5 },
  { month: "Feb", stockouts: 20, overstock: 25, optimized: 4 },
  { month: "Mar", stockouts: 15, overstock: 20, optimized: 3 },
  { month: "Apr", stockouts: 10, overstock: 15, optimized: 2 },
  { month: "May", stockouts: 5, overstock: 10, optimized: 1 },
  { month: "Jun", stockouts: 2, overstock: 5, optimized: 0 },
];

const employeeEfficiencyData = [
  { department: "Sales", beforeAI: 65, afterAI: 95 },
  { department: "Customer Service", beforeAI: 70, afterAI: 98 },
  { department: "Inventory", beforeAI: 60, afterAI: 92 },
  { department: "Marketing", beforeAI: 75, afterAI: 96 },
  { department: "Operations", beforeAI: 68, afterAI: 94 },
];

const customerEngagementData = [
  { channel: "Website", engagement: 85, conversion: 45, retention: 75 },
  { channel: "Mobile App", engagement: 90, conversion: 50, retention: 80 },
  { channel: "Social Media", engagement: 78, conversion: 35, retention: 65 },
  { channel: "Email", engagement: 82, conversion: 40, retention: 70 },
  { channel: "In-Store", engagement: 88, conversion: 55, retention: 85 },
];

const marketingROIData = [
  { campaign: "AI Chatbot", roi: 350, budget: 50000, conversion: 28 },
  { campaign: "Traditional Ads", roi: 180, budget: 75000, conversion: 15 },
  { campaign: "Email Marketing", roi: 220, budget: 30000, conversion: 18 },
  { campaign: "Social Media", roi: 280, budget: 45000, conversion: 22 },
  { campaign: "Content Marketing", roi: 200, budget: 35000, conversion: 16 },
];

const operationalEfficiencyData = [
  { process: "Order Processing", timeReduction: 75, errorReduction: 90, costSaving: 65 },
  { process: "Customer Support", timeReduction: 85, errorReduction: 95, costSaving: 70 },
  { process: "Inventory Management", timeReduction: 80, errorReduction: 88, costSaving: 75 },
  { process: "Employee Training", timeReduction: 70, errorReduction: 85, costSaving: 60 },
  { process: "Data Analysis", timeReduction: 90, errorReduction: 98, costSaving: 80 },
];

const seasonalTrendsData = [
  { month: "Jan", sales: 1200, predictions: 1180, accuracy: 98 },
  { month: "Feb", sales: 1400, predictions: 1350, accuracy: 96 },
  { month: "Mar", sales: 1600, predictions: 1580, accuracy: 99 },
  { month: "Apr", sales: 1300, predictions: 1320, accuracy: 98 },
  { month: "May", sales: 1500, predictions: 1480, accuracy: 97 },
  { month: "Jun", sales: 1800, predictions: 1750, accuracy: 97 },
];

const customerLifetimeValueData = [
  { segment: "Premium", beforeAI: 5000, afterAI: 8500 },
  { segment: "Regular", beforeAI: 2500, afterAI: 4000 },
  { segment: "Occasional", beforeAI: 1000, afterAI: 2000 },
  { segment: "New", beforeAI: 500, afterAI: 1500 },
];

const crossSellingData = [
  { category: "Electronics", success: 85, attempts: 100 },
  { category: "Accessories", success: 75, attempts: 90 },
  { category: "Services", success: 65, attempts: 80 },
  { category: "Insurance", success: 55, attempts: 70 },
  { category: "Warranties", success: 70, attempts: 85 },
];

const COLORS = [
  "#111827", "#f8c90e", "#ff7300", "#ff8042", "#8884D8",
  "#82CA9D", "#D946EF", "#0EA5E9", "#1EAEDB", "#33C3F0"
];

const retailSegmentAnalysis = [
  { name: 'Luxury', revenue: 2500000, growth: 35, customerRetention: 92, avgOrderValue: 1200 },
  { name: 'Mid-Range', revenue: 5000000, growth: 28, customerRetention: 85, avgOrderValue: 450 },
  { name: 'Budget', revenue: 3500000, growth: 42, customerRetention: 78, avgOrderValue: 150 },
  { name: 'Online Only', revenue: 4200000, growth: 55, customerRetention: 82, avgOrderValue: 280 },
  { name: 'Hybrid', revenue: 6000000, growth: 48, customerRetention: 88, avgOrderValue: 380 },
];

const supplyChainOptimization = [
  { quarter: 'Q1 2023', stockTurnover: 12, warehouseUtilization: 75, deliverySpeed: 2.5, returns: 8 },
  { quarter: 'Q2 2023', stockTurnover: 14, warehouseUtilization: 82, deliverySpeed: 2.2, returns: 7 },
  { quarter: 'Q3 2023', stockTurnover: 15, warehouseUtilization: 88, deliverySpeed: 1.8, returns: 5 },
  { quarter: 'Q4 2023', stockTurnover: 18, warehouseUtilization: 92, deliverySpeed: 1.5, returns: 4 },
];

const omniChannelPerformance = [
  { channel: 'Mobile App', conversion: 4.2, engagement: 85, revenue: 2800000 },
  { channel: 'Website', conversion: 3.8, engagement: 78, revenue: 3200000 },
  { channel: 'Physical Store', conversion: 8.5, engagement: 92, revenue: 4500000 },
  { channel: 'Social Commerce', conversion: 5.2, engagement: 88, revenue: 1800000 },
  { channel: 'Marketplace', conversion: 3.5, engagement: 72, revenue: 2200000 },
];

const seasonalityImpact = [
  { month: 'Jan', baseline: 100, withAI: 135, marketTrend: 110 },
  { month: 'Feb', baseline: 95, withAI: 142, marketTrend: 105 },
  { month: 'Mar', baseline: 120, withAI: 168, marketTrend: 125 },
  { month: 'Apr', baseline: 110, withAI: 159, marketTrend: 115 },
  { month: 'May', baseline: 130, withAI: 182, marketTrend: 135 },
  { month: 'Jun', baseline: 145, withAI: 203, marketTrend: 150 },
];

const aiCustomerServiceMetrics = [
  { category: 'Response Time', before: 15, after: 0.5, unit: 'minutes' },
  { category: 'Queries Handled/Hour', before: 20, after: 200, unit: 'queries' },
  { category: 'Customer Satisfaction', before: 75, after: 92, unit: 'percent' },
  { category: 'Resolution Rate', before: 82, after: 95, unit: 'percent' },
  { category: 'Operating Hours', before: 8, after: 24, unit: 'hours' },
];

const chatbotEfficiencyData = [
  { time: '12am', volume: 50, responseTime: 0.3, satisfaction: 90 },
  { time: '4am', volume: 30, responseTime: 0.2, satisfaction: 92 },
  { time: '8am', volume: 150, responseTime: 0.4, satisfaction: 88 },
  { time: '12pm', volume: 280, responseTime: 0.5, satisfaction: 87 },
  { time: '4pm', volume: 250, responseTime: 0.4, satisfaction: 89 },
  { time: '8pm', volume: 180, responseTime: 0.3, satisfaction: 91 },
];

const multilingualSupportData = [
  { language: 'English', coverage: 100, accuracy: 98, queries: 5000 },
  { language: 'Spanish', coverage: 95, accuracy: 96, queries: 3000 },
  { language: 'French', coverage: 92, accuracy: 95, queries: 2000 },
  { language: 'German', coverage: 90, accuracy: 94, queries: 1500 },
  { language: 'Chinese', coverage: 88, accuracy: 93, queries: 2500 },
];

const issueResolutionData = [
  { category: 'Product Inquiries', aiResolved: 95, humanNeeded: 5 },
  { category: 'Technical Support', aiResolved: 85, humanNeeded: 15 },
  { category: 'Billing Issues', aiResolved: 80, humanNeeded: 20 },
  { category: 'Returns/Refunds', aiResolved: 75, humanNeeded: 25 },
  { category: 'Complex Queries', aiResolved: 60, humanNeeded: 40 },
];

const customerJourneyData = [
  { stage: 'Awareness', traditional: 65, withAI: 90, improvement: 38 },
  { stage: 'Consideration', traditional: 55, withAI: 85, improvement: 55 },
  { stage: 'Purchase', traditional: 45, withAI: 80, improvement: 78 },
  { stage: 'Retention', traditional: 70, withAI: 95, improvement: 36 },
  { stage: 'Advocacy', traditional: 40, withAI: 75, improvement: 88 },
];

const escalationPatterns = [
  { month: 'Jan', total: 1000, aiResolved: 850, escalated: 150 },
  { month: 'Feb', total: 1200, aiResolved: 1040, escalated: 160 },
  { month: 'Mar', total: 1400, aiResolved: 1250, escalated: 150 },
  { month: 'Apr', total: 1600, aiResolved: 1440, escalated: 160 },
  { month: 'May', total: 1800, aiResolved: 1650, escalated: 150 },
  { month: 'Jun', total: 2000, aiResolved: 1860, escalated: 140 },
];

const sentimentAnalysis = [
  { period: 'Week 1', positive: 75, neutral: 15, negative: 10 },
  { period: 'Week 2', positive: 78, neutral: 14, negative: 8 },
  { period: 'Week 3', positive: 82, neutral: 12, negative: 6 },
  { period: 'Week 4', positive: 85, neutral: 10, negative: 5 },
];

const operationalCostSavings = [
  { department: 'Customer Service', before: 100000, after: 35000, roi: 185 },
  { department: 'Technical Support', before: 80000, after: 30000, roi: 167 },
  { department: 'Sales Support', before: 90000, after: 40000, roi: 125 },
  { department: 'Order Processing', before: 70000, after: 25000, roi: 180 },
];

const automationAdoption = [
  { process: 'Customer Queries', completion: 95, satisfaction: 92, efficiency: 180 },
  { process: 'Order Processing', completion: 98, satisfaction: 94, efficiency: 200 },
  { process: 'Returns', completion: 90, satisfaction: 88, efficiency: 150 },
  { process: 'Technical Support', completion: 85, satisfaction: 90, efficiency: 160 },
];

const peakHandlingCapacity = [
  { hour: '00:00', traditional: 50, withAI: 500 },
  { hour: '04:00', traditional: 30, withAI: 500 },
  { hour: '08:00', traditional: 100, withAI: 500 },
  { hour: '12:00', traditional: 150, withAI: 500 },
  { hour: '16:00', traditional: 120, withAI: 500 },
  { hour: '20:00', traditional: 80, withAI: 500 },
];

const staticCharts = [
  {
    title: 'Implementation Success Rate & ROI',
    description: 'Success rates and return on investment across different industries',
    image: '/implementation_success.png'
  },
  {
    title: 'Customer Satisfaction Comparison',
    description: 'Traditional vs Contextual Chatbot Performance Metrics',
    image: '/satisfaction_metrics.png'
  },
  {
    title: 'Cost Savings Analysis',
    description: 'Departmental impact and efficiency improvements',
    image: '/cost_savings.png'
  },
  {
    title: 'Integration Complexity',
    description: 'System integration time comparison',
    image: '/integration_complexity.png'
  },
  {
    title: '6-Month ROI Timeline',
    description: 'Progressive return on investment breakdown',
    image: '/roi_timeline.png'
  }
];

const BusinessMetricsCharts = () => {
  return (
    <div className="py-12 ">
      {/* Existing Interactive Charts */}
      <section className="py-16 ">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#f8c90e]">
            Interactive Business Analytics
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div className="bg-[#111827] p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-[#f8c90e]">Revenue Growth Comparison</h3>
              <div className="h-[400px] -ml-6">
                <ResponsiveContainer width="95%" height="100%">
                  <BarChart data={revenueData} margin={{ left: 60, right: 20, top: 10, bottom: 10 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" style={{ fontSize: '12px', fill: '#fff' }} />
                    <YAxis style={{ fontSize: '12px', fill: '#fff' }} />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="traditional" fill="#456ace" name="Traditional" />
                    <Bar dataKey="withAI" fill="#f8c90e" name="With AI" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-[#111827] p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-[#f8c90e]">Cost Reduction Analysis</h3>
              <div className="h-[400px] -ml-6">
                <ResponsiveContainer width="95%" height="100%">
                  <PieChart margin={{ left: 60, right: 20, top: 10, bottom: 10 }}>
                    <Pie
                      data={costReductionData}
                      dataKey="reduction"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      outerRadius={150}
                      label
                    >
                      {costReductionData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-[#111827] p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-[#f8c90e]">Satisfaction Metrics</h3>
              <div className="h-[400px] -ml-6">
                <ResponsiveContainer width="95%" height="100%">
                  <AreaChart data={satisfactionData} margin={{ left: 60, right: 20, top: 10, bottom: 10 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="metric" style={{ fontSize: '12px', fill: '#fff' }} />
                    <YAxis style={{ fontSize: '12px', fill: '#fff' }} />
                    <Tooltip />
                    <Legend />
                    <Area
                      type="monotone"
                      dataKey="before"
                      stackId="1"
                      stroke="#456ace"
                      fill="#fff"
                      name="Before AI"
                    />
                    <Area
                      type="monotone"
                      dataKey="after"
                      stackId="2"
                      stroke="#f8c90e"
                      fill="#f8c90e"
                      name="After AI"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-[#111827] p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-[#f8c90e]">Inventory Optimization Impact</h3>
              <div className="h-[400px] -ml-6">
                <ResponsiveContainer width="95%" height="100%">
                  <LineChart data={inventoryOptimizationData} margin={{ left: 60, right: 20, top: 10, bottom: 10 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" style={{ fontSize: '12px', fill: '#fff' }} />
                    <YAxis style={{ fontSize: '12px', fill: '#fff' }} />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="stockouts" stroke="#456ace" name="Stockouts" />
                    <Line type="monotone" dataKey="overstock" stroke="#f8c90e" name="Overstock" />
                    <Line type="monotone" dataKey="optimized" stroke="#ff7300" name="AI-Optimized" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-[#111827] p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-[#f8c90e]">Employee Efficiency Improvements</h3>
              <div className="h-[400px] -ml-6">
                <ResponsiveContainer width="95%" height="100%">
                  <BarChart data={employeeEfficiencyData} layout="vertical" margin={{ left: 60, right: 20, top: 10, bottom: 10 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" style={{ fontSize: '12px', fill: '#fff' }} />
                    <YAxis dataKey="department" type="category" style={{ fontSize: '12px', fill: '#fff' }} />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="beforeAI" fill="#456ace" name="Before AI" />
                    <Bar dataKey="afterAI" fill="#f8c90e" name="After AI" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-[#111827] p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-[#f8c90e]">Customer Engagement Metrics</h3>
              <div className="h-[400px] -ml-6">
                <ResponsiveContainer width="95%" height="100%">
                  <RadarChart data={customerEngagementData} margin={{ left: 60, right: 20, top: 10, bottom: 10 }}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="channel" style={{ fontSize: '12px', fill: '#fff' }} />
                    <PolarRadiusAxis angle={30} domain={[0, 100]} style={{ fontSize: '12px', fill: '#fff' }} />
                    <Radar name="Engagement" dataKey="engagement" stroke="#456ace" fill="#456ace" fillOpacity={0.6} />
                    <Radar name="Conversion" dataKey="conversion" stroke="#f8c90e" fill="#f8c90e" fillOpacity={0.6} />
                    <Radar name="Retention" dataKey="retention" stroke="#ff7300" fill="#ff7300" fillOpacity={0.6} />
                    <Legend />
                    <Tooltip />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-[#111827] p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-[#f8c90e]">Marketing ROI Analysis</h3>
              <div className="h-[400px] -ml-6">
                <ResponsiveContainer width="95%" height="100%">
                  <ScatterChart margin={{ left: 60, right: 20, top: 10, bottom: 10 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="budget" name="Budget" unit="$" style={{ fontSize: '12px', fill: '#fff' }} />
                    <YAxis dataKey="roi" name="ROI" unit="%" style={{ fontSize: '12px', fill: '#fff' }} />
                    <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                    <Legend />
                    <Scatter name="Marketing Campaigns" data={marketingROIData} fill="#fff">
                      {marketingROIData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Scatter>
                  </ScatterChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-[#111827] p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-[#f8c90e]">Operational Efficiency Gains</h3>
              <div className="h-[400px] -ml-6">
                <ResponsiveContainer width="95%" height="100%">
                  <ComposedChart data={operationalEfficiencyData} margin={{ left: 60, right: 20, top: 10, bottom: 10 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="process" style={{ fontSize: '12px', fill: '#fff' }} />
                    <YAxis yAxisId="left" style={{ fontSize: '12px', fill: '#fff' }} />
                    <YAxis yAxisId="right" orientation="right" style={{ fontSize: '12px', fill: '#fff' }} />
                    <Tooltip />
                    <Legend />
                    <Bar yAxisId="left" dataKey="timeReduction" fill="#456ace" name="Time Reduction %" />
                    <Bar yAxisId="left" dataKey="errorReduction" fill="#f8c90e" name="Error Reduction %" />
                    <Line yAxisId="right" type="monotone" dataKey="costSaving" stroke="#ff7300" name="Cost Savings %" />
                  </ComposedChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-[#111827] p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-[#f8c90e]">AI Sales Prediction Accuracy</h3>
              <div className="h-[400px] -ml-6">
                <ResponsiveContainer width="95%" height="100%">
                  <ComposedChart data={seasonalTrendsData} margin={{ left: 60, right: 20, top: 10, bottom: 10 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" style={{ fontSize: '12px', fill: '#fff' }} />
                    <YAxis yAxisId="left" style={{ fontSize: '12px', fill: '#fff' }} />
                    <YAxis yAxisId="right" orientation="right" style={{ fontSize: '12px', fill: '#fff' }} />
                    <Tooltip />
                    <Legend />
                    <Bar yAxisId="left" dataKey="sales" fill="#456ace" name="Actual Sales" />
                    <Bar yAxisId="left" dataKey="predictions" fill="#f8c90e" name="AI Predictions" />
                    <Line yAxisId="right" type="monotone" dataKey="accuracy" stroke="#ff7300" name="Prediction Accuracy %" />
                  </ComposedChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-[#111827] p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-[#f8c90e]">Customer Lifetime Value Impact</h3>
              <div className="h-[400px] -ml-6">
                <ResponsiveContainer width="95%" height="100%">
                  <BarChart data={customerLifetimeValueData} margin={{ left: 60, right: 20, top: 10, bottom: 10 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="segment" style={{ fontSize: '12px', fill: '#fff' }} />
                    <YAxis style={{ fontSize: '12px', fill: '#fff' }} />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="beforeAI" fill="#456ace" name="Before AI ($)" />
                    <Bar dataKey="afterAI" fill="#f8c90e" name="After AI ($)" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-[#111827] p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-[#f8c90e]">AI-Powered Cross-Selling Success</h3>
              <div className="h-[400px] -ml-6">
                <ResponsiveContainer width="95%" height="100%">
                  <ComposedChart data={crossSellingData} margin={{ left: 60, right: 20, top: 10, bottom: 10 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="category" style={{ fontSize: '12px', fill: '#fff' }} />
                    <YAxis style={{ fontSize: '12px', fill: '#fff' }} />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="attempts" fill="#456ace" name="Total Attempts" />
                    <Bar dataKey="success" fill="#f8c90e" name="Successful Sales" />
                    <Line type="monotone" dataKey="success" stroke="#ff7300" name="Success Rate" />
                  </ComposedChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-[#111827] p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-[#f8c90e]">Supply Chain Optimization Metrics</h3>
              <div className="h-[400px] -ml-6">
                <ResponsiveContainer width="95%" height="100%">
                  <ComposedChart data={supplyChainOptimization} margin={{ left: 60, right: 20, top: 10, bottom: 10 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="quarter" style={{ fontSize: '12px', fill: '#fff' }} />
                    <YAxis yAxisId="left" style={{ fontSize: '12px', fill: '#fff' }} />
                    <YAxis yAxisId="right" orientation="right" style={{ fontSize: '12px', fill: '#fff' }} />
                    <Tooltip />
                    <Legend />
                    <Bar yAxisId="left" dataKey="stockTurnover" fill="#456ace" name="Stock Turnover Rate" />
                    <Bar yAxisId="left" dataKey="warehouseUtilization" fill="#f8c90e" name="Warehouse Utilization %" />
                    <Line yAxisId="right" type="monotone" dataKey="deliverySpeed" stroke="#ff7300" name="Delivery Speed (days)" />
                    <Line yAxisId="right" type="monotone" dataKey="returns" stroke="#413ea0" name="Returns %" />
                  </ComposedChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-[#111827] p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-[#f8c90e]">Omni-Channel Performance Analysis</h3>
              <div className="h-[400px] -ml-6">
                <ResponsiveContainer width="95%" height="100%">
                  <ComposedChart data={omniChannelPerformance} margin={{ left: 60, right: 20, top: 10, bottom: 10 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="channel" style={{ fontSize: '12px', fill: '#fff' }} />
                    <YAxis yAxisId="left" style={{ fontSize: '12px', fill: '#fff' }} />
                    <YAxis yAxisId="right" orientation="right" style={{ fontSize: '12px', fill: '#fff' }} />
                    <Tooltip />
                    <Legend />
                    <Bar yAxisId="left" dataKey="revenue" fill="#fff" name="Revenue ($)" />
                    <Line yAxisId="right" type="monotone" dataKey="conversion" stroke="#ff7300" name="Conversion Rate %" />
                    <Line yAxisId="right" type="monotone" dataKey="engagement" stroke="#413ea0" name="Engagement Score" />
                  </ComposedChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-[#111827] p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-[#f8c90e]">Seasonality Impact Analysis</h3>
              <div className="h-[400px] -ml-6">
                <ResponsiveContainer width="95%" height="100%">
                  <AreaChart data={seasonalityImpact} margin={{ left: 60, right: 20, top: 10, bottom: 10 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" style={{ fontSize: '12px', fill: '#fff' }} />
                    <YAxis style={{ fontSize: '12px', fill: '#fff' }} />
                    <Tooltip />
                    <Legend />
                    <Area type="monotone" dataKey="baseline" stackId="1" stroke="#456ace" fill="#456ace" name="Baseline Performance" />
                    <Area type="monotone" dataKey="withAI" stackId="2" stroke="#f8c90e" fill="#f8c90e" name="With AI Implementation" />
                    <Area type="monotone" dataKey="marketTrend" stackId="3" stroke="#ffc658" fill="#ffc658" name="Market Trend" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-[#111827] p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-[#f8c90e]">AI Customer Service Impact</h3>
              <div className="h-[400px] -ml-6">
                <ResponsiveContainer width="95%" height="100%">
                  <BarChart data={aiCustomerServiceMetrics} layout="vertical" margin={{ left: 60, right: 20, top: 10, bottom: 10 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" style={{ fontSize: '12px', fill: '#fff' }} />
                    <YAxis dataKey="category" type="category" style={{ fontSize: '12px', fill: '#fff' }} />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="before" fill="#456ace" name="Before AI" />
                    <Bar dataKey="after" fill="#f8c90e" name="With AI" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-[#111827] p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-[#f8c90e]">24-Hour Chatbot Performance</h3>
              <div className="h-[400px] -ml-6">
                <ResponsiveContainer width="95%" height="100%">
                  <ComposedChart data={chatbotEfficiencyData} margin={{ left: 60, right: 20, top: 10, bottom: 10 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="time" style={{ fontSize: '12px', fill: '#fff' }} />
                    <YAxis yAxisId="left" style={{ fontSize: '12px', fill: '#fff' }} />
                    <YAxis yAxisId="right" orientation="right" style={{ fontSize: '12px', fill: '#fff' }} />
                    <Tooltip />
                    <Legend />
                    <Bar yAxisId="left" dataKey="volume" fill="#456ace" name="Query Volume" />
                    <Line yAxisId="right" type="monotone" dataKey="satisfaction" stroke="#f8c90e" name="Satisfaction %" />
                    <Line yAxisId="right" type="monotone" dataKey="responseTime" stroke="#ffc658" name="Response Time (s)" />
                  </ComposedChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-[#111827] p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-[#f8c90e]">Multilingual Support Capabilities</h3>
              <div className="h-[400px] -ml-6">
                <ResponsiveContainer width="95%" height="100%">
                  <RadarChart data={multilingualSupportData} margin={{ left: 60, right: 20, top: 10, bottom: 10 }}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="language" style={{ fontSize: '12px', fill: '#fff' }} />
                    <PolarRadiusAxis angle={30} domain={[0, 100]} style={{ fontSize: '12px', fill: '#fff' }} />
                    <Radar name="Coverage %" dataKey="coverage" stroke="#456ace" fill="#456ace" fillOpacity={0.6} />
                    <Radar name="Accuracy %" dataKey="accuracy" stroke="#f8c90e" fill="#f8c90e" fillOpacity={0.6} />
                    <Tooltip />
                    <Legend />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-[#111827] p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-[#f8c90e]">AI vs Human Resolution Distribution</h3>
              <div className="h-[400px] -ml-6">
                <ResponsiveContainer width="95%" height="100%">
                  <BarChart data={issueResolutionData} margin={{ left: 60, right: 20, top: 10, bottom: 10 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="category" style={{ fontSize: '12px', fill: '#fff' }} />
                    <YAxis style={{ fontSize: '12px', fill: '#fff' }} />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="aiResolved" stackId="a" fill="#456ace" name="AI Resolved %" />
                    <Bar dataKey="humanNeeded" stackId="a" fill="#f8c90e" name="Human Needed %" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-[#111827] p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-w[#f8c90e]">Customer Journey Enhancement</h3>
              <div className="h-[400px] -ml-6">
                <ResponsiveContainer width="95%" height="100%">
                  <LineChart data={customerJourneyData} margin={{ left: 60, right: 20, top: 10, bottom: 10 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="stage" style={{ fontSize: '12px', fill: '#fff' }} />
                    <YAxis style={{ fontSize: '12px', fill: '#fff' }} />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="traditional" stroke="#456ace" name="Traditional %" />
                    <Line type="monotone" dataKey="withAI" stroke="#f8c90e" name="With AI %" />
                    <Line type="monotone" dataKey="improvement" stroke="#ffc658" name="Improvement %" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-[#111827] p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-[#f8c90e]">Query Resolution & Escalation Patterns</h3>
              <div className="h-[400px] -ml-6">
                <ResponsiveContainer width="95%" height="100%">
                  <AreaChart data={escalationPatterns} margin={{ left: 60, right: 20, top: 10, bottom: 10 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" style={{ fontSize: '12px', fill: '#fff' }} />
                    <YAxis style={{ fontSize: '12px', fill: '#fff' }} />
                    <Tooltip />
                    <Legend />
                    <Area type="monotone" dataKey="total" stackId="1" stroke="#456ace" fill="#456ace" name="Total Queries" />
                    <Area type="monotone" dataKey="aiResolved" stackId="2" stroke="#f8c90e" fill="#f8c90e" name="AI Resolved" />
                    <Area type="monotone" dataKey="escalated" stackId="3" stroke="#ffc658" fill="#ffc658" name="Escalated" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-[#111827] p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-[#f8c90e]">Customer Sentiment Trends</h3>
              <div className="h-[400px] -ml-6">
                <ResponsiveContainer width="95%" height="100%">
                  <AreaChart data={sentimentAnalysis} margin={{ left: 60, right: 20, top: 10, bottom: 10 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="period" style={{ fontSize: '12px', fill: '#fff' }} />
                    <YAxis style={{ fontSize: '12px', fill: '#fff' }} />
                    <Tooltip />
                    <Legend />
                    <Area type="monotone" dataKey="positive" stackId="1" stroke="#f8c90e" fill="#f8c90e" name="Positive %" />
                    <Area type="monotone" dataKey="neutral" stackId="1" stroke="#ffc658" fill="#ffc658" name="Neutral %" />
                    <Area type="monotone" dataKey="negative" stackId="1" stroke="#ff8042" fill="#ff8042" name="Negative %" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-[#111827] p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-[#f8c90e]">Operational Cost Analysis</h3>
              <div className="h-[400px] -ml-6">
                <ResponsiveContainer width="95%" height="100%">
                  <ComposedChart data={operationalCostSavings} margin={{ left: 60, right: 20, top: 10, bottom: 10 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="department" style={{ fontSize: '12px', fill: '#fff' }} />
                    <YAxis yAxisId="left" style={{ fontSize: '12px', fill: '#fff' }} />
                    <YAxis yAxisId="right" orientation="right" style={{ fontSize: '12px', fill: '#fff' }} />
                    <Tooltip />
                    <Legend />
                    <Bar yAxisId="left" dataKey="before" fill="#456ace" name="Cost Before ($)" />
                    <Bar yAxisId="left" dataKey="after" fill="#f8c90e" name="Cost After ($)" />
                    <Line yAxisId="right" type="monotone" dataKey="roi" stroke="#ff7300" name="ROI %" />
                  </ComposedChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-[#111827] p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-[#f8c90e]">Automation Adoption Metrics</h3>
              <div className="h-[400px] -ml-6">
                <ResponsiveContainer width="95%" height="100%">
                  <RadarChart data={automationAdoption} margin={{ left: 60, right: 20, top: 10, bottom: 10 }}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="process" style={{ fontSize: '12px', fill: '#fff' }} />
                    <PolarRadiusAxis angle={30} domain={[0, 200]} style={{ fontSize: '12px', fill: '#fff' }} />
                    <Radar name="Completion %" dataKey="completion" stroke="#456ace" fill="#456ace"fillOpacity={0.6} />
                    <Radar name="Satisfaction %" dataKey="satisfaction" stroke="#f8c90e" fill="#f8c90e" fillOpacity={0.6} />
                    <Radar name="Efficiency %" dataKey="efficiency" stroke="#ffc658" fill="#ffc658" fillOpacity={0.6} />
                    <Tooltip />
                    <Legend />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-[#111827] p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-[#f8c90e]">Peak Handling Capacity</h3>
              <div className="h-[400px] -ml-6">
                <ResponsiveContainer width="95%" height="100%">
                  <AreaChart data={peakHandlingCapacity} margin={{ left: 60, right: 20, top: 10, bottom: 10 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="hour" style={{ fontSize: '12px', fill: '#fff' }} />
                    <YAxis style={{ fontSize: '12px', fill: '#fff' }} />
                    <Tooltip />
                    <Legend />
                    <Area type="monotone" dataKey="traditional" stroke="#456ace" fill="#456ace" name="Traditional Capacity" />
                    <Area type="monotone" dataKey="withAI" stroke="#f8c90e" fill="#f8c90e" name="AI-Enhanced Capacity" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* New Static Charts Section */}
    </div>
  );
};

export default function StatisticsPage() {
  return (
    <div className="space-y-16">
      <AIBenefitsCharts />
      <BusinessMetricsCharts />
    </div>
  );
}
