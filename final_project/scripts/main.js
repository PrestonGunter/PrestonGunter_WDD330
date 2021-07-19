"use strict";

// Global Var
const carts = document.querySelectorAll(".add-cart");

// Global Functions
displayCart();
loadCartNumbers();

let products = [
  {
    name: "Brisket",
    tag: "brisket",
    price: 12,
    inCart: 0,
  },

  {
    name: "Chicken",
    tag: "chicken",
    price: 10,
    inCart: 0,
  },

  {
    name: "Salmon Fillet",
    tag: "salmon",
    price: 12,
    inCart: 0,
  },

  {
    name: "Ribs",
    tag: "ribs",
    price: 11,
    inCart: 0,
  },

  {
    name: "Steak",
    tag: "steak",
    price: 15,
    inCart: 0,
  },
];

// Loop Through all of the cart items
// add one to cart when buton is pressed
for (let i = 0; i < carts.length; i++) {
  carts[i].addEventListener("click", () => {
    cartNumbers(products[i]);
    totalCost(products[i]);
  });
}

function loadCartNumbers() {
  let productNumbers = localStorage.getItem("cartNumbers");
  if (productNumbers) {
    document.querySelector(".cart span").textContent = productNumbers;
  }
}

// Function that handels number of cart items
function cartNumbers(product, action) {
  let productNumbers = parseInt(localStorage.getItem("cartNumbers"));
  let cartItems = JSON.parse(localStorage.getItem("productsInCart"));

  if (action) {
    localStorage.setItem("cartNumbers", productNumbers - 1);
    document.querySelector(".cart span").textContent = productNumbers - 1;
  } else if (productNumbers) {
    localStorage.setItem("cartNumbers", productNumbers + 1);
    document.querySelector(".cart span").textContent = productNumbers + 1;
  } else {
    localStorage.setItem("cartNumbers", 1);
    document.querySelector(".cart span").textContent = 1;
  }

  setItems(product);
}

function setItems(product) {
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);

  if (cartItems != null) {
    let currentProduct = product.tag;

    if (cartItems[currentProduct] == undefined) {
      cartItems = {
        ...cartItems,
        [currentProduct]: product,
      };
    }
    cartItems[currentProduct].inCart += 1;
  } else {
    product.inCart = 1;
    cartItems = {
      [product.tag]: product,
    };
  }
  localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

// function that gets the total cost of your cart
function totalCost(product, action) {
  let cartCost = localStorage.getItem("totalCost");

  if (action) {
    cartCost = parseInt(cartCost);
    localStorage.setItem("totalCost", cartCost - product.price);
  } else if (cartCost != null) {
    cartCost = parseInt(cartCost);
    localStorage.setItem("totalCost", cartCost + product.price);
  } else {
    localStorage.setItem("totalCost", product.price);
  }
}

// DOM minuplation for cart.html
function displayCart() {
  let cartItems = JSON.parse(localStorage.getItem("productsInCart"));

  let cartCost = parseInt(localStorage.getItem("totalCost"));

  let productContainer = document.querySelector(".products");

  if (cartItems && productContainer) {
    productContainer.innerHTML = "";
    Object.values(cartItems).map((item, index) => {
      productContainer.innerHTML += `
        <div class="product">
            <ion-icon name="close-circle-outline"></ion-icon>
            <img src="./images/${item.tag}.jpg">
            <span class="sm-hide">${item.name}</span> 
        </div>
        <div class="price sm-hide">$${item.price}.00</div>
        <div class="quantity">
            <ion-icon class="increase" name="arrow-dropup-circle"></ion-icon>
            <span>${item.inCart}</span>
            <ion-icon class="decrease" name="arrow-dropdown-circle"></ion-icon>
        </div>
        <div class="total"> 
            $${item.inCart * item.price}.00
        </div>
          `;
    });

    productContainer.innerHTML += `
        <div class="cartTotalContainer">
            <h4 class="cartTotalTitle">
                Cart Total
            </h4>
            <h4 class="cartTotal">
                $${cartCost}.00
            </h4>
    `;
    deleteItems();
    manageCart();
  }
}

// event handlers for all of the ion icons
function manageCart() {
  const cartIncrease = document.querySelectorAll(".increase");
  const cartDecrease = document.querySelectorAll(".decrease");
  let currentQuantity = 0;
  let currentProduct = "";
  let cartItems = JSON.parse(localStorage.getItem("productsInCart"));

  for (let i = 0; i < cartIncrease.length; i++) {
    cartDecrease[i].addEventListener("click", () => {
      currentQuantity =
        cartDecrease[i].parentElement.querySelector("span").textContent;
      currentProduct = cartDecrease[
        i
      ].parentElement.previousElementSibling.previousElementSibling
        .querySelector("span")
        .textContent.toLocaleLowerCase()
        .replace(/ /g, "")
        .trim();

      if (cartItems[currentProduct].inCart > 1) {
        cartItems[currentProduct].inCart -= 1;
        cartNumbers(cartItems[currentProduct], "decrease");
        totalCost(cartItems[currentProduct], "decrease");
        localStorage.setItem("productsInCart", JSON.stringify(cartItems));
        displayCart();
      }
    });

    cartIncrease[i].addEventListener("click", () => {
      currentQuantity =
        cartIncrease[i].parentElement.querySelector("span").textContent;
      currentProduct = cartIncrease[
        i
      ].parentElement.previousElementSibling.previousElementSibling
        .querySelector("span")
        .textContent.toLocaleLowerCase()
        .replace(/ /g, "")
        .trim();

      cartItems[currentProduct].inCart += 1;
      cartNumbers(cartItems[currentProduct]);
      totalCost(cartItems[currentProduct]);
      localStorage.setItem("productsInCart", JSON.stringify(cartItems));
      displayCart();
    });
  }
}

// event handlers for the delete buttons
function deleteItems() {
  let deleteButtons = document.querySelectorAll(".product ion-icon");
  let productNumbers = localStorage.getItem("cartNumbers");
  let cartCost = localStorage.getItem("totalCost");
  let cartItems = JSON.parse(localStorage.getItem("productsInCart"));
  let productName;

  for (let i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].addEventListener("click", () => {
      productName = deleteButtons[i].parentElement.textContent
        .toLocaleLowerCase()
        .replace(/ /g, "")
        .trim();

      localStorage.setItem(
        "cartNumbers",
        productNumbers - cartItems[productName].inCart
      );
      localStorage.setItem(
        "totalCost",
        cartCost - cartItems[productName].price * cartItems[productName].inCart
      );

      delete cartItems[productName];
      localStorage.setItem("productsInCart", JSON.stringify(cartItems));

      displayCart();
      loadCartNumbers();
    });
  }
}
