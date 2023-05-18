import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeader = {
  "X-RapidAPI-Key": "1b4521591fmsh3447c481b52fa8ap1955f4jsnfbbcb96ea523",
  "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
};

export const cryptoAPI = createApi({
  reducerPath: "cryptoAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://coinranking1.p.rapidapi.com",
    prepareHeaders: (headers) => {
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getExchanges: builder.query({
      query: () => ({
        url: "exchanges",
        headers: cryptoApiHeader,
      }),
    }),
    getCryptos: builder.query({
      query: (count) => ({
        url: `/coins?limit=${count}`,
        headers: cryptoApiHeader,
      }),
    }),
    getCryptoDetails: builder.query({
      query: (coinId) => ({
        url: `/coin/${coinId}`,
        headers: cryptoApiHeader,
      }),
    }),
    getCryptoHistory: builder.query({
      query: ({ coinId, timePeriod }) => ({
        url: `coin/${coinId}/history?timePeriod=${timePeriod}`,
        headers: cryptoApiHeader,
      }),
    }),
  }),
});

//exporting hook
export const {
  useGetCryptosQuery,
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery,
  useGetExchangesQuery,
} = cryptoAPI;
