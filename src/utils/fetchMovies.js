const fetchMovies = async searchField => {
  const url = `https://api.themoviedb.org/3/search/movie?query=${searchField}&include_adult=false&language=en-US&page=1`;
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhODQ2ZjQwMDRmOGE2NThjMzA5MWRkZDllNzY4NWE3OCIsInN1YiI6IjY1MDI3ZTQ2ZWZlYTdhMDBjMzk3YmJlZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._Ynu5Mg1MKjNYMIDYMbG7k1Hlw6rkh1_o1HI0hH_4fU',
    },
  };
  const response = await fetch(url, options);
  const data = await response.json();
  data.results.sort((a, b) => b.popularity - a.popularity);
  return data.results;
};

export default fetchMovies;
