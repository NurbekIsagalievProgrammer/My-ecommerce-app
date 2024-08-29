import { Provider } from 'react-redux';
import { store } from 'redux/store'; 
import CartSummary from './components/CartSummary';

function MyApp({ Component, pageProps }: any) {
  return (
    <Provider store={store}>
      <div className="flex flex-col h-screen">
        <CartSummary /> {/* Заголовок с корзиной всегда виден */}
        <main className="mt-16">
          <Component {...pageProps} />
        </main>
      </div>
    </Provider>
  );
}

export default MyApp;
