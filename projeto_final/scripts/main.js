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

// Elementos do Modal
const modal = document.getElementById('modal-perfume');
const fecharModal = document.getElementById('fechar-modal');

function exibirPerfumes(lista) {
    container.innerHTML = '';
    
    lista.forEach(perfume => {
        const cartao = document.createElement('div');
        cartao.className = 'cartao-perfume';
        
        cartao.innerHTML = `
            <img src="${perfume.imagem}" alt="${perfume.nome}" loading="lazy">
            <h4>${perfume.nome}</h4>
            <button class="btn-detalhes">Ver Detalhes</button>
        `;
        
        const btn = cartao.querySelector('.btn-detalhes');
        btn.addEventListener('click', () => {
            document.getElementById('modal-nome').textContent = perfume.nome;
            document.getElementById('modal-img').src = perfume.imagem;
            document.getElementById('modal-marca').textContent = perfume.marca;
            document.getElementById('modal-categoria').textContent = perfume.categoria;
            
            // Notas olfativas
            document.getElementById('modal-topo').textContent = perfume.notas.topo;
            document.getElementById('modal-coracao').textContent = perfume.notas.coracao;
            document.getElementById('modal-fundo').textContent = perfume.notas.fundo;
            
            modal.style.display = 'block';
        });
        
        container.appendChild(cartao);
    });
}

// Fechar o modal clicando no X
fecharModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Fechar o modal clicando fora da caixa
window.addEventListener('click', (evento) => {
    if (evento.target === modal) {
        modal.style.display = 'none';
    }
});

// Inicia o carregamento quando o ficheiro é lido
carregarPerfumes();