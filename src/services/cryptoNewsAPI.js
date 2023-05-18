import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

const cryptoNewsHeaders = {
  "X-BingApis-SDK": "true",
  "X-RapidAPI-Key": "1b4521591fmsh3447c481b52fa8ap1955f4jsnfbbcb96ea523",
  "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
};

export const cryptoNewsAPI = createApi({
  reducerPath: "cryptoNewsAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://bing-news-search1.p.rapidapi.com/",
    prepareHeaders: (headers) => {
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({ newsCategory, count }) => ({
        url: `/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`,
        headers: cryptoNewsHeaders,
      }),
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsAPI;
