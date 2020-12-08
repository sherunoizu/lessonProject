'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    rememberMyFilms: function () {
        for (let i = 0; i < 2; ++i) {
            const a = prompt('Один из последних просмотренных фильмов?',''),   
                  b = prompt('На сколько его оцените?');
        
            if (a != null && b != null && a != '' && b != '' && a.length < 50 && b.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('done');
            } else {
                i--;
                console.log('errorr');
            }
        }
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
            console.log('Вы классический зритель');
        } else if (personalMovieDB.count >= 30) {
            console.log('Вы киноман!');
        } else {
            console.log('Ошибка.');
        }
    },
    showMyDB: function() {
        if (!personalMovieDB.privat) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i <=2; i++) {
            // const a = prompt(`Ваш любимый жанр под номером ${i}`);
            // if (a != null && a != '' && a.length < 50) {
            //     personalMovieDB.genres[i-1] = a;
            //     console.log('done');
            // } else {
            //     i--;
            //     console.log('errorr');
            // } 
            let genres = prompt (`Введите ваши любимые жанры через запятую`).toLowerCase();
            if (genres === '' || genres == null) {
                console.log(`Вы ввели некорректные данные`);
                i--;
            } else {
                personalMovieDB.genres = genres.split(', ');
                personalMovieDB.genres.sort();
            }
        }
        personalMovieDB.genres.forEach((item,i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        }); 
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?','');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?','');
    
        }
    }
};


