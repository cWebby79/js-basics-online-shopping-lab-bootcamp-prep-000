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
  } else {
    var myString = "In your cart, you have"
    var myArray = [];
    
    for (var i = 0; i < cart.length; i++){
      myArray.push(`${cart[i].itemName} at $${cart[i].itemPrice}`);}
      
     if (i === (cart.length-1)) {
       return `${myString} ${myArray}.`;
     } else if (i ===(cart.length-2)) {
       return `${myString} ${myArray}, and `;
     }
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
