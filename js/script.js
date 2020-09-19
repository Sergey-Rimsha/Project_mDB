/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ],
    hidePromo: function() {
        const promo = document.querySelector('.promo__adv');
        const promoImage = promo.querySelectorAll('img');
        
        promoImage.forEach(item => {
            item.remove();
        });

    },
    changeGenre: function() {
        const genre = document.querySelector('.promo__genre');

        genre.textContent = 'драма';
    },
    changeImage: function() {
        const newImg = document.querySelector('.promo__bg');

        newImg.style.backgroundImage = 'url(./img/bg.jpg)';
    },
    changeFilms: function() {
        const films = document.querySelectorAll('.promo__interactive-item');

        this.movies.sort();

        films.forEach((item, i) => {
            item.textContent = `${i + 1} ${this.movies[i]}`;
        });

    },
    pushFilms: function() {
       
        const inputValue = document.querySelector('.adding__input').value;  
        console.log(inputValue);
        movieDB.movies.push(inputValue);
                
    }
};

const btn = document.querySelector('.add button');
btn.addEventListener('click', function(e) {
    e.preventDefault();
        
    movieDB.changeFilms();
    movieDB.pushFilms();
    
});

movieDB.hidePromo();
movieDB.changeGenre();
movieDB.changeImage();
movieDB.changeFilms();
//movieDB.pushFilms();
















