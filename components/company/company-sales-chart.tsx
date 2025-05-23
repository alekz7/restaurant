"use client";

import { Card } from '@/components/ui/card';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

interface CompanySalesChartProps {
  period: string;
}

export default function CompanySalesChart({ period }: CompanySalesChartProps) {
  // This would normally be fetched from an API based on the period
  const data = [
    {
      name: period === 'week' ? 'Mon' : period === 'month' ? 'Week 1' : 'Jan',
      companyOrders: 4000,
      employeeOrders: 2400,
    },
    {
      name: period === 'week' ? 'Tue' : period === 'month' ? 'Week 2' : 'Feb',
      companyOrders: 3000,
      employeeOrders: 1398,
    },
    {
      name: period === 'week' ? 'Wed' : period === 'month' ? 'Week 3' : 'Mar',
      companyOrders: 2000,
      employeeOrders: 9800,
    },
    {
      name: period === 'week' ? 'Thu' : period === 'month' ? 'Week 4' : 'Apr',
      companyOrders: 2780,
      employeeOrders: 3908,
    },
    {
      name: period === 'week' ? 'Fri' : period === 'month' ? 'Week 5' : 'May',
      companyOrders: 1890,
      employeeOrders: 4800,
    },
    {
      name: period === 'week' ? 'Sat' : period === 'month' ? 'Week 6' : 'Jun',
      companyOrders: 2390,
      employeeOrders: 3800,
    },
    {
      name: period === 'week' ? 'Sun' : period === 'month' ? 'Week 7' : 'Jul',
      companyOrders: 3490,
      employeeOrders: 4300,
    },
  ];

  // Only show 4 weeks for month view
  const processedData = period === 'month' ? data.slice(0, 4) : data;

  return (
    <div className="w-full h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={processedData}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="companyOrders" name="Company Orders" fill="hsl(var(--primary))" />
          <Bar dataKey="employeeOrders" name="Employee Orders" fill="hsl(var(--secondary))" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}