import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { productId } = useParams();
  // Fetch product details using the productId
  const product = {
    id: productId,
    name: 'Laptop',
    price: '$999',
    description: 'This is a high-end laptop.',
    image: 'laptop.jpg',
  };

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>Price: {product.price}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductDetail;
