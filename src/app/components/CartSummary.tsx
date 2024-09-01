// src/components/CartSummary.tsx
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store'; // Путь к store
import { selectTotalQuantity, selectTotalPrice } from 'redux/cartSlice'; // Путь к cartSlice

const CartSummary: React.FC = () => {
  const totalQuantity = useSelector((state: RootState) => selectTotalQuantity(state));
  const totalPrice = useSelector((state: RootState) => selectTotalPrice(state));

  console.log('Total Quantity:', totalQuantity); // Логируем количество товаров
  console.log('Total Price:', totalPrice); // Логируем общую цену

  return (
    <div className="flex justify-between items-center p-4 bg-gray-800 text-white fixed w-full top-0 z-10">
      <div>Total Items: {totalItems}</div>
      <div>Total Price: ${totalPrice}</div>
    </div>
  );
};

export default CartSummary;
