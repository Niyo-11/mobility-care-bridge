import React from 'react';
import { Globe, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import { useLanguage } from '@/contexts/LanguageContext';
import { useCurrency, Currency } from '@/contexts/CurrencyContext';

const LanguageCurrencySelector = () => {
  const { language, setLanguage, t } = useLanguage();
  const { currency, setCurrency } = useCurrency();

  const languages = [
    { code: 'en' as const, name: 'English', flag: '🇺🇸' },
    { code: 'rw' as const, name: 'Kinyarwanda', flag: '🇷🇼' },
    { code: 'ha' as const, name: 'Hausa', flag: '🇳🇬' },
    { code: 'ig' as const, name: 'Igbo', flag: '🇳🇬' },
    { code: 'yo' as const, name: 'Yoruba', flag: '🇳🇬' },
  ];

  const currencies: Array<{ code: Currency; name: string; symbol: string }> = [
    { code: 'USD', name: 'US Dollar', symbol: '$' },
    { code: 'RWF', name: 'Rwandan Franc', symbol: 'FRw' },
    { code: 'NGN', name: 'Nigerian Naira', symbol: '₦' },
  ];

  return (
    <div className="flex gap-2">
      {/* Language Selector */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="sm" className="flex items-center gap-2">
            <Globe className="h-4 w-4" />
            <span className="hidden sm:inline">
              {languages.find(l => l.code === language)?.flag}
            </span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {languages.map((lang) => (
            <DropdownMenuItem
              key={lang.code}
              onClick={() => setLanguage(lang.code)}
              className={`flex items-center gap-2 ${
                language === lang.code ? 'bg-accent' : ''
              }`}
            >
              <span>{lang.flag}</span>
              <span>{lang.name}</span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Currency Selector */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="sm" className="flex items-center gap-2">
            <DollarSign className="h-4 w-4" />
            <span className="hidden sm:inline">
              {currencies.find(c => c.code === currency)?.symbol}
            </span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {currencies.map((curr) => (
            <DropdownMenuItem
              key={curr.code}
              onClick={() => setCurrency(curr.code)}
              className={`flex items-center gap-2 ${
                currency === curr.code ? 'bg-accent' : ''
              }`}
            >
              <span>{curr.symbol}</span>
              <span>{curr.name}</span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default LanguageCurrencySelector;