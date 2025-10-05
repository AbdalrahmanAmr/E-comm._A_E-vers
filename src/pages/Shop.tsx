import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Grid2x2 as Grid, List, SlidersHorizontal } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { translations } from '../utils/translations';
import { ProductCard } from '../components/ProductCard';
import productsData from '../data/products.json';

export const Shop: React.FC = () => {
  const { language } = useApp();
  const t = translations[language];
  const [searchParams] = useSearchParams();
  const [view, setView] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('featured');
  const [selectedCategory, setSelectedCategory] = useState(
    searchParams.get('category') || 'all'
  );

  const categories = ['all', 'electronics', 'accessories', 'bags', 'home', 'fitness'];

  const filteredAndSortedProducts = useMemo(() => {
    let products = [...productsData];

    if (selectedCategory !== 'all') {
      products = products.filter(p => p.category === selectedCategory);
    }

    switch (sortBy) {
      case 'priceLowHigh':
        products.sort((a, b) => a.price - b.price);
        break;
      case 'priceHighLow':
        products.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        products.sort((a, b) => b.rating - a.rating);
        break;
      default:
        products.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }

    return products;
  }, [selectedCategory, sortBy]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t.shop.title}
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            {filteredAndSortedProducts.length} products
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="lg:w-64 flex-shrink-0">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 sticky top-24">
              <div className="flex items-center space-x-2 rtl:space-x-reverse mb-4">
                <SlidersHorizontal className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {t.shop.filter}
                </h2>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                    {t.shop.categories.all}
                  </h3>
                  <div className="space-y-2">
                    {categories.map(category => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                          selectedCategory === category
                            ? 'bg-blue-600 text-white'
                            : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                        }`}
                      >
                        {t.shop.categories[category as keyof typeof t.shop.categories]}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </aside>

          <div className="flex-1">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <div className="flex items-center space-x-4 rtl:space-x-reverse">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {t.shop.sort}:
                </label>
                <select
                  value={sortBy}
                  onChange={e => setSortBy(e.target.value)}
                  className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
                >
                  <option value="featured">{t.shop.sortOptions.featured}</option>
                  <option value="priceLowHigh">{t.shop.sortOptions.priceLowHigh}</option>
                  <option value="priceHighLow">{t.shop.sortOptions.priceHighLow}</option>
                  <option value="rating">{t.shop.sortOptions.rating}</option>
                </select>
              </div>

              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <button
                  onClick={() => setView('grid')}
                  className={`p-2 rounded-lg transition-colors ${
                    view === 'grid'
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                  aria-label={t.shop.view.grid}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setView('list')}
                  className={`p-2 rounded-lg transition-colors ${
                    view === 'list'
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                  aria-label={t.shop.view.list}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>

            {filteredAndSortedProducts.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-gray-600 dark:text-gray-400 text-lg">
                  {t.shop.noProducts}
                </p>
              </div>
            ) : (
              <div
                className={
                  view === 'grid'
                    ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'
                    : 'space-y-6'
                }
              >
                {filteredAndSortedProducts.map(product => (
                  <ProductCard key={product.id} product={product} view={view} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
