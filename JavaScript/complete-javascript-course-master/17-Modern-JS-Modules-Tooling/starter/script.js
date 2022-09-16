// Importing module
// import {
//   addToCart,
//   totalPrice as price, // variable names can be changed
//   tq,
// } from './shoppingCart.js'; // Importing variable from other modules by name must add {}
// addToCart('bread', 5);
// console.log(price, tq);
// console.log(shippingCost); // return not defined because variable claimed in shoppingCart are private, not gloabl

console.log('Importing module'); // returned after imports, because imports are hoisted and executed first

// import * as ShoppingCart from './shoppingCart.js'; // imports everything into an object and asign new name
// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.totalPrice);

// import dumbfuck, {
//   addToCart,
//   totalPrice as price,
//   tq,
// } from './shoppingCart.js';
// console.log(price); // avoid doing name export + default export together

import add, { cart } from './shoppingCart.js'; // importing by default,  by simply asign a new to it
add('pizza', 2);
add('bread', 5);
add('apple', 4);

console.log(cart); // imports are not copied, it follows the original cart as i defined it in shoppingCart.js as {} instead of []

/*
// console.log('start fetching');
// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json(); // Using await will block the entire module from execution
// console.log(data);
// console.log('the end');

const getLastPost = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  console.log(data);

  return { title: data.at(-1).title, text: data.at(-1).body };
};

const lastPost = getLastPost();
console.log(lastPost);

// Not a goodway to retrive info
// lastPost.then(last => console.log(last));

const lastPost2 = await getLastPost();
console.log(lastPost2);

const shoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(
      `${quantity} ${product} added to cart (shipping cost is ${shippingCost})`
    );
  };

  const orderStock = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} ordered from supplier`);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();

shoppingCart2.addToCart('apple', 4);
shoppingCart2.addToCart('pizza', 2); // both works and manipulated because the method was specificlly returned
console.log(shoppingCart2);
console.log(shoppingCart2.shippingCost); // return undefined
*/

import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
// import cloneDeep from 'lodash-es';

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 5 },
  ],
  user: { loggedIn: true },
};
const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);
state.user.loggedIn = false;
console.log(stateClone);
console.log(stateDeepClone);

if (module.hot) {
  module.hot.accept();
}

class Person {
  greeting = 'Hey';
  constructor(name) {
    this.name = name;
    console.log(`${this.greeting}, ${this.name}`);
  }
}
const jay = new Person('Jay');

console.log('Jay' ?? null);

console.log(cart.find(el => el.quantity >= 2));
Promise.resolve('TEST').then(x => console.log(x));

import 'core-js/stable';
// import 'core-js/stable/array/find';
// import 'core-js/stable/promise';

// Polifilling async functions
import 'regenerator-runtime/runtime';
