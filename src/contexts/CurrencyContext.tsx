import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Currency = 'USD' | 'RWF' | 'NGN';

interface CurrencyContextType {
  currency: Currency;
  setCurrency: (currency: Currency) => void;
  formatPrice: (amount: number) => string;
  convertPrice: (usdAmount: number) => number;
  exchangeRates: Record<Currency, number>;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export const useCurrency = () => {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
};

interface CurrencyProviderProps {
  children: ReactNode;
}

// Static exchange rates - in production, these would come from an API
const EXCHANGE_RATES: Record<Currency, number> = {
  USD: 1,
  RWF: 1300, // 1 USD = ~1300 RWF
  NGN: 800,  // 1 USD = ~800 NGN
};

const CURRENCY_SYMBOLS: Record<Currency, string> = {
  USD: '$',
  RWF: 'FRw',
  NGN: '₦',
};

export const CurrencyProvider: React.FC<CurrencyProviderProps> = ({ children }) => {
  const [currency, setCurrencyState] = useState<Currency>(() => {
    const saved = localStorage.getItem('currency');
    return (saved as Currency) || 'USD';
  });

  const [exchangeRates] = useState(EXCHANGE_RATES);

  const setCurrency = (newCurrency: Currency) => {
    setCurrencyState(newCurrency);
    localStorage.setItem('currency', newCurrency);
  };

  const convertPrice = (usdAmount: number): number => {
    return usdAmount * exchangeRates[currency];
  };

  const formatPrice = (amount: number): string => {
    const convertedAmount = convertPrice(amount);
    const symbol = CURRENCY_SYMBOLS[currency];
    
    switch (currency) {
      case 'USD':
        return `${symbol}${convertedAmount.toFixed(2)}`;
      case 'RWF':
        return `${symbol} ${Math.round(convertedAmount).toLocaleString()}`;
      case 'NGN':
        return `${symbol}${Math.round(convertedAmount).toLocaleString()}`;
      default:
        return `${symbol}${convertedAmount.toFixed(2)}`;
    }
  };

  return (
    <CurrencyContext.Provider 
      value={{ 
        currency, 
        setCurrency, 
        formatPrice, 
        convertPrice,
        exchangeRates 
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
};