import React from 'react';
import { ShieldCheck, RefreshCw, Heart, Coffee } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">About ShopWave</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          We're on a mission to create the best shopping experience for our customers, 
          offering curated products that inspire and delight.
        </p>
      </div>
      
      {/* Our Story */}
      <div className="mb-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">Our Story</h2>
          <div className="prose prose-lg text-gray-600 dark:text-gray-400 max-w-none">
            <p>
              Founded in 2023, ShopWave began with a simple idea: shopping should be enjoyable, 
              intuitive, and free from complications. Our founders noticed that many online 
              shopping experiences were cluttered, confusing, and lacked personality.
            </p>
            <p>
              We set out to create a platform that showcases carefully selected products 
              in a clean, beautiful interface. Every item in our catalog is chosen for its 
              quality, design, and functionality.
            </p>
            <p>
              Today, ShopWave connects customers with products that enhance their everyday 
              lives. We're proud of how far we've come, but even more excited about where 
              we're going.
            </p>
          </div>
        </div>
      </div>
      
      {/* Our Values */}
      <div className="mb-20 bg-gray-50 dark:bg-gray-800 py-16 px-4 sm:px-6 lg:px-8 rounded-2xl">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-12 text-center">Our Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 mb-4">
                <ShieldCheck className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Quality First</h3>
              <p className="text-gray-600 dark:text-gray-400">
                We never compromise on quality. Every product meets our strict standards.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 mb-4">
                <RefreshCw className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Sustainability</h3>
              <p className="text-gray-600 dark:text-gray-400">
                We're committed to reducing our environmental impact in everything we do.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 mb-4">
                <Heart className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Customer Care</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Your satisfaction is our top priority, with support that goes the extra mile.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 mb-4">
                <Coffee className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Thoughtful Design</h3>
              <p className="text-gray-600 dark:text-gray-400">
                We believe great design improves everyday life and creates joy in small moments.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Meet the Team */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-12 text-center">Meet Our Team</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="aspect-w-1 aspect-h-1 rounded-xl bg-gray-100 dark:bg-gray-700 overflow-hidden mb-4">
              <img 
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="CEO" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Sarah Johnson</h3>
            <p className="text-blue-600 dark:text-blue-400 mb-2">Founder & CEO</p>
            <p className="text-gray-600 dark:text-gray-400">
              Leading our vision and strategy with 15+ years in retail and e-commerce.
            </p>
          </div>
          
          <div className="text-center">
            <div className="aspect-w-1 aspect-h-1 rounded-xl bg-gray-100 dark:bg-gray-700 overflow-hidden mb-4">
              <img 
                src="https://images.pexels.com/photos/2128807/pexels-photo-2128807.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="CTO" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Michael Chen</h3>
            <p className="text-blue-600 dark:text-blue-400 mb-2">CTO</p>
            <p className="text-gray-600 dark:text-gray-400">
              Building our platform with a focus on performance and usability.
            </p>
          </div>
          
          <div className="text-center">
            <div className="aspect-w-1 aspect-h-1 rounded-xl bg-gray-100 dark:bg-gray-700 overflow-hidden mb-4">
              <img 
                src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Head of Design" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Emily Rodriguez</h3>
            <p className="text-blue-600 dark:text-blue-400 mb-2">Head of Design</p>
            <p className="text-gray-600 dark:text-gray-400">
              Creating beautiful, intuitive experiences that delight our customers.
            </p>
          </div>
        </div>
      </div>
      
      {/* Contact Section */}
      <div className="bg-blue-50 dark:bg-blue-900/30 rounded-2xl p-8 sm:p-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">Get in Touch</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            Have questions or feedback? We'd love to hear from you. Our team is always 
            ready to help and improve your shopping experience.
          </p>
          <a 
            href="mailto:contact@shopwave.com" 
            className="inline-block px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-md transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;