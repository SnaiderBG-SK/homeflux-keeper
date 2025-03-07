
import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Sidebar from '@/components/layout/Sidebar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui-components/Card';
import { Badge } from '@/components/ui-components/Badge';
import { Button } from '@/components/ui-components/Button';
import { Plus, Search, Filter, CheckCircle2, Circle, ArrowDownUp, Calendar } from 'lucide-react';

const Tasks: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  // These would normally come from an API or state
  const tasks = [
    {
      id: '1',
      name: "Change HVAC Filter",
      description: "Replace the air filter in the HVAC system",
      dueDate: "2023-05-15",
      priority: "high",
      category: "Maintenance",
      isCompleted: false,
      isRecurring: true,
      frequency: "3 months",
    },
    {
      id: '2',
      name: "Clean Gutters",
      description: "Remove debris from gutters around the entire house",
      dueDate: "2023-05-20",
      priority: "medium",
      category: "Maintenance",
      isCompleted: false,
      isRecurring: true,
      frequency: "6 months",
    },
    {
      id: '3',
      name: "Test Smoke Detectors",
      description: "Check all smoke detectors and replace batteries if needed",
      dueDate: "2023-05-10",
      priority: "high",
      category: "Safety",
      isCompleted: true,
      isRecurring: true,
      frequency: "6 months",
    },
    {
      id: '4',
      name: "Lawn Maintenance",
      description: "Mow lawn, trim edges, and apply fertilizer",
      dueDate: "2023-05-17",
      priority: "medium",
      category: "Garden",
      isCompleted: false,
      isRecurring: true,
      frequency: "2 weeks",
    },
    {
      id: '5',
      name: "Inspect Roof",
      description: "Check for damaged shingles or leaks",
      dueDate: "2023-06-10",
      priority: "medium",
      category: "Inspection",
      isCompleted: false,
      isRecurring: true,
      frequency: "1 year",
    },
    {
      id: '6',
      name: "Service HVAC System",
      description: "Professional tune-up of the heating and cooling system",
      dueDate: "2023-07-15",
      priority: "medium",
      category: "Professional Service",
      isCompleted: false,
      isRecurring: true,
      frequency: "1 year",
    },
    {
      id: '7',
      name: "Clean Dryer Vent",
      description: "Remove lint build-up from the dryer vent",
      dueDate: "2023-05-30",
      priority: "high",
      category: "Safety",
      isCompleted: false,
      isRecurring: true,
      frequency: "1 year",
    },
    {
      id: '8',
      name: "Flush Water Heater",
      description: "Drain sediment from water heater",
      dueDate: "2023-08-15",
      priority: "low",
      category: "Maintenance",
      isCompleted: false,
      isRecurring: true,
      frequency: "1 year",
    },
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric' }).format(date);
  };

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case 'high':
        return <Badge variant="destructive">High</Badge>;
      case 'medium':
        return <Badge variant="secondary">Medium</Badge>;
      default:
        return <Badge variant="outline">Low</Badge>;
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
                <Badge variant="outline" size="sm" className="mb-2">Home Management</Badge>
                <h1 className="text-2xl font-bold tracking-tight text-foreground">Maintenance Tasks</h1>
                <p className="text-muted-foreground mt-1">
                  Schedule and track your home maintenance and repair tasks.
                </p>
              </div>
              <div className="mt-4 sm:mt-0 flex items-center gap-2">
                <Button
                  variant="outline"
                  icon={<Calendar className="h-4 w-4" />}
                  iconPosition="left"
                >
                  Calendar View
                </Button>
                <Button
                  icon={<Plus className="h-4 w-4" />}
                  iconPosition="left"
                >
                  Add New Task
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
                      placeholder="Search tasks..." 
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
              {tasks.map((task) => (
                <Card key={task.id} variant="bordered" hoverable className="cursor-pointer">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="mr-3">
                          {task.isCompleted ? (
                            <CheckCircle2 className="h-5 w-5 text-primary" />
                          ) : (
                            <Circle className="h-5 w-5 text-muted-foreground" />
                          )}
                        </div>
                        <div>
                          <h4 className={`text-sm font-medium ${task.isCompleted ? 'line-through text-muted-foreground' : ''}`}>
                            {task.name}
                          </h4>
                          <p className="text-xs text-muted-foreground mt-1">{task.description}</p>
                          <div className="flex items-center mt-2">
                            <Badge variant="secondary" size="sm" className="mr-2">{task.category}</Badge>
                            {task.isRecurring && (
                              <Badge variant="outline" size="sm">Every {task.frequency}</Badge>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-muted-foreground">Due {formatDate(task.dueDate)}</div>
                        <div className="flex items-center justify-end mt-2">
                          {!task.isCompleted && getPriorityBadge(task.priority)}
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

export default Tasks;
