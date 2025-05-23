"use client";

import { useState, ReactNode } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { 
  ChefHat, 
  Menu, 
  X, 
  Home, 
  UtensilsCrossed, 
  MapPin, 
  Building2, 
  ShoppingCart, 
  User,
  LogOut,
  BarChart4
} from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from '@/lib/utils';

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(true); // Mock authentication state

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="border-b sticky top-0 z-50 bg-background/95 backdrop-blur-sm">
        <div className="container mx-auto py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <ChefHat className="h-6 w-6 text-primary" />
            <h1 className="text-xl font-bold">Culinary Connect</h1>
          </Link>
          
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-foreground/80 hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/menu" className="text-foreground/80 hover:text-primary transition-colors">
              Menu
            </Link>
            <Link href="/locations" className="text-foreground/80 hover:text-primary transition-colors">
              Locations
            </Link>
            {isAuthenticated ? (
              <>
                <Link href="/orders" className="text-foreground/80 hover:text-primary transition-colors">
                  My Orders
                </Link>
                <Link href="/company/dashboard" className="text-foreground/80 hover:text-primary transition-colors">
                  Company
                </Link>
              </>
            ) : (
              <Link href="/about" className="text-foreground/80 hover:text-primary transition-colors">
                About
              </Link>
            )}
          </nav>
          
          <div className="flex items-center gap-4">
            {isAuthenticated ? (
              <>
                <Link href="/cart">
                  <Button variant="outline" size="icon" className="relative">
                    <ShoppingCart className="h-5 w-5" />
                    <span className="quantity-badge">3</span>
                  </Button>
                </Link>
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" className="rounded-full">
                      <User className="h-5 w-5" />
                    </Button>
                  </SheetTrigger>
                  <SheetContent>
                    <SheetHeader className="pb-6">
                      <SheetTitle>Account</SheetTitle>
                    </SheetHeader>
                    <div className="py-4 flex flex-col gap-2">
                      <Link href="/profile" className="flex items-center gap-2 p-2 rounded-md hover:bg-muted">
                        <User className="h-5 w-5 text-muted-foreground" />
                        <span>Profile</span>
                      </Link>
                      <Link href="/orders" className="flex items-center gap-2 p-2 rounded-md hover:bg-muted">
                        <ShoppingCart className="h-5 w-5 text-muted-foreground" />
                        <span>My Orders</span>
                      </Link>
                      <Link href="/company/dashboard" className="flex items-center gap-2 p-2 rounded-md hover:bg-muted">
                        <Building2 className="h-5 w-5 text-muted-foreground" />
                        <span>Company Dashboard</span>
                      </Link>
                      <button 
                        className="flex items-center gap-2 p-2 rounded-md hover:bg-muted mt-6 text-destructive"
                        onClick={() => setIsAuthenticated(false)}
                      >
                        <LogOut className="h-5 w-5" />
                        <span>Sign Out</span>
                      </button>
                    </div>
                  </SheetContent>
                </Sheet>
              </>
            ) : (
              <div className="hidden md:flex gap-2">
                <Link href="/signin">
                  <Button variant="outline">Sign In</Button>
                </Link>
                <Link href="/signup">
                  <Button>Sign Up</Button>
                </Link>
              </div>
            )}
            
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <SheetHeader className="pb-6">
                  <SheetTitle className="flex items-center gap-2">
                    <ChefHat className="h-5 w-5 text-primary" />
                    Culinary Connect
                  </SheetTitle>
                </SheetHeader>
                <div className="py-4">
                  <nav className="flex flex-col gap-2">
                    <Link href="/" className="flex items-center gap-2 p-2 rounded-md hover:bg-muted" onClick={closeMobileMenu}>
                      <Home className="h-5 w-5 text-muted-foreground" />
                      <span>Home</span>
                    </Link>
                    <Link href="/menu" className="flex items-center gap-2 p-2 rounded-md hover:bg-muted" onClick={closeMobileMenu}>
                      <UtensilsCrossed className="h-5 w-5 text-muted-foreground" />
                      <span>Menu</span>
                    </Link>
                    <Link href="/locations" className="flex items-center gap-2 p-2 rounded-md hover:bg-muted" onClick={closeMobileMenu}>
                      <MapPin className="h-5 w-5 text-muted-foreground" />
                      <span>Locations</span>
                    </Link>
                    {isAuthenticated ? (
                      <>
                        <Link href="/orders" className="flex items-center gap-2 p-2 rounded-md hover:bg-muted" onClick={closeMobileMenu}>
                          <ShoppingCart className="h-5 w-5 text-muted-foreground" />
                          <span>My Orders</span>
                        </Link>
                        <Link href="/company/dashboard" className="flex items-center gap-2 p-2 rounded-md hover:bg-muted" onClick={closeMobileMenu}>
                          <Building2 className="h-5 w-5 text-muted-foreground" />
                          <span>Company</span>
                        </Link>
                        <div className="border-t my-4"></div>
                        <Link href="/profile" className="flex items-center gap-2 p-2 rounded-md hover:bg-muted" onClick={closeMobileMenu}>
                          <User className="h-5 w-5 text-muted-foreground" />
                          <span>Profile</span>
                        </Link>
                        <button 
                          className="flex items-center gap-2 p-2 rounded-md hover:bg-muted text-destructive w-full text-left"
                          onClick={() => {
                            setIsAuthenticated(false);
                            closeMobileMenu();
                          }}
                        >
                          <LogOut className="h-5 w-5" />
                          <span>Sign Out</span>
                        </button>
                      </>
                    ) : (
                      <>
                        <Link href="/about" className="flex items-center gap-2 p-2 rounded-md hover:bg-muted" onClick={closeMobileMenu}>
                          <BarChart4 className="h-5 w-5 text-muted-foreground" />
                          <span>About</span>
                        </Link>
                        <div className="border-t my-4"></div>
                        <Link href="/signin" className="w-full" onClick={closeMobileMenu}>
                          <Button variant="outline" className="w-full">Sign In</Button>
                        </Link>
                        <Link href="/signup" className="w-full" onClick={closeMobileMenu}>
                          <Button className="w-full">Sign Up</Button>
                        </Link>
                      </>
                    )}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {children}
      </main>

      <footer className="bg-card border-t py-6">
        <div className="container mx-auto">
          <div className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Culinary Connect. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}