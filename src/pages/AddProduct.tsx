import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { Upload, X } from 'lucide-react';

interface Category {
  id: string;
  name: string;
}

const AddProduct = () => {
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);
  const [merchantId, setMerchantId] = useState<string | null>(null);
  const [images, setImages] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    market_price_min: '',
    market_price_max: '',
    stock_quantity: '',
    category_id: '',
    sku: '',
    specifications: '',
    status: 'draft' as 'active' | 'draft'
  });

  const { user } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      fetchMerchantInfo();
      fetchCategories();
    }
  }, [user]);

  const fetchMerchantInfo = async () => {
    try {
      const { data: merchant, error } = await supabase
        .from('merchants')
        .select('id')
        .eq('user_id', user?.id)
        .eq('status', 'approved')
        .single();

      if (error || !merchant) {
        toast({
          title: "Access denied",
          description: "You don't have an approved merchant account",
          variant: "destructive",
        });
        navigate('/dashboard');
        return;
      }

      setMerchantId(merchant.id);
    } catch (error) {
      console.error('Error fetching merchant info:', error);
    }
  };

  const fetchCategories = async () => {
    try {
      const { data, error } = await supabase
        .from('product_categories')
        .select('*')
        .order('name');

      if (error) throw error;
      setCategories(data || []);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!merchantId) return;

    setLoading(true);

    try {
      const productData = {
        ...formData,
        merchant_id: merchantId,
        price: parseFloat(formData.price),
        market_price_min: formData.market_price_min ? parseFloat(formData.market_price_min) : null,
        market_price_max: formData.market_price_max ? parseFloat(formData.market_price_max) : null,
        stock_quantity: parseInt(formData.stock_quantity) || 0,
        images: images,
        specifications: formData.specifications ? JSON.parse(formData.specifications || '{}') : {}
      };

      const { error } = await supabase
        .from('products')
        .insert(productData);

      if (error) throw error;

      toast({
        title: "Success",
        description: "Product added successfully",
      });

      navigate('/merchant/dashboard');
    } catch (error) {
      console.error('Error adding product:', error);
      toast({
        title: "Error",
        description: "Failed to add product. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const addImageUrl = () => {
    const url = prompt('Enter image URL:');
    if (url) {
      setImages(prev => [...prev, url]);
    }
  };

  const removeImage = (index: number) => {
    setImages(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Add New Product</CardTitle>
              <CardDescription>
                Add a new product to your merchant catalog
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Product Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    placeholder="Describe your product..."
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="price">Price (USD) *</Label>
                    <Input
                      id="price"
                      type="number"
                      step="0.01"
                      value={formData.price}
                      onChange={(e) => handleInputChange('price', e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="market_price_min">Market Price Min</Label>
                    <Input
                      id="market_price_min"
                      type="number"
                      step="0.01"
                      value={formData.market_price_min}
                      onChange={(e) => handleInputChange('market_price_min', e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="market_price_max">Market Price Max</Label>
                    <Input
                      id="market_price_max"
                      type="number"
                      step="0.01"
                      value={formData.market_price_max}
                      onChange={(e) => handleInputChange('market_price_max', e.target.value)}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="stock_quantity">Stock Quantity *</Label>
                    <Input
                      id="stock_quantity"
                      type="number"
                      value={formData.stock_quantity}
                      onChange={(e) => handleInputChange('stock_quantity', e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="sku">SKU</Label>
                    <Input
                      id="sku"
                      value={formData.sku}
                      onChange={(e) => handleInputChange('sku', e.target.value)}
                      placeholder="Product SKU"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="category_id">Category</Label>
                    <Select value={formData.category_id} onValueChange={(value) => handleInputChange('category_id', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map((category) => (
                          <SelectItem key={category.id} value={category.id}>
                            {category.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="status">Status</Label>
                    <Select value={formData.status} onValueChange={(value: 'active' | 'draft') => handleInputChange('status', value)}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="draft">Draft</SelectItem>
                        <SelectItem value="active">Active</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Product Images</Label>
                  <div className="space-y-2">
                    {images.map((image, index) => (
                      <div key={index} className="flex items-center gap-2 p-2 border rounded">
                        <img src={image} alt={`Product ${index + 1}`} className="w-12 h-12 object-cover rounded" />
                        <span className="flex-1 text-sm truncate">{image}</span>
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => removeImage(index)}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                    <Button
                      type="button"
                      variant="outline"
                      onClick={addImageUrl}
                      className="w-full"
                    >
                      <Upload className="mr-2 h-4 w-4" />
                      Add Image URL
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="specifications">Specifications (JSON)</Label>
                  <Textarea
                    id="specifications"
                    value={formData.specifications}
                    onChange={(e) => handleInputChange('specifications', e.target.value)}
                    placeholder='{"color": "blue", "material": "aluminum", "weight": "2kg"}'
                  />
                  <p className="text-sm text-muted-foreground">
                    Enter product specifications as JSON format
                  </p>
                </div>

                <div className="flex gap-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => navigate('/merchant/dashboard')}
                  >
                    Cancel
                  </Button>
                  <Button type="submit" disabled={loading}>
                    {loading ? 'Adding...' : 'Add Product'}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;