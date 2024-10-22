import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-background to-secondary/10 px-4 sm:px-6 lg:px-8 py-12 text-center">
      <div className="max-w-7xl w-full space-y-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-primary sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
          Welcome to MyStore
        </h1>
        <p className="mt-3 text-base text-muted-foreground sm:text-lg md:text-xl lg:text-2xl max-w-md mx-auto md:max-w-3xl lg:max-w-4xl">
          Discover our amazing products and shop with confidence. We offer a wide range of high-quality items to suit your needs.
        </p>
        <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
          <Link to="/products">
            <Button size="lg" className="w-full sm:w-auto text-lg px-8 py-3 rounded-full transition-all hover:scale-105">
              Shop Now
            </Button>
          </Link>
        </div>
      </div>
      <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:max-w-7xl w-full">
        {['Free Shipping', 'Easy Returns', '24/7 Support'].map((feature, index) => (
          <div key={index} className="bg-card rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <h3 className="text-lg font-semibold text-primary mb-2">{feature}</h3>
            <p className="text-muted-foreground">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;