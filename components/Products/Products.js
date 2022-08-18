class Products {

  constructor() {
    // These will be repeating, so add into the constructor
    this.classNameActive = 'products-element__btn_active';
    this.labelAdd = 'Add purchaise';
    this.labelRemove = 'Delete purchaise';
  }

  // Add during the click
  handleSetLocationStorage(element, id) {
    // Corecting localStorage: add or delete data
    const {pushProduct, products} = localStorageUtil.putProducts(id);

    if (pushProduct) {
      element.classList.add(this.classNameActive);
      element.innerHTML = this.labelRemove;
    } else {
      element.classList.remove(this.classNameActive);
      element.innerHTML = this.labelAdd;
    }

    headerPage.render(products.length);
  }

  // Outputting the content from CATALOG on the page
  render() {
    // Getting the localStorage data
    const productsStore = localStorageUtil.getProducts();

    // Gets and Storages all content 
    let htmlCatalog = '';

    CATALOG.forEach(({name, id, img, price}) => {
      let activeClass = '';
      let activeText = '';

      // Coincidence searching into the productsStore
      if (productsStore.indexOf(id) === -1) {
        // If there is not coincidence, adding 'Add purchaise'
        activeText = 'Add purchaise';
      } else {
        activeClass = ' ' + this.classNameActive;
        activeText ='Delete purchaise';
      }

      // Element structure
      htmlCatalog +=`
            <li class="products-element">
            <span  class="products-element__name">${name}</span>
            <img  class="products-element__img" src="${img}">
            <span class="products-element__price">⚡ ${price.toLocaleString()} USD</span>
            <button class="products-element__btn${activeClass}" onclick = "productsPage.handleSetLocationStorage(this, '${id}');">
            ${activeText}
            </button>
          </li>
      `;
    });

    // Li putting inside Ul
    const html = `
            <ul class="products-container">
            ${htmlCatalog}
          </ul>
    `;
    // Outputting the gathered content on the page
    ROOT_PRODUCTS.innerHTML = html;
  }
}

const productsPage = new Products();
productsPage.render();