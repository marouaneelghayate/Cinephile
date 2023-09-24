const fetchGenres = async () => {
  const url = 'https://api.themoviedb.org/3/genre/movie/list?language=en';
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

  return data.genres;
};

export default fetchGenres