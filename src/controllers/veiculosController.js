const veiculosModel = require('../models/veiculosModel');

const getAllveiculos = async (req, res) => {
    try {
        const veiculos = await veiculosModel.getAllveiculos();
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
    const { veiculo, subveiculo, descricao } = req.body;
    try {
        const novoveiculo = await veiculosModel.createVeiculo(veiculo, subveiculo, descricao);
        res.status(201).json(novoveiculo);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar veículo' });
    }
};

const updateveiculo = async (req, res) => {
    const { id } = req.params;
    const { veiculo, subveiculo, descricao } = req.body;
    try {
        const veiculoAtualizado = await veiculosModel.updateveiculo(id, { veiculo, subveiculo, descricao });
        if (!veiculoAtualizado) {
            return res.status(404).json({ error: 'Veículo não encontrado' });
        }
        res.json(veiculoAtualizado);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar veículo' });
    }
};

const deleteveiculo = async (req, res) => {
    try {
        const result = await veiculosModel.deleteveiculo(req.params.id);
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