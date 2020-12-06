class Game {
  constructor() {
    this.click = 1;
    this.auto = 1;
    this.multiplier = 1;
    this.money = new Money();

  }
  // update() {

  // }

}

class Money {
  constructor() {
    this.money = 0;
    this.page = document.getElementById("money");
  }

  update(value) {
    this.money += value;
    this.page.innerText = `${this.money.toFixed(0)}`;
    this.checkPurchases();
  }

  checkPurchases() {
   
  }
}

const game = new Game();
game.money.update(0);


const clicker = document.getElementById("clicker");
const clickButton  = document.getElementById('pick');
const mineButton  = document.getElementById('mine');
// clickButton.disabled = true;
// mineButton.disabled = true;


clicker.addEventListener("click", function(){
  game.money.update(game.click * game.multiplier);
});

clickButton.addEventListener("click", function() {
  game.money.update(-upgrades.clicks[upgrades.clickLevel].cost);
  game.click = upgrades.clicks[upgrades.clickLevel].output;
  upgrades.updateClick(); 
});

mineButton.addEventListener("click", function() {
  game.money.update(-upgrades.mines[upgrades.mineLevel].cost);
  game.multiplier = upgrades.mines[upgrades.mineLevel].output;
  upgrades.updateMine(); 
});