var one = document.querySelector(".img1");
var two = document.querySelector(".img2");
var head = document.querySelector("h1");

function rollDice(dice){
    var num_r = Math.round(Math.random() * 5 + 1);
    dice.src = "./images/dice" + num_r + ".png";
    return num_r;
}

function winner(){
    if (rollDice(one) === rollDice(two)){
        head.textContent = "It`s a draw!";
    }
    else if (rollDice(one) > rollDice(two)){
        head.textContent = "Player 1 won!";
    }
    else if(rollDice(one) < rollDice(two)){
        head.textContent = "Player 2 won!";
    }
} 


