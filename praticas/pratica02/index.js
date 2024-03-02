const readline =  require('readline-sync')

const controlador = require('./controlador')


function menu() {
    console.log("1. Adicionar");
    console.log("2. Listar");
    console.log("3. Buscar");
    console.log("4. Atualizar");
    console.log("5. Remover");
}
const opcao = readline.question("Escolha uma opcao do menu: ");

function escolherOpcao(opcao) {
    switch(opcao) {
        case '1': {
            const nome = readline.question("Entre com o nome do contato: ");
            const email = readline.question("Entre com o e-mail do contato: ");
            const tel = readline.question("Entre com o telefone do contato: ");
            controlador.addContato(nome, email, tel);
            break;
            }
        case '2':
            const contatos = controlador.listar();
            contatos.forEach( contato => {
                console.log(`Nome: ${contato.nome}, Email: ${contato.email}, Telefone: $`)
            });
            break;
        }

}