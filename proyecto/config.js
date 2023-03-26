"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PUERTO = exports.MONGODB_URI = exports.MONGODB_ATLAS = void 0;
var _dotenv = require("dotenv");
(0, _dotenv.config)();
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1/escuela";
exports.MONGODB_URI = MONGODB_URI;
var PUERTO = process.env.PUERTO || 4200;
exports.PUERTO = PUERTO;
var MONGODB_ATLAS = process.env.MONGODB_ATLAS || process.env.MONGODB_ATLAS;
exports.MONGODB_ATLAS = MONGODB_ATLAS;