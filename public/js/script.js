let count = 0;

const btns = document.querySelectorAll(".button-quantity");
const quantityInput = document.getElementById("quantity-input");


btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        const styles = e.currentTarget.classList;
        if (styles.contains("add")) {
            count++;
        }else if(styles.contains("remove")){
            count--;
            if(count < 0){
                count = 0;
            }
        }
        quantityInput.textContent = count;
    });
});


function addCart(){
    const btnCart = document.querySelector(".add-cart");
    const quantityCart = document.getElementById("quantity-cart");
    let countCart = 0;
    btnCart.addEventListener("click", function(e) {
        const stylesCart = e.currentTarget.classList;
        if (stylesCart.contains("add-cart")){
            countCart++;
        }
        quantityCart.textContent = countCart;
    });
}

addCart();