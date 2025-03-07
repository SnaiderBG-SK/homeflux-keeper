
import React from 'react';
import { TrendingUp, TrendingDown, Clock, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui-components/Card';
import { Badge } from '../ui-components/Badge';

const DashboardSummary: React.FC = () => {
  // These would normally come from an API or state
  const stats = [
    {
      title: "Monthly Expenses",
      value: "$2,543.00",
      change: "+5.2%",
      isIncrease: true,
      description: "vs last month"
    },
    {
      title: "Pending Bills",
      value: "7",
      change: "-2",
      isIncrease: false,
      description: "vs last month"
    },
    {
      title: "Upcoming Tasks",
      value: "12",
      change: "+3",
      isIncrease: true,
      description: "this week"
    },
    {
      title: "Total Assets",
      value: "$283,450",
      change: "+$1,200",
      isIncrease: true,
      description: "since last quarter"
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <Card key={index} variant="bordered" className="animate-slide-up" style={{ animationDelay: `${index * 50}ms` }}>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
            <Badge 
              variant={stat.isIncrease ? 'success' : 'destructive'} 
              size="sm"
              className="flex items-center"
            >
              {stat.isIncrease ? <TrendingUp className="h-3 w-3 mr-1" /> : <TrendingDown className="h-3 w-3 mr-1" />}
              {stat.change}
            </Badge>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p className="text-xs text-muted-foreground mt-1">{stat.description}</p>
          </CardContent>
        </Card>
      ))}
      
      <div className="md:col-span-2 lg:col-span-4 grid gap-4 md:grid-cols-2 mt-2">
        <Card className="animate-slide-up" style={{ animationDelay: `200ms` }}>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center">
              <Clock className="h-4 w-4 mr-1 text-amber-500" /> 
              Approaching Deadlines
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex justify-between items-center">
                <span className="text-sm">Mortgage Payment</span>
                <Badge variant="outline" size="sm">In 2 days</Badge>
              </li>
              <li className="flex justify-between items-center">
                <span className="text-sm">HVAC Filter Replacement</span>
                <Badge variant="outline" size="sm">In 5 days</Badge>
              </li>
              <li className="flex justify-between items-center">
                <span className="text-sm">Car Insurance</span>
                <Badge variant="outline" size="sm">In 7 days</Badge>
              </li>
            </ul>
          </CardContent>
        </Card>
        
        <Card className="animate-slide-up" style={{ animationDelay: `250ms` }}>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center">
              <AlertCircle className="h-4 w-4 mr-1 text-red-500" /> 
              Attention Required
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex justify-between items-center">
                <span className="text-sm">Water Bill</span>
                <Badge variant="destructive" size="sm">Overdue</Badge>
              </li>
              <li className="flex justify-between items-center">
                <span className="text-sm">Dishwasher Maintenance</span>
                <Badge variant="destructive" size="sm">Critical</Badge>
              </li>
              <li className="flex justify-between items-center">
                <span className="text-sm">Roof Inspection</span>
                <Badge variant="destructive" size="sm">Overdue</Badge>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardSummary;
