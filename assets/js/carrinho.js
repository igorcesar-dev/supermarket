const toggleBtn = document.querySelector(".btn-hide");
const buttonCart = document.querySelector(".button-cart")
const closeBtn = document.querySelector(".close-btn");
const sideCart = document.querySelector(".box-carrinho");

// Adiciona ou remove a classe "show-sidebar" abrindo e fechando a barra lateral;
toggleBtn.addEventListener("click", function () {
  sideCart.classList.toggle("show-cart");
});

buttonCart.addEventListener("click", function () {
  sideCart.classList.toggle("show-cart");
})

// Remove a classe "show-sidebar", fechando a barra lateral;
closeBtn.addEventListener("click", function () {
  sideCart.classList.remove("show-cart");
});

/* MODAL */

/* Constantes para captura do html */
const btn = document.querySelector(".btn-fimcompra");
const modal = document.querySelector(".compraFinalizada-fundo");
const btnClose = document.querySelector(".close-btn");


/* Abre o modal */
btn.addEventListener("click", function () {
  modal.classList.add("open-compraFinalizada");
})


/* Fecha o modal */
btnClose.addEventListener("click", function () {
  modal.classList.remove("open-compraFinalizada");
})
