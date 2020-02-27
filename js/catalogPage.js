
window.addEventListener("load", function() {
    //filter
    const catalog = window.catalog,
    section = document.querySelector('.catalog');
   

   function renderItems(item){
    const wrapper =document.createElement('div');
    wrapper.className = 'catalog__items';
    section.prepend(wrapper);
    const itemArrivals = document.createElement('div');
    itemArrivals.className = 'item';
    wrapper.appendChild(itemArrivals);
    const itemImg = document.createElement('img');
    itemImg.className = 'new-arrivals__photo';
    itemImg.style.width = '240px';
    itemImg.style.height = '340px';
    wrapper.appendChild(itemImg);
    const itemTitel = document.createElement('h4');
    itemTitel.className = 'new-arrivals__title';
    wrapper.appendChild(itemTitel);
    const itemPrice = document.createElement('p');
    itemPrice.className = 'new-arrivals__price';
    wrapper.appendChild(itemPrice);

    itemImg.src = item.thumbnail;
    itemTitel.innerText = item.title;
    itemPrice.innerText = item.price + ' £';
  }

 

  for(let i = 0; i < 4;i++){
    renderItems(catalog[i]);
  }

})