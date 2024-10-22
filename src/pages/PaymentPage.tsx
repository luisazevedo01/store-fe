import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { useToast } from '../hooks/use-toast';

const PaymentPage = () => {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: '',
    expirationDate: '',
    cvv: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPaymentInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmitPayment = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically process the payment
    // For this example, we'll just show a success message and clear the cart
    toast({
      title: 'Payment Successful',
      description: 'Thank you for your purchase!',
    });
    clearCart();
    navigate('/');
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="border-red-600 border mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-8">Payment</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          <ul className="space-y-2">
            {cart.map((item) => (
              <li key={item.id} className="flex justify-between">
                <span>{item.name}</span>
                <span>${item.price.toFixed(2)}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4 text-xl font-semibold">
            Total: ${totalPrice.toFixed(2)}
          </div>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">Payment Information</h2>
          <form onSubmit={handleSubmitPayment} className="space-y-4">
            <div>
              <Label htmlFor="cardNumber">Card Number</Label>
              <Input
                id="cardNumber"
                name="cardNumber"
                value={paymentInfo.cardNumber}
                onChange={handleInputChange}
                required
                placeholder="1234 5678 9012 3456"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="expirationDate">Expiration Date</Label>
                <Input
                  id="expirationDate"
                  name="expirationDate"
                  value={paymentInfo.expirationDate}
                  onChange={handleInputChange}
                  required
                  placeholder="MM/YY"
                />
              </div>
              <div>
                <Label htmlFor="cvv">CVV</Label>
                <Input
                  id="cvv"
                  name="cvv"
                  value={paymentInfo.cvv}
                  onChange={handleInputChange}
                  required
                  placeholder="123"
                />
              </div>
            </div>
            <Button type="submit" className="w-full">
              Pay ${totalPrice.toFixed(2)}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;