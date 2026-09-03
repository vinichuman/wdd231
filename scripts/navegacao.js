const botaoMenu = document.getElementById("menu");
const listaNav = document.querySelector("nav ul");

botaoMenu.addEventListener("click", () => {
    listaNav.classList.toggle("aberto");
    botaoMenu.classList.toggle("aberto");
});