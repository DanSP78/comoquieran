"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = require("mongoose");
var profesorEsquema = new _mongoose.Schema({
  rfc: {
    type: String,
    required: true,
    trim: true
  },
  nombre: {
    type: String,
    required: true,
    trim: true //limpia espacios
  },

  paterno: {
    type: String,
    required: true,
    trim: true
  },
  materno: {
    type: String,
    required: true,
    trim: true
  },
  fechaNacimiento: {
    type: Date,
    required: false
  },
  direccion: {
    type: String,
    required: true
  },
  celular: {
    type: Number,
    required: true
  },
  profesion: {
    type: String,
    required: true
  },
  numeroEmpleado: {
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
var _default = (0, _mongoose.model)("Profesor", profesorEsquema);
exports["default"] = _default;