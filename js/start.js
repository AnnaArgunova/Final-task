window.addEventListener("load", function () {

    // menu for mobile
    const menuButton = document.querySelector('.menu__icon');
    const menu = document.querySelector('.header__nav');
    const close = document.querySelector('.close');

    menuButton.addEventListener('click', function () {
        menu.style.display = 'block';
        menuButton.style.display = 'none';
        close.style.display = 'block';

    })

    close.addEventListener('click', function () {
        menu.style.display = 'none';
        menuButton.style.display = 'block';
        close.style.display = 'none';

    })

    //change h1 for mobile

    const h1 = document.querySelector('h1');

    const mql = window.matchMedia("(max-width:768px)");
    mql.addListener(function (m) {
        if (m.matches) {
            h1.innerText = 'TL';

        } else {
            h1.innerText = 'Template';
        }
    });

    // Search for tabler

    const search = document.querySelector('.submit');

    const inputSearch = document.querySelector('.text');

    search.addEventListener('click', function () {

        inputSearch.style.display = 'block';
        inputSearch.style.zIndex = '10';

    })

    //best offer

    const catalog = window.catalog;
    const bestOffer = window.bestOffer;
    const total = document.querySelector('.offer__total');
    const discount = document.querySelector('.offer__discount');
    let itemContent = 0;
    let rightItem = 0;
    let leftItem = 0;

    const arrowUp = document.querySelectorAll(`.arrow-up`);
    const arrowDown = document.querySelectorAll(`.arrow-down`);

   function renderBestOffer(parent, content) {

        const imgBestOffer = document.querySelector(`.${parent}>.offer__photo`);
        const title = document.querySelector(`.${parent}>.offer__title`);
        const price = document.querySelector(`.${parent}>.offer__price`);
        catalog.forEach(element => {
            if (content == element.id) {
                imgBestOffer.src = element.thumbnail;
                title.innerText = element.title;
                price.innerText = element.price + ' £';

            }
        })

    }

    renderBestOffer('left', bestOffer.left[itemContent]);
    renderBestOffer('right', bestOffer.right[itemContent]);

    function renderTotal(leftItem, rightItem) {
        let idLeft = bestOffer.left[leftItem];
        let idRight = bestOffer.right[rightItem];
        let priceLeft = 0;
        let priceRight = 0;
        catalog.forEach(element => {
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

    arrowUp.forEach(i => {
        i.addEventListener('click', function (event) {
            let parent = bestOffer[event.path[1].className];

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
        })

    })

    arrowDown.forEach(i => {

        i.addEventListener('click', function (event) {
            let parent = bestOffer[event.path[1].className];

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
        })

    })


    
})
