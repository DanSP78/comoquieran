import { Router } from "express";
import Alumnos from "../models/Alumnos";


export const renderAlumnos = async (req, res) => {
    const alumnos = await Alumnos.find().lean();
    //console.log(asignaturas);//envia los documentos a consola
    res.render("alumnos", { alumnos: alumnos });
  };
  
  export const createAlumnos = async (req, res) => {
    try {
      const alumnos = Alumnos(req.body);
      await alumnos.save()
      res.redirect("/alumnosAgregar")
    } catch (error) {
      console.log(error);
    }
  };

  export const renderEditAlumnos = async (req, res) => {
    try {
      const alumnos = await Alumnos.findById(req.params.id).lean();
      res.render("editarAlumnos", { alumnos });
    } catch (error) {
      console.log(error.message);
    }
  };

  export const updateAlumnos = async (req, res) => {
    const { id } = req.params;
    await Alumnos.findByIdAndUpdate(id, req.body);
    res.redirect("/alumnosAgregar");
  };
  
  export const eliminarAlumnos = async (req, res) => {
    const { id } = req.params;
    await Alumnos.findByIdAndDelete(id);
    res.redirect("/alumnosAgregar");
  };

  export const statusAlumnos = async (req, res) => {
    const { id } = req.params;
    const alumnos = await Alumnos.findById(id);
    //La opcion esta en models
    alumnos.opcion = !alumnos.opcion;
    await alumnos.save();
    res.redirect("/alumnosAgregar");
  };

 