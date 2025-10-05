import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Package, Zap, Shield, Truck } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { translations } from '../utils/translations';
import { ProductCard } from '../components/ProductCard';
import productsData from '../data/products.json';

export const Home: React.FC = () => {
  const { language } = useApp();
  const t = translations[language];
  const featuredProducts = productsData.filter(p => p.featured);

  const categories = [
    {
      name: { en: 'Electronics', ar: 'إلكترونيات' },
      image: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg',
      link: '/shop?category=electronics',
    },
    {
      name: { en: 'Accessories', ar: 'إكسسوارات' },
      image: 'https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg',
      link: '/shop?category=accessories',
    },
    {
      name: { en: 'Bags', ar: 'حقائب' },
      image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg',
      link: '/shop?category=bags',
    },
    {
      name: { en: 'Fitness', ar: 'لياقة' },
      image: 'https://images.pexels.com/photos/3822668/pexels-photo-3822668.jpeg',
      link: '/shop?category=fitness',
    },
  ];

  const features = [
    { icon: Truck, title: { en: 'Free Shipping', ar: 'شحن مجاني' }, desc: { en: 'On orders over $50', ar: 'للطلبات فوق 50$' } },
    { icon: Shield, title: { en: 'Secure Payment', ar: 'دفع آمن' }, desc: { en: '100% secure transactions', ar: 'معاملات آمنة 100%' } },
    { icon: Zap, title: { en: 'Fast Delivery', ar: 'توصيل سريع' }, desc: { en: 'Quick and reliable', ar: 'سريع وموثوق' } },
    { icon: Package, title: { en: 'Easy Returns', ar: 'إرجاع سهل' }, desc: { en: '30-day return policy', ar: 'سياسة إرجاع 30 يوم' } },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/1005638/pexels-photo-1005638.jpeg"
            alt="Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            {t.home.hero.title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8">
            {t.home.hero.subtitle}
          </p>
          <Link
            to="/shop"
            className="inline-flex items-center space-x-2 rtl:space-x-reverse px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-lg font-semibold transition-colors"
          >
            <span>{t.home.hero.cta}</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full mb-4">
                  <Icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title[language]}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {feature.desc[language]}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              {t.home.featured}
            </h2>
            <Link
              to="/shop"
              className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
            >
              View All
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            {t.home.categories}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Link
                key={index}
                to={category.link}
                className="group relative h-64 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              >
                <img
                  src={category.image}
                  alt={category.name[language]}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <h3 className="text-white text-xl font-bold p-6">
                    {category.name[language]}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
