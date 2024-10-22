import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { Button } from './ui/button';
import { useCart } from '../contexts/CartContext';
import { ThemeToggle } from './theme-toggle';

const Navbar = () => {
  const { cart } = useCart();

  return (
    <nav className="bg-background border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold">MyStore</span>
            </Link>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link to="/" className="text-gray-900 dark:text-gray-100 inline-flex items-center px-1 pt-1 text-sm font-medium">
                Home
              </Link>
              <Link to="/products" className="text-gray-900 dark:text-gray-100 inline-flex items-center px-1 pt-1 text-sm font-medium">
                Products
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <ThemeToggle />
            <Link to="/checkout">
              <Button variant="ghost" size="icon" className="ml-4 relative">
                <ShoppingCart className="h-5 w-5" />
                {cart.length > 0 && (
                  <span className="absolute top-0 right-0 -mt-1 -mr-1 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                    {cart.length}
                  </span>
                )}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;