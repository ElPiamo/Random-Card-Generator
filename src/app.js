/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/4geeks.ico";

let suits = ["♦", "♥", "♠", "♣"];
let numbers = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];
window.onload = function() {
  const selectCard = () => {
    var randomSuit = suits[Math.floor(Math.random() * suits.length)];
    document.getElementsByClassName("suitsAbove")[0].innerHTML = randomSuit;
    document.getElementsByClassName("suitsBelow")[0].innerHTML = randomSuit;

    var randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
    document.getElementsByClassName("mainNumber")[0].innerHTML = randomNumber;

    if (randomSuit == "♥" || randomSuit == "♦") {
      document.getElementsByClassName("suitsAbove")[0].style.color = "red";
      document.getElementsByClassName("suitsBelow")[0].style.color = "red";
    } else {
      document.getElementsByClassName("suitsAbove")[0].style.color = "black";
      document.getElementsByClassName("suitsBelow")[0].style.color = "black";
    }
  };

  setInterval(function() {
    selectCard();
  }, 10000);

  selectCard();
};
