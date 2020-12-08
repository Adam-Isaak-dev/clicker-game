class Upgrades {
  constructor () {
    this.list = [
      new Upgrade(0, "placeholder1", "*INSERT DESCRIPTION TEXT HERE*", 100, 2),
      new Upgrade(1, "placeholder2", "*INSERT DESCRIPTION TEXT HERE*", 1000, 5),
      new Upgrade(2, "placeholder3", "*INSERT DESCRIPTION TEXT HERE*", 100000, 250),
      new Upgrade(3, "placeholder4", "*INSERT DESCRIPTION TEXT HERE*", 100, 1.5)
    ];
  }
  
  checkUpgrades(money) {
    this.list.forEach(function(item) {
      if(!item.purchased) {
        if(item.cost > money) {
          item.holder.querySelector(`#upgrade-${item.id}`).querySelector('button').disabled = true;
        } else {
          item.holder.querySelector(`#upgrade-${item.id}`).querySelector('button').disabled = false;
        }
      }
    });
  } 
}

class Upgrade {
  constructor(id, name, description, cost, value) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.cost = cost;
    this.value = value;
    this.holder =  document.getElementById("upgrades");
    this.purchased = false;
  }

  purchase() {
    this.remove()
    this.purchased = true;
    game.money.update(-this.cost);
    this.value;
  }

  insert() {
    this.holder.insertAdjacentHTML("beforeend", 
    `<li id="upgrade-${this.id}">
      ${this.name}
      <div>${this.description}</div>
      $${this.cost}
      <br>
      <button>BUY</button> 
    </li>`);
  }

  remove() {
    document.querySelector(`#upgrade-${this.id}`).remove();
  }

  clickUpgrade
}

const upgrades = new Upgrades();
upgrades.list.forEach(function(item, index) {
  item.insert()
  document.querySelector(`#upgrade-${index}`).querySelector('button').addEventListener('click', function(){
    item.purchase();
  });
});
