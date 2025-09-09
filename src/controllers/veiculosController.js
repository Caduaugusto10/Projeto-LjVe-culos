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
        if (!modelo || !ano || !preco || !marca_id) {
            return res.status(400).json({ error: 'modelo, ano, preco e marca_id são obrigatórios' });
        }
        const novo = await veiculosModel.createVeiculo(modelo, ano, preco, cor, marca_id, descricao);
        res.status(201).json(novo);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar veículo' });
    }
};

const updateveiculo = async (req, res) => {
    const { id } = req.params;
    const { modelo, ano, preco, cor, marca_id, descricao } = req.body;
    try {
        const veiculoAtualizado = await veiculosModel.updateVeiculo(id, modelo, ano, preco, cor, marca_id, descricao);
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