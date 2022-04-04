// Inicializando os produtos;
function iniciarLoja() {
    var containerProdutos = document.getElementById('produtos');
    itens.map((valor) => {
        containerProdutos.innerHTML += `

        <div class="box-product">
            <img class="img-product" src="`+ valor.imagem + `" alt="` + valor.nome + `">
            <h1 class="name-product">`+ valor.nome + `</h1>
            <p class="price-product">R$`+ valor.preco + `</p>
            <button key="`+ valor.id + `" class="btn-product">Adicionar ao carrinho</button>
        </div>
            `;
    })
}
iniciarLoja();



// Criando o carrinho de compras;
function atualizarCarrinho() {
    var containerCarrinho = document.getElementById('carrinho');
    containerCarrinho.innerHTML = "";
    itens.map((valor) => {
        if (valor.quantidade > 0) {
            containerCarrinho.innerHTML += `
            <div class="box-item">
                <div class="img-cart">
                    <img src="`+ valor.imagem + `" alt="` + valor.nome + `">
                </div>
                <div class="name-cart">
                    <p class="name-item">`+ valor.nome + `</p>
                </div>
                <div class="qtd-cart">
                    <p> `+ valor.quantidade + `</p>
                </div>
                <div class="preco-cart">
                    <p id="valor-item">`+ valor.preco + `</p>
                </div>
            </div>
            <hr>
        `;
        }
    })
}

var links = document.getElementsByClassName('btn-product');

for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function () {
        let key = this.getAttribute('key');
        itens[key].quantidade++;
        atualizarCarrinho();
        totalCarrinho();
    })
}

function totalCarrinho() {
    var totalCarrinho = document.getElementById('valor-item').textContent;

    console.log(totalCarrinho);
}

