import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './components/theme-provider';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import CheckoutPage from './pages/CheckoutPage';
import PaymentPage from './pages/PaymentPage';
import { Toaster } from './components/ui/toaster';
import { CartProvider } from './contexts/CartContext';
import ProductDetails from './pages/ProductDetails';

//TODO: Improve router
//FIX: Responsive width

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <CartProvider>
        <Router>
          <div className="border-orange-400 border-[2px] flex flex-col min-h-screen">
            <Navbar />
            <main className="w-full flex-grow">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/products" element={<ProductsPage />} />
                <Route path="/details" element={<ProductDetails />} />
                <Route path="/checkout" element={<CheckoutPage />} />
                <Route path="/payment" element={<PaymentPage />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
        <Toaster />
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;