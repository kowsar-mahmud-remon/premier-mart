import { Data } from '@/components/Data';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import { useGetAllProductsQuery } from '../features/apiSlice';

const products = () => {
  const { data: allProductsData, error, isError, isLoading } = useGetAllProductsQuery();

  const products = allProductsData?.data;

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className='mx-5 my-10'>
      <Head>
        <title>Products</title>
      </Head>
      <h1 className='text-4xl font-bold my-10 text-center'>All Products</h1>
      <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {
          products.map(details => <div key={details._id} className="card bg-base-200 shadow-xl">
            <figure><img className='w-full h-64' src={details.photourl} alt="Shoes" /></figure>
            <div className="card-body">
              <h1 className='text-3xl my-2'>{details.name}</h1>
              <p className='text-lg'>Price: ${details.price}</p>
              <p className='my-2'>{details.description}</p>
              <button className='btn btn-primary my-5 w-[100px]'>Buy Now</button>
            </div>
          </div>)
        }
      </div>
    </div>
  );
};

export default products;