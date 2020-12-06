class Upgrades {
  constructor () {
    this.clickLevel = -1;
    this.clickButton  = document.getElementById('pick');
    this.list = [
      new Upgrade(0, "placeholder1", "*INSERT DESCRIPTION TEXT HERE* *INSERT DESCRIPTION TEXT HERE* *INSERT DESCRIPTION TEXT HERE*", 100, 2),
      new Upgrade(1, "placeholder2", "*INSERT DESCRIPTION TEXT HERE* *INSERT DESCRIPTION TEXT HERE* *INSERT DESCRIPTION TEXT HERE*", 1000, 5),
      new Upgrade(2, "placeholder3", "*INSERT DESCRIPTION TEXT HERE* *INSERT DESCRIPTION TEXT HERE* *INSERT DESCRIPTION TEXT HERE*", 100000, 250),
      new Upgrade(3, "placeholder4", "*INSERT DESCRIPTION TEXT HERE* *INSERT DESCRIPTION TEXT HERE* *INSERT DESCRIPTION TEXT HERE*", 100, 1.5)
    ];
  }
  
  updateUpgrade(money) {
    for(const upgrade of this.list) {
      if(!upgrade.purchased) {
        if(upgrade.cost > money) {
          this.holder.querySelector('button').disabled = true;
        } else {
          this.holder.querySelector('button').disabled = false;
        }
      }
    }
  }
}

class Upgrade {
  constructor(id, name, description, cost, value) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.cost = cost;
    this.value = value;
    this.holder =  document.querySelector(".upgrades");
    this.purchased = false;
  }

  purchase() {
    this.remove()
    game.money.update(-this.cost);
    return this.value;
  }

  insert() {
    this.holder.insertAdjacentHTML("beforeend", 
    `<li id="${this.id}>
      ${this.name}: $${this.cost}
      ${this.description}
      <button>BUY</button> 
    </li>`);
  }

  remove() {
    this.holder.querySelector(`#${this.id}`).remove();
  }
}

const upgrades = new Upgrades();

upgrades.updateClick();
upgrades.updateMine();