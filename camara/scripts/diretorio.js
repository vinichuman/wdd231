// Coloca o ano e a data de modificação no rodapé
document.getElementById("ano").textContent = new Date().getFullYear();
document.getElementById("modificacao").textContent = document.lastModified;

const url = "dados/membros.json";
const divMembros = document.querySelector("#membros");

// Função para buscar os dados do JSON
async function getMembros() {
    const resposta = await fetch(url);
    const dados = await resposta.json();
    mostrarMembros(dados);
}

// Função para criar os elementos no HTML
function mostrarMembros(membros) {
    membros.forEach((membro) => {
        let card = document.createElement("section");
        let img = document.createElement("img");
        let nome = document.createElement("h3");
        let endereco = document.createElement("p");
        let telefone = document.createElement("p");
        let site = document.createElement("a");

        img.src = `images/${membro.imagem}`;
        img.alt = membro.nome;
        nome.textContent = membro.nome;
        endereco.textContent = membro.endereco;
        telefone.textContent = membro.telefone;
        site.href = membro.site;
        site.textContent = "Site da Empresa";
        site.target = "_blank";

        card.appendChild(img);
        card.appendChild(nome);
        card.appendChild(endereco);
        card.appendChild(telefone);
        card.appendChild(site);

        divMembros.appendChild(card);
    });
}

// Chama a função
getMembros();

// Configura os botões de Grade e Lista
const btnGrade = document.querySelector("#btn-grade");
const btnLista = document.querySelector("#btn-lista");

btnGrade.addEventListener("click", () => {
    divMembros.classList.add("view-grade");
    divMembros.classList.remove("view-lista");
});

btnLista.addEventListener("click", () => {
    divMembros.classList.add("view-lista");
    divMembros.classList.remove("view-grade");
});