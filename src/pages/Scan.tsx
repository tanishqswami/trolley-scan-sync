
import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Barcode, Upload, Check, ShoppingCart } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

// Mock data to simulate database fetch based on barcode
const mockProducts = [
  { 
    barcode: '7891234567890', 
    name: 'Organic Banana Bundle', 
    price: 4.99, 
    image_url: 'https://images.unsplash.com/photo-1528825871115-3581a5387919?q=80&w=800&auto=format&fit=crop' 
  },
  { 
    barcode: '7891234567891', 
    name: 'Fresh Milk 1L', 
    price: 2.49, 
    image_url: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?q=80&w=800&auto=format&fit=crop' 
  },
  { 
    barcode: '7891234567892', 
    name: 'Whole Grain Bread', 
    price: 3.29, 
    image_url: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=800&auto=format&fit=crop' 
  },
  { 
    barcode: '7891234567893', 
    name: 'Free Range Eggs (12pk)', 
    price: 5.99, 
    image_url: 'https://images.unsplash.com/photo-1506976785307-8732e854ad03?q=80&w=800&auto=format&fit=crop' 
  },
  { 
    barcode: '7891234567894', 
    name: 'Organic Apples (1kg)', 
    price: 3.99, 
    image_url: 'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?q=80&w=800&auto=format&fit=crop' 
  }
];

const Scan: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [barcode, setBarcode] = useState<string | null>(null);
  const [product, setProduct] = useState<any | null>(null);
  const [isAddedToCart, setIsAddedToCart] = useState<boolean>(false);
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
      setBarcode(null);
      setProduct(null);
      setIsAddedToCart(false);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleScan = () => {
    if (!selectedFile) return;
    
    setIsLoading(true);
    
    // Simulate barcode scanning with a timeout
    setTimeout(() => {
      // Pick a random mock product for demo purposes
      const randomIndex = Math.floor(Math.random() * mockProducts.length);
      const randomBarcode = mockProducts[randomIndex].barcode;
      setBarcode(randomBarcode);
      
      // Fetch product data based on barcode (simulated)
      const foundProduct = mockProducts.find(p => p.barcode === randomBarcode);
      setProduct(foundProduct || null);
      
      setIsLoading(false);
    }, 1500);
  };

  const handleAddToCart = () => {
    if (!product) return;
    
    // In a real app, this would add to cart in state/context/backend
    setIsAddedToCart(true);
    
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
      duration: 3000,
    });
    
    // Reset after 2 seconds to allow for another scan
    setTimeout(() => {
      setSelectedFile(null);
      setPreviewUrl(null);
      setBarcode(null);
      setProduct(null);
      setIsAddedToCart(false);
    }, 2000);
  };

  return (
    <div className="py-12 container-custom">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Scan Products</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Upload an image with a barcode to add products to your cart
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                {previewUrl ? (
                  <div className="relative">
                    <img 
                      src={previewUrl} 
                      alt="Uploaded barcode" 
                      className="w-full h-64 object-contain bg-secondary/50 p-4"
                    />
                    {barcode && (
                      <div className="absolute bottom-4 left-4 bg-primary/90 text-white px-3 py-1 rounded-md text-sm flex items-center gap-2">
                        <Barcode className="h-4 w-4" />
                        <span>{barcode}</span>
                      </div>
                    )}
                  </div>
                ) : (
                  <div 
                    className="flex flex-col items-center justify-center h-64 bg-secondary/50 cursor-pointer"
                    onClick={handleUploadClick}
                  >
                    <Upload className="h-10 w-10 text-muted-foreground mb-4" />
                    <p className="text-muted-foreground">Click to upload a barcode image</p>
                  </div>
                )}
              </CardContent>
            </Card>

            <div className="mt-4">
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                accept="image/*"
                className="hidden"
              />
              
              {selectedFile && !barcode && (
                <Button 
                  className="w-full" 
                  onClick={handleScan}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-background border-t-transparent"></div>
                      Scanning...
                    </>
                  ) : (
                    <>Scan Barcode</>
                  )}
                </Button>
              )}
              
              {!selectedFile && (
                <Button 
                  className="w-full"
                  onClick={handleUploadClick}
                >
                  Upload Image
                </Button>
              )}
            </div>
          </div>

          <div>
            {product ? (
              <Card className="h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="text-center mb-4">
                    <h3 className="text-xl font-semibold">Product Found</h3>
                  </div>
                  
                  <div className="bg-secondary/50 rounded-md p-4 mb-4">
                    <img 
                      src={product.image_url} 
                      alt={product.name}
                      className="w-full h-40 object-contain mb-4 rounded-md"
                    />
                    
                    <div className="space-y-2">
                      <h4 className="font-semibold text-lg">{product.name}</h4>
                      <p className="text-primary font-semibold text-xl">${product.price.toFixed(2)}</p>
                      <p className="text-sm text-muted-foreground flex items-center gap-2">
                        <Barcode className="h-4 w-4" />
                        {product.barcode}
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-auto">
                    {isAddedToCart ? (
                      <Button className="w-full bg-green-600 hover:bg-green-700" disabled>
                        <Check className="mr-2 h-4 w-4" />
                        Added to Cart
                      </Button>
                    ) : (
                      <Button className="w-full" onClick={handleAddToCart}>
                        <ShoppingCart className="mr-2 h-4 w-4" />
                        Add to Cart
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card className="h-full bg-secondary/30 border-dashed">
                <CardContent className="p-6 flex flex-col items-center justify-center h-full">
                  {selectedFile && isLoading ? (
                    <div className="text-center space-y-4">
                      <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
                      <p className="text-muted-foreground">Analyzing image...</p>
                    </div>
                  ) : selectedFile ? (
                    <div className="text-center space-y-4">
                      <Barcode className="h-10 w-10 text-muted-foreground mx-auto" />
                      <p className="text-muted-foreground">Click "Scan Barcode" to analyze the image</p>
                    </div>
                  ) : (
                    <div className="text-center space-y-4">
                      <Barcode className="h-10 w-10 text-muted-foreground mx-auto" />
                      <p className="text-muted-foreground">Upload an image to scan a product barcode</p>
                      <p className="text-sm text-muted-foreground">The product details will appear here</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scan;
