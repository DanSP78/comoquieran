import { Router } from "express";
import Asignaturas from "../models/Asignaturas";


export const renderAsignaturas = async (req, res) => {
    const asignaturas = await Asignaturas.find().lean();
    //console.log(asignaturas);//envia los documentos a consola
    res.render("agregarMateria", { asignaturas: asignaturas });
  };
  
  export const createAsignaturas = async (req, res) => {
    try {
      const asignaturas = Asignaturas(req.body);
      await asignaturas.save()
      res.redirect("/asignaturasAgregar")
    } catch (error) {
      console.log(error);
    }
  };

  export const renderEditAsignaturas = async (req, res) => {
    try {
      const asignaturas = await Asignaturas.findById(req.params.id).lean();
      res.render("editarAsignaturas", { asignaturas });
    } catch (error) {
      console.log(error.message);
    }
  };

  export const updateAsignaturas = async (req, res) => {
    const { id } = req.params;
    await Asignaturas.findByIdAndUpdate(id, req.body);
    res.redirect("/asignaturasAgregar");
  };
  
  export const eliminarAsignaturas = async (req, res) => {
    const { id } = req.params;
    await Asignaturas.findByIdAndDelete(id);
    res.redirect("/asignaturasAgregar");
  };

  export const statusAsignaturas = async (req, res) => {
    const { id } = req.params;
    const asignaturas = await Asignaturas.findById(id);
    //La opcion esta en models
    asignaturas.opcion = !asignaturas.opcion;
    await asignaturas.save();
    res.redirect("/asignaturasAgregar");
  };