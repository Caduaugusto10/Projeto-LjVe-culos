const pool = require('../config/database.js');

const getAllFilmes = async (classificacaoIndicativa) => {
    if (!classificacaoIndicativa) {
        const result = await pool.query(`
            SELECT * FROM filmes
        `);
        return result.rows;
    } else {
        const result = await pool.query(`
            SELECT * FROM filmes WHERE classificacaoIndicativa ILIKE $1
        `, [`%${classificacaoIndicativa}%`]);
        return result.rows;
    }
};

const getFilmeById = async (id) => {
    const result = await pool.query(`
        SELECT * FROM filmes WHERE id = $1
    `, [id]);

    return result.rows[0];
};

const createFilme = async (name, autor, photo, classificacaoIndicativa) => {
    const result = await pool.query(`
        INSERT INTO filmes (name, autor, photo, classificacaoIndicativa)
        VALUES ($1, $2, $3, $4) RETURNING *
    `, [name, autor, photo, classificacaoIndicativa]);

    return result.rows[0];
};

const updateFilme = async (id, name, autor, photo, classificacaoIndicativa) => {
    const result = await pool.query(`
        UPDATE filmes SET name = $1, autor = $2, photo = $3, classificacaoIndicativa = $4
        WHERE id = $5 RETURNING *
    `, [name, autor, photo, classificacaoIndicativa, id]);

    return result.rows[0];
};

const deleteFilme = async (id) => {
    const result = await pool.query(`
        DELETE FROM filmes WHERE id = $1 RETURNING *
    `, [id]);
    if (result.rowCount === 0) {
        return { error: 'Filme não encontrado' };
    }
    return { message: 'Filme deletado com sucesso' };
};

const getAllMarcas = async (classificacaoIndicativa) => {
    if (!classificacaoIndicativa) {
        const result = await pool.query(`
            SELECT * FROM marcas
        `);
        return result.rows;
    } else {
        const result = await pool.query(`
            SELECT * FROM marcas WHERE classificacaoIndicativa ILIKE $1
        `, [`%${classificacaoIndicativa}%`]);
        return result.rows;
    }
};

const getMarcaById = async (id) => {
    const result = await pool.query(`
        SELECT * FROM marcas WHERE id = $1
    `, [id]);

    return result.rows[0];
};

const createMarca = async (name, autor, photo, classificacaoIndicativa) => {
    const result = await pool.query(`
        INSERT INTO marcas (name, autor, photo, classificacaoIndicativa)
        VALUES ($1, $2, $3, $4) RETURNING *
    `, [name, autor, photo, classificacaoIndicativa]);

    return result.rows[0];
};

const updateMarca = async (id, name, autor, photo, classificacaoIndicativa) => {
    const result = await pool.query(`
        UPDATE marcas SET name = $1, autor = $2, photo = $3, classificacaoIndicativa = $4
        WHERE id = $5 RETURNING *
    `, [name, autor, photo, classificacaoIndicativa, id]);

    return result.rows[0];
};

const deleteMarca = async (id) => {
    const result = await pool.query(`
        DELETE FROM marcas WHERE id = $1 RETURNING *
    `, [id]);
    if (result.rowCount === 0) {
        return { error: 'Marca não encontrada' };
    }
    return { message: 'Marca deletada com sucesso' };
};

module.exports = {
    getAllFilmes,
    getFilmeById,
    createFilme,
    updateFilme,
    deleteFilme,
    getAllMarcas,
    getMarcaById,
    createMarca,
    updateMarca,
    deleteMarca
};
