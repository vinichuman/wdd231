import { iniciarMenu, iniciarRodape } from './modulos/layout.js';
import { buscarPerfumes } from './modulos/dados.js';
import { exibirPerfumes } from './modulos/cartoes.js';
import { abrirModal } from './modulos/modal.js';

iniciarMenu();
iniciarRodape();

const container = document.querySelector('#perfumes-container');
const filtro = document.querySelector('#filtro-categoria');
const total = document.querySelector('#total-perfumes');
const CHAVE_FILTRO = 'essencia-filtro-categoria';

let perfumes = [];

function aplicarFiltro() {
    const categoria = filtro.value;
    const lista = categoria === 'todos'
        ? perfumes
        : perfumes.filter((perfume) => perfume.categoria === categoria);

    exibirPerfumes(lista, container, abrirModal);
    total.textContent = `${lista.length} perfume(s) encontrado(s)`;
}

async function iniciarCatalogo() {
    perfumes = await buscarPerfumes();

    if (!perfumes) {
        container.innerHTML = '<p>Lamentamos, ocorreu um erro ao carregar o catálogo.</p>';
        return;
    }

    // Recupera a última categoria escolhida (localStorage)
    filtro.value = localStorage.getItem(CHAVE_FILTRO) || 'todos';
    aplicarFiltro();
}

filtro.addEventListener('change', () => {
    localStorage.setItem(CHAVE_FILTRO, filtro.value);
    aplicarFiltro();
});

iniciarCatalogo();
