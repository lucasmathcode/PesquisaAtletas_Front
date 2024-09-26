

function pesquisar() {
  const campoPesquisa = document
    .getElementById("campo-pesquisa")
    .value.toLowerCase();
  const section = document.getElementById("resultados-pesquisa");

  if (!campoPesquisa) {
    section.innerHTML = "<p>Por favor, digite algo para pesquisar.</p>";
    return;
  }

  let resultados = "";
  for (let dado of dados) {
    if (
      dado.titulo.toLowerCase().includes(campoPesquisa) ||
      dado.descricao.toLowerCase().includes(campoPesquisa) ||
      dado.tags.includes(campoPesquisa)
    ) {
      resultados += `
                <div class="item-resultado">
                    <h2><a href="${dado.link}" target="_blank">${dado.titulo}</a></h2>
                    <p>${dado.descricao}</p>
                </div>
            `;
    }
  }

  section.innerHTML = resultados || "<p>Nada foi encontrado.</p>";
}
