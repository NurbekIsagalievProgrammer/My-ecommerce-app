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
    <header className="fixed top-0 left-0 w-full bg-gray-800 text-white p-4 flex justify-between items-center z-10">
      <div>
        <span className="font-bold">Total Items:</span> {totalQuantity}
      </div>
      <div>
        <span className="font-bold">Total Price:</span> ${totalPrice.toFixed(2)}
      </div>
    </header>
  );
};

export default CartSummary;
