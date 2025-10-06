const express = require('express');
const router = express.Router();
const marcasController = require('../controllers/marcasController.js');
const upload = require("../config/upload.js");

router.get('/', marcasController.getAllmarcas);

router.get('/:id', marcasController.getMarcaById);

router.post('/', upload.single("photo"), marcasController.createMarca);

router.put('/:id', upload.single("photo"), marcasController.updateMarca);

router.delete('/:id', marcasController.deleteMarca);

module.exports = router;