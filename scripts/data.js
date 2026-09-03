const anoAtual = new Date().getFullYear();
document.getElementById("anoAtual").textContent = anoAtual;

document.getElementById("ultimaModificacao").textContent = `Última modificação: ${document.lastModified}`;