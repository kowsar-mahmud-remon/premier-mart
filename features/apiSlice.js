import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3002/" }),
  tagTypes: ['Post'],
  endpoints: (builder) => ({

    // get all products 
    getAllProducts: builder.query({
      query: () => "products",
    }),

    // get all categories 
    getAllCategories: builder.query({
      query: () => "categories",
    }),

    // get all slider 
    getAllSliders: builder.query({
      query: () => "sliders",
    }),

    // get single Product 
    getProduct: builder.query({
      query: (id) => `products/${id}`
    }),

    // get single categories  Category
    getCategory: builder.query({
      query: (id) => `products/${id}`
    }),

    // delete slider 
    deleteSlider: builder.mutation({
      query: (id) => ({
        url: `/sliders/${id}`,
        method: 'DELETE',
        credentials: 'include',
      }),
      invalidatesTags: ['Post'],
    }),

    // add new slider 
    addNewSlider: builder.mutation({
      query: (payload) => ({
        url: '/sliders',
        method: 'POST',
        body: payload,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }),
      invalidatesTags: ['Post'],
    }),

  })
});

export const { useGetAllProductsQuery, useGetProductQuery, useGetAllSlidersQuery, useGetAllCategoriesQuery, useGetCategoryQuery, useDeleteSliderMutation, useAddNewSliderMutation } = productsApi;