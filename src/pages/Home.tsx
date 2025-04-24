
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Barcode, ShoppingCart, Check } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background to-secondary/30 py-16 md:py-24">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Smart Trolley – <span className="text-primary">The Future of Shopping</span>
              </h1>
              <h2 className="text-xl md:text-2xl text-muted-foreground">
                Scan | Sync | Shop
              </h2>
              <p className="text-lg text-muted-foreground max-w-lg">
                Experience seamless shopping with our innovative barcode scanning system that automatically adds products to your virtual cart.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                  <Link to="/scan">
                    Try Demo
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/cart">
                    View Cart
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10 rounded-lg overflow-hidden shadow-xl animate-fade-in">
                <img 
                  src="https://images.unsplash.com/photo-1591085686350-798c0f9faa7f?q=80&w=1000&auto=format&fit=crop"
                  alt="Smart shopping cart" 
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-accent/20 rounded-full blur-3xl -z-10"></div>
              <div className="absolute -top-6 -left-6 w-48 h-48 bg-primary/20 rounded-full blur-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Smart Trolley streamlines your shopping experience with cutting-edge technology
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Barcode className="h-10 w-10 text-primary" />,
                title: "Scan Products",
                description: "Upload images of product barcodes or scan them in real-time with our system"
              },
              {
                icon: <ShoppingCart className="h-10 w-10 text-primary" />,
                title: "Automatic Cart",
                description: "Products are instantly recognized and added to your virtual shopping cart"
              },
              {
                icon: <Check className="h-10 w-10 text-primary" />,
                title: "Easy Checkout",
                description: "Skip the lines and checkout directly from your virtual cart"
              }
            ].map((feature, index) => (
              <Card key={index} className="card-hover">
                <CardContent className="flex flex-col items-center text-center pt-6 space-y-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Ready to Experience the Future of Shopping?</h2>
            <p className="text-lg text-muted-foreground">
              Try our demo today and see how Smart Trolley can transform your shopping experience.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                <Link to="/scan">
                  Try Demo Now
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
