import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { ArrowLeft, ShoppingCart, Star, Check, AlertTriangle } from 'lucide-react';
import { products } from '../data/products';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  
  // Find product with matching ID
  const product = products.find(p => p.id === Number(id));
  
  if (!product) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">Product Not Found</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">The product you're looking for doesn't exist or has been removed.</p>
        <button 
          onClick={() => navigate('/products')}
          className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-md transition-colors"
        >
          Back to Products
        </button>
      </div>
    );
  }
  
  // For demo purposes we're creating multiple fake images
  const productImages = [
    product.image,
    // Generate alternative angles using the same image for demo
    product.image,
    product.image
  ];
  
  const handleAddToCart = () => {
    addToCart(product, quantity);
    // Show notification - in a real app we'd use a toast component
    alert(`${quantity} ${product.name}${quantity > 1 ? 's' : ''} added to cart!`);
  };
  
  const handleQuantityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setQuantity(Number(e.target.value));
  };
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <button 
        onClick={() => navigate(-1)}
        className="flex items-center text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 mb-8 transition-colors"
      >
        <ArrowLeft className="h-4 w-4 mr-1" />
        Back
      </button>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
        {/* Product images */}
        <div>
          <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800 mb-4">
            <img 
              src={productImages[activeImage]} 
              alt={product.name}
              className="h-full w-full object-cover object-center"
            />
          </div>
          
          <div className="flex space-x-4 overflow-auto pb-2">
            {productImages.map((img, index) => (
              <button
                key={index}
                onClick={() => setActiveImage(index)}
                className={`relative rounded-md overflow-hidden h-16 w-16 flex-shrink-0 border-2 transition-all ${
                  activeImage === index 
                    ? 'border-blue-500 dark:border-blue-400' 
                    : 'border-transparent hover:border-gray-300 dark:hover:border-gray-600'
                }`}
              >
                <img 
                  src={img} 
                  alt={`${product.name} view ${index + 1}`}
                  className="h-full w-full object-cover object-center"
                />
              </button>
            ))}
          </div>
        </div>
        
        {/* Product details */}
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 sm:text-3xl">{product.name}</h1>
          
          <div className="mt-3 flex items-center">
            <div className="flex items-center">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star 
                  key={index}
                  className={`h-5 w-5 ${
                    index < Math.floor(product.rating.rate)
                      ? 'text-yellow-400 fill-yellow-400'
                      : 'text-gray-300 dark:text-gray-600'
                  }`}
                />
              ))}
            </div>
            <p className="ml-2 text-sm text-gray-500 dark:text-gray-400">
              {product.rating.rate} ({product.rating.count} reviews)
            </p>
          </div>
          
          <div className="mt-6">
            <h2 className="sr-only">Product information</h2>
            <p className="text-3xl font-medium text-gray-900 dark:text-gray-100">${product.price.toFixed(2)}</p>
          </div>
          
          <div className="mt-6">
            <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100">Description</h3>
            <p className="mt-2 text-base text-gray-700 dark:text-gray-300">{product.description}</p>
          </div>
          
          <div className="mt-6">
            <div className="flex items-center">
              {product.stock > 0 ? (
                <>
                  <Check className={`h-5 w-5 ${
                    product.stock <= 5 ? 'text-red-500' : 
                    product.stock <= 10 ? 'text-amber-500' : 
                    'text-green-500'
                  }`} />
                  <p className={`ml-2 text-sm ${
                    product.stock <= 5 ? 'text-red-600 dark:text-red-400' : 
                    product.stock <= 10 ? 'text-amber-600 dark:text-amber-400' : 
                    'text-green-600 dark:text-green-400'
                  }`}>
                    {product.stock <= 5 ? `Only ${product.stock} left in stock!` : 
                     product.stock <= 10 ? `${product.stock} in stock` : 
                     'In stock and ready to ship'}
                  </p>
                </>
              ) : (
                <>
                  <AlertTriangle className="h-5 w-5 text-red-500" />
                  <p className="ml-2 text-sm text-red-600 dark:text-red-400">Out of stock</p>
                </>
              )}
            </div>
          </div>
          
          <div className="mt-6">
            <div className="flex items-center space-x-4">
              <div>
                <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Quantity
                </label>
                <select
                  id="quantity"
                  value={quantity}
                  onChange={handleQuantityChange}
                  className="p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-blue-500 focus:border-blue-500"
                >
                  {Array.from({ length: Math.min(10, product.stock) }, (_, i) => i + 1).map((num) => (
                    <option key={num} value={num}>
                      {num}
                    </option>
                  ))}
                </select>
              </div>
              
              <button
                onClick={handleAddToCart}
                disabled={product.stock === 0}
                className={`flex-1 flex items-center justify-center py-3 px-8 border border-transparent rounded-md font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
                  product.stock === 0
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-blue-600 hover:bg-blue-700'
                }`}
              >
                <ShoppingCart className="h-5 w-5 mr-2" />
                Add to Cart
              </button>
            </div>
          </div>
          
          <div className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-8">
            <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100">Highlights</h3>
            <div className="mt-4 prose prose-sm text-gray-700 dark:text-gray-300">
              <ul className="list-disc pl-5 space-y-2">
                <li>Premium quality materials</li>
                <li>Designed for everyday use</li>
                <li>30-day money-back guarantee</li>
                <li>Free shipping on orders over $50</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;