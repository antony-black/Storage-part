class Header {

  render(count) {

    // In order to reflect the real data into the counter, referring to localStorageUtils
    const html = `
    <div class="header-container">
    <div class="header-counter">
    🔥 ${count}
    </div>
  </div>
    `;

    ROOT_HEADER.innerHTML = html;
  }
}

// Returne the data array
const productsStore = localStorageUtil.getProducts();



const headerPage = new Header();
// Outputting this block on the page
headerPage.render(productsStore.length);