'use strict';

window.addEventListener("load", function () {

    // menu for mobile
    var menuButton = document.querySelector('.menu__icon');
    var menu = document.querySelector('.header__nav');
    var close = document.querySelector('.close');

    menuButton.addEventListener('click', function () {
        menu.style.display = 'block';
        menuButton.style.display = 'none';
        close.style.display = 'block';
    });

    close.addEventListener('click', function () {
        menu.style.display = 'none';
        menuButton.style.display = 'block';
        close.style.display = 'none';
    });

    //change h1 for mobile

    var h1 = document.querySelector('h1');

    var mql = window.matchMedia("(max-width:768px)");
    mql.addListener(function (m) {
        if (m.matches) {
            h1.innerText = 'TL';
        } else {
            h1.innerText = 'Template';
        }
    });

    // Search for tabler

    var search = document.querySelector('.submit');

    var inputSearch = document.querySelector('.text');

    search.addEventListener('click', function () {

        inputSearch.style.display = 'block';
        inputSearch.style.zIndex = '10';
    });
});