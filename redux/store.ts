// src/redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';

// Создание Redux Store
export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

// Определение типа состояния
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
