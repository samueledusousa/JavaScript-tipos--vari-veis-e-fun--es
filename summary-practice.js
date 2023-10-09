let telefone = 12341234;
console.log(" O telefone é " + String(telefone)); 
//  Isto é uma conversão do número 12341234 para uma string "12341234" e assim podemos fazer a concatenação entre as strings.

//Outra opção para transformar um valor em String é usar o toString():
let telefone2 = 1234512345;
console.log = ("O telefone 2 é " + telefone2.toString());
// o .toString() é uma outra forma para fazer essa conversão, que é mais parecida com outras linguagens de programação.

let usuarioConectado = false;
console.log(String(usuarioConectado)); // >> uma versão da booleana para string, nesse caso será uma string "false".

usuarioConectado = true;
console.log(String(usuarioConectado)); // >> uma string "true".

//Calcular area do retângulo
let largura = "10";
let altura = "5";
console.log(Number(largura) * Number(altura)); // Teremos uma conversão de Strings para números, possibilitando a realização da multiplicação.

let usuarioConectado2 = false;
console.log(Number(usuarioConectado)); // representa a conversão booleana par número, sendo que false (falso) retorna o número 0.
usuarioConectado2 = true;
console.log(Number(usuarioConectado)); // agora é a conversão de true (verdadeiro) para o número 1.


// Ao declararmos let, ao contrário de const, podemos apenas declarar a variável, sem atribuir nenhum valor. Além disso, o valor inicial pode ser modificado depois.

let minhaLet;
console.log(minhaLet); //undefined

// atribuindo um valor com TIPO DE DADO STRING
minhaLet = "Eu sou um texto"
console.log(minhaLet); // "Eu sou um texto"

// reatribuindo, desta vez com dado do TIPO NUMBER
minhaLet = 100;
console.log(minhaLet); //100




