import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl="https://backend-property.onrender.com"
export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${baseUrl}` }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => "products",
    }),
  }),
});

export const { useGetAllProductsQuery } = productsApi;
