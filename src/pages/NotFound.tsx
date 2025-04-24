
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-200px)] bg-background">
      <div className="text-center px-4">
        <h1 className="text-6xl font-bold text-primary mb-6">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-muted-foreground max-w-md mx-auto mb-8">
          The page you're looking for doesn't seem to exist. Let's get you back on track.
        </p>
        <Button asChild>
          <Link to="/">
            Return Home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
