"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = require("mongoose");
var asignaturaEsquema = new _mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    unique: true,
    trim: true //limpia espacios
  },

  creditos: {
    type: Number,
    required: true
  },
  horas: {
    type: Number,
    required: true
  },
  opcion: {
    type: Boolean,
    "default": false
  }
}, {
  timestamps: true,
  versionKey: false
});
var _default = (0, _mongoose.model)("Asignaturas", asignaturaEsquema);
exports["default"] = _default;