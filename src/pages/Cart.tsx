
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Trash2, Plus, Minus, ShoppingCart } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { Link } from 'react-router-dom';

// Mock cart items for display purposes
const initialCartItems = [
  { 
    id: '1',
    barcode: '7891234567890', 
    name: 'Organic Banana Bundle', 
    price: 4.99, 
    image_url: 'https://images.unsplash.com/photo-1528825871115-3581a5387919?q=80&w=800&auto=format&fit=crop',
    quantity: 1
  },
  { 
    id: '2',
    barcode: '7891234567891', 
    name: 'Fresh Milk 1L', 
    price: 2.49, 
    image_url: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?q=80&w=800&auto=format&fit=crop',
    quantity: 2
  },
  {
    id: '3',
    barcode: '7891234567893',
    name: 'Free Range Eggs (12pk)',
    price: 5.99,
    image_url: 'https://images.unsplash.com/photo-1506976785307-8732e854ad03?q=80&w=800&auto=format&fit=crop',
    quantity: 1
  }
];

const Cart: React.FC = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const { toast } = useToast();

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const removeFromCart = (id: string) => {
    const itemToRemove = cartItems.find(item => item.id === id);
    
    setCartItems(cartItems.filter(item => item.id !== id));
    
    toast({
      title: "Removed from cart",
      description: `${itemToRemove?.name} has been removed from your cart.`,
      duration: 3000,
    });
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const handleCheckout = () => {
    toast({
      title: "Order placed!",
      description: "Your order has been submitted successfully.",
      duration: 4000,
    });
    
    // Clear cart after successful checkout
    setCartItems([]);
  };

  if (cartItems.length === 0) {
    return (
      <div className="py-12 container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Your Cart</h1>
          </div>
          
          <Card className="text-center py-16">
            <CardContent>
              <div className="flex flex-col items-center gap-4">
                <ShoppingCart className="h-16 w-16 text-muted-foreground" />
                <h2 className="text-xl font-medium">Your cart is empty</h2>
                <p className="text-muted-foreground mb-4">Looks like you haven't added any items to your cart yet</p>
                <Button asChild>
                  <Link to="/scan">
                    Start Shopping
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12 container-custom">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Your Cart</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Review your items and proceed to checkout
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <Card key={item.id} className="animate-fade-in overflow-hidden">
                <CardContent className="p-4">
                  <div className="flex gap-4">
                    <div className="w-24 h-24 rounded overflow-hidden flex-shrink-0">
                      <img
                        src={item.image_url}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="flex-grow">
                      <div className="flex justify-between">
                        <h3 className="font-medium">{item.name}</h3>
                        <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                      
                      <p className="text-sm text-muted-foreground mb-2">${item.price.toFixed(2)} each</p>
                      
                      <div className="flex justify-between items-center mt-2">
                        <div className="flex items-center">
                          <Button 
                            variant="outline" 
                            size="icon" 
                            className="h-8 w-8" 
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                          <span className="w-12 text-center">{item.quantity}</span>
                          <Button 
                            variant="outline" 
                            size="icon" 
                            className="h-8 w-8" 
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                        
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="text-destructive hover:text-destructive/90 hover:bg-destructive/10 px-2"
                          onClick={() => removeFromCart(item.id)}
                        >
                          <Trash2 className="h-4 w-4 mr-1" /> Remove
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div>
            <Card className="sticky top-20">
              <CardHeader>
                <h3 className="text-lg font-semibold">Order Summary</h3>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>${calculateSubtotal().toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Shipping</span>
                    <span>Free</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Tax</span>
                    <span>${(calculateSubtotal() * 0.1).toFixed(2)}</span>
                  </div>
                </div>
                
                <Separator />
                
                <div className="flex justify-between font-semibold text-lg">
                  <span>Total</span>
                  <span>${(calculateSubtotal() * 1.1).toFixed(2)}</span>
                </div>
                
                <Button className="w-full mt-4" size="lg" onClick={handleCheckout}>
                  Checkout
                </Button>
                
                <Button variant="outline" className="w-full" size="lg" asChild>
                  <Link to="/scan">
                    Continue Shopping
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
