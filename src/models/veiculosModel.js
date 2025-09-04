const pool = require('../config/database.js');

const getAllVeiculos = async () => {
    const result = await pool.query(`
        SELECT * FROM veiculos
    `);
    return result.rows;
};

const getVeiculoById = async (id) => {
    try {
        const result = await pool.query(`
            SELECT * FROM veiculos WHERE id = $1
        `, [id]);

        return result.rows[0];
    } catch (error) {
        console.error('Erro ao buscar veículo por ID:', error);
        throw error;
    }
};

const createVeiculo = async (veiculo, subveiculo, descricao) => {
    const result = await pool.query(`
        INSERT INTO veiculos (veiculo, subveiculo, descricao)
        VALUES ($1, $2, $3) RETURNING *
    `, [veiculo, subveiculo, descricao]);

    return result.rows[0];
};

const updateVeiculo = async (id, { veiculo, subveiculo, descricao }) => {
    const result = await pool.query(`
        UPDATE veiculos SET veiculo = $1, subveiculo = $2, descricao = $3
        WHERE id = $4 RETURNING *
    `, [veiculo, subveiculo, descricao, id]);

    return result.rows[0];
};

const deleteVeiculo = async (id) => {
    const result = await pool.query(`
        DELETE FROM veiculos WHERE id = $1 RETURNING *
    `, [id]);
    if (result.rowCount === 0) {
        return { error: 'Veículo não encontrado' };
    }
    return { message: 'Veículo deletado com sucesso' };
};

module.exports = {
    getAllVeiculos,
    getVeiculoById,
    createVeiculo,
    updateVeiculo,
    deleteVeiculo
};