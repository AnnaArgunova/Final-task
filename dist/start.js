'use strict';

window.addEventListener("load", function () {

    //best offer

    var catalog = window.catalog;
    var bestOffer = window.bestOffer;
    var total = document.querySelector('.offer__total');
    var discount = document.querySelector('.offer__discount');
    var itemContent = 0;
    var rightItem = 0;
    var leftItem = 0;

    var arrowUp = document.querySelectorAll('.arrow-up');
    var arrowDown = document.querySelectorAll('.arrow-down');

    function renderBestOffer(parent, content) {

        var imgBestOffer = document.querySelector('.' + parent + '>.offer__photo');
        var title = document.querySelector('.' + parent + '>.offer__title');
        var price = document.querySelector('.' + parent + '>.offer__price');
        catalog.forEach(function (element) {
            if (content == element.id) {
                imgBestOffer.src = element.thumbnail;
                title.innerText = element.title;
                price.innerText = element.price + ' £';
            }
        });
    }

    renderBestOffer('left', bestOffer.left[itemContent]);
    renderBestOffer('right', bestOffer.right[itemContent]);

    function renderTotal(leftItem, rightItem) {
        var idLeft = bestOffer.left[leftItem];
        var idRight = bestOffer.right[rightItem];
        var priceLeft = 0;
        var priceRight = 0;
        catalog.forEach(function (element) {
            if (element.id === idLeft) {
                priceLeft = element.price;
            } else if (element.id == idRight) {
                priceRight = element.price;
            }
        });

        total.innerText = priceRight + priceLeft + ' £';
        discount.innerText = priceRight + priceLeft - 15 + ' £';
    }

    renderTotal(leftItem, rightItem);

    arrowUp.forEach(function (i) {
        i.addEventListener('click', function (event) {
            var parent = bestOffer[event.path[1].className];

            if (itemContent < parent.length - 1) {
                itemContent++;
                renderBestOffer(event.path[1].className + '', parent[itemContent]);
            } else {
                itemContent = 0;
                renderBestOffer(event.path[1].className + '', parent[itemContent]);
            }
            if (event.path[1].className == 'left') {
                leftItem = itemContent;
            } else {
                rightItem = itemContent;
            }
            renderTotal(leftItem, rightItem);
        });
    });

    arrowDown.forEach(function (i) {

        i.addEventListener('click', function (event) {
            var parent = bestOffer[event.path[1].className];

            if (itemContent > 0) {
                itemContent--;
                renderBestOffer(event.path[1].className + '', parent[itemContent]);
            } else {
                itemContent = parent.length - 1;
                renderBestOffer(event.path[1].className + '', parent[itemContent]);
            }
            if (event.path[1].className == 'left') {
                leftItem = itemContent;
            } else {
                rightItem = itemContent;
            }
            renderTotal(leftItem, rightItem);
        });
    });
});