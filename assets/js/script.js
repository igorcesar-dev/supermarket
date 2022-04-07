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
                    <p>R$<span class="valor-item">`+ (valor.preco * valor.quantidade).toFixed(2) + `</span></p>
                </div>
                <button class="btn-removerproduto">Excluir</button>
            </div>
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

// Procurando o produto;
function procurarProduto() {
    let input = document.getElementById('searchbar').value;
    input = input.toLowerCase();
    let item = document.getElementsByClassName('name-product');
    let product = document.getElementsByClassName('box-product');

    for (i = 0; i < item.length; i++) {
        if (!item[i].innerHTML.toLowerCase().includes(input)) {
            product[i].style.display = "none";
        } else {
            product[i].style.display = "inline-block"
        }
    }
}

function totalCarrinho() {
    let todosValores = document.querySelectorAll('.valor-item');
    let total = 0;

    for (let i = 0; i < todosValores.length; i++) {
        let valor = Number(todosValores[i].textContent);
        total = total + valor;
    }

       var containerTotal = document.getElementById('total-carrinho');
       containerTotal.innerHTML = "";
       itens.map((valor) => {
           if (valor.quantidade > 0) {
               containerTotal.innerHTML = `
               <div class="preco-carrinho">
                   <p class="valor-total">R$`+  total.toFixed(2)+ `</p>
               </div>
       `;
           }
       }) 
}