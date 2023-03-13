import { Router } from "express";
import { createAlumnos, eliminarAlumnos, renderAlumnos, renderEditAlumnos, statusAlumnos, updateAlumnos } from "../controllers/alumnosController";
import { createAsignaturas, eliminarAsignaturas, renderAsignaturas, renderEditAsignaturas, statusAsignaturas, updateAsignaturas } from "../controllers/asignaturasController";
import { createProfesor, eliminarProfesor, renderEditProfesor, renderProfesor, statusProfesor, updateProfesor } from "../controllers/profesorController";
import Alumnos from '../models/Alumnos';
import Asignaturas from '../models/Asignaturas'
import Profesor from "../models/Profesor";

const router = Router();

router.get("/", (req, res) => {
  res.render("index",);
});


router.get("/alumnosAgregar",renderAlumnos);
router.post("/alumnos/agregar", createAlumnos);
router.get("/actualizarAlumnos/:id", renderEditAlumnos);
router.post("/actualizarAlumnos/:id", updateAlumnos);
router.get("/eliminarAlumnos/:id", eliminarAlumnos);
router.get("/statusAlumnos/:id", statusAlumnos);

router.get("/asignaturasAgregar",renderAsignaturas);
router.post("/asignaturas/agregar", createAsignaturas);
router.get("/actualizarAsignaturas/:id", renderEditAsignaturas);
router.post("/actualizarAsignaturas/:id", updateAsignaturas);
router.get("/eliminarAsignaturas/:id", eliminarAsignaturas);
router.get("/statusAsignaturas/:id", statusAsignaturas);

router.get("/profesorAgregar",renderProfesor);
router.post("/profesor/agregar", createProfesor);
router.get("/actualizarProfesor/:id", renderEditProfesor);
router.post("/actualizarProfesor/:id", updateProfesor);
router.get("/eliminarProfesor/:id", eliminarProfesor);
router.get("/statusProfesor/:id", statusProfesor);

router.get("/materiaAgregar", async (req, res) => {
  const asignaturas = await Asignaturas.find().lean();
  //console.log(asignaturas);//envia los documentos a consola
  res.render("agregarMateria", { asignaturas: asignaturas });
});









export default router;
