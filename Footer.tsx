import React from 'react';
import { Mail, Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/30 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <a
              href="mailto:Sidharthsajeevkk@gmail.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
          
          <div className="flex items-center text-sm text-muted-foreground">
            <span>© {currentYear} Made with </span>
            <Heart className="h-4 w-4 mx-1 text-red-500" />
            <span>by Dr Sidharth S</span>
          </div>
        </div>
      </div>
    </footer>
  );
}