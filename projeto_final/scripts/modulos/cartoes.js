// Criação dos cartões de perfume

const formatoReal = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });

export function formatarPreco(valor) {
    return formatoReal.format(Number(valor));
}

export function exibirPerfumes(lista, container, aoClicar) {
    container.innerHTML = '';

    lista.forEach((perfume) => {
        const cartao = document.createElement('article');
        cartao.className = 'cartao-perfume';

        cartao.innerHTML = `
            <img src="${perfume.imagem}" alt="Frasco do perfume ${perfume.nome}" width="400" height="400" loading="lazy">
            <h3>${perfume.nome}</h3>
            <p><strong>Marca:</strong> ${perfume.marca}</p>
            <p><strong>Categoria:</strong> ${perfume.categoria}</p>
            <p class="preco">${formatarPreco(perfume.preco)}</p>
            <button type="button" class="btn-detalhes">Ver detalhes de ${perfume.nome}</button>
        `;

        cartao.querySelector('.btn-detalhes').addEventListener('click', () => aoClicar(perfume));
        container.appendChild(cartao);
    });
}
