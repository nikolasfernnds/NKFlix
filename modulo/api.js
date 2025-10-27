// modules/api.js
const API_KEY = 'a1719fd5';

export async function fetchMovie(title) {
  try {
    const res = await fetch(`https://www.omdbapi.com/?t=${encodeURIComponent(title)}&apikey=${API_KEY}`);
    const data = await res.json();
    if (data.Response === 'False') return null;
    return data;
  } catch (err) {
    console.error('Erro ao buscar filme:', err);
    return null;
  }
}
