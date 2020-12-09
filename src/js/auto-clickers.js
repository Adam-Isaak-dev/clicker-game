class AutoClickers {
  constructor() {
    this.types = [
      new Clicker(0, 'production', 'Miners', 1, 10, "images\\028-miner.png"),
      new Clicker(1, 'distribution', 'Mine Carts', 3, 35, "images\\047-wagon.png"),
      new Clicker(2, 'commerce', 'Sellers', 5, 75, "images\\007-buyer.png"),
      new Clicker(3, 'distribution', 'Trucks', 10, 250, "images\\008-cargo truck.png"),
      new Clicker(4, 'production', 'Excavators', 15, 500, "images\\014-excavator.png"), 
      new Clicker(5, 'commerce', "Shop's", 25, 750, "images\\038-shop.png"),
      new Clicker(6, 'production', "Refinery's", 50, 2000, "images\\035-refinery.png"),
      new Clicker(7,'commerce', 'Jewelers', 100, 5000, "images\\036-diamond ring.png"),
      new Clicker(8, 'distribution', 'Trains', 150, 7500, "images\\044-train.png"),
      new Clicker(9, 'distribution', 'Conveyers', 200, 10000, "images\\011-conveyor.png"),
      new Clicker(10, 'commerce', 'Banks', 300, 15000, "images\\003-bank.png"),
      new Clicker(11, 'production', "Factory's", 1000, 1000000, "images\\016-factory.png"),
    ];
  }

  checkAutos(money) {
    this.types.forEach(function(item) {
      if(item.cost > money) {
        item.holder.querySelector(`#auto-${item.id}`).querySelector('button').disabled = true;
      } else {
        item.holder.querySelector(`#auto-${item.id}`).querySelector('button').disabled = false;
      }
    });
  }
}

class Clicker {
  constructor(id, type, name, value, cost, img) {
    this.id = id;
    this.type = type;
    this.number = 0;
    this.name = name;
    this.value = value;
    this.cost = cost;
    this.img = img;
    this.holder = document.getElementById('auto-clickers')
  }

  click() {
    game.money.update(this.number * this.value * game[this.type]* game.multiplier)
  }
  
  purchase(e) {
    game.money.update(-this.cost);
    this.number++;
    e.target.parentNode.querySelector(".number").innerText = `${this.number}`
  }

  insert() {
    this.holder.insertAdjacentHTML("beforeend", 
    `<li id="auto-${this.id}">
      ${this.name}
      <div>${this.type}</div>
      <div>$${this.value}/s</div>
      <div>$${this.cost}</div>
      <img src="${this.img}" height="75px" width="75px">
      <div class="number">${this.number}</div> 
      <button>BUY</button> 
    </li>`);
  }
}

const autoClickers = new AutoClickers();
autoClickers.types.forEach(function(item, index) {
  item.insert()
  item.holder.querySelector(`#auto-${index}`).querySelector('button').addEventListener('click', function(e){
    item.purchase(e);
  });
});

const auto = setInterval(function() {
  autoClickers.types.forEach(clicker => clicker.click())
}, 1000);
