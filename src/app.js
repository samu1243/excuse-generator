/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ["The dog", "My grandma", "His turtle", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "the keys", "the car"];
let when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];
function arreglo(arr) {
  let random = ~~(Math.random() * arr.length);
  return arr[random];
}

window.onload = function() {
  //write your code here
  let resultado = `${arreglo(who)} ${arreglo(action)} ${arreglo(
    what
  )} ${arreglo(when)}`;
  let element = document.getElementById("excusa");
  element.innerHTML = resultado;
};
