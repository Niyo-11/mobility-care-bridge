
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Marketplace from "./pages/Marketplace";
import Auth from "./pages/Auth";
import Donate from "./pages/Donate";
import Partners from "./pages/Partners";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import Impact from "./pages/Impact";
import Dashboard from "./pages/Dashboard";
import Checkout from "./pages/Checkout";
import NotFound from "./pages/NotFound";
import MerchantApplication from "./pages/MerchantApplication";
import MerchantDashboard from "./pages/MerchantDashboard";
import AddProduct from "./pages/AddProduct";
import CheckoutSuccess from "./pages/CheckoutSuccess";
import { AuthProvider } from "./hooks/useAuth";
import { CartProvider } from "./hooks/useCart";
import { LanguageProvider } from "./contexts/LanguageContext";
import { CurrencyProvider } from "./contexts/CurrencyContext";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LanguageProvider>
        <CurrencyProvider>
          <AuthProvider>
            <CartProvider>
              <Toaster />
              <Sonner />
              <BrowserRouter>
            <div className="min-h-screen bg-background">
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/marketplace" element={<Marketplace />} />
                <Route path="/auth" element={<Auth />} />
                <Route path="/donate" element={<Donate />} />
                <Route path="/partners" element={<Partners />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/impact" element={<Impact />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/merchant-application" element={<MerchantApplication />} />
                <Route path="/merchant/dashboard" element={<MerchantDashboard />} />
                <Route path="/merchant/add-product" element={<AddProduct />} />
                <Route path="/checkout/success" element={<CheckoutSuccess />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
              </BrowserRouter>
            </CartProvider>
          </AuthProvider>
        </CurrencyProvider>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
