"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _express = require("express");
var _alumnosController = require("../controllers/alumnosController");
var _asignaturasController = require("../controllers/asignaturasController");
var _profesorController = require("../controllers/profesorController");
var _Alumnos = _interopRequireDefault(require("../models/Alumnos"));
var _Asignaturas = _interopRequireDefault(require("../models/Asignaturas"));
var _Profesor = _interopRequireDefault(require("../models/Profesor"));
var router = (0, _express.Router)();
router.get("/", function (req, res) {
  res.render("index");
});
router.get("/alumnosAgregar", _alumnosController.renderAlumnos);
router.post("/alumnos/agregar", _alumnosController.createAlumnos);
router.get("/actualizarAlumnos/:id", _alumnosController.renderEditAlumnos);
router.post("/actualizarAlumnos/:id", _alumnosController.updateAlumnos);
router.get("/eliminarAlumnos/:id", _alumnosController.eliminarAlumnos);
router.get("/statusAlumnos/:id", _alumnosController.statusAlumnos);
router.get("/asignaturasAgregar", _asignaturasController.renderAsignaturas);
router.post("/asignaturas/agregar", _asignaturasController.createAsignaturas);
router.get("/actualizarAsignaturas/:id", _asignaturasController.renderEditAsignaturas);
router.post("/actualizarAsignaturas/:id", _asignaturasController.updateAsignaturas);
router.get("/eliminarAsignaturas/:id", _asignaturasController.eliminarAsignaturas);
router.get("/statusAsignaturas/:id", _asignaturasController.statusAsignaturas);
router.get("/profesorAgregar", _profesorController.renderProfesor);
router.post("/profesor/agregar", _profesorController.createProfesor);
router.get("/actualizarProfesor/:id", _profesorController.renderEditProfesor);
router.post("/actualizarProfesor/:id", _profesorController.updateProfesor);
router.get("/eliminarProfesor/:id", _profesorController.eliminarProfesor);
router.get("/statusProfesor/:id", _profesorController.statusProfesor);
router.get("/materiaAgregar", /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var asignaturas;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _Asignaturas["default"].find().lean();
        case 2:
          asignaturas = _context.sent;
          //console.log(asignaturas);//envia los documentos a consola
          res.render("agregarMateria", {
            asignaturas: asignaturas
          });
        case 4:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
var _default = router;
exports["default"] = _default;