
import React from 'react';
import { ArrowRight, DollarSign } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '../ui-components/Card';
import { Button } from '../ui-components/Button';
import { Badge } from '../ui-components/Badge';
import { useNavigate } from 'react-router-dom';

const BillsWidget: React.FC = () => {
  const navigate = useNavigate();
  // These would normally come from an API or state
  const bills = [
    {
      name: "Mortgage",
      amount: 1450,
      dueDate: "2023-05-15",
      category: "Housing",
      isPaid: false,
    },
    {
      name: "Electricity",
      amount: 125.75,
      dueDate: "2023-05-20",
      category: "Utilities",
      isPaid: false,
    },
    {
      name: "Internet",
      amount: 79.99,
      dueDate: "2023-05-17",
      category: "Utilities",
      isPaid: false,
    },
    {
      name: "Water & Sewer",
      amount: 95.50,
      dueDate: "2023-05-01",
      category: "Utilities",
      isPaid: true,
    },
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric' }).format(date);
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
  };

  return (
    <Card className="animate-slide-up" style={{ animationDelay: `300ms` }}>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-md font-semibold">
          Upcoming Bills
        </CardTitle>
        <Badge variant="outline" size="sm">
          7 pending
        </Badge>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {bills.map((bill, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="bg-primary/10 rounded-full p-2 mr-3">
                  <DollarSign className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-medium">{bill.name}</h4>
                  <p className="text-xs text-muted-foreground">{bill.category}</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm font-medium">{formatCurrency(bill.amount)}</div>
                <div className="flex items-center justify-end mt-1">
                  {bill.isPaid ? (
                    <Badge variant="success" size="sm">Paid</Badge>
                  ) : (
                    <Badge variant="outline" size="sm">Due {formatDate(bill.dueDate)}</Badge>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="pt-0">
        <Button
          variant="ghost"
          className="w-full justify-between"
          icon={<ArrowRight className="h-4 w-4" />}
          iconPosition="right"
          onClick={() => navigate('/bills')}
        >
          View all bills
        </Button>
      </CardFooter>
    </Card>
  );
};

export default BillsWidget;
