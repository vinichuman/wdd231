// Busca dos dados dos perfumes (arquivo JSON local)

const URL_DADOS = 'dados/perfumes.json';

export async function buscarPerfumes() {
    try {
        const resposta = await fetch(URL_DADOS);
        if (!resposta.ok) {
            throw new Error(`Erro ${resposta.status} ao carregar os perfumes.`);
        }
        return await resposta.json();
    } catch (erro) {
        console.error(erro);
        return null;
    }
}
