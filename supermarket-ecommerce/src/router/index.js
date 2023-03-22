import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Register from "../views/RegisterView.vue";
import Login from "../views/LoginView.vue";
import Users from "../views/UsersView.vue";
import axios from "axios";

function AdminAuth(to, from, next) {
  if (localStorage.getItem("token") != undefined) {
    var req = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    };

    axios
      .post("http://localhost:8686/validate", {}, req)
      .then((res) => {
        console.log(res);
        next();
      })
      .catch((err) => {
        console.log(err.response);
        next("/login");
      });
  } else {
    next("/login");
  }
}

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/admin/users",
    name: "Users",
    component: Users,
    beforeEnter: AdminAuth,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
