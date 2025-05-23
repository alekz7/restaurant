"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BarChart,
  Calendar,
  ListOrdered,
  Users,
  Plus,
  MoreHorizontal,
  Download,
} from "lucide-react";
import MainLayout from "@/components/layouts/main-layout";
import CompanyOrdersTable from "@/components/company/company-orders-table";
import CompanySalesChart from "@/components/company/company-sales-chart";
import { companyOrders } from "@/lib/data/company-orders";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

export default function CompanyDashboardPage() {
  const [selectedPeriod, setSelectedPeriod] = useState("week");

  // Calculate some statistics
  const totalOrders = companyOrders.length;
  const totalSpent = companyOrders.reduce((sum, order) => sum + order.total, 0);
  const activeOrders = companyOrders.filter(
    (order) => order.status === "active"
  ).length;
  const employeesParticipated = [
    ...new Set(
      companyOrders.flatMap((order) =>
        order.employeeOrders.map((eo) => eo.employeeId)
      )
    ),
  ].length;

  return (
    <MainLayout>
      <div className="container mx-auto py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Company Dashboard</h1>
          <Link href="/company/orders/new">
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              New Company Order
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Total Orders</CardDescription>
              <CardTitle className="text-3xl">{totalOrders}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xs text-muted-foreground">
                <ListOrdered className="h-4 w-4 inline mr-1" />
                All time orders
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Total Spent</CardDescription>
              <CardTitle className="text-3xl">
                ${totalSpent.toFixed(2)}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xs text-muted-foreground">
                <BarChart className="h-4 w-4 inline mr-1" />
                All time spending
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Active Orders</CardDescription>
              <CardTitle className="text-3xl">{activeOrders}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xs text-muted-foreground">
                <Calendar className="h-4 w-4 inline mr-1" />
                Orders in progress
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Employees Participated</CardDescription>
              <CardTitle className="text-3xl">
                {employeesParticipated}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xs text-muted-foreground">
                <Users className="h-4 w-4 inline mr-1" />
                Unique employees
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <Card className="lg:col-span-2">
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>Order Statistics</CardTitle>
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    Export
                  </Button>
                  <Select
                    value={selectedPeriod}
                    onValueChange={setSelectedPeriod}
                  >
                    <SelectTrigger className="w-[120px]">
                      <SelectValue placeholder="Period" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="week">This Week</SelectItem>
                      <SelectItem value="month">This Month</SelectItem>
                      <SelectItem value="quarter">This Quarter</SelectItem>
                      <SelectItem value="year">This Year</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <CompanySalesChart period={selectedPeriod} />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {companyOrders.slice(0, 5).map((order, index) => (
                  <div key={order.id} className="flex items-start space-x-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      {index + 1}
                    </div>
                    <div>
                      <p className="text-sm font-medium">
                        Order #{order.id.substring(0, 8)}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {order.date}
                      </p>
                      <p className="text-xs">
                        {order.employeeOrders.length} employee orders
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" className="w-full" asChild>
                <Link href="/company/orders">View All Orders</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>Recent Orders</CardTitle>
              <Button variant="outline" size="sm" asChild>
                <Link href="/company/orders">View All</Link>
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <CompanyOrdersTable orders={companyOrders.slice(0, 5)} />
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
}
