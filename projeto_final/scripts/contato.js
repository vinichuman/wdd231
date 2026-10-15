import { iniciarMenu, iniciarRodape } from './modulos/layout.js';

iniciarMenu();
iniciarRodape();

const form = document.querySelector('#form-contato');
const contador = document.querySelector('#contador');
const campoData = document.querySelector('#data-envio');
const CHAVE_ENVIOS = 'essencia-num-mensagens';

// Mostra quantas mensagens o visitante já enviou (localStorage)
const enviadas = Number(localStorage.getItem(CHAVE_ENVIOS)) || 0;
contador.textContent = enviadas;

// Ao enviar, registra a data e atualiza o contador antes de ir para a página de confirmação
form.addEventListener('submit', () => {
    campoData.value = new Date().toLocaleString('pt-BR');
    localStorage.setItem(CHAVE_ENVIOS, enviadas + 1);
});
