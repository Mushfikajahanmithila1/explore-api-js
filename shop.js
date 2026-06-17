document.getElementById("add-product").addEventListener("click", function () {
  const productName = document.getElementById("product-name");
  const productQuantity = document.getElementById("product-quantity");
  const product = productName.value;
  const quantity = productQuantity.value;
  //   console.log(product, quantity);
  productName.value = "";
  productQuantity.value = "";
  getProduct(product, quantity);
  diplayProductFromLocalStorage(product, quantity);
});

const getProduct = (product, quantity) => {
  const productContainer = document.getElementById("product-container");
  const li = document.createElement("li");
  li.innerText = `${product} : ${quantity}`;
  productContainer.appendChild(li);
};

const getProductToLocalStroge = () => {
  let cart = {};
  const cartStorage = localStorage.getItem("cart");
  if (cartStorage) {
    cart = JSON.parse(cartStorage);
  }
  return cart;
};

const diplayProductFromLocalStorage = (product, quantity) => {
  const cart = getProductToLocalStroge();
  cart[product] = quantity;
  const cartStringify = JSON.stringify(cart);
  window.localStorage.setItem("cart", cartStringify);
};

const saveProductFromLocalStorage = () => {
  const savedCart = getProductToLocalStroge();
  for (const product in savedCart) {
    const quantity = savedCart[product];
    getProduct(product, quantity);
  }
};
