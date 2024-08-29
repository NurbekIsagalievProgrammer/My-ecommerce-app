// src/app/components/ProductCard.tsx
import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from 'redux/cartSlice';
import { Product } from '@types'; // Убедитесь, что этот импорт правильный

interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity: 1 })); // Убедитесь, что quantity указано
  };

  return (
    <div className="border p-4 rounded-lg shadow-md">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-cover mb-2 rounded"
      />
      <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
      <p className="text-gray-600 mb-2">
        {product.description.length > 100
          ? `${product.description.substring(0, 100)}...`
          : product.description}
      </p>
      <p className="text-lg font-bold mb-2">
        {product.currency} {product.price.toFixed(2)}
      </p>
      <button
        onClick={handleAddToCart}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
