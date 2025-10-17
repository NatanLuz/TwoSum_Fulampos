# TwoSum Fulampos – Desafio de Detetive 🕵️‍♂️

Investigue se um suspeito poderia ter roubado exatos 150 fulampos usando apenas duas notas da carteira dele.

## 📝 Descrição

- Você recebe um array de inteiros ordenado (as notas na carteira de um suspeito).
- Retorne `true` se houver duas notas cuja soma seja exatamente `150`; caso contrário, retorne `false`.
- A carteira pode conter mais de duas notas.

## ✅ Casos de teste

```js
const carteira1 = [10, 20, 50, 70, 80, 100, 150]; // true
const carteira2 = [5, 25, 50, 100, 200]; // true
const carteira3 = [1, 2, 3, 147, 148, 149]; // true
const carteira4 = [75]; // false
const carteira5 = [150]; // false
const carteira6 = []; // false
```

## 🚀 Solução (Método de Dois Ponteiros)

Como o array está ordenado, podemos usar dois ponteiros para encontrar a combinação de forma linear.

```js
function podeTerRoubado(carteira) {
  let esquerda = 0;
  let direita = carteira.length - 1;

  while (esquerda < direita) {
    const soma = carteira[esquerda] + carteira[direita];
    if (soma === 150) return true; // encontrada a combinação
    else if (soma < 150) esquerda++; // soma pequena → aumenta a menor nota
    else direita--; // soma grande → diminui a maior nota
  }

  return false; // nenhuma combinação encontrada
}

// Exemplos rápidos
console.log(podeTerRoubado([10, 20, 50, 70, 80, 100, 150])); // true
console.log(podeTerRoubado([75])); // false
```

### Por que funciona?

- Dois ponteiros: um no início (menor nota) e outro no fim (maior nota).
- Somamos as notas dos ponteiros:
  - Se a soma for `150` → sucesso.
  - Se for menor que `150` → mova o ponteiro da esquerda para a direita (aumentar soma).
  - Se for maior que `150` → mova o ponteiro da direita para a esquerda (diminuir soma).
- Paramos quando os ponteiros se cruzarem.

### Complexidade

- Tempo: `O(n)` — cada ponteiro anda no máximo uma vez.
- Espaço: `O(1)` — uso constante de memória.

> Observação: se o array não estiver ordenado, você pode ordená-lo primeiro (`O(n log n)`) e então aplicar o método de dois ponteiros, ou usar um `Set`/hash (`O(n)` tempo, `O(n)` espaço).

## ▶️ Como rodar

Pré-requisito: ter o Node.js instalado (https://nodejs.org).

1. Abra o terminal PowerShell na pasta do projeto.

```powershell
cd $env:USERPROFILE\Desktop\TwoSum_Fulampos
```

2. Execute o arquivo principal:

```powershell
node .\desafio.js
```

O terminal exibirá `true` ou `false` para cada caso de teste definido no arquivo `desafio.js`.

## 📁 Estrutura do projeto

- `desafio.js` — Implementação da função `podeTerRoubado` e (opcionalmente) os testes com `console.log`.
- `README.md` — Este guia.

## 🧪 Dica de testes

Coloque os casos de teste no final do `desafio.js` para ver os resultados imediatamente ao rodar com Node. Ex.:

```js
const carteira1 = [10, 20, 50, 70, 80, 100, 150];
console.log(podeTerRoubado(carteira1)); // true
```

## 💡 Alternativas

- For duplo (ingênuo): `O(n^2)` — testa todas as combinações de pares; simples, mas ineficiente para arrays grandes.
- Hash/Set: `O(n)` — percorre uma vez guardando o complemento necessário (`150 - x`), porém usa espaço extra.

---

Feito com foco em clareza e eficiência. Boa investigação! 🔍
