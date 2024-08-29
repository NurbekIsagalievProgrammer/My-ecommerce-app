// src/app/providers/AppProvider.tsx
import React from 'react';
import { Provider } from 'react-redux';
import { store } from 'redux/store'; // Используйте псевдонимы

const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};

export default AppProvider;
