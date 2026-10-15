// Comportamentos comuns a todas as páginas: menu hambúrguer e rodapé

export function iniciarMenu() {
    const menuBtn = document.querySelector('#menu-btn');
    const menuLinks = document.querySelector('.menu-links');

    menuBtn.addEventListener('click', () => {
        const aberto = menuLinks.classList.toggle('open');
        menuBtn.setAttribute('aria-expanded', aberto);
        menuBtn.setAttribute('aria-label', aberto ? 'Fechar menu' : 'Abrir menu');
    });
}

export function iniciarRodape() {
    document.querySelector('#ano').textContent = new Date().getFullYear();
}
