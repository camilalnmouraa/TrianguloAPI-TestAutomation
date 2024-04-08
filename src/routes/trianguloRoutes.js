const express = require("express");
const router = express.Router();
const Triangulo = require('../models/trianguloModel');
const { classificarTriangulo, validarTriangulo } = require('../controllers/trianguloController');

// Endpoint para criar um novo triângulo
router.post("/", async (req, res) => {
    const { lado1, lado2, lado3, title } = req.body;

    try {
        validarTriangulo(lado1, lado2, lado3);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }

    if (!title) {
        return res.status(400).json({ message: 'O título do triângulo é obrigatório' });
    }

    const tipo = classificarTriangulo(lado1, lado2, lado3);

    const triangulo = new Triangulo({
        title,
        lado1,
        lado2,
        lado3
    });

    try {
        await triangulo.save();
        // Incluindo o tipo de triângulo na resposta
        res.status(201).json({ triangulo, tipo });
    } catch (err) {
        res.status(400).send(err);
    }
});

// Endpoint para listar todos os triângulos
router.get("/", async (req, res) => {
    try {
        const triangulos = await Triangulo.find();
        // Para cada triângulo retornado, determinar o tipo e incluir na resposta
        const triangulosComTipo = triangulos.map(triangulo => ({
            ...triangulo.toObject(),
            tipo: classificarTriangulo(triangulo.lado1, triangulo.lado2, triangulo.lado3)
        }));
        res.json(triangulosComTipo);
    } catch (err) {
        res.status(500).send(err);
    }
});

// Endpoint para obter um triângulo por ID
router.get("/:id", async (req, res) => {
    try {
        const triangulo = await Triangulo.findById(req.params.id);
        if (!triangulo) {
            return res.status(404).send('Triângulo não encontrado');
        }
        
        // Determinar o tipo de triângulo
        const tipo = classificarTriangulo(triangulo.lado1, triangulo.lado2, triangulo.lado3);
        
        // Incluir o tipo de triângulo na resposta
        const trianguloComTipo = {
            ...triangulo.toObject(),
            tipo
        };

        res.json(trianguloComTipo);
    } catch (err) {
        res.status(500).send(err);
    }
});

// Endpoint para deletar um triângulo por ID
router.delete("/:id", async (req, res) => {
    try {
        const triangulo = await Triangulo.findByIdAndDelete(req.params.id);
        if (!triangulo) {
            return res.status(404).send('Triângulo não encontrado');
        }
        res.send('Triângulo excluído com sucesso');
    } catch (err) {
        res.status(500).send(err);
    }
});

// Endpoint para atualizar um triângulo por ID
router.put("/:id", async (req, res) => {
    try {
        const { title, lado1, lado2, lado3 } = req.body;

        const tipo = classificarTriangulo(lado1, lado2, lado3);

        const triangulo = await Triangulo.findByIdAndUpdate(req.params.id, {
            title,
            lado1,
            lado2,
            lado3
        }, {
            new: true
        });

        if (!triangulo) {
            return res.status(404).send('Triângulo não encontrado');
        }
        // Incluindo o tipo de triângulo na resposta
        res.json({ triangulo, tipo });
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = router;