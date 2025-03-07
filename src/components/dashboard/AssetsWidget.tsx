
import React from 'react';
import { ArrowRight, Home, Tv, Refrigerator, Car } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '../ui-components/Card';
import { Button } from '../ui-components/Button';
import { Badge } from '../ui-components/Badge';
import { useNavigate } from 'react-router-dom';

const AssetsWidget: React.FC = () => {
  const navigate = useNavigate();
  
  // These would normally come from an API or state
  const assets = [
    {
      name: "Main Property",
      purchaseDate: "2019-06-10",
      purchasePrice: 425000,
      currentValue: 498000,
      icon: Home,
    },
    {
      name: "Samsung Smart TV",
      purchaseDate: "2021-11-25",
      purchasePrice: 1299.99,
      currentValue: 899.99,
      icon: Tv,
    },
    {
      name: "Refrigerator",
      purchaseDate: "2020-03-15",
      purchasePrice: 2100,
      currentValue: 1470,
      icon: Refrigerator,
    },
    {
      name: "Toyota Camry",
      purchaseDate: "2020-09-05",
      purchasePrice: 28500,
      currentValue: 23200,
      icon: Car,
    },
  ];

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
  };

  const getValueChangePercentage = (purchase: number, current: number) => {
    const change = ((current - purchase) / purchase) * 100;
    return change.toFixed(1);
  };

  return (
    <Card className="animate-slide-up" style={{ animationDelay: `400ms` }}>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-md font-semibold">
          Asset Overview
        </CardTitle>
        <Badge variant="outline" size="sm">
          24 total
        </Badge>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {assets.map((asset, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="bg-primary/10 rounded-full p-2 mr-3">
                  <asset.icon className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-medium">{asset.name}</h4>
                  <p className="text-xs text-muted-foreground">
                    Purchased {new Date(asset.purchaseDate).getFullYear()}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm font-medium">{formatCurrency(asset.currentValue)}</div>
                <div className="flex items-center justify-end mt-1">
                  {asset.currentValue >= asset.purchasePrice ? (
                    <Badge variant="success" size="sm">
                      +{getValueChangePercentage(asset.purchasePrice, asset.currentValue)}%
                    </Badge>
                  ) : (
                    <Badge variant="destructive" size="sm">
                      {getValueChangePercentage(asset.purchasePrice, asset.currentValue)}%
                    </Badge>
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
          onClick={() => navigate('/assets')}
        >
          View all assets
        </Button>
      </CardFooter>
    </Card>
  );
};

export default AssetsWidget;
