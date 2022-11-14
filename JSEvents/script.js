var x = 3;
console.log(x);
console.log('Hello from the script file!')

// element = this
// this refers to the button element that called this function with the onclick event listener!
function exampleFunction(element) {
    // If I only grab the element, I get the entire element.
    console.log("Element text: ", element)
}

function exampleFunction2(element) {
    // If I want to get the text inside of an element, I can refer to it with .innerText
    console.log("Element text: ", element.innerText)
}

function exampleFunction3(element) {
    // If I want to get the html inside of an element, I can refer to it with .innerHTML
    console.log("Element text: ", element.innerHTML)
}

function lightSwitch(element) {
    element.innerText = "Off";
}

function hide(element) {
    element.remove();
}