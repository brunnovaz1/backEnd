const produtos = [];



function listarTodos(req, res) {
    res.json(produtos);
}

function exibir(req, res){
    const { produtoEncontrado } = req;
    res.json(produtoEncontrado)
}

function buscarPeloId(req, res, next) {
    const { produtoId } = req.params;
    const produtoEncontrado = produtos.find( item => item.id == produtoId)   //pecorre array comparando valor
    if(produtoEncontrado) {
        req.produtoEncontrado = produtoEncontrado;
        next();
    } else {
        res.status(404).json({msg: "Produto não encontrado!"});
    }
}




function criar(req, res) {
    const { nome, preco } = req.body;   //{chave1: valor1, chave2: valor2...}
    const produtoNovo = { id: produtos.length+1, nome, preco } //garante um novo id
    produtos.push(produtoNovo);  //insere no array
    res.status(201).json(produtoNovo)  //mensagem de confirmação
}


function atualizar(req, res) {
    const { nome, preco } = req.body;
    const { produtoEncontrado } = req;
    produtoEncontrado.nome = nome;
    produtoEncontrado.preco = preco;
    res.json(produtoEncontrado)
}


function remover(req, res) {
    const { produtoId } = req.params;
    const posicao = produtos.findIndex( item => item.id == produtoId)
    if(posicao >= 0) {
        produtos.splice(posicao, 1);
        res.status(204).end();
    }
}



module.exports = { listarTodos, exibir, buscarPeloId, criar, atualizar, remover }