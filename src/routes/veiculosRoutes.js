const express = require('express');
const router = express.Router();
const veiculosController = require('../controllers/veiculosController.js');
const upload = require("../config/upload.js");

router.get('/', veiculosController.getAllveiculos);

router.get('/:id', veiculosController.getVeiculoById);

router.post('/', upload.single("photo"), veiculosController.createVeiculo);

router.put('/:id', veiculosController.updateveiculo);

router.delete('/:id', veiculosController.deleteveiculo);

module.exports = router;