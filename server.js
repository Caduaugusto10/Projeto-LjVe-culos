require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");

const marcasRoutes = require("./src/routes/marcasRoutes.js");
const veiculosRoutes = require("./src/routes/veiculosRoutes.js");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use("/api/marcas", marcasRoutes);
app.use("/api/veiculos", veiculosRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});