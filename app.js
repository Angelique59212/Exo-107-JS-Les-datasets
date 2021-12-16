// Elements pour lesquels vous créerez des datasets directement dans le code HTML.
let p1 = document.getElementById('p1');
let p2 = document.getElementById('p2');
let p3 = document.getElementById('p3');
let p4 = document.getElementById('p4');

p1.dataset.age = (parseInt(p1.dataset.age) + 10).toString();

let presentation = p2.dataset.presentation.length;
p2.dataset.presentation = presentation.toString();

let hobbies = p3.dataset.hobbies.split('|');
for (let hobby of hobbies) {
    p3.innerHTML += "<br>I like " + hobby.trim();
}

let boolean = p4.dataset.boolean;
boolean = boolean.toLowerCase() === 'true';
if (boolean) {
    p4.innerHTML += " : La valeur est vraie";
}
else {
    p4.innerHTML += " : La valeur est fausse";
}

// Elements pour lesquels vous créerez des datasets depuis JavaScript.
let p5 = document.getElementById('p1');
let p6 = document.getElementById('p1');
let p7 = document.getElementById('p1');
let p8 = document.getElementById('p1');

p5.dataset.age =" 33 ";
p6.dataset.presentation = "Je m'appelle Angélique Dehainaut";
p7.dataset.hobbies = "writting|song|computer";
p8.dataset.boolean = "false";

let paragraph = document.createElement("p");
document.querySelector("body").appendChild(paragraph);

let Person = {
    name : "Doe",
    firstName : "John"
}
paragraph.dataset.name = JSON.stringify(Person);
