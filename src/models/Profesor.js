import { Schema, model } from "mongoose";

const profesorEsquema = new Schema(
  {
    rfc:{
        type: String,
        required: true,
        trim: true,
    },
    nombre: {
      type: String,
      required: true,
      trim: true, //limpia espacios
    },
    paterno: {
      type: String,
      required: true,
      trim: true,
    },
    materno: {
      type: String,
      required: true,
      trim: true,
    },
    fechaNacimiento: {
      type: Date,
      required: false,
    },
    direccion: {
        type: String,
        required: true,
      },
    celular: {
      type: Number,
      required: true,
    },
    profesion: {
      type: String,
      required: true,
    },
    numeroEmpleado:{
        type: Number,
        required: true,
    },
    opcion:{
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("Profesor", profesorEsquema);
