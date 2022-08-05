// function declaration rules
// 01. write function keyword: function
// 02. write function name with first bracket: function name()
// 02.1 put parameter(variable name) in the first bracket as a variable.
// 02.2 You can put parameters on more than one (with comma)
// 03. Then write curly bracket: {}
// 03.1 For output: console.log('write something', parameter) in the curly bracket, otherwise function not working.
// 04. call the function out side of curly bracket{}: function name()
// 04.1 put parameter value (variable value) in the first bracket as a variable.
// 04.2 You can put parameters value on more than one (with comma) but must declare more than one parameter (variable name) first.
// 04.3 You can put parameters value also declare with variable. Such as (var taka = 300;)

//Example 01
function bringSingara(money){
    console.log('taka disen: ', money);
    console.log('ai nen singara');
}
var taka = 300;
// bringSingara(taka);
// print:
// taka disen:  300
// ai nen singara


//Example 02
function add(num1, num2){
    console.log('going to add:', num1, num2);
}
// add(125, 96);
// print: going to add: 125 96


//Example 03
function sum(a, b, c, d, e){
    console.log(a, b, c, d, e);
    var sum = a + b + c + d + e;
    console.log(sum);
}
sum(15, 98, 56, 5, 9);
// print:
// 15 98 56 5 9
// 183