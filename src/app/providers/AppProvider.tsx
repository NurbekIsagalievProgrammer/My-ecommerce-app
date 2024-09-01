import React from 'react';
import { Provider } from 'react-redux';
import { store } from 'redux/store'; 
import CartSummary from '../components/CartSummary'; 

interface Props {
  children: React.ReactNode;
}

const AppProvider: React.FC<Props> = ({ children }) => {
  console.log("Rendering AppProvider");
  return (
    <Provider store={store}>
      <CartSummary />
      {children}
    </Provider>
  );
};

export default AppProvider;

