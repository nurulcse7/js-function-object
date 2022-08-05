// (i) array vs object
//array declare
var shoppingItems = ['books', 'sunglass', 'shoes', 'pen'];
var friendsAge = [12, 45, 78, 12, 32, 14];

// object declare
var friendsAge = {
    rahim: 12,
    samad: 45,
    karim: 78,
    jamal: 12,
    robi:32,
    kazi: 14
}


// (ii) Object loop (for, for in)
var shoppingCart = {
    books: 3, 
    sunglass: 1,
    keyboard: 5,
    mouse: 1,
    pen: 25,
    shoes: 2
}
// 01. To get get all properties(keys)
const keys = Object.keys(shoppingCart);
console.log(keys);

// 02. To get all properties (keys) values
const values = Object.values(shoppingCart);
console.log(values);

// 03.1 for loop ( To get all properties and their values)
for(var i = 0; i < keys.length; i++){
    var propertyName = keys[i];
    var propertyValue = shoppingCart[propertyName];
    console.log(propertyName, propertyValue);
}
//03.2 for in loop ( To get all properties and their values)
for(var propertyName in shoppingCart){
    const value = shoppingCart[propertyName];
    console.log(propertyName, value);
} // for and for in print:
// books 3
// sunglass 1
// keyboard 5
// mouse 1
// pen 25
// shoes 2