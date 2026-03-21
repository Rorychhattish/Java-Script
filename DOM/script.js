let heading = document.getElementById("heading");  //h1
console.dir(heading);

//Append garna lai
let h4 = document.querySelector("h4");  //h4
console.dir(h4.innerText);
h4.innerText = h4.innerText + " and DOM from js file";


// let divs=document.querySelectorAll(".box");
// divs[1].innerText = "new unique value 1";

let divs=document.querySelectorAll(".box");
let idx = 0;
for (div of divs) {
    div.innerText = `new unique value ${idx}`;
    idx++;
}