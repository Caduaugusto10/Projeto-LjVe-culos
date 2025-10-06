const pool = require('../config/database.js');

const getVeiculos = async (modelo, marca_id) => {
    if (modelo && marca_id) {
        const result = await pool.query(`
            SELECT * FROM veiculos
            WHERE modelo ILIKE $1 AND marca_id = $2
            ORDER BY modelo
        `, [`%${modelo}%`, marca_id]);
        return result.rows;
    } else if (modelo) {
        const result = await pool.query(`
            SELECT * FROM veiculos
            WHERE modelo ILIKE $1
            ORDER BY modelo
        `, [`%${modelo}%`]);
        return result.rows;
    } else if (marca_id) {
        const result = await pool.query(`
            SELECT * FROM veiculos
            WHERE marca_id = $1
            ORDER BY modelo
        `, [marca_id]);
        return result.rows;
    } else {
        const result = await pool.query(`
            SELECT * FROM veiculos
            ORDER BY modelo
        `);
        return result.rows;
    }
};

const getVeiculoById = async (id) => {
    const result = await pool.query(`
        SELECT * FROM veiculos WHERE id = $1
    `, [id]);
    return result.rows[0];
};

const createVeiculo = async (modelo, ano, preco, cor, marca_id, descricao, photo) => {
    const result = await pool.query(
        "INSERT INTO veiculos (modelo, ano, preco, cor, marca_id, descricao, photo) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
        [modelo, ano, preco, cor, marca_id, descricao, photo]
    );
    return result.rows[0];
};

const updateVeiculo = async (id, modelo, ano, preco, cor, marca_id, descricao, photo) => {
    const result = await pool.query(
        "UPDATE veiculos SET modelo = $1, ano = $2, preco = $3, cor = $4, marca_id = $5, descricao = $6, photo = $7 WHERE id = $8 RETURNING *",
        [modelo, ano, preco, cor, marca_id, descricao, photo, id]
    );
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
    getVeiculos,
    getVeiculoById,
    createVeiculo,
    updateVeiculo,
    deleteVeiculo
};