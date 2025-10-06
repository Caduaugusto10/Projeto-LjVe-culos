CREATE DATABASE loja_veiculos;
\c loja_veiculos

CREATE TABLE marcas (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL UNIQUE,
    photo TEXT
);

CREATE TABLE veiculos (
    id SERIAL PRIMARY KEY,
    modelo VARCHAR(100) NOT NULL,
    ano INTEGER NOT NULL,
    preco DECIMAL(12,2) NOT NULL,
    cor VARCHAR(50),
    marca_id INTEGER REFERENCES marcas(id) ON DELETE CASCADE,
    descricao TEXT,
    photo TEXT
);

INSERT INTO marcas (nome) VALUES
('Chevrolet'),
('Ferrari'),
('Porsche'),
('Lamborghini'),
('Mercedes-Benz'),
('BMW'),
('Audi'),
('Bentley'),
('Rolls-Royce'),
('Aston Martin');

INSERT INTO veiculos (modelo, ano, preco, cor, marca_id, descricao) VALUES
('Onix LT', 2022, 65000.00, 'Prata', 1, 'Hatch compacto econômico'),
('F8 Tributo', 2023, 2500000.00, 'Vermelho', 2, 'Superesportivo italiano com motor V8 twin-turbo'),
('911 Turbo S', 2023, 1800000.00, 'Preto', 3, 'Ícone esportivo alemão com performance excepcional'),
('Huracán EVO', 2022, 2200000.00, 'Verde', 4, 'Superesportivo V10 com design agressivo'),
('AMG GT', 2023, 1500000.00, 'Prata', 5, 'Gran turismo esportivo com luxo alemão'),
('M8 Competition', 2022, 1400000.00, 'Azul', 6, 'Cupê esportivo de alta performance'),
('R8 V10 Plus', 2023, 1900000.00, 'Cinza', 7, 'Superesportivo com tecnologia quattro'),
('Continental GT', 2023, 2000000.00, 'Branco', 8, 'Grand tourer britânico com luxo incomparável'),
('Phantom', 2023, 3500000.00, 'Preto', 9, 'Sedan de luxo supremo com acabamento artesanal'),
('DB11', 2022, 1700000.00, 'Verde', 10, 'Gran turismo britânico elegante e potente');