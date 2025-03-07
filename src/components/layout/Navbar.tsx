
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, Search, Bell, User } from 'lucide-react';
import { Button } from '../ui-components/Button';
import { cn } from '@/lib/utils';

interface NavbarProps {
  onMenuClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onMenuClick }) => {
  const navigate = useNavigate();
  
  return (
    <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center">
          <Button 
            variant="ghost" 
            size="icon" 
            className="mr-2 md:hidden" 
            aria-label="Toggle Menu"
            onClick={onMenuClick}
          >
            <Menu className="h-5 w-5" />
          </Button>
          <div className="flex items-center">
            <span className="text-xl font-semibold tracking-tight text-primary">HomeFlux</span>
            <span className="hidden ml-2 pl-2 border-l border-border text-sm text-muted-foreground md:inline-block">
              Modern Home Management
            </span>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="relative hidden md:flex items-center">
            <Search className="absolute left-3 h-4 w-4 text-muted-foreground" />
            <input 
              type="text" 
              placeholder="Search..." 
              className="pl-9 py-1.5 pr-4 h-9 rounded-full text-sm bg-background border border-input focus:outline-none focus:ring-1 focus:ring-primary w-[180px] focus:w-[220px] transition-all" 
            />
          </div>
          
          <Button 
            variant="ghost" 
            size="icon" 
            aria-label="Notifications"
            className="relative"
          >
            <Bell className="h-5 w-5" />
            <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-destructive"></span>
          </Button>
          
          <Button 
            variant="ghost" 
            size="icon" 
            aria-label="Profile"
            onClick={() => navigate('/profile')}
          >
            <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-medium">
              <User className="h-4 w-4" />
            </div>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
