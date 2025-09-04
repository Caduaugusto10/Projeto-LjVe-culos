const marcasModel = require('../models/marcasModel');

const getAllmarcas = async (req, res) => {
    try {
        const { classificacaoIndicativa } = req.query;
        const marcas = await marcasModel.getAllmarcas(classificacaoIndicativa);
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
        const { name, autor, classificacaoIndicativa } = req.body;
        const photo = req.file ? req.file.filename : null;
        const novaMarca = await marcasModel.createMarca(name, autor, photo, classificacaoIndicativa);
        res.status(201).json(novaMarca);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar marca' });
    }
};

const updateMarca = async (req, res) => {
    const { id } = req.params;
    const { name, autor, photo, classificacaoIndicativa } = req.body;
    try {
        const marcaAtualizada = await marcasModel.updateMarca(id, name, autor, photo, classificacaoIndicativa);
        if (!marcaAtualizada) {
            return res.status(404).json({ error: 'Marca não encontrada' });
        }
        res.json(marcaAtualizada);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar marca' });
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