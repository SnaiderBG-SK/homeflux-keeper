
import React, { useState } from 'react';
import { Home, CreditCard, Calendar, Box, FileText, LineChart, Settings, ChevronLeft, ChevronRight } from 'lucide-react';
import { NavItem } from '../ui-components/NavItem';
import { cn } from '@/lib/utils';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const [collapsed, setCollapsed] = useState(false);
  
  const navigationItems = [
    { href: '/', label: 'Dashboard', icon: <Home className="h-5 w-5" /> },
    { href: '/bills', label: 'Bills & Expenses', icon: <CreditCard className="h-5 w-5" /> },
    { href: '/tasks', label: 'Tasks', icon: <Calendar className="h-5 w-5" /> },
    { href: '/assets', label: 'Assets', icon: <Box className="h-5 w-5" /> },
    { href: '/documents', label: 'Documents', icon: <FileText className="h-5 w-5" /> },
    { href: '/reports', label: 'Reports', icon: <LineChart className="h-5 w-5" /> },
    { href: '/settings', label: 'Settings', icon: <Settings className="h-5 w-5" /> },
  ];
  
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/50 md:hidden" 
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <aside 
        className={cn(
          "fixed inset-y-0 left-0 z-50 flex flex-col bg-card border-r border-border transition-all duration-300 ease-in-out",
          collapsed ? "w-16" : "w-64",
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        )}
      >
        <div className="flex items-center justify-between h-16 px-4 border-b border-border">
          {!collapsed && (
            <span className="text-xl font-semibold tracking-tight text-primary">HomeFlux</span>
          )}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="p-1.5 rounded-lg hover:bg-accent text-muted-foreground ml-auto"
          >
            {collapsed ? <ChevronRight className="h-5 w-5" /> : <ChevronLeft className="h-5 w-5" />}
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto py-4 px-3">
          <nav className="space-y-1">
            {navigationItems.map((item) => (
              <NavItem
                key={item.href}
                href={item.href}
                label={item.label}
                icon={item.icon}
                collapsed={collapsed}
                onClick={() => {
                  if (window.innerWidth < 768) {
                    onClose();
                  }
                }}
              />
            ))}
          </nav>
        </div>
        
        <div className="p-4 border-t border-border">
          <div className={cn(
            "flex items-center", 
            collapsed ? "justify-center" : "justify-start"
          )}>
            <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-medium">
              <span className="text-sm">JD</span>
            </div>
            {!collapsed && (
              <div className="ml-3">
                <p className="text-sm font-medium">John Doe</p>
                <p className="text-xs text-muted-foreground">john@example.com</p>
              </div>
            )}
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
