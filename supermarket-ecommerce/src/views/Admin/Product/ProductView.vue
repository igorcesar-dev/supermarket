<template>
  <div class="container">
            <div class="form-create">
            <div class="card-body">
                <h1 class="card-title">Produtos</h1>
                <hr>
                <form id="pesquisa" action="/admin/produtos" method="get" class="d-flex" role="search">
                    <input class="form-control me-2" type="search" id="produto" name="produto"
                        placeholder="Pesquisar produtos" aria-label="Search">
                    <a href="/admin/produtos" class="btn btn-outline-dark" style="width: 5em;">Limpar</a>
                    <button class="btn btn-outline-success ms-2" style="width: 25em;" type="submit">Pesquisar</button>
                    <a class="btn btn-success ms-2" style="width:15em" href="/admin/produto/novo">Novo</a>
                </form>
            </div>
        </div>
        <div class="card form-create">
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Preço</th>
                        <th>Quantidade</th>
                        <th>Referência</th>
                        <th>Categoria</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                        <tr>
                            <td>
                                produto.name
                            </td>
                            <td>
                                R$produto.price
                            </td>
                            <td>
                                produto.quantity unidades
                            </td>
                            <td>
                                produto.reference
                            </td>
                            <td>
                                produto.category
                            </td>
                            <th>
                                <a class="btn btn-warning" href="/admin/produto/edit/<%= produto.id %>">Editar</a>
                                <form action="/admin/product/delete" method="post" style="display: inline;"
                                    onsubmit="confirmarDelecao(event, this)">
                                    <input type="hidden" name="id" value="<%= produto.id %>">
                                    <button class="btn btn-danger">Deletar</button>
                                </form>
                            </th>
                        </tr>
                        
                </tbody>
            </table>
        </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>