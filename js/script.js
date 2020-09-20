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

            this.sortMovies();
            films.innerHTML = '';

            this.movies.forEach((item, i) => {
                films.innerHTML += `
                    <li class="promo__interactive-item">${i + 1} ${this.movies[i]}
                        <div class="delete"></div>
                    </li>`;
            });

            document.querySelectorAll('.delete').forEach((btn, i) => {
                btn.addEventListener('click', () => {
                    btn.parentElement.remove();
                    this.movies.splice(i, 1);
                    this.changeFilms();
                    this.sortMovies();
                });
            });

        },
        pushFilms: function () {

            const input = document.querySelector('.adding__input');
            const checkBox = document.querySelector('[type="checkbox"]');

            if (checkBox.checked) {
                console.log(`Добовляем любимый фильм ${input.value}`);
            }

            checkBox.checked = false;
             
            if (input.value.length > 21) {
                let strNew = input.value.slice(0, 21);
                this.movies.push(strNew + '...');
            } else {
                if (input.value !== '') {
                    this.movies.push(input.value);
                }
            }
            input.value = '';
        },
        sortMovies: function () {
            this.movies.sort();
        }
    };

    const btn = document.querySelector('.add button');
    btn.addEventListener('click', function (e) {
        e.preventDefault();
        movieDB.pushFilms();
        movieDB.changeFilms();
    });

    movieDB.hidePromo();
    movieDB.changeGenre();
    movieDB.changeImage();
    movieDB.changeFilms();


});