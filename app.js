const apiKey = 'a1719fd5' 

const searchInput = document.getElementById('search');
const moviesContainer = document.getElementById('movies');

// Função para buscar filmes
async function buscarFilmes(query) {
  if (!query) {
    moviesContainer.innerHTML = '<p>Digite algo para buscar filmes.</p>';
    return;
  }

  const url = `https://www.omdbapi.com/?apikey=${apiKey}&s=${encodeURIComponent(query)}`;
  try {
    const res = await fetch(url);
    const data = await res.json();

    if (data.Response === "True") {
      mostrarFilmes(data.Search);
    } else {
      moviesContainer.innerHTML = `<p>Nenhum filme encontrado para "${query}".</p>`;
    }
  } catch (error) {
    moviesContainer.innerHTML = '<p>Erro ao buscar filmes. Tente novamente.</p>';
    console.error(error);
  }
}

// Função para exibir filmes no DOM
function mostrarFilmes(movies) {
  moviesContainer.innerHTML = movies
    .map(movie => `
      <div class="movie" title="${movie.Title}">
        <img src="${movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/250x370?text=Sem+Imagem"}" alt="${movie.Title}" />
        <h2>${movie.Title}</h2>
        <p>Ano: ${movie.Year}</p>
      </div>
    `)
    .join('');
}

// Evento para buscar conforme digita, com debounce simples
let debounceTimeout;
searchInput.addEventListener('input', () => {
  clearTimeout(debounceTimeout);
  debounceTimeout = setTimeout(() => {
    buscarFilmes(searchInput.value.trim());
  }, 500);
});


