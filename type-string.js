const texto1 = "Hello Word!";
const texto2 = 'Olá mundo!';
// const senha = "senhaSuperSegura13499";
const StringDeNumeros = "0134099"; 

const citacao = "Meu nome é ";
const meuNome = "bradenburg";

// concatenação (+)

console.log(citacao + meuNome)

//Para padronizar uma comparação entre strings.

//const cidade = "belo horizonte";
//const input = "Belo Horizonte";

//console.log(cidade === input); // false

const cidade = "belo horizonte";
const input = "Belo Horizonte";

const inputMinusculo = input.toLowerCase();

console.log(cidade === inputMinusculo); // true

// Propriedade length pode ser utilizada para sabermos quantos caracteres uma string contém.

const senha = "minhasenha1234";
console.log(senha.length) // 14 caracteres

// Template string OU template literal.

