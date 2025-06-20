export default {
    precoComDesconto (produto) {
            return produto.desconto ? produto.preco - (produto.desconto / 100) * produto.preco : produto.preco
    }
}
