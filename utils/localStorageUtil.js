// Local storage
class LocalStorageUtil {

  constructor() {
    this.keyName = 'products';
  }

  // Allows getting all products in this Local Storage
  getProducts() {
    // In order to get from the Local Storage, you should turn on method getItem(), localStorge.getItem()
    // We'll get by the key 'products' & write down 'this.keyName'
    // If there is any value in localStorage will be returned a 'String'or will be returned 'Null'
    const productsLocalStorge = localStorage.getItem(this.keyName);

    // Therefore checking code
    // If there is not 'Null', then proceeding
    // If there is not 'Null', we have to JSON.parse the returned 'String'and transformed into the array
    if (productsLocalStorge !== null) {
      return  JSON.parse(productsLocalStorge);
    } 
    // Or will be returned the empty array
    return [];
  }

  // Allows add a new product to the Local Storage
  // In order to add a new product, we should pass in ID to putProduct()
  putProducts(id) {
    
    // First of all this method should figure out which products have already been inside localStorage. In order to checking it, use method getProducts()
    // Now, inside products variable is all data from localStorage
    let products = this.getProducts();
    
    // If false, the data is deleted; if true, the data is appended
    let pushProduct = false;
    
    // Coincidence checking; if there is not coincidence, returning -1
    // If index = -1, so it's new data & it should be saved
    const index = products.indexOf(id);
      if (index === -1) {
        // As products is an array, so we can add new ID which will be passed
        products.push(id);
        pushProduct = true;
      } else {
        // As index shows the position number. Apply method splice() to delete data from localStorage
        products.splice(index, 1)
      }
   
    // Then set into the localStorage
    // this.keyName it's where will set & other it's what we want to set
    // We can't poit products cause it's an array, and localStorage can take only 'String'
    // Therefore transform back, JSON.stringify(products)
    localStorage.setItem(this.keyName, JSON.stringify(products))

    // If key & value are the same- leave one
    // 'Object' & 'Array'
      return {pushProduct, products}
  }

}

const localStorageUtil = new LocalStorageUtil();

