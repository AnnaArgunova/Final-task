window.addEventListener("load", function () {
//import items from './item.js';
  //catalog
  const catalog = window.catalog,
    section = document.querySelector('.catalog');

  function removePage(item) {
    while (item.firstChild) {
      item.removeChild(item.firstChild)
    }

  }

  function renderItems(item) {
    const wrapper = document.createElement('div');
    wrapper.className = 'catalog__items';
    section.appendChild(wrapper);
    const itemLink = document.createElement('a');
//itemLink.href = './item.html';
    itemLink.className = 'link__wrapper';

    wrapper.appendChild(itemLink);
    const itemImg = document.createElement('img');
    itemImg.className = 'new-arrivals__photo';
    itemImg.style.width = '240px';
    itemImg.style.height = '340px';
    itemLink.appendChild(itemImg);
    const itemTitel = document.createElement('h4');
    itemTitel.className = 'new-arrivals__title';
    wrapper.appendChild(itemTitel);
    const itemPrice = document.createElement('p');
    itemPrice.className = 'new-arrivals__price';
    wrapper.appendChild(itemPrice);


    itemImg.src = item.thumbnail;
    itemTitel.innerText = item.title;
    itemPrice.innerText = item.price + ' £';
    //ITEM
    itemLink.addEventListener('click', function () {
     
     
      const main = document.querySelector('main');
      removePage(main);
      const itemWrapper = document.createElement('div');
      itemWrapper.className = 'item__wrapper';
      main.appendChild(itemWrapper);
      //image
      const img = document.createElement('div');
      img.className = 'item__img';
      itemWrapper.appendChild(img);


      const imgBig = document.createElement('div');
      imgBig.className = 'item__img_big';
      imgBig.style.backgroundImage = `url(${item.thumbnail})`;
      
      img.appendChild(imgBig);

      const imgSmall = document.createElement('div');
      imgSmall.className = 'item__img_small';
      img.appendChild(imgSmall);
      for (let i = 0; i < item.preview.length; i++) {
        const imgItem = document.createElement('div');
        imgItem.style.backgroundImage = `url(${item.preview[i]})`;
        imgSmall.appendChild(imgItem);
        
      }


      //text
      const text = document.createElement('div');
      text.className = 'item__text';
      itemWrapper.appendChild(text);

      const title = document.createElement('h3');
      title.className = 'item__header';
      text.appendChild(title);
      title.innerText = item.title;

      const description = document.createElement('p');
      description.className = 'item__description';
      text.appendChild(description);
      description.innerText = item.description;

      const price = document.createElement('div');
      price.className = 'item__price';
      text.appendChild(price);
      price.innerText =  '£'+item.price;

      const sizes = document.createElement('div');
      sizes.className = 'item__sizes';
      text.appendChild(sizes);
      const sizesText = document.createElement('p');
      sizesText.innerHTML = 'Size: ';
      sizes.appendChild(sizesText);

      for (let i = 0; i < item.sizes.length; i++) {
        const sizesButton = document.createElement('button');
        sizesButton.innerText = item.sizes[i];
        sizesButton.className = 'item__button';
        sizes.appendChild(sizesButton);

      }

      const colors = document.createElement('div');
      colors.className = 'item__colors';
      text.appendChild(colors);

      const colorText = document.createElement('p');
      colorText.innerText = 'Color: ';
      colors.appendChild(colorText);

      for (let i = 0; i < item.colors.length; i++) {
        const colorButton = document.createElement('button');
        colorButton.className = 'item__button';
        colorButton.innerText = item.colors[i];
        colors.appendChild(colorButton);
      }

      const buttonWrapper = document.createElement('div');
buttonWrapper.className = 'item__button_wrapper';
      text.appendChild(buttonWrapper);

      const add = document.createElement('button');
      add.className = 'button';
      add.innerText = 'Add Bag';
      buttonWrapper.appendChild(add);

    })

  }

  for (let i = 0; i < 9; i++) {
    renderItems(catalog[i]);
  }



})