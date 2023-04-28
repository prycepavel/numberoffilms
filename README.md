# Консольное приложение по учёту просмотренных фильмов

## Задание №1

1. Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2. Создать объект personalMovieDB и в него поместить такие свойства:
    * count - сюда передается ответ на первый вопрос
    * movies - в это свойство поместить пустой объект
    * actors - тоже поместить пустой объект
    * genres - сюда поместить пустой массив
    * privat - в это свойство поместить boolean(логическое) значение false

3. Задайте пользователю по два раза вопросы:
    * 'Один из последних просмотренных фильмов?'
    * 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате:
```javascript
    movies: {
        'logan': '8.1'
    }
```

Проверить, чтобы все работало без ошибок в консоли.

## Код первого выполненного задания
```javascript
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
```
## Задание №2
1. Автоматизировать вопросы пользователю про фильмы при помощи цикла

2. Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3. При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4. Потренироваться и переписать цикл еще двумя способами

## Код второго выполненного задания

```javascript
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
```
## Задание №3

1. Первую часть задания повторить по уроку

2. Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции false - выводит в консоль главный объект программы

3. Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос "Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных genres

P.S. Функции вызывать не обязательно

```javascript
let numberOfFilms;

function start() {
  numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

  while (numberOfFilms == '' || numberOfFilms == null || numberOfFilms == isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
  }
}

start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

function remeberMyFilms() {
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
}

remeberMyFilms();

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
    console.log('Вы классический зритель');
  } else if (personalMovieDB.count >= 30) {
    console.log('Вы киноман');
  } else {
    console.log('Произошла ошибка');
  }
}

detectPersonalLevel();

function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
  for (let i = 1; i <= 3; i++){
    personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`, '');
  }
}

writeYourGenres();
```