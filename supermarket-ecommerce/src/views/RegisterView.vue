<template>
  <div class="container">
    <form action="">
      <div class="columns is-multiline is-mobile">
        <div class="column is-5">
          <div class="field">
            <label class="label">Nome</label>
            <div class="control">
              <input class="input" type="text" placeholder="Enter your name" />
            </div>
          </div>
        </div>

        <div class="column is-6">
          <div class="field">
            <label class="label">Descrição</label>
            <div class="control has-icons-left has-icons-right">
              <input
                class="input is-success"
                type="text"
                placeholder="Enter your username"
              />
              <span class="icon is-small is-left">
                <i class="fas fa-user"></i>
              </span>
            </div>
          </div>
        </div>

        <div class="column is-one-quarter">
          <div class="field ">
            <label class="label">Preço</label>
            <div class="control has-icons-left has-icons-right">
              <input
                class="input is-danger"
                type="email"
                placeholder="Enter your email"
              />
              <span class="icon is-small is-left">
                <i class="fas fa-envelope"></i>
              </span>
            </div>
          </div>
        </div>
        
        <div class="column is-one-quarter">
          <div class="field ">
            <label class="label">Quantidade</label>
            <div class="control has-icons-left has-icons-right">
              <input
                class="input is-danger"
                type="password"
                placeholder="Enter your password"
              />
              <span class="icon is-small is-left">
                <i class="fas fa-key"></i>
              </span>
            </div>
          </div>
        </div>
      
        <div class="column is-one-quarter">
          <div class="field">
            <label class="label">Referência</label>
            <div class="control has-icons-left has-icons-right">
              <input
                class="input is-danger"
                type="password"
                placeholder="Enter your password"
              />
              <span class="icon is-small is-left">
                <i class="fas fa-key"></i>
              </span>
            </div>
          </div>
        </div>
        
        <div class="column is-one-quarter">
          <div class="field">
            <label class="label"> Categoria </label>
            <div class="control">
              <div class="select">
                <select>
                  <option>Java</option>
                  <option>C++</option>
                  <option>Python</option>
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