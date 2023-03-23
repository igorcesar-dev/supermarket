<template>
  <div>
    <h1>painel adm</h1>
    <table class="table">
      <thead>
        <tr>
          <th>Nome</th>
          <th>Email</th>
          <th>Cargo</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td v-if="user.role == 0">Comum</td>
          <td v-if="user.role == 1">Admin</td>
          <td>
            <button class="button is-success">Editar</button>
            <button class="button is-danger">Excluir</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  created() {
    var req = {
      headers: {
        Authotization: "Bearer " + localStorage.getItem("token"),
      },
    };
    axios
      .get("http://localhost:8686/user", req)
      .then((res) => {
        this.users = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  data() {
    return {
      users: [],
    };
  },
};
</script>

<style>
</style>