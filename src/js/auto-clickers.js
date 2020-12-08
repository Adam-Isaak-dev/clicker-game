class AutoClickers {
  constructor() {
    this.types = [
      new Clicker(0, 'production', 'Miner', 1, 10, "images\\028-miner.png"),
      new Clicker(1, 'production', 'Excavator', 10, 100, "images\\014-excavator.png"),
      new Clicker(2, 'production', 'Refinery', 100, 500, "images\\035-refinery.png")
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
