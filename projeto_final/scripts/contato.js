// 1. Menu Hambúrguer
const menuBtn = document.getElementById('menu-btn');
const menuLinks = document.querySelector('.menu-links');

menuBtn.addEventListener('click', () => {
    menuLinks.classList.toggle('open');
});

document.getElementById('ano').textContent = new Date().getFullYear();

// 2. Lógica do Formulário e LocalStorage
const form = document.getElementById('form-contato');
const mensagemSucesso = document.getElementById('mensagem-sucesso');
const contadorSpan = document.getElementById('contador');

// Le o LocalStorage quando a página carrega. Se não houver nada, começa em 0.
let mensagensEnviadas = Number(window.localStorage.getItem('numMensagens')) || 0;
contadorSpan.textContent = mensagensEnviadas;

form.addEventListener('submit', function(evento) {
    // Evita que a página recarregue ao enviar o formulário
    evento.preventDefault();

    // Mostra a mensagem de sucesso
    mensagemSucesso.style.display = 'block';
    form.reset();

    // Atualiza o contador e guarda no LocalStorage
    mensagensEnviadas++;
    window.localStorage.setItem('numMensagens', mensagensEnviadas);
    
    contadorSpan.textContent = mensagensEnviadas;
});