import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Mail, Phone, MapPin, Instagram, Facebook, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Mission */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-emerald-400" />
              <span className="text-xl font-bold">CareBridge</span>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              {t('footer.mission')}
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/carebridge" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-emerald-400 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://facebook.com/carebridge" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-emerald-400 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://wa.me/1234567890" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-emerald-400 transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">{t('footer.quickLinks')}</h3>
            <div className="space-y-2">
              <Link to="/about" className="block text-slate-300 hover:text-white transition-colors">
                {t('nav.about')}
              </Link>
              <Link to="/marketplace" className="block text-slate-300 hover:text-white transition-colors">
                {t('nav.marketplace')}
              </Link>
              <Link to="/donate" className="block text-slate-300 hover:text-white transition-colors">
                {t('nav.donate')}
              </Link>
              <Link to="/partners" className="block text-slate-300 hover:text-white transition-colors">
                {t('nav.partners')}
              </Link>
              <Link to="/impact" className="block text-slate-300 hover:text-white transition-colors">
                {t('nav.impact')}
              </Link>
            </div>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">{t('footer.support')}</h3>
            <div className="space-y-2">
              <Link to="/faq" className="block text-slate-300 hover:text-white transition-colors">
                {t('nav.faq')}
              </Link>
              <Link to="/contact" className="block text-slate-300 hover:text-white transition-colors">
                {t('nav.contact')}
              </Link>
              <Link to="/merchant-application" className="block text-slate-300 hover:text-white transition-colors">
                {t('footer.becomePartner')}
              </Link>
              <a 
                href="#" 
                className="block text-slate-300 hover:text-white transition-colors"
              >
                {t('footer.helpCenter')}
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">{t('footer.contact')}</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-emerald-400" />
                <a 
                  href="mailto:info@carebridge.org" 
                  className="text-slate-300 hover:text-white transition-colors text-sm"
                >
                  info@carebridge.org
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-emerald-400" />
                <a 
                  href="tel:+234-XXX-XXX-XXXX" 
                  className="text-slate-300 hover:text-white transition-colors text-sm"
                >
                  +234-XXX-XXX-XXXX
                </a>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-emerald-400 mt-0.5" />
                <span className="text-slate-300 text-sm">
                  Lagos, Nigeria<br />
                  Kigali, Rwanda
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-slate-400 text-sm">
              © 2024 CareBridge. {t('footer.allRightsReserved')}
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                {t('footer.privacy')}
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                {t('footer.terms')}
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                {t('footer.cookies')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;