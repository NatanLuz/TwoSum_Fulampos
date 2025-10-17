function podeTerRoubado(carteira) {
    let esquerda = 0;
    let direita = carteira.length - 1;

    while (esquerda < direita) {
        const soma = carteira[esquerda] + carteira[direita];
        if (soma === 150) return true;       // encontrada a combinação
        else if (soma < 150) esquerda++;     // soma pequena aumenta a menor nota
        else direita--;                       // soma grande diminui a maior nota
    }

    return false; // nenhuma combinação encontrada
}

// testando o que foi feito
const carteira1 = [10, 20, 50, 70, 80, 100, 150];
const carteira2 = [5, 25, 50, 100, 200];
const carteira3 = [1, 2, 3, 147, 148, 149];
const carteira4 = [75];
const carteira5 = [150];
const carteira6 = [];

console.log(podeTerRoubado(carteira1)); // true
console.log(podeTerRoubado(carteira2)); // true
console.log(podeTerRoubado(carteira3)); // true
console.log(podeTerRoubado(carteira4)); // false
console.log(podeTerRoubado(carteira5)); // false
console.log(podeTerRoubado(carteira6)); // false
