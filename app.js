console.log("Sanity Check");

//Finding HTML Elements
console.log(document.getElementsById("use-id-method"));
var idElements = document.getElementsById("use-id-method");
console.log(idElements);

// console.log(document.getElementByTagName("div"));
var tagElements = document.getElementsByTagName("div");
console.log(tagElements);

// console.log(document.getElementByClassName("use-class-method"));
var classElements = document.getElementsByClassName("use-class-method");
console.log(classElements);

//Changing HTML Elements
console.log(idElement.innerHTML);
idElement.innerHTML = "I have been changed";

console.log(classElements[1]);
classElements[1].innerHTML = "I have been changed by my class Name"