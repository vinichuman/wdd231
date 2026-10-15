import { iniciarMenu, iniciarRodape } from './modulos/layout.js';
import { buscarPerfumes } from './modulos/dados.js';
import { exibirPerfumes } from './modulos/cartoes.js';
import { abrirModal } from './modulos/modal.js';

iniciarMenu();
iniciarRodape();

const container = document.querySelector('#perfumes-container');

async function carregarDestaques() {
    const perfumes = await buscarPerfumes();

    if (!perfumes) {
        container.innerHTML = '<p>Lamentamos, ocorreu um erro ao carregar os destaques.</p>';
        return;
    }

    // Destaques: os 3 perfumes mais exclusivos (maior preço)
    const destaques = [...perfumes]
        .sort((a, b) => Number(b.preco) - Number(a.preco))
        .slice(0, 3);

    exibirPerfumes(destaques, container, abrirModal);
}

carregarDestaques();
