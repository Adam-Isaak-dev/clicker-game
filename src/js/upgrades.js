class Upgrades {
  constructor () {
    this.list = [
      new Upgrade(0, 'click', "Golden Touch", "Click <br> +100%", 50, 1, "images\\020-Gold Ingots.png"),
      new Upgrade(1, 'production', "TNT", "Production +15%", 250, 0.15, "images\\041-tnt.png"),
      new Upgrade(2, 'click', "Gemstone Touch", "Click <br> +300%", 300, 3, "images\\025-precious stones.png"),
      new Upgrade(3, "distribution", 'Extra Stock', "Distribution +20%", 500, 0.1,"images\\040-stock.png"),
      new Upgrade(4, "commerce", 'Investors', "Commerce +10%", 1000, 0.10, 'images\\030-money bag.png'),
      new Upgrade(5, "click", "Supreme Golden Touch", "Click +500%", 1000, 5, "images\\018-gold ingots.png"),
      new Upgrade(6, "commerce", "Trading", "Commerce +10%", 2000, 0.1, "images\\043-trade.png"),
      new Upgrade(7, "production", 'Deeper Mines', "Production +10%", 5000, 0.1, 'images\\045-tunnel.png'),
      new Upgrade(8, "multiplier", "More Locations", "Bonus <br> +5%", 10000, 0.05, "images\\019-gold mine.png"),
      new Upgrade(9, "commerce", 'Market Growth', "Commerce +20%", 10000, 0.15, 'images\\024-invest.png'),
      new Upgrade(10, "distribution", 'Enhanced Rails', "Distribution +20%", 37500, 0.20, 'images\\034-railway.png'),
      new Upgrade(11, "multiplier", 'Analytics', "Bonus <br> +5%", 10000, 0.1, 'images\\001-analytics.png')
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
    document.getElementById(type).innerText = `${((game[type] - 1)*100).toFixed(0)}`;
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
    const boughtTag = document.createElement('div');
    boughtTag.innerHTML = "<strong><em>BOUGHT</em></strong>";
    const button = document.querySelector(`#upgrade-${this.id}`).querySelector("button");
    button.parentNode.replaceChild(boughtTag, button);

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
