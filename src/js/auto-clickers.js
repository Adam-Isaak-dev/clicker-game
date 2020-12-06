class Clickers {
  constructor() {
   this.miner = new Clicker(1000, 1, 10, 1.5)
   this.drill = new Clicker(1000, 100, 1000, 1.5)
   this.excavator = new Clicker(100, 100, 10000, 1.5)
  }
}

class Clicker {
  constructor(interval, value, cost, increase) {
    this.level = 0;
    this.number = 0;
    this.interval = interval;
    this.value = value;
    this.cost =  cost;
    this.increase = increase;
  }

  upgrade(interval, value) {
    this.level++;
    this.interval = interval;
    this.value = value;
  }

  click() {
    game.money.update(this.number * this.value * game.multiplier)
  }
  
  purchase() {
    game.money.update(-this.cost);
    this.number++;
    this.cost = (this.cost * this.increase).toFixed(0);
  }
}

const clickers = new Clickers();

const minerClick = setInterval(function() {
  clickers.miner.click();
}, clickers.miner.interval);

const drillClick = setInterval(function(){clickers.drill.click()}, clickers.drill.interval);
const excavatorClick = setInterval(function(){clickers.excavator.click()}, clickers.excavator.interval);
