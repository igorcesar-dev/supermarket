// MODAL DO BOTAO EXCLUIR
const btn = document.querySelector(".btn-excluir");
const modal = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-btn");


/* Abre o modal */
btn.addEventListener("click", function () {
    modal.classList.add("open-modal");
})


/* Fecha o modal */
closeBtn.addEventListener("click", function () {
    modal.classList.remove("open-modal");
})