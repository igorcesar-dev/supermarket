<template>
  <div class="container">
    <h2>Cadastro de produto</h2>
    <hr>
      <div class="columns is-multiline is-mobile">
        <div class="column is-5">
          <div class="field">
            <label class="label">Nome</label>
            <div class="control">
              <input
                class="input"
                type="text"
                placeholder="Digite o nome do produto"
              />
            </div>
          </div>
        </div>

        <div class="column is-6">
          <div class="field">
            <label class="label">Descrição</label>
            <div class="control">
              <input
                class="input"
                type="text"
                placeholder="Digite uma descrição do produto"
              />
            </div>
          </div>
        </div>

        <div class="column is-one-quarter">
          <div class="field">
            <label class="label">Preço</label>
            <div class="control">
              <input
                class="input"
                type="number"
                placeholder="Digite o preço do produto"
              />
            </div>
          </div>
        </div>

        <div class="column is-one-quarter">
          <div class="field">
            <label class="label">Quantidade</label>
            <div class="control">
              <input
                class="input"
                type="nuber"
                placeholder="Digite a quantidade de entrada"
              />
            </div>
          </div>
        </div>

        <div class="column is-one-quarter">
          <div class="field">
            <label class="label">Referência</label>
            <div class="control">
              <input
                class="input"
                type="number"
                placeholder="Digite o código de referência do produto"
              />
            </div>
          </div>
        </div>

        <div class="column is-one-quarter">
          <div class="field">
            <label class="label"> Categoria </label>
            <div class="control">
              <div class="select">
                <select>
                  <option>Alimento</option>
                  <option>Limpeza</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div class="field is-grouped column">
          <div class="control">
            <button class="button is-success">Sign up</button>
          </div>
          <div class="control">
            <button class="button is-link is-light">Cancel</button>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
//import AboutView from './AboutView.vue';
//export default {
//  components: { AboutView },};
</script>

<style>
</style>