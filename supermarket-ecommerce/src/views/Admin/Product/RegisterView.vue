<template>
  <div class="container">
    <form action="/produto/save" method="post">
      <div class="card form-create">
        <div class="card-body">
          <h1 class="card-title">Cadastro de produtos</h1>
          <hr />
          <div class="div-grid">
            <div class="boxes">
              <label for="name" class="form-label">Image</label>
              <input
                type="file"
                name="image"
                class="form-control"
                id="imagem-produto"
                placeholder="Insira a imagem do produto"
              />
            </div>
            <div class="boxes">
              <label for="name" class="form-label">Nome</label>
              <input
                type="text"
                name="name"
                class="form-control"
                id="nome-produto"
                placeholder="Insira o nome do produto"
              />
            </div>
            <div class="boxes">
              <label for="price" class="form-label">Preço</label>
              <input
                type="text"
                name="price"
                class="form-control"
                id="preco-produto"
                placeholder="Insira o preço do produto"
              />
            </div>
            <div class="boxes">
              <label for="description" class="form-label">Descrição</label>
              <input
                class="form-control"
                type="text"
                name="description"
                id="descricao-produto"
                placeholder="Insira uma descrição sobre o produto"
              />
            </div>
            <div class="boxes">
              <label for="quantity" class="form-label">Quantidade</label>
              <input
                type="number"
                name="quantity"
                class="form-control"
                id="quantidade-produto"
                placeholder="Insira a quantidade"
              />
            </div>
            <div class="boxes">
              <label for="reference" class="form-label">Referência</label>
              <input
                type="number"
                name="reference"
                class="form-control"
                id="referencia-produto"
                placeholder="Insira a referência do produto"
              />
            </div>
            <div class="boxes">
              <label for="exampleFormControlTextarea1" class="form-label"
                >Categoria</label
              >
              <input
                name="category"
                type="text"
                class="form-control"
                id="categoria"
              />
            </div>
          </div>
          <button type="submit" class="btn btn-success" style="width: 10rem">
            Criar
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
//import AboutView from './AboutView.vue';
//export default {
//  components: { AboutView },};
</script>

<style>
</style>