function add(num1, num2){
    const sum = num1 + num2;
    return sum;
}

const result1 = add(12, 13);
// console.log()
const result2 = add(35, 7);
const finalResult = add(result1, result2);


// 01. No return & No parameter
function prepareJuice(){
    // make juice using a fruit
    // save for future
}
prepareJuice();


// 02. Has return & No parameter
function prepareJuice(){
    // make juice 
    // save for future
    return glass;
}
var servedJuice = prepareJuice();


// 03. No return & Has parameter
function prepareJuice(fruit){
    // make juice 
    // save for future
}
prepareJuice(apple);


// 04. Has return & Has parameter
function prepareJuice(fruit){
    // make juice 
    // pour it in a glass
    return glass;
}
var servedJuice = prepareJuice(apple);


// 05. Multiple parameters in a function
function prepareJuice(fruit1, fruit12){
    // make juice of apple & grapes
    // pour it in a glass
    return glass;
}
var servedJuice = prepareJuice(apple, grapes);