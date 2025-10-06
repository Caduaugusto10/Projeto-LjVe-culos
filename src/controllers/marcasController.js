const marcasModel = require('../models/marcasModel');

const getAllmarcas = async (req, res) => {
    try {
        const { nome } = req.query;
        const marcas = await marcasModel.getAllMarcas(nome);
        res.json(marcas);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar marcas' });
    }
};

const getMarcaById = async (req, res) => {
    try {
        const marca = await marcasModel.getMarcaById(req.params.id);
        if (!marca) {
            return res.status(404).json({ error: 'Marca não encontrada.' });
        }
        res.json(marca);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar marca.' });
    }
};

const createMarca = async (req, res) => {
    try {
        const { nome } = req.body;
        const photo = req.file ? req.file.filename : null;
        const novaMarca = await marcasModel.createMarca(nome, photo);
        res.status(201).json(novaMarca);
    } catch (error) {
        res.status(500).json({ message: "Erro ao criar marca.", error: error.message });
    }
};

const updateMarca = async (req, res) => {
    try {
        const { id } = req.params;
        const { nome } = req.body;
        const photo = req.file ? req.file.filename : req.body.photo;
        const marcaAtualizada = await marcasModel.updateMarca(id, nome, photo);
        res.status(200).json(marcaAtualizada);
    } catch (error) {
        res.status(500).json({ message: "Erro ao atualizar marca.", error: error.message });
    }
};

const deleteMarca = async (req, res) => {
    try {
        const result = await marcasModel.deleteMarca(req.params.id);
        if (result.error) {
            return res.status(404).json(result);
        }
        res.json(result);
    } catch (error) {
        console.error("Erro ao deletar marca:", error);
        res.status(500).json({ error: 'Erro ao deletar marca' });
    }
};

module.exports = {
    getAllmarcas,
    getMarcaById,
    createMarca,
    updateMarca,
    deleteMarca
};