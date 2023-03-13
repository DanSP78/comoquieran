"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _app = _interopRequireDefault(require("./app"));
require("./database");
var _config = require("./config");
//equivale al codigo que esta en app.js

_app["default"].listen(_config.PUERTO);
console.log("servidor en puerto", _config.PUERTO);