import { Schema, model } from "mongoose";

const alumnoEsquema = new Schema(
  {
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
      required: true,
    },
    sexo: {
      type: String,
      required: true,
      trim: true,
    },
    celular: {
      type: Number,
      required: true,
    },
    direccion: {
      type: String,
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

export default model("Alumnos", alumnoEsquema);
