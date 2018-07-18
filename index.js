var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor((Math.random() * 100) + 1);
  var newObj = {itemName: item, itemPrice: price};
  cart.push(newObj);
  return (`${item} has been added to your cart.`);
}

function viewCart() {
  if (cart.length === 0) {
    return `Your shopping cart is empty.`;
  }else {
    var newArray = [];
    for (var i = 0; i < cart.length; i++) {
     
      newArray.push(`${cart[i].itemName} at $${cart[i].itemPrice} `);
      } return `In your cart, you have ${newArray}.`;
    } 
  
}
      
    

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
