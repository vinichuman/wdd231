import { iniciarMenu, iniciarRodape } from './modulos/layout.js';

iniciarMenu();
iniciarRodape();

const parametros = new URLSearchParams(window.location.search);
const resumo = document.querySelector('#resumo');

const campos = [
    { chave: 'nome', rotulo: 'Nome' },
    { chave: 'email', rotulo: 'E-mail' },
    { chave: 'telefone', rotulo: 'Telefone' },
    { chave: 'assunto', rotulo: 'Assunto' },
    { chave: 'categoria', rotulo: 'Categoria de interesse' },
    { chave: 'mensagem', rotulo: 'Mensagem' },
    { chave: 'data', rotulo: 'Enviado em' }
];

if (!parametros.has('nome')) {
    resumo.innerHTML = '<p>Nenhum formulário foi enviado. <a href="contato.html">Voltar para o contato</a>.</p>';
} else {
    const itens = campos.map(({ chave, rotulo }) => {
        const valor = parametros.get(chave) || 'Não informado';
        return `<dt>${rotulo}</dt><dd>${escapar(valor)}</dd>`;
    });
    resumo.innerHTML = `<dl>${itens.join('')}</dl>`;
}

// Evita que o texto digitado no formulário seja interpretado como HTML
function escapar(texto) {
    const div = document.createElement('div');
    div.textContent = texto;
    return div.innerHTML;
}
