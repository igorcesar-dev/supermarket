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
            <router-link :to="{name: 'UserEdit', params: {id: user.id}}">
              <button class="button is-success mr-2">
                Editar
              </button></router-link
            >
            <button class="button is-danger" @click="showModalUser(user.id)">
              Excluir
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <div :class="{ modal: true, 'is-active': showModal }">
      <div class="modal-background"></div>
      <div class="modal-content">
        <div class="card">
          <header class="card-header">
            <p class="card-header-title">
              Você quer realmente deletar este usuário?
            </p>
          </header>
          <div class="card-footer p-2">
            <button
              class="card-footer-item button is-success mr-2"
              @click="deleteUser()"
            >
              Sim
            </button>
            <button
              class="card-footer-item button is-danger"
              @click="hideModal()"
            >
              Não
            </button>
          </div>
        </div>
      </div>
    </div>
    <button
      class="modal-close is-large"
      aria-label="close"
      @click="hideModal()"
    ></button>
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
      showModal: false,
      deleteUserId: -1,
    };
  },
  methods: {
    hideModal() {
      this.showModal = false;
    },
    showModalUser(id) {
      this.deleteUserId = id;
      this.showModal = true;
    },
    deleteUser() {
      var req = {
        headers: {
          Authotization: "Bearer " + localStorage.getItem("token"),
        },
      };
      axios
        .delete("http://localhost:8686/user/" + this.deleteUserId, req)
        .then((res) => {
          console.log(res);
          this.showModal = false;
          this.users = this.users.filter((u) => u.id != this.deleteUserId);
        })
        .catch((err) => {
          console.log(err);
          this.showModal = false;
        });
    },
  },
};
</script>

<style>
</style>