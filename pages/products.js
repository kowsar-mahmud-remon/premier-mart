import Products from '@/components/Products';
import Head from 'next/head';
import React from 'react';

const products = () => {
  return (
    <div className='mx-5 my-10'>
      <Head>
        <title>Products</title>
      </Head>
      <Products></Products>
    </div>
  );
};

export default products;