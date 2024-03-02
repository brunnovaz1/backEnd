const Contato = require('./modelo')


const contatos = []

function addContato(nome,email, tel) {
    const novoContato = new Contato(nome, email, tel)
    contatos.push(novoContato)
}

function listarContato() {
    return contatos
}

function buscarContato() {
    const nome = readline.question("Entre com o nome do contato: ")
}
