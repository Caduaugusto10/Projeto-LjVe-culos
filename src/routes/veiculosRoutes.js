const express = require('express');
const router = express.Router();
const veiculosController = require('../controllers/veiculosController.js');
const upload = require("../config/upload.js");

router.get('/', veiculosController.getAllveiculos);

router.get('/:id', veiculosController.getMarcaById);

router.post('/', upload.single("photo"), veiculosController.createMarca);

router.put('/:id', veiculosController.updateMarca);

router.delete('/:id', veiculosController.deleteMarca);

module.exports = router;