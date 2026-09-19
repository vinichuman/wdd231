// Atualiza o rodapé
document.getElementById("ano").textContent = new Date().getFullYear();
document.getElementById("modificacao").textContent = document.lastModified;

// ========== 1. CLIMA (API OpenWeatherMap) ==========
const apiKey = '6aa1db5fecd6a70a12d97c0afb8bd6be'; 
const lat = '-23.5505'; // Coordenadas de São Paulo
const lon = '-46.6333';

const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&lang=pt_br&appid=${apiKey}`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&lang=pt_br&appid=${apiKey}`;

async function getClima() {
    try {
        // Busca Clima Atual
        const resAtual = await fetch(weatherUrl);
        const dadosAtual = await resAtual.json();
        
        const divAtual = document.getElementById('current-weather');
        divAtual.innerHTML = `<p><strong>${dadosAtual.main.temp.toFixed(1)}°C</strong> - ${dadosAtual.weather[0].description}</p>`;

        // Busca Previsão de 3 Dias
        const resPrevisao = await fetch(forecastUrl);
        const dadosPrevisao = await resPrevisao.json();
        
        const divPrevisao = document.getElementById('forecast');
        divPrevisao.innerHTML = '';
        
        for (let i = 1; i <= 3; i++) {
            let infoDia = dadosPrevisao.list[i * 8 - 1]; 
            let dataNome = new Date(infoDia.dt * 1000).toLocaleDateString('pt-BR', {weekday: 'long'});
            let temp = infoDia.main.temp.toFixed(1);
            divPrevisao.innerHTML += `<p>${dataNome}: <strong>${temp}°C</strong></p>`;
        }
    } catch (erro) {
        console.error("Erro ao buscar clima: ", erro);
    }
}
getClima();

// ========== 2. EMPRESAS EM DESTAQUE ==========
async function getDestaques() {
    try {
        const resposta = await fetch("dados/membros.json");
        const membros = await resposta.json();
        
        // Filtra só nível 2 (Prata) ou 3 (Ouro)
        const elegiveis = membros.filter(empresa => empresa.nivel === 2 || empresa.nivel === 3);
        
        // Embaralha as empresas de forma aleatória
        elegiveis.sort(() => 0.5 - Math.random());
        
        // Pega as 3 primeiras depois de embaralhar
        const sorteados = elegiveis.slice(0, 3);
        
        const container = document.getElementById('spotlight-container');
        
        sorteados.forEach(empresa => {
            let card = document.createElement('div');
            card.className = 'card-destaque';
            card.innerHTML = `
                <h4>${empresa.nome}</h4>
                <img src="imagens/${empresa.imagem}" alt="${empresa.nome}" width="100">
                <p><strong>Nível:</strong> ${empresa.nivel === 3 ? 'Ouro' : 'Prata'}</p>
                <p>${empresa.telefone}</p>
                <p>${empresa.endereco}</p>
                <a href="${empresa.site}" target="_blank">Visitar Site</a>
    `;
            container.appendChild(card);
        });
    } catch (erro) {
        console.error("Erro ao buscar empresas: ", erro);
    }
}
getDestaques();