import { Product } from '../types';

export const products: Product[] = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 249.99,
    description: "Experience immersive sound with our premium noise-cancelling wireless headphones. Featuring 40 hours of battery life and premium comfort for all-day listening.",
    category: "electronics",
    image: "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    rating: {
      rate: 4.8,
      count: 127
    },
    stock: 15,
    featured: true
  },
  {
    id: 2,
    name: "Minimalist Watch",
    price: 189.99,
    description: "A sleek, minimalist watch with a premium leather band and stainless steel case. Water-resistant up to 50 meters with luminous hands for nighttime readability.",
    category: "accessories",
    image: "https://images.pexels.com/photos/2783873/pexels-photo-2783873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    rating: {
      rate: 4.6,
      count: 86
    },
    stock: 23
  },
  {
    id: 3,
    name: "Smart Fitness Tracker",
    price: 129.99,
    description: "Track your fitness goals with our advanced smart fitness tracker. Monitors heart rate, sleep patterns, and activities with a 7-day battery life.",
    category: "electronics",
    image: "https://images.pexels.com/photos/4482936/pexels-photo-4482936.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    rating: {
      rate: 4.5,
      count: 93
    },
    stock: 7,
    featured: true
  },
  {
    id: 4,
    name: "Organic Cotton T-Shirt",
    price: 34.99,
    description: "Sustainably made organic cotton t-shirt with a comfortable fit. Available in multiple colors and sizes.",
    category: "clothing",
    image: "https://images.pexels.com/photos/5698851/pexels-photo-5698851.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    rating: {
      rate: 4.3,
      count: 156
    },
    stock: 45
  },
  {
    id: 5,
    name: "Ceramic Pour-Over Coffee Set",
    price: 79.99,
    description: "Handcrafted ceramic pour-over coffee set for the perfect brew every morning. Includes ceramic dripper and matching mug.",
    category: "home",
    image: "https://images.pexels.com/photos/6205791/pexels-photo-6205791.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    rating: {
      rate: 4.7,
      count: 72
    },
    stock: 12
  },
  {
    id: 6,
    name: "Leather Laptop Sleeve",
    price: 59.99,
    description: "Premium leather laptop sleeve with soft microfiber interior. Protects your device in style with a secure magnetic closure.",
    category: "accessories",
    image: "https://images.pexels.com/photos/18426594/pexels-photo-18426594/free-photo-of-laptop-in-a-sleeve.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    rating: {
      rate: 4.4,
      count: 64
    },
    stock: 19
  },
  {
    id: 7,
    name: "Portable Bluetooth Speaker",
    price: 89.99,
    description: "Waterproof portable Bluetooth speaker with 20 hours of playtime and immersive sound. Perfect for outdoor adventures.",
    category: "electronics",
    image: "https://images.pexels.com/photos/1279107/pexels-photo-1279107.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    rating: {
      rate: 4.5,
      count: 112
    },
    stock: 9
  },
  {
    id: 8,
    name: "Indoor Plant Collection",
    price: 49.99,
    description: "Set of 3 low-maintenance indoor plants in stylish ceramic pots. Perfect for adding a touch of nature to any space.",
    category: "home",
    image: "https://images.pexels.com/photos/1084199/pexels-photo-1084199.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    rating: {
      rate: 4.6,
      count: 83
    },
    stock: 15,
    featured: true
  }
];