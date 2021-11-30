const numberOdFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');

const personMovieDB ={
    count: numberOdFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?',''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = prompt('На сколько оцените его?','');

personMovieDB.movies[a] = b;
personMovieDB.movies[c] = d;

console.log(personMovieDB);