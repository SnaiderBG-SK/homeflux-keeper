
import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Sidebar from '@/components/layout/Sidebar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui-components/Card';
import { Badge } from '@/components/ui-components/Badge';
import { Button } from '@/components/ui-components/Button';
import { Plus, Search, Filter, CreditCard, ArrowDownUp, Download } from 'lucide-react';

const Bills: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  // These would normally come from an API or state
  const bills = [
    {
      id: '1',
      name: "Mortgage",
      amount: 1450,
      dueDate: "2023-05-15",
      category: "Housing",
      status: "Upcoming",
      isRecurring: true,
      frequency: "Monthly",
    },
    {
      id: '2',
      name: "Electricity",
      amount: 125.75,
      dueDate: "2023-05-20",
      category: "Utilities",
      status: "Upcoming",
      isRecurring: true,
      frequency: "Monthly",
    },
    {
      id: '3',
      name: "Internet",
      amount: 79.99,
      dueDate: "2023-05-17",
      category: "Utilities",
      status: "Upcoming",
      isRecurring: true,
      frequency: "Monthly",
    },
    {
      id: '4',
      name: "Water & Sewer",
      amount: 95.50,
      dueDate: "2023-05-01",
      category: "Utilities",
      status: "Paid",
      isRecurring: true,
      frequency: "Monthly",
    },
    {
      id: '5',
      name: "Car Insurance",
      amount: 187.50,
      dueDate: "2023-05-28",
      category: "Insurance",
      status: "Upcoming",
      isRecurring: true,
      frequency: "Monthly",
    },
    {
      id: '6',
      name: "Home Insurance",
      amount: 156.25,
      dueDate: "2023-06-10",
      category: "Insurance",
      status: "Upcoming",
      isRecurring: true,
      frequency: "Monthly",
    },
    {
      id: '7',
      name: "Property Tax",
      amount: 2100,
      dueDate: "2023-07-15",
      category: "Taxes",
      status: "Upcoming",
      isRecurring: true,
      frequency: "Quarterly",
    },
    {
      id: '8',
      name: "Gardening Service",
      amount: 120,
      dueDate: "2023-05-05",
      category: "Maintenance",
      status: "Paid",
      isRecurring: true,
      frequency: "Monthly",
    },
    {
      id: '9',
      name: "Gym Membership",
      amount: 45,
      dueDate: "2023-05-10",
      category: "Recreation",
      status: "Paid",
      isRecurring: true,
      frequency: "Monthly",
    },
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric' }).format(date);
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Paid':
        return <Badge variant="success">Paid</Badge>;
      case 'Upcoming':
        return <Badge variant="outline">Upcoming</Badge>;
      case 'Overdue':
        return <Badge variant="destructive">Overdue</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onMenuClick={() => setSidebarOpen(true)} />
      
      <div className="flex-1 flex">
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        
        <div className="flex-1 ml-0 md:ml-64 pt-6 px-4 pb-12 overflow-y-auto transition-all duration-300">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
              <div>
                <Badge variant="outline" size="sm" className="mb-2">Finances</Badge>
                <h1 className="text-2xl font-bold tracking-tight text-foreground">Bills & Expenses</h1>
                <p className="text-muted-foreground mt-1">
                  Track and manage your recurring payments and one-time expenses.
                </p>
              </div>
              <div className="mt-4 sm:mt-0 flex items-center gap-2">
                <Button
                  variant="outline"
                  icon={<Download className="h-4 w-4" />}
                  iconPosition="left"
                >
                  Export
                </Button>
                <Button
                  icon={<Plus className="h-4 w-4" />}
                  iconPosition="left"
                >
                  Add New Bill
                </Button>
              </div>
            </div>
            
            <Card className="mb-6 animate-slide-up">
              <CardContent className="p-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <input 
                      type="text" 
                      placeholder="Search bills..." 
                      className="pl-9 py-2 pr-4 h-10 w-full rounded-lg text-sm bg-background border border-input focus:outline-none focus:ring-1 focus:ring-primary" 
                    />
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      icon={<Filter className="h-4 w-4" />}
                      iconPosition="left"
                    >
                      Filter
                    </Button>
                    <Button
                      variant="outline"
                      icon={<ArrowDownUp className="h-4 w-4" />}
                      iconPosition="left"
                    >
                      Sort
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="space-y-4 animate-slide-up" style={{ animationDelay: `50ms` }}>
              {bills.map((bill) => (
                <Card key={bill.id} variant="bordered" hoverable className="cursor-pointer">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="bg-primary/10 rounded-full p-2 mr-3">
                          <CreditCard className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <h4 className="text-sm font-medium">{bill.name}</h4>
                          <div className="flex items-center mt-1">
                            <Badge variant="secondary" size="sm" className="mr-2">{bill.category}</Badge>
                            {bill.isRecurring && (
                              <Badge variant="outline" size="sm">{bill.frequency}</Badge>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-semibold">{formatCurrency(bill.amount)}</div>
                        <div className="flex items-center justify-end mt-1">
                          <div className="mr-2 text-xs text-muted-foreground">
                            Due {formatDate(bill.dueDate)}
                          </div>
                          {getStatusBadge(bill.status)}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bills;
