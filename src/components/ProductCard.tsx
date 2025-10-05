import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingCart } from 'lucide-react';
import { Product } from '../types';
import { useApp } from '../context/AppContext';

interface ProductCardProps {
  product: Product;
  view?: 'grid' | 'list';
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, view = 'grid' }) => {
  const { language, addToCart } = useApp();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product);
  };

  if (view === 'list') {
    return (
      <Link
        to={`/product/${product.id}`}
        className="flex flex-col sm:flex-row bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700"
      >
        <div className="sm:w-64 h-48 sm:h-auto flex-shrink-0">
          <img
            src={product.image}
            alt={product.name[language]}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 p-6 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              {product.name[language]}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
              {product.description[language]}
            </p>
            <div className="flex items-center space-x-2 rtl:space-x-reverse mb-4">
              <div className="flex items-center">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm text-gray-700 dark:text-gray-300 mx-1 ltr:ml-1 rtl:mr-1">
                  {product.rating}
                </span>
              </div>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                ({product.reviewCount})
              </span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <span className="text-2xl font-bold text-gray-900 dark:text-white">
                ${product.price}
              </span>
              {product.originalPrice && (
                <span className="text-lg text-gray-500 dark:text-gray-400 line-through">
                  ${product.originalPrice}
                </span>
              )}
            </div>
            <button
              onClick={handleAddToCart}
              className="flex items-center space-x-2 rtl:space-x-reverse px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
            >
              <ShoppingCart className="w-4 h-4" />
            </button>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      to={`/product/${product.id}`}
      className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700"
    >
      <div className="relative overflow-hidden aspect-square">
        <img
          src={product.image}
          alt={product.name[language]}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        {product.originalPrice && (
          <div className="absolute top-4 ltr:right-4 rtl:left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
            {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 line-clamp-1">
          {product.name[language]}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 line-clamp-2">
          {product.description[language]}
        </p>
        <div className="flex items-center space-x-2 rtl:space-x-reverse mb-3">
          <div className="flex items-center">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm text-gray-700 dark:text-gray-300 mx-1 ltr:ml-1 rtl:mr-1">
              {product.rating}
            </span>
          </div>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            ({product.reviewCount})
          </span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              ${product.price}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 dark:text-gray-400 line-through">
                ${product.originalPrice}
              </span>
            )}
          </div>
          <button
            onClick={handleAddToCart}
            className="p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
          >
            <ShoppingCart className="w-4 h-4" />
          </button>
        </div>
      </div>
    </Link>
  );
};
