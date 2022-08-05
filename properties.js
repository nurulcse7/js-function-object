// Object declare
var shoppingCart = {
    books: 3,
    sunglass: 1,
    keyboard: 5,
    mouse: 1,
    pen: 25
}
// 01. To get all properties and their values
console.log(shoppingCart); // print: { books: 3, sunglass: 1, keyboard: 5, mouse: 1, pen: 25 }


//02. To get all properties (keys)
var properties = Object.keys(shoppingCart);
console.log(properties); // print: [ 'books', 'sunglass', 'keyboard', 'mouse', 'pen' ]

// 03. To get all properties (keys) values
var propertyValues = Object.values(shoppingCart);
console.log(propertyValues); // print: [ 3, 1, 5, 1, 25 ]

// 04.1 To get the specific property value (when you know the specific property name, use dot notation)
var penCount = shoppingCart.pen;
console.log(penCount)  // print: 25
// 04.2 alternative System
var penCount2 = shoppingCart['pen'];
console.log(penCount)  // print: 25
// 04.3 alternative System
var propertyName = 'mouse';
var propertyValue = shoppingCart[propertyName]
console.log(propertyValue);  // print: 1


//05.1 set property values (to change property value)
shoppingCart.mouse = 15;
console.log(shoppingCart); // print: { books: 3, sunglass: 1, keyboard: 5, mouse: 15, pen: 25 }
// 05.2 alternative System
shoppingCart['mouse'] = 29;
console.log(shoppingCart); // print: { books: 3, sunglass: 1, keyboard: 5, mouse: 29, pen: 25 }
// 05.3 alternative System
shoppingCart[propertyName] = 89;
console.log(shoppingCart) // print: { books: 3, sunglass: 1, keyboard: 5, mouse: 89, pen: 25 }
