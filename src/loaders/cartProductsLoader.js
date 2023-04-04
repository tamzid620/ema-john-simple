import { getShoppingCart } from "../utilities/fakedb";

const cartProductsLoader = async () => {
    const loadedProducts = await fetch('products.json');
    const products = await loadedProducts.json();
  
    const storedCart = getShoppingCart();
    const savedCart = [];
  
    console.log(storedCart);
  
    for (const id in storedCart) {
      const addedProduct = products.find(pd => pd.id === id);
      if (addedProduct) {
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct);
      }
    }
// if you need to return to thing --------
    // return [products, savedCart]
// or ----------------
    // return {products, savedCart}

    return savedCart;
  };
  
  export default cartProductsLoader;
  