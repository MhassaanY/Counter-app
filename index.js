
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0;

console.log(saveEl)

function increment(){
    count += 1
    countEl.textContent = count
}

function save(){
    let countStr = count + " - " 
    saveEl.textContent += countStr
    console.log(count)
    countEl.textContent = 0
    count = 0
}

let myPoints = 3

// Create two functions, add3Points() and remove1Point(), and have them
// add/remove points to/from the myPoints variable

function add3points(){
    myPoints += 3;
}

function remove1point(){
    myPoints -= 1;
}

add3points();
remove1point();


// Call the functions to that the line below logs out 10
console.log(myPoints)


