class Game {
  constructor() {
    this.click = 1;
    this.multiplier = 1;
    this.money = new Money();

  //   this.pickUpgrade = {
  //     cost: 10,
  //     upgrade: 1,
  //   }

  //   this.mineUpgrade = {
  //     cost: 10,
  //     upgrade: 3,
  //   }
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
  }
}

const game = new Game();

const clicker = document.getElementById("clicker");

clicker.addEventListener("click", function(){
  game.money.update(game.click * game.multiplier);
});