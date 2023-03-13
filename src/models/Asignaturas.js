import { Schema, model } from "mongoose";

const asignaturaEsquema = new Schema(
  {
    nombre: {
      type: String,
      required: true,
      unique: true,
      trim: true, //limpia espacios
    },
    creditos: {
      type: Number,
      required: true,
    },
    horas: {
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

export default model("Asignaturas", asignaturaEsquema);
