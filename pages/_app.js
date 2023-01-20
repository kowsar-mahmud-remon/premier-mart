import Layout from '@/components/Layout';
import { productsApi } from '@/features/apiSlice';
import { store } from '@/store';
import '@/styles/globals.css';
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import { Provider } from 'react-redux';

export default function App({ Component, pageProps }) {
  return (

    <Provider store={store}>
      <ApiProvider api={productsApi}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApiProvider>
    </Provider>
  );
}
