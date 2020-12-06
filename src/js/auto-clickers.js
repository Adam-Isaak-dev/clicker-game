class Clickers {
  constructor() {
   this.miner = new Clicker(1000, 1, 10, 1.5)
   this.drill = new Clicker(10000, 100, 1000, 1.5)
   this.excavator = new Clicker(1000, 100, 10000, 1.5)
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
    this.cost = (this.cost * this.increase).toFixed(0);
  }

  click() {
    game.money.update(this.number * this.value * game.multiplier)
  }
  
  purchase() {
    
  }
}

const clickers = new Clickers();

window.setInterval(clickers.miner.click(), clickers.miner.interval);
window.setInterval(clickers.drill.click(), clickers.drill.interval);
window.setInterval(clickers.excavator.click(), clickers.excavator.interval);

