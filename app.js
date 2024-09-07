function pesquisar() {
    // Obtém a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");
  
    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
  
    // Itera sobre os dados da pesquisa e cria HTML para cada resultado
    for (let dado of dados) {
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
  
    // Atribui o HTML gerado à seção de resultados
    section.innerHTML = resultados;
  }