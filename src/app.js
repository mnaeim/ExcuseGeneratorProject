/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  console.log("hfhfyryrytytuty");
};
function Excuse() {

  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = ["before the class", "right on time", "when I finished", "during my lunch", "while I was praying"];

  var who = [Math.floor(Math.random() * (who.length - 1))];
  var action = [Math.floor(Math.random() * (action.length - 1))];
  var what = [Math.floor(Math.random() * (what.length - 1))];
  var when = [Math.floor(Math.random() * (when.length - 1))];

  document.getElementById('excuses').innerHTML = '<div>' who + ' ' + action + ' ' + what + ' ' + when. '</div>'

}