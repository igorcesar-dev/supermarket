import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

//Users
import Register from "../views/Admin/RegisterView.vue";
import Login from "../views/Admin/LoginView.vue";
import Users from "../views/Admin/UsersView.vue";
import Edit from "../views/Admin/EditView.vue";

//Products
import Product from "../views/Admin/Product/RegisterView.vue";
import Products from "../views/Admin/Product/ProductView.vue";

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
  //Menu
  {
    path: "/",
    name: "Home",
    component: HomeView,
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

  //Users
  {
    path: "/admin/users",
    name: "Users",
    component: Users,
    beforeEnter: AdminAuth,
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
    path: "/admin/users/edit/:id",
    name: "UserEdit",
    component: Edit,
    beforeEnter: AdminAuth,
  },
  //Products
  {
    path: "/admin/products",
    name: "Products",
    component: Products,
    beforeEnter: AdminAuth,
  },
  {
    path: "/admin/product-register",
    name: "Product",
    component: Product,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
