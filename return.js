function add(number1, number2){
    console.log(number1, number2);
    var sum = number1 + number2;
    // console.log(sum);
    return sum;
    // not working any code after declared return function
    console.log('I need more code');
    return 15;
    return 'hello done';
}
// add(80, 20);
// var total = add(80, 20);
// console.log('total', total);
//  print: 80 20
// total 100


function bringSingara(money){
    var singaraPrice = 10;
    var quantity = money / singaraPrice;
    return quantity;
}

var myTaka = 150
var singaras = bringSingara(myTaka);
console.log('Eating singaras: ', singaras);
//  print: Eating singaras:  15