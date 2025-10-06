const resultsDiv = document.getElementById("results");

async function personagens() {
  resultsDiv.innerHTML = "<p>Carregando...</p>";

  try {
    const response = await fetch('../Dados/data.json');
    const data = await response.json();
    console.log(data);

    if (data.error) {
      resultsDiv.innerHTML = "<p>Erro ao buscar personagens</p>";
      return;
    }
    resultsDiv.innerHTML = '';

    data.forEach(persona => {
      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
        <img src="${persona.imagem}" alt="${persona.nome}">
        <h2>${persona.nome}</h2>
        <p class="descricao"><strong>Descrição:</strong> ${persona.descricao}</p>
        <p class="aparencia"><strong>Aparência:</strong> ${persona.aparencia}</p>
      `;

      // Faz todo o card clicável
      card.addEventListener('click', () => {
        window.open(persona.wiki, '_blank');
      });

      resultsDiv.appendChild(card);
    });
  } catch (error) {
    resultsDiv.innerHTML = "<p>Erro ao buscar personagens</p>";
  }
}

personagens();
