import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ChefHat, Store, Building2, User } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/90 flex flex-col">
      <header className="border-b">
        <div className="container mx-auto py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <ChefHat className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold">Culinary Connect</h1>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="/menu" className="text-foreground/80 hover:text-primary transition-colors">
              Menu
            </Link>
            <Link href="/about" className="text-foreground/80 hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/locations" className="text-foreground/80 hover:text-primary transition-colors">
              Locations
            </Link>
            <Link href="/contact" className="text-foreground/80 hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>
          <div className="flex gap-2">
            <Link href="/signin">
              <Button variant="outline">Sign In</Button>
            </Link>
            <Link href="/signup">
              <Button>Sign Up</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="py-20 container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Delicious Food, <span className="text-primary">Simplified Ordering</span></h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Experience seamless ordering for individuals and companies with our modern menu management system.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/menu">
              <Button size="lg" className="w-full sm:w-auto">
                Browse Menu
              </Button>
            </Link>
            <Link href="/company/register">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Register Company
              </Button>
            </Link>
          </div>
        </section>

        <section className="py-16 bg-card">
          <div className="container mx-auto">
            <h3 className="text-3xl font-bold text-center mb-12">How It Works</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-background p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="h-8 w-8 text-primary" />
                </div>
                <h4 className="text-xl font-semibold mb-2">Individual Orders</h4>
                <p className="text-muted-foreground">Browse our menu, place your order, and pick it up at your preferred location.</p>
              </div>
              
              <div className="bg-background p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building2 className="h-8 w-8 text-primary" />
                </div>
                <h4 className="text-xl font-semibold mb-2">Company Orders</h4>
                <p className="text-muted-foreground">Place bulk orders for your company and let employees add their personal orders.</p>
              </div>
              
              <div className="bg-background p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Store className="h-8 w-8 text-primary" />
                </div>
                <h4 className="text-xl font-semibold mb-2">Two Locations</h4>
                <p className="text-muted-foreground">Choose between our two restaurant locations for convenient pickup.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">Featured Dishes</h3>
              <p className="text-muted-foreground mb-8">
                Explore our most popular dishes, prepared with fresh ingredients and available for order at both locations.
              </p>
              <Link href="/menu">
                <Button>View Full Menu</Button>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card rounded-lg overflow-hidden">
                <div className="h-40 bg-muted relative">
                  <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                    <span>Image Placeholder</span>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-semibold">Signature Pasta</h4>
                  <p className="text-sm text-muted-foreground">With fresh herbs and sauce</p>
                </div>
              </div>
              <div className="bg-card rounded-lg overflow-hidden">
                <div className="h-40 bg-muted relative">
                  <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                    <span>Image Placeholder</span>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-semibold">Gourmet Burger</h4>
                  <p className="text-sm text-muted-foreground">House special with secret sauce</p>
                </div>
              </div>
              <div className="bg-card rounded-lg overflow-hidden">
                <div className="h-40 bg-muted relative">
                  <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                    <span>Image Placeholder</span>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-semibold">Fresh Salad</h4>
                  <p className="text-sm text-muted-foreground">Seasonal vegetables and dressing</p>
                </div>
              </div>
              <div className="bg-card rounded-lg overflow-hidden">
                <div className="h-40 bg-muted relative">
                  <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                    <span>Image Placeholder</span>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-semibold">Seafood Platter</h4>
                  <p className="text-sm text-muted-foreground">Assorted fresh catch of the day</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-card border-t py-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <ChefHat className="h-6 w-6 text-primary" />
                <h3 className="font-bold">Culinary Connect</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Simplifying restaurant ordering for individuals and companies.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="/menu" className="text-sm text-muted-foreground hover:text-primary">Menu</Link></li>
                <li><Link href="/locations" className="text-sm text-muted-foreground hover:text-primary">Locations</Link></li>
                <li><Link href="/about" className="text-sm text-muted-foreground hover:text-primary">About Us</Link></li>
                <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">For Companies</h4>
              <ul className="space-y-2">
                <li><Link href="/company/register" className="text-sm text-muted-foreground hover:text-primary">Register</Link></li>
                <li><Link href="/company/dashboard" className="text-sm text-muted-foreground hover:text-primary">Dashboard</Link></li>
                <li><Link href="/company/orders" className="text-sm text-muted-foreground hover:text-primary">Bulk Orders</Link></li>
                <li><Link href="/company/billing" className="text-sm text-muted-foreground hover:text-primary">Billing</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Locations</h4>
              <ul className="space-y-2">
                <li className="text-sm text-muted-foreground">
                  <span className="location-badge location-badge-1 mr-2">1</span>
                  Downtown: 123 Main St
                </li>
                <li className="text-sm text-muted-foreground">
                  <span className="location-badge location-badge-2 mr-2">2</span>
                  Uptown: 456 Park Ave
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Culinary Connect. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}