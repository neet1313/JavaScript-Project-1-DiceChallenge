var diceNumber1= "images/dice" + Math.round((Math.random() * 6) + 1) + ".png"; //Random Image of first Dice from 1-6
var diceNumber2= "images/dice" + Math.round((Math.random() * 6) + 1) + ".png"; //Random Image of second Dice from 1-6

/*-------------------------- DICE 1 shuffle-----------------------------------*/
document.querySelectorAll("img")[0].setAttribute("src", diceNumber1);
/*-------------------------- DICE 1 shuffle-----------------------------------*/

/*-------------------------- DICE 2 shuffle-----------------------------------*/
document.querySelectorAll("img")[1].setAttribute("src", diceNumber2);
/*-------------------------- DICE 2 shuffle-----------------------------------*/

if(diceNumber1 > diceNumber2){
  document.querySelector("h1").innerHTML="🎉Player 1 Wins";
} else if (diceNumber1 < diceNumber2){
  document.querySelector("h1").innerHTML="🎉Player 2 Wins";
} else {
  document.querySelector("h1").innerHTML="🎉It's a Tie🎉";
}
