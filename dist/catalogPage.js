'use strict';

window.addEventListener("load", function () {
      //import items from './item.js';
      //catalog
      var catalog = window.catalog,
          section = document.querySelector('.catalog');

      function removePage(item) {
            while (item.firstChild) {
                  item.removeChild(item.firstChild);
            }
      }

      function renderItems(item) {
            var wrapper = document.createElement('div');
            wrapper.className = 'catalog__items';
            section.appendChild(wrapper);
            var itemLink = document.createElement('a');
            //itemLink.href = './item.html';
            itemLink.className = 'link__wrapper';

            wrapper.appendChild(itemLink);
            var itemImg = document.createElement('img');
            itemImg.className = 'new-arrivals__photo';
            itemImg.style.width = '240px';
            itemImg.style.height = '340px';
            itemLink.appendChild(itemImg);
            var itemTitel = document.createElement('h4');
            itemTitel.className = 'new-arrivals__title';
            wrapper.appendChild(itemTitel);
            var itemPrice = document.createElement('p');
            itemPrice.className = 'new-arrivals__price';
            wrapper.appendChild(itemPrice);

            itemImg.src = item.thumbnail;
            itemTitel.innerText = item.title;
            itemPrice.innerText = item.price + ' £';
            //ITEM
            itemLink.addEventListener('click', function () {

                  var main = document.querySelector('main');
                  removePage(main);
                  var itemWrapper = document.createElement('div');
                  itemWrapper.className = 'item__wrapper';
                  main.appendChild(itemWrapper);
                  //image
                  var img = document.createElement('div');
                  img.className = 'item__img';
                  itemWrapper.appendChild(img);

                  var imgBig = document.createElement('div');
                  imgBig.className = 'item__img_big';
                  imgBig.style.backgroundImage = 'url(' + item.thumbnail + ')';

                  img.appendChild(imgBig);

                  var imgSmall = document.createElement('div');
                  imgSmall.className = 'item__img_small';
                  img.appendChild(imgSmall);
                  for (var i = 0; i < item.preview.length; i++) {
                        var imgItem = document.createElement('div');
                        imgItem.style.backgroundImage = 'url(' + item.preview[i] + ')';
                        imgSmall.appendChild(imgItem);
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
                  price.innerText = '£' + item.price;

                  var sizes = document.createElement('div');
                  sizes.className = 'item__sizes';
                  text.appendChild(sizes);
                  var sizesText = document.createElement('p');
                  sizesText.innerHTML = 'Size: ';
                  sizes.appendChild(sizesText);

                  for (var _i = 0; _i < item.sizes.length; _i++) {
                        var sizesButton = document.createElement('button');
                        sizesButton.innerText = item.sizes[_i];
                        sizesButton.className = 'item__button';
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
                        colorButton.className = 'item__button';
                        colorButton.innerText = item.colors[_i2];
                        colors.appendChild(colorButton);
                  }

                  var buttonWrapper = document.createElement('div');
                  buttonWrapper.className = 'item__button_wrapper';
                  text.appendChild(buttonWrapper);

                  var add = document.createElement('button');
                  add.className = 'button';
                  add.innerText = 'Add Bag';
                  buttonWrapper.appendChild(add);
            });
      }

      for (var i = 0; i < 9; i++) {
            renderItems(catalog[i]);
      }
});