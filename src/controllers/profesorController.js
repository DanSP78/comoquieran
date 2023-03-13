import { Router } from "express";
import Profesor from "../models/Profesor"

export const renderProfesor = async (req, res) => {
    const profesor = await Profesor.find().lean();
    //console.log(asignaturas);//envia los documentos a consola
    res.render("profesor", { profesor: profesor });
  };

export const createProfesor = async (req, res) => {
    try {
      const profesor = Profesor(req.body);
      await profesor.save()
      res.redirect("/profesorAgregar")
    } catch (error) {
      console.log(error);
    }
  };

  export const renderEditProfesor = async (req, res) => {
    try {
      const profesor = await Profesor.findById(req.params.id).lean();
      res.render("editarProfesor", { profesor });
    } catch (error) {
      console.log(error.message);
    }
  };

  export const updateProfesor = async (req, res) => {
    const { id } = req.params;
    await Profesor.findByIdAndUpdate(id, req.body);
    res.redirect("/profesorAgregar");
  };

  export const eliminarProfesor = async (req, res) => {
    const { id } = req.params;
    await Profesor.findByIdAndDelete(id);
    res.redirect("/profesorAgregar");
  };

  export const statusProfesor = async (req, res) => {
    const { id } = req.params;
    const profesor = await Profesor.findById(id);
    //La opcion esta en models
    profesor.opcion = !profesor.opcion;
    await profesor.save();
    res.redirect("/profesorAgregar");
  };

