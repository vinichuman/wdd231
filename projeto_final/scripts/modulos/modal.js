// Diálogo modal com os detalhes de um perfume (elemento <dialog>)

import { formatarPreco } from './cartoes.js';

const modal = document.querySelector('#modal-perfume');
const botaoFechar = document.querySelector('#fechar-modal');

export function abrirModal(perfume) {
    modal.querySelector('#modal-nome').textContent = perfume.nome;

    modal.querySelector('#modal-figura').innerHTML = `
        <img src="${perfume.imagem}" alt="Frasco do perfume ${perfume.nome}, de ${perfume.marca}" width="400" height="400">
    `;

    modal.querySelector('#modal-marca').textContent = perfume.marca;
    modal.querySelector('#modal-categoria').textContent = perfume.categoria;
    modal.querySelector('#modal-preco').textContent = formatarPreco(perfume.preco);
    modal.querySelector('#modal-topo').textContent = perfume.notas.topo;
    modal.querySelector('#modal-coracao').textContent = perfume.notas.coracao;
    modal.querySelector('#modal-fundo').textContent = perfume.notas.fundo;

    modal.showModal();
}

botaoFechar.addEventListener('click', () => modal.close());

// Fecha ao clicar fora da caixa do modal
modal.addEventListener('click', (evento) => {
    if (evento.target === modal) {
        modal.close();
    }
});
