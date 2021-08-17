/*Menu Hamburguesa para pantalla de celular*/

const hamburguesa = document.querySelector(".hamburguesa")
const menu = document.querySelector(".menu")

hamburguesa.addEventListener("click", () => {
    menu.classList.toggle("menu_visible");
})