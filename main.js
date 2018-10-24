let numbers = ["A", "2", "3", "4", "5", "6","7", "8", "9", "10", "J", "Q", "K"];
let suit = ["diamond", "spade", "club", "heart"];

window.onLoad = ()=> {
    let indexSuit = Math.floor(Math.random() * suit.length);
    let indexNumbers = Math.floor(Math.random() * numbers.length);
    
    document.querySelector(".Top-suit").className += (" " + suit[indexSuit]);
    document.querySelector(".number").innerHTML = numbers[indexNumbers];
    document.querySelector(".Bottom-suit").className += (" " + suit[indexSuit]);
};


