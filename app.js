function pesquisar() {
    // Obtém a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");
  
    let campoPesquisa = document.getElementById("campo-pesquisa").value

    // se campoPesquisa for uma string vazia
    if (!campoPesquisa) {
      section.innerHTML = "<p>Nada foi encontrado</p>"
      return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let title = "";
  
    // Itera sobre os dados da pesquisa e cria HTML para cada resultado
    for (let dado of dados) {
        title = dado.title.toLowerCase()
        // se tittle includes campoPesquisa
        if (title.includes(campoPesquisa)) {
        // Concatena o HTML de um item de resultado à string de resultados
        resultados += `
          <div class="item-resultado">
            <h2>
              <a href="#" target="_blank">${dado.title}</a>
            </h2>
            <p class="descricao-meta">${dado.description}</p>
            <a href="${dado.link}" target="_blank">Ouça aqui</a>
          </div>
        `;
        }
      }

      if (!resultados) {
        resultados = "<p>Nada foi encontrado</p>"
      }

        // Atribui o HTML gerado à seção de resultados
        section.innerHTML = resultados;
    }