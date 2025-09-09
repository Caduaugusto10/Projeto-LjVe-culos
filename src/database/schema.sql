CREATE DATABASE loja_veiculos;
\c loja_veiculos

CREATE TABLE marcas (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL UNIQUE
);

CREATE TABLE veiculos (
    id SERIAL PRIMARY KEY,
    modelo VARCHAR(100) NOT NULL,
    ano INTEGER NOT NULL,
    preco DECIMAL(12,2) NOT NULL,
    cor VARCHAR(50),
    marca_id INTEGER NOT NULL REFERENCES marcas(id) ON DELETE CASCADE,
    descricao TEXT
);

INSERT INTO marcas (nome) VALUES
('Chevrolet'),
('Volkswagen'),
('Fiat'),
('Ford'),
('Toyota'),
('Honda'),
('Hyundai'),
('Renault'),
('Nissan'),
('Jeep');

INSERT INTO veiculos (modelo, ano, preco, cor, marca_id, descricao) VALUES
('Onix LT', 2022, 65000.00, 'Prata', 1, 'Hatch compacto econômico'),
('Prisma LTZ', 2020, 58000.00, 'Preto', 1, 'Sedan confortável e espaçoso'),
('Gol G6', 2019, 42000.00, 'Branco', 2, 'Popular, ótimo para cidade'),
('Polo Highline', 2021, 78000.00, 'Azul', 2, 'Tecnologia e desempenho'),
('Argo Drive', 2022, 69000.00, 'Vermelho', 3, 'Design moderno e eficiente'),
('Uno Mille', 2015, 25000.00, 'Prata', 3, 'Econômico e fácil de manter'),
('Ka SE', 2021, 54000.00, 'Cinza', 4, 'Compacto e ágil'),
('EcoSport Freestyle', 2018, 67000.00, 'Preto', 4, 'SUV urbano'),
('Corolla GLi', 2020, 95000.00, 'Branco', 5, 'Sedan médio, referência em conforto'),
('Yaris XS', 2021, 83000.00, 'Prata', 5, 'Compacto premium'),
('Civic EXL', 2019, 99000.00, 'Preto', 6, 'Sedan esportivo e confortável'),
('Fit LX', 2018, 65000.00, 'Azul', 6, 'Versatilidade e espaço interno'),
('HB20 Comfort', 2022, 72000.00, 'Vermelho', 7, 'Hatch moderno e econômico'),
('Creta Prestige', 2021, 115000.00, 'Branco', 7, 'SUV completo'),
('Sandero Stepway', 2020, 59000.00, 'Cinza', 8, 'Aventura urbana'),
('Logan Expression', 2019, 48000.00, 'Prata', 8, 'Sedan acessível'),
('Kicks SV', 2021, 105000.00, 'Preto', 9, 'SUV moderno e seguro'),
('Versa Unique', 2020, 67000.00, 'Branco', 9, 'Sedan espaçoso'),
('Renegade Longitude', 2022, 129000.00, 'Vermelho', 10, 'SUV robusto e tecnológico'),
('Compass Limited', 2021, 165000.00, 'Cinza', 10, 'SUV premium');