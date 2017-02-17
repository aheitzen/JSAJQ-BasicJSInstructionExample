var greeting = "Hi ";
var name = "Molly";
var message = ', please check your order: ';
var welcome = greeting + name + message;

var sign = 'Montague House';
var tiles = sign.length;
var subTotal = tiles * 5;
var shipping = 7;
var grandTotal = subTotal + shipping;

var el = document.getElementById('greeting'); //finding the element in the html via the selector
el.textContent = welcome; //replacing the content of ^ element 

var elSign = document.getElementById('userSignIn');
elSign.textContent = sign;

var elTiles = document.getElementById('tiles');
elTiles.textContent = tiles;

var elSubTotal = document.getElementById('subTotal');
elSubTotal.textContent = subTotal;

var elShipping = document.getElementById('shipping');
elShipping.textContent = shipping;

var elGrandTotal = document.getElementById('grandTotal');
elGrandTotal.textContent = grandTotal;