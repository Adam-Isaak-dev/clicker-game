class Upgrades {
  constructor () {
    this.list = [
      new Upgrade(0, 'click', "placeholder1", "*INSERT DESCRIPTION TEXT HERE*", 50, 1, "#"),
      new Upgrade(1, 'production', "placeholder2", "*INSERT DESCRIPTION TEXT HERE*", 250, 1, "#"),
      new Upgrade(2, "production", 'placeholder3', "*INSERT DESCRIPTION TEXT HERE*", 500, 0.5,"#"),
      new Upgrade(3, "multiplier", 'placeholder4', "*INSERT DESCRIPTION TEXT HERE*", 100, 0.5, '#')
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

  upgrade(type, id) {
    game[type] += this.list[id].value;
    console.log(type)
  }
}

class Upgrade {
  constructor(id, type, name, description, cost, value, img) {
    this.id = id;
    this.type = type;
    this.name = name;
    this.description = description;
    this.cost = cost;
    this.value = value;
    this.img = img;
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
      <img src="${this.img}" height="75px" width="75px">
      <button>BUY</button> 
    </li>`);
  }

  remove() {
    document.querySelector(`#upgrade-${this.id}`).remove();
  }
}

const upgrades = new Upgrades();
upgrades.list.forEach(function(item, index) {
  item.insert()
  document.querySelector(`#upgrade-${index}`).querySelector('button').addEventListener('click', function(){
    item.purchase();
    upgrades.upgrade(item.type, item.id);
  });
});
