<template>
  <div>
    <h2>Login de usuário</h2>
    <hr />

    <div class="columns is-centered">
      <div class="column is-half">
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
      }).catch(err => {
        var msgErro = err.response.data.err;
        console.log(msgErro);
      })
    },
  },
};
</script>

<style>
</style>