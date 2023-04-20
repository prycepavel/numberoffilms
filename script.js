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

/* 
  Вопросы пользователю, задаются два раза
  Ответы записываются в объект personalMovieDB
  Проверка ответа на пустую строку, null, и длинну не более 50 символов
  Возвращение пользователя к предыдущим вопросом, если что-то пошло не так
*/
for (let i = 0; i < 2; i++){
  
  const a = prompt('Один из последних просмотренных фильмов', ''),
        b = +prompt('На сколько оцените его?', '');
  
  if (a != null && b != null && a != '' && b != '' && a.length < 50) {
    personalMovieDB.movies[a] = b;
    console.log('Успешно!');
  } else {
    console.log('Ошибка');
    i--;
  }

}

// Проверка количества просмотренных фильмов
if (personalMovieDB.count < 10) {
  console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
  console.log('Вы классический зритель');
} else if (personalMovieDB.count >= 30) {
  console.log('Вы киноман');
} else {
  console.log('Произошла ошибка');
}

console.log(personalMovieDB);