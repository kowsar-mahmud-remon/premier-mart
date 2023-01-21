import { useRouter } from 'next/router';
import React from 'react';
import { useGetAllProductsQuery, useGetProductQuery } from '../features/apiSlice';

const Products = () => {
  const { data: allProductsData, error, isError, isLoading } = useGetAllProductsQuery();

  const { data: singleProduct } = useGetProductQuery();
  const router = useRouter();

  const products = allProductsData?.data;

  // const handleProduct = (id) => {
  //   console.log(id);
  // };

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className='mx-5 my-10'>
      <h1 className='text-4xl font-bold my-10 text-center'>All Products</h1>
      <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {
          products.map(details => <div key={details._id} className="card bg-base-200 shadow-xl">
            <figure><img className='w-full h-64' src={details.photourl} alt="Shoes" /></figure>
            <div className="card-body">
              <h1 className='text-3xl my-2'>{details.name}</h1>
              {/* <p className='text-lg'>Price: ${details.price}</p> */}
              <p className='my-2'>{details.description}</p>
              <button onClick={() => router.push(`/${details?._id}`)} className='btn btn-primary my-5 w-[100px]'>See Details</button>
            </div>
          </div>)
        }
      </div>
    </div >
  );
};

export default Products;