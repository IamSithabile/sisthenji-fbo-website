import React from 'react'
import ProductCard from '../components/ProductCard'
const products = [
  {
    id: 1,
    image: 'product1.jpg',
    title: 'Forever living Aloe Drinks',
    description: 'Our delicious drinks',
    page: '/product/aloe-drinks',
  },
  {
    id: 2,
    image: 'product2.jpg',
    title: 'Multi-Maca',
    description: 'A nourishing supplement',
    page: '/product/multi-maca',
  },
  {
    id: 3,
    image: 'product3.jpg',
    title: 'Bee Pollen',
    description: 'Energizing bee pollen',
    page: '/product/bee-pollen',
  },
  {
    id: 4,
    image: 'product4.jpg',
    title: 'Product 4',
    description: 'Immune boosting garlic-Thyme',
    page: '/product/garlic-thyme',
  },
]
const ProductList = () => {
  return (
    <div>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <ProductCard {...product} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ProductList
