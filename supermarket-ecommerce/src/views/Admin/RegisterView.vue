<template>
  <div>
    <h2>Login de usuário</h2>
    <hr />

    <div class="columns is-centered">
      <div class="column is-half">
        <div v-if="error != undefined">
            <div class="notification is-danger">
                <p>{{error}}</p>
            </div>
        </div>
        <p>Nome</p>
        <input
          type="text"
          placeholder="Nome do usuário"
          class="input"
          v-model="name"
        />
        <p>E-mail</p>
        <input
          type="email"
          placeholder="email@gmail.com"
          class="input"
          v-model="email"
        />
        <p>Senha</p>
        <input
          type="password"
          placeholder="********"
          class="input"
          v-model="password"
        />
        <button @click="registerLogin" class="button is-success">
          Acessar
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      name: "",
      password: "",
      email: "",
      error: undefined
    };
  },
  methods: {
    registerLogin() {
      axios.post("http://localhost:8686/user", {
        email: this.email,
        password: this.password,
        name: this.name,
      }).then(res => {
        console.log(res);
        this.$router.push({name: 'Home'})
      }).catch(err => {
        var msgErro = err.response.data.err;
        this.error = msgErro;
      })
    },
  },
};
</script>

<style>
</style>