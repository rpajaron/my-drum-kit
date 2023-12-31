var numberOfDrums = document.querySelectorAll(".drum").length;

function onClick (){
    var buttonInnerHtml = this.innerHTML;

    switch (buttonInnerHtml){
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var kickBass = new Audio("sounds/kick-bass.mp3");
            kickBass.play();
            break;
        case "l":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        default: console.log(buttonInnerHtml); 
    }
}
for ( var i = 0; i < numberOfDrums; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", onClick);
    
}

document.addEventListener("keypress",function(event){
    makeSound(event.key);
});
function makeSound(key){ 
    switch (key){
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var kickBass = new Audio("sounds/kick-bass.mp3");
            kickBass.play();
            break;
        case "l":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        default: console.log(buttonInnerHtml); 
    }
}


// function add (num1, num2){
//     return num1 + num2;
// }

// function subtract(num1, num2){
//     return num1 - num2;
// }

// function multiply(num1, num2){
//     return num1 * num2;
// }

// function divide(num1, num2){
//     return num1 / num2;
// }

// function calculator(num1, num2, operator){
//     return operator(num1, num2);
// }

// console.log(calculator(5,2,add));