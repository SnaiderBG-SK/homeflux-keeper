
import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Sidebar from '@/components/layout/Sidebar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui-components/Card';
import { Badge } from '@/components/ui-components/Badge';
import { Button } from '@/components/ui-components/Button';
import { Plus, Search, Filter, Home, Tv, Refrigerator, Car, Smartphone, Laptop, ArrowDownUp, BarChart4 } from 'lucide-react';

const Assets: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  // These would normally come from an API or state
  const assets = [
    {
      id: '1',
      name: "Main Property",
      description: "Primary residence",
      purchaseDate: "2019-06-10",
      purchasePrice: 425000,
      currentValue: 498000,
      category: "Real Estate",
      warranty: "N/A",
      icon: Home,
    },
    {
      id: '2',
      name: "Samsung Smart TV",
      description: "65-inch QLED 4K Smart TV Q80A",
      purchaseDate: "2021-11-25",
      purchasePrice: 1299.99,
      currentValue: 899.99,
      category: "Electronics",
      warranty: "2023-11-25",
      icon: Tv,
    },
    {
      id: '3',
      name: "Refrigerator",
      description: "LG French Door Refrigerator with Ice Maker",
      purchaseDate: "2020-03-15",
      purchasePrice: 2100,
      currentValue: 1470,
      category: "Appliances",
      warranty: "2025-03-15",
      icon: Refrigerator,
    },
    {
      id: '4',
      name: "Toyota Camry",
      description: "2020 Toyota Camry XSE V6",
      purchaseDate: "2020-09-05",
      purchasePrice: 28500,
      currentValue: 23200,
      category: "Vehicles",
      warranty: "2025-09-05",
      icon: Car,
    },
    {
      id: '5',
      name: "iPhone 13 Pro",
      description: "Apple iPhone 13 Pro 256GB",
      purchaseDate: "2022-01-15",
      purchasePrice: 1099,
      currentValue: 799,
      category: "Electronics",
      warranty: "2024-01-15",
      icon: Smartphone,
    },
    {
      id: '6',
      name: "MacBook Pro",
      description: "14-inch MacBook Pro with M1 Pro chip",
      purchaseDate: "2021-12-10",
      purchasePrice: 1999,
      currentValue: 1700,
      category: "Electronics",
      warranty: "2023-12-10",
      icon: Laptop,
    },
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric' }).format(date);
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
  };

  const getValueChangePercentage = (purchase: number, current: number) => {
    const change = ((current - purchase) / purchase) * 100;
    return change.toFixed(1);
  };

  const getWarrantyBadge = (warrantyDate: string) => {
    if (warrantyDate === "N/A") return <Badge variant="outline">No Warranty</Badge>;
    
    const today = new Date();
    const warranty = new Date(warrantyDate);
    
    if (warranty < today) {
      return <Badge variant="secondary">Expired</Badge>;
    } else {
      return <Badge variant="success">Active</Badge>;
    }
  };

  const getIconComponent = (icon: React.ElementType) => {
    const IconComponent = icon;
    return <IconComponent className="h-4 w-4 text-primary" />;
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
                <Badge variant="outline" size="sm" className="mb-2">Home Inventory</Badge>
                <h1 className="text-2xl font-bold tracking-tight text-foreground">Assets & Inventory</h1>
                <p className="text-muted-foreground mt-1">
                  Track your home assets, valuables, and appliances with depreciation.
                </p>
              </div>
              <div className="mt-4 sm:mt-0 flex items-center gap-2">
                <Button
                  variant="outline"
                  icon={<BarChart4 className="h-4 w-4" />}
                  iconPosition="left"
                >
                  Reports
                </Button>
                <Button
                  icon={<Plus className="h-4 w-4" />}
                  iconPosition="left"
                >
                  Add New Asset
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
                      placeholder="Search assets..." 
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
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 animate-slide-up" style={{ animationDelay: `50ms` }}>
              {assets.map((asset) => (
                <Card key={asset.id} variant="bordered" hoverable className="cursor-pointer">
                  <CardContent className="p-4">
                    <div className="flex items-center mb-3">
                      <div className="bg-primary/10 rounded-full p-2 mr-3">
                        {getIconComponent(asset.icon)}
                      </div>
                      <div>
                        <h4 className="text-sm font-medium">{asset.name}</h4>
                        <Badge variant="secondary" size="sm" className="mt-1">{asset.category}</Badge>
                      </div>
                    </div>
                    
                    <p className="text-xs text-muted-foreground mb-3">{asset.description}</p>
                    
                    <div className="grid grid-cols-2 gap-2 mb-2">
                      <div className="text-xs">
                        <div className="text-muted-foreground">Purchased</div>
                        <div className="font-medium">{formatDate(asset.purchaseDate)}</div>
                      </div>
                      <div className="text-xs">
                        <div className="text-muted-foreground">Warranty</div>
                        <div>{getWarrantyBadge(asset.warranty)}</div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2">
                      <div className="text-xs">
                        <div className="text-muted-foreground">Purchase Price</div>
                        <div className="font-medium">{formatCurrency(asset.purchasePrice)}</div>
                      </div>
                      <div className="text-xs">
                        <div className="text-muted-foreground">Current Value</div>
                        <div className="font-medium flex items-center">
                          {formatCurrency(asset.currentValue)}
                          <span className="ml-1">
                            {asset.currentValue >= asset.purchasePrice ? (
                              <Badge variant="success" size="sm">
                                +{getValueChangePercentage(asset.purchasePrice, asset.currentValue)}%
                              </Badge>
                            ) : (
                              <Badge variant="destructive" size="sm">
                                {getValueChangePercentage(asset.purchasePrice, asset.currentValue)}%
                              </Badge>
                            )}
                          </span>
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

export default Assets;
