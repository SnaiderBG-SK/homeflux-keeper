
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface NavItemProps extends React.HTMLAttributes<HTMLAnchorElement> {
  href: string;
  icon?: React.ReactNode;
  label: string;
  collapsed?: boolean;
}

const NavItem = React.forwardRef<HTMLAnchorElement, NavItemProps>(
  ({ href, icon, label, collapsed = false, className, ...props }, ref) => {
    const location = useLocation();
    const isActive = location.pathname === href;
    
    return (
      <Link
        ref={ref}
        to={href}
        className={cn(
          "flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-colors",
          isActive 
            ? "bg-primary/10 text-primary" 
            : "text-muted-foreground hover:bg-accent hover:text-foreground",
          collapsed ? "justify-center" : "justify-start",
          className
        )}
        {...props}
      >
        {icon && <span className={cn("h-5 w-5", collapsed ? "" : "mr-2")}>{icon}</span>}
        {!collapsed && <span>{label}</span>}
      </Link>
    );
  }
);

NavItem.displayName = 'NavItem';

export { NavItem };
