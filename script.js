'use strict';

//  Вопросы пользователю
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

//  Добавление ответов пользователя
const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

// Дополниетльные вопросы пользователю
const a = prompt('Один из последних просмотренных фильмов', ''),
      b = +prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних просмотренных фильмов', ''),
      d = +prompt('На сколько оцените его?', '');
      

//  Добавление ответов на дополнительные вопросы в объект personalMovieDB
//  Чтобы корректно добавить свойство в объект нужно использовать квадратные скобки []
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);