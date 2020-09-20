'use strict';


document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ],
        hidePromo: function () {
            const promo = document.querySelector('.promo__adv');
            const promoImage = promo.querySelectorAll('img');

            promoImage.forEach(item => {
                item.remove();
            });

        },
        changeGenre: function () {
            const genre = document.querySelector('.promo__genre');

            genre.textContent = 'драма';
        },
        changeImage: function () {
            const newImg = document.querySelector('.promo__bg');

            newImg.style.backgroundImage = 'url(./img/bg.jpg)';
        },
        changeFilms: function () {
            const films = document.querySelector('.promo__interactive-list');

            this.movies.sort();
            films.innerHTML = '';

            this.movies.forEach((item, i) => {
                films.innerHTML += `
                    <li class="promo__interactive-item">${i + 1} ${this.movies[i]}
                        <div class="delete"></div>
                    </li>`;
            });

        },
        pushFilms: function () {

            const inputValue = document.querySelector('.adding__input').value;
            if (inputValue.length > 21) {
                let strNew = inputValue.slice(0, 21);
                movieDB.movies.push(strNew + '...');
            } else {
                movieDB.movies.push(inputValue);
            }
        }
    };

    const btn = document.querySelector('.add button');
    btn.addEventListener('click', function (e) {
        e.preventDefault();
        movieDB.pushFilms();
        movieDB.changeFilms();


    });

    const delFilm = document.querySelectorAll('.delete');
    //console.log(delFilm);
    delFilm.forEach((btn, i) => {
        console.log(btn.parentElement);
        btn.addEventListener('click', () => {
            btn.parentElement.remove();
            movieDB.movies.splice(i, 1);
            console.log(btn);
            movieDB.pushFilms();
            movieDB.changeFilms();
        });
    });

    movieDB.hidePromo();
    movieDB.changeGenre();
    movieDB.changeImage();
    movieDB.changeFilms();
    //movieDB.pushFilms();






});