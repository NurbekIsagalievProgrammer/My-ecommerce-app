// src/app/ProductList.tsx
"use client";

import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from 'redux/cartSlice';
import { Product } from '@types';

interface Props {
  products: Product[];
}

const ProductList: React.FC<Props> = ({ products }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (product: Product) => {
    console.log("Adding to cart:", product);
    dispatch(addToCart({ 
      id: product.id, 
      title: product.title, 
      price: product.price, 
      quantity: 1 
    }));
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {products.map((product) => (
        <div key={product.id} className="border p-4 rounded-lg shadow-md">
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
          <p className="text-yellow-500 mb-2">
            {'★'.repeat(Math.round(product.rating))}
            {product.rating % 1 !== 0 ? '☆' : ''}
          </p>
          <button
            onClick={() => handleAddToCart(product)}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
