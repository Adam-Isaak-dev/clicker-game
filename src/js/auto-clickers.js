class Clickers {
  constructor() {
   this.miner = new Clicker(1, 10)
   this.drill = new Clicker(10, 1000)
   this.excavator = new Clicker(100, 100, 10000)
  }
}

class Clicker {
  constructor(value, cost, increase) {
    this.level = 0;
    this.number = 0;
    this.value = value;
    this.cost =  cost;
    this.increase = increase;
  }

  click() {
    game.money.update(this.number * this.value * game.multiplier)
  }
  
  purchase() {
    game.money.update(-this.cost);
    this.number++;
    this.cost *= 2;
  }
}

const clickers = new Clickers();

const auto = setInterval(function() {
  clickers.miner.click();
  clickers.drill.click();
  clickers.excavator.click();
}, 1000);
