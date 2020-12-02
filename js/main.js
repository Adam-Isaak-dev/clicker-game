let money = 0;
let click_value = 1;

const clicker = document.getElementById("clicker");
const html_money = document.getElementById("money");

clicker.addEventListener("click", function(e){
  money += click_value;
  html_money.innerText = `${money}`;
});