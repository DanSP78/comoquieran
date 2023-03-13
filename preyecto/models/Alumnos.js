"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = require("mongoose");
var alumnoEsquema = new _mongoose.Schema({
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
    required: true
  },
  sexo: {
    type: String,
    required: true,
    trim: true
  },
  celular: {
    type: Number,
    required: true
  },
  direccion: {
    type: String,
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
var _default = (0, _mongoose.model)("Alumnos", alumnoEsquema);
exports["default"] = _default;