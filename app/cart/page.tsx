"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Minus, Plus, Trash2, ChevronLeft, MapPin } from 'lucide-react';
import MainLayout from '@/components/layouts/main-layout';
import { cartItems } from '@/lib/data/cart-items';

export default function CartPage() {
  const [items, setItems] = useState(cartItems);
  const [pickupLocation, setPickupLocation] = useState('location1');
  const [pickupTime, setPickupTime] = useState('');
  const [companyOrder, setCompanyOrder] = useState<string | null>(null);

  const subtotal = items.reduce((total, item) => total + (item.price * item.quantity), 0);
  const tax = subtotal * 0.1; // 10% tax
  const total = subtotal + tax;

  const handleQuantityChange = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    
    setItems(prev => 
      prev.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleRemoveItem = (id: string) => {
    setItems(prev => prev.filter(item => item.id !== id));
  };

  return (
    <MainLayout>
      <div className="container mx-auto py-8">
        <div className="mb-6">
          <Link href="/menu" className="flex items-center text-primary hover:underline">
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back to Menu
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h1 className="text-3xl font-bold mb-6">Your Order</h1>
            
            {items.length === 0 ? (
              <Card>
                <CardContent className="pt-6 text-center">
                  <p className="text-muted-foreground mb-4">Your cart is empty</p>
                  <Link href="/menu">
                    <Button>Browse Menu</Button>
                  </Link>
                </CardContent>
              </Card>
            ) : (
              <>
                <div className="space-y-4">
                  {items.map(item => (
                    <Card key={item.id}>
                      <CardContent className="p-4 flex items-center">
                        <div className="h-20 w-20 bg-muted rounded-md mr-4 flex items-center justify-center">
                          <span className="text-muted-foreground text-xs">Image</span>
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between">
                            <h3 className="font-medium">{item.name}</h3>
                            <span className="font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                          </div>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                          <div className="flex items-center mt-2 justify-between">
                            <div className="flex items-center space-x-2">
                              <Button 
                                variant="outline" 
                                size="icon" 
                                className="h-8 w-8"
                                onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                              >
                                <Minus className="h-3 w-3" />
                              </Button>
                              <span>{item.quantity}</span>
                              <Button 
                                variant="outline" 
                                size="icon" 
                                className="h-8 w-8"
                                onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                              >
                                <Plus className="h-3 w-3" />
                              </Button>
                            </div>
                            <Button 
                              variant="ghost" 
                              size="sm" 
                              className="text-destructive"
                              onClick={() => handleRemoveItem(item.id)}
                            >
                              <Trash2 className="h-4 w-4 mr-1" />
                              Remove
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </>
            )}
          </div>

          <div>
            <Card className="sticky top-6">
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Tax (10%)</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-medium">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <Label htmlFor="pickupLocation">Pickup Location</Label>
                    <Select value={pickupLocation} onValueChange={setPickupLocation}>
                      <SelectTrigger id="pickupLocation" className="w-full">
                        <SelectValue placeholder="Select location" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="location1">
                          <div className="flex items-center">
                            <span className="location-badge location-badge-1 mr-2">1</span>
                            Downtown: 123 Main St
                          </div>
                        </SelectItem>
                        <SelectItem value="location2">
                          <div className="flex items-center">
                            <span className="location-badge location-badge-2 mr-2">2</span>
                            Uptown: 456 Park Ave
                          </div>
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="pickupTime">Pickup Time</Label>
                    <Input
                      id="pickupTime"
                      type="datetime-local"
                      value={pickupTime}
                      onChange={(e) => setPickupTime(e.target.value)}
                    />
                  </div>

                  <div>
                    <Label className="mb-2 block">Order Type</Label>
                    <RadioGroup defaultValue="individual">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="individual" id="individual" />
                        <Label htmlFor="individual">Individual Order</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="company" id="company" />
                        <Label htmlFor="company">Add to Company Order</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div>
                    <Label htmlFor="companyOrder">Company Order ID (Optional)</Label>
                    <Input
                      id="companyOrder"
                      placeholder="Enter company order ID"
                      value={companyOrder || ''}
                      onChange={(e) => setCompanyOrder(e.target.value)}
                    />
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Proceed to Checkout</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}