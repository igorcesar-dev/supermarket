const toggleBtn = document.querySelector(".btn-hide");
const closeBtn = document.querySelector(".close-btn");
const sideCart = document.querySelector(".box-carrinho");

// Adiciona ou remove a classe "show-sidebar" abrindo e fechando a barra lateral;
toggleBtn.addEventListener("click", function () {
  sideCart.classList.toggle("show-cart");
});

// Remove a classe "show-sidebar", fechando a barra lateral;
closeBtn.addEventListener("click", function () {
  sideCart.classList.remove("show-cart");
});