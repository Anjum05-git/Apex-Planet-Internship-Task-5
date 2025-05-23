import React from 'react';
import { useCart } from '../context/CartContext';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Cart: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart();
  
  if (cart.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">Your Cart is Empty</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">Looks like you haven't added any products to your cart yet.</p>
        <Link 
          to="/products" 
          className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-md transition-colors"
        >
          Browse Products
        </Link>
      </div>
    );
  }
  
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-6">Your Shopping Cart</h2>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
        <div className="p-6">
          {cart.map((item) => (
            <div key={item.product.id} className="flex flex-col sm:flex-row items-center py-4 border-b border-gray-200 dark:border-gray-700 last:border-b-0">
              <div className="w-full sm:w-24 h-24 flex-shrink-0 bg-gray-100 dark:bg-gray-700 rounded-md overflow-hidden mb-4 sm:mb-0">
                <img 
                  src={item.product.image} 
                  alt={item.product.name} 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              
              <div className="flex-1 sm:ml-4">
                <h3 className="text-lg font-medium text-gray-800 dark:text-gray-100">{item.product.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">${item.product.price.toFixed(2)}</p>
              </div>
              
              <div className="flex items-center mt-4 sm:mt-0">
                <button 
                  onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                  className="p-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="h-4 w-4" />
                </button>
                
                <span className="mx-3 text-gray-700 dark:text-gray-300 font-medium">{item.quantity}</span>
                
                <button 
                  onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                  className="p-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                  aria-label="Increase quantity"
                  disabled={item.quantity >= item.product.stock}
                >
                  <Plus className="h-4 w-4" />
                </button>
                
                <button 
                  onClick={() => removeFromCart(item.product.id)}
                  className="ml-6 text-red-500 hover:text-red-600 transition-colors"
                  aria-label="Remove item"
                >
                  <Trash2 className="h-5 w-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-gray-50 dark:bg-gray-900 p-6">
          <div className="flex justify-between mb-4">
            <span className="text-gray-600 dark:text-gray-300">Subtotal</span>
            <span className="text-gray-800 dark:text-gray-100 font-medium">${totalPrice.toFixed(2)}</span>
          </div>
          
          <div className="flex justify-between mb-6">
            <span className="text-gray-600 dark:text-gray-300">Shipping</span>
            <span className="text-gray-800 dark:text-gray-100 font-medium">Free</span>
          </div>
          
          <div className="flex justify-between border-t border-gray-200 dark:border-gray-700 pt-4 mb-6">
            <span className="text-lg font-semibold text-gray-800 dark:text-gray-100">Total</span>
            <span className="text-lg font-semibold text-gray-800 dark:text-gray-100">${totalPrice.toFixed(2)}</span>
          </div>
          
          <div className="flex flex-col sm:flex-row sm:justify-between space-y-4 sm:space-y-0">
            <button
              onClick={clearCart}
              className="px-6 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              Clear Cart
            </button>
            
            <button
              className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-md transition-colors"
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;