import { useGetProductQuery } from '@/features/apiSlice';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

const Details = () => {
  const [cart, setCart] = useState(0);
  const router = useRouter();
  const { id } = router.query;
  console.log(id);
  const { data, isLoading, error, isError, refetch, } = useGetProductQuery(id);
  const handleIncrease = () => {
    setCart(cart + 1);
  };
  const handleDecrease = () => {
    if (cart > 0) {
      setCart(cart - 1);
    }
    else {
      setCart(cart);
    }
  };
  // console.log(data?.data);
  return (
    <div className='mx-5 my-10'>
      <h1 className='text-4xl font-bold my-10 text-center'>All Products</h1>
      <div className="lg:w-1/2 mx-auto">
        <div className="card bg-base-200 shadow-xl">
          <figure><img className='w-full h-96' src={data?.data?.photourl} alt="Shoes" /></figure>
          <div className="card-body">
            <h1 className='text-3xl my-2'>{data?.data?.name}</h1>
            <p className='text-lg'>Price: ${data?.data?.price}</p>
            <p className='my-2'>{data?.data?.description}</p>
            <div className="text-2xl flex">
              <h2 className='mr-5'>Add to Cart</h2>
              <div className="">
                <button onClick={handleDecrease} className='btn btn-success mr-2'>-</button>
                {cart}
                <button onClick={handleIncrease} className='btn btn-success ml-2'>+</button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div >
  );
};

export default Details;