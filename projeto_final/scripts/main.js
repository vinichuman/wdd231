// 1. Funcionalidade do Menu Hambúrguer
const menuBtn = document.getElementById('menu-btn');
const menuLinks = document.querySelector('.menu-links');

menuBtn.addEventListener('click', () => {
    menuLinks.classList.toggle('open');
});

// 2. Atualizar o ano do rodapé dinamicamente
document.getElementById('ano').textContent = new Date().getFullYear();

// 3. Busca de Dados e Geração Dinâmica de Conteúdo
const urlDados = 'dados/perfumes.json';
const container = document.getElementById('perfumes-container');

async function carregarPerfumes() {
    try {
        // Uso da Fetch API e bloco try...catch
        const resposta = await fetch(urlDados);
        if (!resposta.ok) throw new Error('Erro ao carregar os dados dos perfumes.');
        
        const perfumes = await resposta.json();
        exibirPerfumes(perfumes);
    } catch (erro) {
        console.error(erro);
        container.innerHTML = '<p>Lamentamos, ocorreu um erro ao carregar o catálogo.</p>';
    }
}

function exibirPerfumes(lista) {
    container.innerHTML = '';
    
    // Método de array (forEach) e Template Literals
    lista.forEach(perfume => {
        const cartao = document.createElement('div');
        cartao.className = 'cartao-perfume';
        
        cartao.innerHTML = `
            <img src="${perfume.imagem}" alt="Imagem do perfume ${perfume.nome}" loading="lazy">
            <h4>${perfume.nome}</h4>
            <p><strong>Marca:</strong> ${perfume.marca}</p>
            <p><strong>Categoria:</strong> ${perfume.categoria}</p>
            <p class="preco">R$ ${perfume.preco}</p>
        `;
        
        container.appendChild(cartao);
    });
}

// Inicia o carregamento quando o ficheiro é lido
carregarPerfumes();