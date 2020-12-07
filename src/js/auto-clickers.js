class AutoClickers {
  constructor() {
    this.types = [
      new Clicker(0, 'auto-clicker1', 1, 25),
      new Clicker(1, 'auto-clicker2', 10, 300),
      new Clicker(2, 'auto-clicker3', 100, 2000)
    ];
  }

  checkAutos() {
    const container = document.getElementById('auto-clickers');
    for(const item of this.list) {
      if(!item.purchased) {
        if(item.cost > money) {
          container.querySelector('button').disabled = true;
        } else {
          container.querySelector('button').disabled = false;
        }
      }
    }
  }
}

class Clicker {
  constructor(id, name, value, cost) {
    this.id = id;
    this.level = 0;
    this.number = 0;
    this.name = name;
    this.value = value;
    this.cost =  cost;
    this.holder = document.getElementById('auto-clickers')
  }

  click() {
    game.money.update(this.number * this.value * game.multiplier)
  }
  
  purchase() {
    console.log('purchased auto')
    game.money.update(-this.cost);
    this.number++;
  }

  insert() {
    this.holder.insertAdjacentHTML("beforeend", 
    `<li id="auto-${this.id}">
      ${this.name}
      $${this.cost}
      <div class="number">${this.number}</div> 
      <button>BUY</button> 
    </li>`);
  }
}

const autoClickers = new AutoClickers();
autoClickers.types.forEach(function(item, index) {
  item.insert()
  item.holder.querySelector(`#auto-${index}`).querySelector('button').addEventListener('click', function(){
    item.purchase();
  });
});

const auto = setInterval(function() {
  autoClickers.types.forEach(clicker => clicker.click())
}, 1000);
