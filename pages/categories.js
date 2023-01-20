import { Data } from '@/components/Data';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import { useGetAllCategoriesQuery, useGetCategoryQuery } from '../features/apiSlice';



const categories = () => {
  const { data: allProductsData, error, isError, isLoading } = useGetAllCategoriesQuery();
  const { data: singleProduct } = useGetCategoryQuery('63c8ec5b8bd813d4b5bb541c');

  const products = allProductsData?.data;
  console.log(singleProduct);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className='mx-5'>
      <Head>
        <title>Catagories</title>
      </Head>
      <h1 className='text-4xl font-bold my-10 text-center'>Products Category</h1>
      <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {
          products.map(details => <div key={details._id} className="card bg-base-200 shadow-xl">
            <figure><img className='w-full h-64' src={details.photourl} alt="Shoes" /></figure>
            <div className="card-body">
              <div className="card-actions justify-center">
                <Link href="/categories/[id]" as={`/categories/${details._id}`}>
                  <button className="btn btn-primary">{details.name}</button>
                </Link>
              </div>
            </div>
          </div>)
        }
      </div>
    </div>
  );
};

export default categories;


