let button = document.getElementsByTagName("button");
let inputScreen = document.getElementsByClassName("inputScreen")[0];
let calculate = document.querySelector("#calculate");
let clear = document.querySelector("#clear");


// Functions

function print() {
    inputScreen.value = inputScreen.value + this.value;
};

function empty() {
    inputScreen.value = "";
};

function calculus() {
    inputScreen.value = eval(inputScreen.value);
};

// Eventlisteners

clear.addEventListener("click", empty);

for (var i = 0; i < 19; i++) {
    if (i != 0 && i != 18) {
        button[i].addEventListener("click", print);
    };
};

calculate.addEventListener("click", calculus);


// Keypress Events

document.addEventListener('keydown', function(e) {
    if(e.key === 'Escape') {
        empty();
    }
});

document.addEventListener('keydown', function(e) {
    if(e.key === 'Enter') {
        inputScreen.value = eval(inputScreen.value);
    }
});