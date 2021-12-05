let numberOdFilms;

function start() {
    numberOdFilms = prompt("Сколько фильмов вы уже посмотрели?", '');

    while (numberOdFilms === '' || numberOdFilms == null || isNaN(numberOdFilms)) {
        numberOdFilms = prompt("Сколько фильмов вы уже посмотрели?", '');
    }
}

start();

const personMovieDB ={
    count: +numberOdFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
            b = prompt('На сколько оцените его?', '');

        if (a != null && b != null && a !== '' && b !== '' && a.length < 50) {
            personMovieDB.movies[a] = b;
            console.log('done')
        } else {
            console.log('error');
            i--;
        }
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personMovieDB.count >= 10 && personMovieDB.count <= 30) {
        console.log("Вы классический зритель");
    } else if (personMovieDB.count > 30) {
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }
}

detectPersonalLevel();

function showMyDB(hidden) {
    if(!hidden) {
        console.log(personMovieDB);
    }
}

showMyDB(personMovieDB.privat);

function writeYourGenres() {
    for(let i = 1; i <= 3; i++) {
        personMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}

writeYourGenres();

