
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import careBridgeLogo from '../assets/CareBridgeLogo.png';
import AuthButton from './AuthButton';
import CartDropdown from './CartDropdown';
import LanguageCurrencySelector from './LanguageCurrencySelector';
import { useAuth } from '@/hooks/useAuth';
import { useLanguage } from '@/contexts/LanguageContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { user } = useAuth();
  const { t } = useLanguage();

  const navigation = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.about'), href: '/about' },
    { name: t('nav.marketplace'), href: '/marketplace' },
    { name: t('nav.impact'), href: '/impact' },
    { name: t('nav.partners'), href: '/partners' },
    { name: t('nav.donate'), href: '/donate' },
    { name: t('nav.faq'), href: '/faq' },
    { name: t('nav.contact'), href: '/contact' },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img 
              src={careBridgeLogo} 
              alt="Care Bridge" 
              className="h-10 w-auto group-hover:opacity-90 transition-opacity"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? 'bg-emerald-100 text-emerald-700'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {item.name}
              </Link>
            ))}
            {user && (
              <Link
                to="/dashboard"
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive('/dashboard')
                    ? 'bg-emerald-100 text-emerald-700'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {t('nav.dashboard')}
              </Link>
            )}
            {/* Only show admin link to authenticated users */}
            {user && (
              <Link
                to="/admin"
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive('/admin')
                    ? 'bg-emerald-100 text-emerald-700'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                Admin
              </Link>
            )}
            <div className="ml-4 flex items-center space-x-2">
              <LanguageCurrencySelector />
              {user && <CartDropdown />}
              <AuthButton />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-lg text-base font-medium transition-colors ${
                  isActive(item.href)
                    ? 'bg-emerald-100 text-emerald-700'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {item.name}
              </Link>
            ))}
            {user && (
              <Link
                to="/dashboard"
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-lg text-base font-medium transition-colors ${
                  isActive('/dashboard')
                    ? 'bg-emerald-100 text-emerald-700'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {t('nav.dashboard')}
              </Link>
            )}
            <div className="px-3 py-2 space-y-3">
              <LanguageCurrencySelector />
              <div className="flex items-center space-x-2">
                {user && <CartDropdown />}
                <AuthButton />
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
