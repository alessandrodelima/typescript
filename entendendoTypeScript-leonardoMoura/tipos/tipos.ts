// String 
let nome: string = 'João'
console.log(nome);
// nome = 28;

//numbers 
let idade:number = 27;
// idade = 'Ana'
idade = 27.5;

console.log(idade);

// boolean 
let  possuiHobbies: boolean = false;
//possuiHobbies = 1;
console.log(possuiHobbies);

// tipos explícitos 
let minhaIdade: number;
minhaIdade = 27;
console.log(typeof minhaIdade);
//minhaIdade = "idade é 27";
console.log(typeof minhaIdade);

// array 
let hobbies: any[]  = ["Cozinhar" , "Praticar Esportes"];
console.log(hobbies);
console.log(typeof hobbies);

hobbies = [100, 200, 300];
//hobbies = 100; não é uma array fere o principio que foi especificado acima, de que seria uma array
console.log(hobbies);

// Tuplas
// Em JavaScript, tupla é um array de tipos de uma quantidade pré-definida de tipos. 

let endereco : [string, number, number, string] = ["Av. Principal", 99, 123, ""];
console.log(endereco);

endereco = ["Rua Importante" , 1260, 10, "Bloco c"];
console.log(endereco);
