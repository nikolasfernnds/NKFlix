// modules/render.js
export function renderMovie(movie) {
    const div = document.createElement('div');
    div.classList.add('movie');
    div.innerHTML = `
      <h2>${movie.Title}</h2>
      <img src="${movie.Poster}" alt="${movie.Title}" />
      <p>${movie.Plot}</p>
    `;
    return div;
  }
    