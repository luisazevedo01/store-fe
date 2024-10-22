import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Star, ShoppingCart, ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

// Mock product data (replace with your actual data fetching logic)
const getProduct = (id: string) => ({
  id,
  name: 'Premium Wireless Headphones',
  price: 199.99,
  description: 'Experience crystal-clear audio with our premium wireless headphones. Featuring advanced noise-cancellation technology, comfortable over-ear design, and long-lasting battery life.',
  image: '/placeholder.svg?height=400&width=400',
  rating: 4.5,
  reviews: 128,
})

// Mock cart context (replace with your actual context)
const useCart = () => {
  const addToCart = (product: any, quantity: number) => {
    console.log(`Added ${quantity} of ${product.name} to cart`)
  }
  return { addToCart }
}

export default function ProductDetails() {
  const { id } = useParams<{ id: string }>()
  const product = getProduct(id || '1')
  const { addToCart } = useCart()
  const [quantity, setQuantity] = useState(1)

  const handleAddToCart = () => {
    addToCart(product, quantity)
  }

  return (
    <div className="container mx-auto px-4 py-8 md:py-12 lg:py-16">
      <Button variant="ghost" className="mb-6 flex items-center" onClick={() => window.history.back()}>
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Products
      </Button>
      <Card>
        <CardContent className="p-6 sm:p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <div className="flex flex-col justify-center">
              <img
                src="https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1378&q=80"
                alt={product.name}
                className="w-full h-auto object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="flex flex-col justify-between">
              <div>
                <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
                <div className="flex items-center mb-4">
                  <div className="flex items-center mr-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>
                <p className="text-xl font-semibold mb-4">${product.price.toFixed(2)}</p>
                <p className="text-muted-foreground mb-6">{product.description}</p>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <div className="w-full sm:w-32">
                  <Label htmlFor="quantity" className="sr-only">
                    Quantity
                  </Label>
                  <Input
                    id="quantity"
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={(e) => setQuantity(parseInt(e.target.value))}
                    className="w-full"
                  />
                </div>
                <Button onClick={handleAddToCart} className="w-full sm:w-auto flex-1">
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Add to Cart
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}