import { useGetAllProductsQuery, useGetProductQuery } from '../features/apiSlice';

export const Data = () => {

  const { data: allProductsData, error, isError, isLoading } = useGetAllProductsQuery();
  const { data: singleProduct } = useGetProductQuery("iphone");

  const products = allProductsData?.products;

  // console.log(allProductsData?.products);
  // console.log(singleProduct);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return <div>
    {
      products.map(product => <h1 key={product.id}>{product.title}</h1>)
    }
  </div>;
};