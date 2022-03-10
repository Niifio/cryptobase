"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useGetCryptoHistoryQuery = exports.useGetCryptoDetailsQuery = exports.useGetCryptosQuery = exports.cryptoApi = void 0;

var _react = require("@reduxjs/toolkit/query/react");

var cryptoApiHeaders = {
  "x-rapidapi-host": "coinranking1.p.rapidapi.com",
  "x-rapidapi-key": "bb1536a4bemsh6e63310a9204027p10552bjsn4e4607a9c52d"
};
var baseUrl = "https://coinranking1.p.rapidapi.com";

var createRequest = function createRequest(url) {
  return {
    url: url,
    headers: cryptoApiHeaders
  };
};

var cryptoApi = (0, _react.createApi)({
  reducerPath: "cryptoApi",
  baseQuery: (0, _react.fetchBaseQuery)({
    baseUrl: baseUrl
  }),
  endpoints: function endpoints(builder) {
    return {
      getCryptos: builder.query({
        query: function query(count) {
          return createRequest("/coins?limit=".concat(count));
        }
      }),
      getCryptoDetails: builder.query({
        query: function query(coinId) {
          return createRequest("/coin/".concat(coinId));
        }
      }),
      getCryptoHistory: builder.query({
        query: function query(_ref) {
          var coinId = _ref.coinId,
              timeperiod = _ref.timeperiod;
          return createRequest("coin/".concat(coinId, "/history?timeperiod=").concat(timeperiod));
        }
      })
    };
  }
});
exports.cryptoApi = cryptoApi;
var useGetCryptosQuery = cryptoApi.useGetCryptosQuery,
    useGetCryptoDetailsQuery = cryptoApi.useGetCryptoDetailsQuery,
    useGetCryptoHistoryQuery = cryptoApi.useGetCryptoHistoryQuery; // var options = {
//     method: 'GET',
//     url: 'https://coinranking1.p.rapidapi.com/coins',
//     // params: {
//     //   referenceCurrencyUuid: 'yhjMzLPhuIDl',
//     //   timePeriod: '24h',
//     //   tiers: '1',
//     //   orderBy: 'marketCap',
//     //   orderDirection: 'desc',
//     //   limit: '50',
//     //   offset: '0'
//     // },
//     headers: {
//       'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
//       'x-rapidapi-key': 'bb1536a4bemsh6e63310a9204027p10552bjsn4e4607a9c52d'
//     }
//   };

exports.useGetCryptoHistoryQuery = useGetCryptoHistoryQuery;
exports.useGetCryptoDetailsQuery = useGetCryptoDetailsQuery;
exports.useGetCryptosQuery = useGetCryptosQuery;