
const personMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: true,
    start: function () {
        personMovieDB.count = prompt("Сколько фильмов вы уже посмотрели?", '');

        while (personMovieDB.count === '' || personMovieDB.count == null || isNaN(personMovieDB.count)) {
            personMovieDB.count = prompt("Сколько фильмов вы уже посмотрели?", '');
        }
    },
    rememberMyFilms: function () {
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
    },
    detectPersonalLevel: function () {
        if (personMovieDB.count < 10) {
            console.log("Просмотрено довольно мало фильмов");
        } else if (personMovieDB.count >= 10 && personMovieDB.count <= 30) {
            console.log("Вы классический зритель");
        } else if (personMovieDB.count > 30) {
            console.log("Вы киноман");
        } else {
            console.log("Произошла ошибка");
        }
    },
    toggleVisibleMyDB: function () {
        personMovieDB.privat = !personMovieDB.privat;
    },
    showMyDB: function (hidden) {
        if(!hidden) {
            console.log(personMovieDB);
        }
    },
    writeYourGenres: function () {
        for (let i = 1; i < 2; i++) {
            let genres = prompt(`Ваш любимый жанр через запятую`);

            if (genres === '' || genres == null) {
                console.log("Ви ввели неверние дание")
                i--;
            } else {
                personMovieDB.genres = genres.split(',')
                personMovieDB.genres.sort();
            }

        }
        personMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`)
        })
    }

}

personMovieDB.start();
personMovieDB.rememberMyFilms();
personMovieDB.detectPersonalLevel();
personMovieDB.toggleVisibleMyDB();
personMovieDB.showMyDB(personMovieDB.privat);
personMovieDB.writeYourGenres();

// const obj = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     },
//     makeTest: function () {
//         console.log('Test')
//     }
// };
//
// obj.makeTest()
//
// const {border, bg} = obj.colors;
// console.log(border);
//
// /*console.log(obj['colors']['bg'])*/
//
// for (let key in obj) {
//     if(typeof (obj[key]) === 'object'){
//         for (let i in obj[key]) {
//             console.log(`${i} : ${obj[key][i]}`)
//         }
//     } else {
//         console.log(`${key} : ${obj[key]}`)
//     }
// }
// console.log(Object.keys(obj).length);
//
// const arr = [1, 25, 34, 4, 57]
//
// arr.sort()
// console.log(arr)*/
// arr.forEach(function (item, i, arr) {
//     console.log(`${i}: ${item} array ${arr}`)
// })
//
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }
//
// for (let value of arr) {
//     console.log(value)
//
//
//
// const str = prompt('','')
// const produts = str.split(',')
// produts.sort()
// console.log(produts.join('; '))
//
//
// function copy(mainObj) {
//     let objCopy = {};
//     let key;
//     for (key in mainObj){
//         objCopy[key] = mainObj[key];
//     }
//     return objCopy
// }
//
// const numbers = {
//     a: 2,
//     b: 5,
//     c: {
//         x: 7,
//         y: 4
//     }
// };
//
// const newNumbers = copy(numbers)
// newNumbers.a = 10;
// newNumbers.c.x = 10;
// console.log(newNumbers)
// console.log(numbers)
//
// const add = {
//     d: 17,
//     e: 20
// }
//
// console.log(Object.assign({}, add));
//
// const oldArray = ['a', 'b', 'c']
// const newArray = oldArray.slice();
//
// newArray[0] = 'x';
// console.log(oldArray)
// console.log(newArray)
//
// const video = ['youtube', 'vimeo', 'rutube'],
//       blogs = ['wordpress', 'livejournal', 'blogger'],
//       internet = [...video, ...blogs, 'facebook'];
//
// console.log(internet)
//
// function log (a, b, c) {
//     console.log(a)
//     console.log(b)
//     console.log(c)
// }
//
// const num = [2, 5, 7]
//
// log(...num)
//
// const array = ['a', 'b']
// const newArr = [...array]
//
// console.log(newArr)
//
// let str = "some"
// let strObj = new String(str)
//
// console.log(typeof(str))
// console.log(typeof(strObj))
//
// const soldier = {
//     health: 400,
//     armor: 100,
//     sayHello: function () {
//         console.log("Hello")
//     }
// }
// const john = Object.create(soldier)
// const john = {
//     health: 100
// }
//
// john._proto_ = soldier;
// Object.setPrototypeOf(john, soldier);
// console.log(john)
//
// john.sayHello();

