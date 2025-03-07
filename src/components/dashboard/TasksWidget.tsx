
import React from 'react';
import { ArrowRight, CheckCircle2, Circle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '../ui-components/Card';
import { Button } from '../ui-components/Button';
import { Badge } from '../ui-components/Badge';
import { useNavigate } from 'react-router-dom';

const TasksWidget: React.FC = () => {
  const navigate = useNavigate();
  
  // These would normally come from an API or state
  const tasks = [
    {
      name: "Change HVAC Filter",
      dueDate: "2023-05-15",
      priority: "high",
      isCompleted: false,
    },
    {
      name: "Clean Gutters",
      dueDate: "2023-05-20",
      priority: "medium",
      isCompleted: false,
    },
    {
      name: "Test Smoke Detectors",
      dueDate: "2023-05-10",
      priority: "high",
      isCompleted: true,
    },
    {
      name: "Lawn Maintenance",
      dueDate: "2023-05-17",
      priority: "medium",
      isCompleted: false,
    },
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric' }).format(date);
  };

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case 'high':
        return <Badge variant="destructive" size="sm">High</Badge>;
      case 'medium':
        return <Badge variant="secondary" size="sm">Medium</Badge>;
      default:
        return <Badge variant="outline" size="sm">Low</Badge>;
    }
  };

  return (
    <Card className="animate-slide-up" style={{ animationDelay: `350ms` }}>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-md font-semibold">
          Maintenance Tasks
        </CardTitle>
        <Badge variant="outline" size="sm">
          12 pending
        </Badge>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {tasks.map((task, index) => (
            <div key={index} className="flex items-center justify-between">
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
                  <p className="text-xs text-muted-foreground">Due {formatDate(task.dueDate)}</p>
                </div>
              </div>
              <div className="flex items-center">
                {!task.isCompleted && getPriorityBadge(task.priority)}
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
          onClick={() => navigate('/tasks')}
        >
          View all tasks
        </Button>
      </CardFooter>
    </Card>
  );
};

export default TasksWidget;
