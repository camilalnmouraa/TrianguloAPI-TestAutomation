// Função para classificar o tipo de triângulo
function classificarTriangulo(lado1, lado2, lado3) {
    if (lado1 === lado2 && lado2 === lado3) {
        return 'Equilátero';
    } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
        return 'Isósceles';
    } else if (lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1) {
        return 'Escaleno';
    } else {
        return 'Não foi possível classificar';
    }
}

// Função para validar se os lados fornecidos formam um triângulo válido
function validarTriangulo(lado1, lado2, lado3) {
    if (isNaN(lado1) || isNaN(lado2) || isNaN(lado3)) {
        throw new Error('Os lados do triângulo devem ser números');
    }

    if (lado1 <= 0 || lado2 <= 0 || lado3 <= 0) {
        throw new Error('Os lados do triângulo devem ser maiores que zero');
    }

    if (lado1 + lado2 <= lado3 || lado1 + lado3 <= lado2 || lado2 + lado3 <= lado1) {
        throw new Error('Os lados fornecidos não formam um triângulo válido');
    }
}

module.exports = {
    classificarTriangulo,
    validarTriangulo
};