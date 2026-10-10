// Importar os dados do arquivo .mjs
import { locais } from '../data/locais.mjs';

// Rodapé
document.getElementById('ano').textContent = new Date().getFullYear();
document.getElementById('modificacao').textContent = document.lastModified;

// 1. Lógica do LocalStorage para Visitas
const mensagemVisita = document.getElementById('mensagem-visita');
const ultimaVisitaMs = window.localStorage.getItem('ultimaVisita_camara');
const dataAtualMs = Date.now(); // Armazenar a data atual em milissegundos

if (!ultimaVisitaMs) {
    // Primeiro acesso
    mensagemVisita.textContent = "Boas-vindas! Entre em contato conosco caso tenha alguma dúvida.";
} else {
    // Calcular a diferença de dias
    const diferencaTempo = dataAtualMs - parseInt(ultimaVisitaMs);
    const diasPassados = Math.floor(diferencaTempo / (1000 * 60 * 60 * 24));

    if (diasPassados < 1) {
        mensagemVisita.textContent = "Já voltou? Que legal!";
    } else {
        const palavraDia = diasPassados === 1 ? "dia" : "dias";
        mensagemVisita.textContent = `Seu último acesso foi há ${diasPassados} ${palavraDia}.`;
    }
}
// Atualizar a data da última visita para hoje
window.localStorage.setItem('ultimaVisita_camara', dataAtualMs.toString());


// 2. Geração dos 8 lugares
const grelhaLocais = document.getElementById('galeria-locais');

locais.forEach((local, index) => {
    const cartao = document.createElement('article');
    cartao.className = `cartao-local item-${index + 1}`;
    
    cartao.innerHTML = `
        <h2>${local.nome}</h2>
        <figure>
            <img src="${local.imagem}" alt="${local.nome}" width="300" height="200" loading="${index === 0 ? 'eager' : 'lazy'}">
        </figure>
        <address>${local.endereco}</address>
        <p>${local.descricao}</p>
        <button type="button">Saiba Mais</button>
    `;
    
    grelhaLocais.appendChild(cartao);
});

    // Botão "Saiba Mais" abre o endereço no Google Maps
    const botao = cartao.querySelector('button');
    botao.addEventListener('click', () => {
        const busca = encodeURIComponent(`${local.nome}, ${local.endereco}`);
        window.open(`https://www.google.com/maps/search/?api=1&query=${busca}`, '_blank', 'noopener');
    });