// src/app/_app.tsx
import React from 'react';
import { Provider } from 'react-redux';
import { store } from 'redux/store';
import CartSummary from './components/CartSummary';

function MyApp({ Component, pageProps }: any) {
  return (
    <Provider store={store}>
      <CartSummary />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
