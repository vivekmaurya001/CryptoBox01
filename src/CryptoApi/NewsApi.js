import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const NewsHeaders = {
  "x-rapidapi-key": "311a7a3264msh96d093b9aee9c2fp1ae00cjsn7448670c457d",
  "x-rapidapi-host": "cryptocurrency-news2.p.rapidapi.com",
};

const Url = {
  baseUrl: "https://cryptocurrency-news2.p.rapidapi.com/v1",
};

const createRequest = (url) => ({ url, headers: NewsHeaders });

export const NewsApi = createApi({
  reducerPath: "NewsApi",
  baseQuery: fetchBaseQuery(Url),
  endpoints: (builder) => ({
    getNews: builder.query({
      query: () => createRequest(`/coindesk`),
    }),
  }),
});
export const { useGetNewsQuery } = NewsApi;
