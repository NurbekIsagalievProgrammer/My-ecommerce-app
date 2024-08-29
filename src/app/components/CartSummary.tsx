import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';

const CartSummary: React.FC = () => {
  const items = useSelector((state: RootState) => state.cart.items);

  const totalItems = items.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = items.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);

  return (
    <div className="flex justify-between items-center p-4 bg-gray-800 text-white fixed w-full top-0 z-10">
      <div>Total Items: {totalItems}</div>
      <div>Total Price: ${totalPrice}</div>
    </div>
  );
};

export default CartSummary;
