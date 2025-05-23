"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Card, 
  CardContent, 
  CardFooter, 
  CardHeader, 
  CardTitle,
  CardDescription
} from '@/components/ui/card';
import { Minus, Plus, ShoppingCart, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';
import { MenuItem } from '@/lib/types';

interface MenuItemCardProps {
  item: MenuItem;
  onAddToCart: () => void;
}

export default function MenuItemCard({ item, onAddToCart }: MenuItemCardProps) {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity(prev => prev + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  const handleAddToCart = () => {
    // Here you would add the item to the cart with the selected quantity
    onAddToCart();
    setQuantity(1);
  };

  return (
    <Card className="menu-item-card overflow-hidden">
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-muted flex items-center justify-center">
          <span className="text-muted-foreground text-sm">Image Placeholder</span>
        </div>
        
        <div className="absolute top-2 right-2 flex flex-col gap-2">
          {item.isPopular && (
            <Badge variant="default" className="bg-primary">Popular</Badge>
          )}
          {item.isNew && (
            <Badge variant="secondary">New</Badge>
          )}
        </div>
        
        <div className="absolute bottom-2 left-2 flex gap-1">
          {item.availableAt.includes('location1') && (
            <Badge variant="outline" className="location-badge location-badge-1">
              <MapPin className="h-3 w-3 mr-1" />
              Downtown
            </Badge>
          )}
          {item.availableAt.includes('location2') && (
            <Badge variant="outline" className="location-badge location-badge-2">
              <MapPin className="h-3 w-3 mr-1" />
              Uptown
            </Badge>
          )}
        </div>
      </div>
      
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle>{item.name}</CardTitle>
          <span className="font-bold">${item.price.toFixed(2)}</span>
        </div>
        <CardDescription>{item.description}</CardDescription>
      </CardHeader>
      
      <CardFooter className="pt-2">
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center space-x-2">
            <Button 
              variant="outline" 
              size="icon" 
              className="h-8 w-8"
              onClick={handleDecrement}
            >
              <Minus className="h-3 w-3" />
            </Button>
            <span>{quantity}</span>
            <Button 
              variant="outline" 
              size="icon" 
              className="h-8 w-8"
              onClick={handleIncrement}
            >
              <Plus className="h-3 w-3" />
            </Button>
          </div>
          <Button onClick={handleAddToCart}>
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}