"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _cryptoApi = require("../services/cryptoApi");

var _cryptoNewsApi = require("../services/cryptoNewsApi");

var _reducer;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = (0, _toolkit.configureStore)({
  reducer: (_reducer = {}, _defineProperty(_reducer, _cryptoApi.cryptoApi.reducerPath, _cryptoApi.cryptoApi.reducer), _defineProperty(_reducer, _cryptoNewsApi.cryptoNewsApi.reducerPath, _cryptoNewsApi.cryptoNewsApi.reducer), _reducer)
});

exports["default"] = _default;