const pool = require('../config/database.js');

const getAllMarcas = async (nome) => {
    if (!nome) {
        const result = await pool.query('SELECT id, nome, photo FROM marcas ORDER BY nome');
        return result.rows;
    }
    const result = await pool.query(
        'SELECT id, nome, photo FROM marcas WHERE nome ILIKE $1 ORDER BY nome',
        [`%${nome}%`]
    );
    return result.rows;
};

const getMarcaById = async (id) => {
    const result = await pool.query('SELECT id, nome, photo FROM marcas WHERE id = $1', [id]);
    return result.rows[0];
};

const createMarca = async (nome, photo) => {
    const result = await pool.query(
        "INSERT INTO marcas (nome, photo) VALUES ($1, $2) RETURNING *",
        [nome, photo]
    );
    return result.rows[0];
};

const updateMarca = async (id, nome, photo) => {
    const result = await pool.query(
        "UPDATE marcas SET nome = $1, photo = $2 WHERE id = $3 RETURNING *",
        [nome, photo, id]
    );
    return result.rows[0];
};

const deleteMarca = async (id) => {
    const result = await pool.query('DELETE FROM marcas WHERE id = $1 RETURNING id', [id]);
    if (result.rowCount === 0) return { error: 'Marca não encontrada' };
    return { message: 'Marca deletada com sucesso' };
};

module.exports = {
    getAllMarcas,
    getMarcaById,
    createMarca,
    updateMarca,
    deleteMarca
};  