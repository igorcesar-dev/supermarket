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
        <button @click="login" class="button is-success">
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
      email: "",
      password: "",
      error: undefined
    };
  },
  methods: {
    login() {
      axios.post("http://localhost:8686/login", {
        email: this.email,
        password: this.password
      }).then(res => {
        console.log(res);
        localStorage.setItem('token', res.data.token);
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