import React from 'react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';
import { ShoppingCart, Star } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  
  // Lazy loading for images
  const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.classList.remove('opacity-0');
  };

  return (
    <div className="group relative bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
      {product.featured && (
        <div className="absolute top-2 left-2 z-10 bg-pink-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
          Featured
        </div>
      )}
      
      {/* Stock indicator */}
      <div className={`absolute top-2 right-2 z-10 text-xs font-medium px-2 py-1 rounded-full
        ${product.stock <= 5 ? 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300' : 
          product.stock <= 10 ? 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300' : 
          'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'}`}>
        {product.stock <= 5 ? `Only ${product.stock} left!` : 
         product.stock <= 10 ? `${product.stock} in stock` : 'In Stock'}
      </div>
      
      {/* Image container */}
      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden bg-gray-100 dark:bg-gray-700">
        <img 
          src={product.image} 
          alt={product.name}
          className="h-48 w-full object-cover object-center opacity-0 transition-opacity duration-500"
          onLoad={handleImageLoad}
          loading="lazy"
        />
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100 line-clamp-1">{product.name}</h3>
          <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">${product.price.toFixed(2)}</p>
        </div>
        
        <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-2 mb-3">{product.description}</p>
        
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Star className="h-3.5 w-3.5 text-yellow-400 fill-yellow-400" />
            <span className="ml-1 text-xs font-medium text-gray-500 dark:text-gray-400">
              {product.rating.rate} ({product.rating.count})
            </span>
          </div>
          
          <button 
            onClick={() => addToCart(product)}
            className="flex items-center justify-center text-xs font-medium rounded-full bg-blue-500 hover:bg-blue-600 text-white px-3 py-1.5 transition-colors"
          >
            <ShoppingCart className="h-3.5 w-3.5 mr-1" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;