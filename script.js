
// Crie um objeto que receba ao menos três propriedades sobre você.

const eu = {
    nome: 'Mateus Augusto',
    idade: 22,
    curiosidade: 'Amo jogar futebol'
}

// Adicione uma nova propriedade sem alterar seu objeto inicial.

eu.estadoCivil = 'Solteiro';
console.log(eu)

// Remova uma propriedade desse objeto.

delete eu.curiosidade;
console.log(eu);

//Mostre no console todas as propriedades desse objeto.

Object.values(eu)
console.log(eu);

// Crie um array  chamado "cadastro" contendo ao menos 5 objetos. 

const cadastro = [{},{},{},{},{}]

//Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos. 

cadastro[0].nome = 'Mateus'
cadastro[0].idade = 22
cadastro[0].telefone = '92345-2345'
cadastro[0].amigos = []

cadastro[1].nome = 'Nathalia'
cadastro[1].idade = 22
cadastro[1].telefone = '92345-2345'
cadastro[1].amigos = []

cadastro[2].nome = 'Douglas'
cadastro[2].idade = 27
cadastro[2].telefone = '92345-2345'
cadastro[2].amigos = []

cadastro[3].nome = 'Gabriela'
cadastro[3].idade = 26
cadastro[3].telefone = '92345-2345'
cadastro[3].amigos = []

cadastro[4].nome = 'Jhonatan'
cadastro[4].idade = 26
cadastro[4].telefone = '92345-2345'
cadastro[4].amigos = []


//Na propriedade amigos, adicione ao menos 4 itens.

cadastro[0].amigos = ['jhonatan', 'Gabriela', 'Nathalia', 'Douglas' ]

cadastro[1].amigos = ['jhonatan', 'Gabriela', 'Mateus', 'Douglas' ]

cadastro[2].amigos = ['jhonatan', 'Gabriela', 'Mateus', 'Nathalia' ]

cadastro[3].amigos = ['jhonatan', 'Douglas', 'Mateus', 'Nathalia' ]

cadastro[4].amigos = ['Gabriela', 'Douglas', 'Mateus', 'Nathalia' ]

console.log(cadastro)



// Mostre no console o nome de um amigo de cada lista.

console.log(cadastro[0].amigos[1])
console.log(cadastro[1].amigos[2])
console.log(cadastro[2].amigos[3])
console.log(cadastro[3].amigos[0])
console.log(cadastro[4].amigos[1])
