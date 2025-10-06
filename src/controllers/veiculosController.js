const veiculosModel = require('../models/veiculosModel');

const getAllveiculos = async (req, res) => {
    try {
        const { modelo, marca_id } = req.query;
        const veiculos = await veiculosModel.getVeiculos(
            modelo || null,
            marca_id ? Number(marca_id) : null
        );
        res.json(veiculos);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar veículos' });
    }
};

const getVeiculoById = async (req, res) => {
    try {
        const veiculo = await veiculosModel.getVeiculoById(req.params.id);
        if (!veiculo) {
            return res.status(404).json({ error: 'Veículo não encontrado.' });
        }
        res.json(veiculo);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar veículo' });
    }
};

const createVeiculo = async (req, res) => {
    try {
        const { modelo, ano, preco, cor, marca_id, descricao } = req.body;
        const photo = req.file ? req.file.filename : null;
        const novoVeiculo = await veiculosModel.createVeiculo(modelo, ano, preco, cor, marca_id, descricao, photo);
        res.status(201).json(novoVeiculo);
    } catch (error) {
        res.status(500).json({ message: "Erro ao criar veículo.", error: error.message });
    }
};

const updateveiculo = async (req, res) => {
    try {
        const { id } = req.params;
        const { modelo, ano, preco, cor, marca_id, descricao } = req.body;
        const photo = req.file ? req.file.filename : req.body.photo;
        const veiculoAtualizado = await veiculosModel.updateVeiculo(id, modelo, ano, preco, cor, marca_id, descricao, photo);
        res.status(200).json(veiculoAtualizado);
    } catch (error) {
        res.status(500).json({ message: "Erro ao atualizar veículo.", error: error.message });
    }
};

const deleteveiculo = async (req, res) => {
    try {
        const result = await veiculosModel.deleteVeiculo(req.params.id);
        if (result.error) {
            return res.status(404).json(result);
        }
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao deletar veículo' });
    }
};

module.exports = {
    getAllveiculos,
    getVeiculoById,
    createVeiculo,
    updateveiculo,
    deleteveiculo
};