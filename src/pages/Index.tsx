
import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Sidebar from '@/components/layout/Sidebar';
import DashboardSummary from '@/components/dashboard/DashboardSummary';
import BillsWidget from '@/components/dashboard/BillsWidget';
import TasksWidget from '@/components/dashboard/TasksWidget';
import AssetsWidget from '@/components/dashboard/AssetsWidget';
import { Badge } from '@/components/ui-components/Badge';
import { Button } from '@/components/ui-components/Button';
import { Plus } from 'lucide-react';

const Index: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onMenuClick={() => setSidebarOpen(true)} />
      
      <div className="flex-1 flex">
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        
        <div className="flex-1 ml-0 md:ml-64 pt-6 px-4 pb-12 overflow-y-auto transition-all duration-300">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
              <div>
                <Badge variant="outline" size="sm" className="mb-2">Home Management</Badge>
                <h1 className="text-2xl font-bold tracking-tight text-foreground">Dashboard</h1>
                <p className="text-muted-foreground mt-1">
                  Welcome back! Here's an overview of your home.
                </p>
              </div>
              <div className="mt-4 sm:mt-0 flex items-center gap-2">
                <Button
                  variant="outline"
                  icon={<Plus className="h-4 w-4" />}
                  iconPosition="left"
                >
                  Add New
                </Button>
                <Button>Quick Actions</Button>
              </div>
            </div>
            
            <div className="space-y-6 mb-8">
              <DashboardSummary />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <BillsWidget />
              <TasksWidget />
              <AssetsWidget />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
