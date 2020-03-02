'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


function items(item) {
    var main = document.querySelector('main');
    removePage(main);
    var itemWrapper = document.createElement('div');
    itemWrapper.className = 'item__wrapper';
    main.appendChild(itemWrapper);
    //image
    var img = document.createElement('div');
    img.className = 'item__img';
    itemWrapper.appendChild(img);

    var imgBig = document.createElement('img');
    imgBig.className = 'item__img_big';
    imgBig.src = item.thumbnail;
    img.appendChild(imgBig);

    var imgSmall = document.createElement('div');
    imgSmall.className = 'item__img_small';
    img.appendChild(imgSmall);
    for (var i = 0; i < item.preview.length; i++) {
        var imgItem = document.createElement('img');
        imgSmall.appendChild(imgItem);
        imgItem.src = item.preview[i];
    }

    //text
    var text = document.createElement('div');
    text.className = 'item__text';
    itemWrapper.appendChild(text);

    var title = document.createElement('h3');
    title.className = 'item__header';
    text.appendChild(title);
    title.innerText = item.title;

    var description = document.createElement('p');
    description.className = 'item__description';
    text.appendChild(description);
    description.innerText = item.description;

    var price = document.createElement('div');
    price.className = 'item__price';
    text.appendChild(price);
    price.innerText = item.price;

    var sizes = document.createElement('div');
    sizes.className = 'item__sizes';
    text.appendChild(sizes);
    var sizesText = document.createElement('p');
    sizesText.innerHTML = 'Sizes: ';
    sizes.appendChild(sizesText);

    for (var _i = 0; _i < item.sizes.length; _i++) {
        var sizesButton = document.createElement('button');
        sizesButton.innerText = item.sizes[_i];
        sizes.appendChild(sizesButton);
    }

    var colors = document.createElement('div');
    colors.className = 'item__colors';
    text.appendChild(colors);

    var colorText = document.createElement('p');
    colorText.innerText = 'Color: ';
    colors.appendChild(colorText);

    for (var _i2 = 0; _i2 < item.colors.length; _i2++) {
        var colorButton = document.createElement('button');
        colorButton.innerText = item.colors[_i2];
        colors.appendChild(colorButton);
    }

    var add = document.createElement('button');
    add.className = 'button';
    add.innerText = 'Add Bag';
    text.appendChild(add);
}

exports.default = items;