// Rodapé
document.getElementById("ano").textContent = new Date().getFullYear();
document.getElementById("modificacao").textContent = document.lastModified;

// Registo da data e hora atual no campo oculto
document.getElementById("data_hora").value = new Date().toLocaleString();

// Controlo dos Modais
const botoesAbrir = document.querySelectorAll(".btn-modal");
const botoesFechar = document.querySelectorAll(".fechar-modal");

botoesAbrir.forEach(botao => {
    botao.addEventListener("click", () => {
        const modalId = botao.getAttribute("data-modal");
        const modal = document.getElementById(modalId);
        modal.showModal();
    });
});

botoesFechar.forEach(botao => {
    botao.addEventListener("click", (evento) => {
        // Encontra o dialog pai do botão clicado e fecha-o
        const modal = evento.target.closest("dialog");
        modal.close();
    });
});