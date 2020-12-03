class Upgrades {
  constructor () {
    this.clickLevel = -1;
    this.clickButton  = document.getElementById('pick');
    this.clicks = [{
      output: 2,
      cost: 1,
      name: `Sharpened Pick`
    }, {
      output: 5,
      cost: 2,
      name: `Tempered Pick`
    }, {
      output: 10,
      cost: 5,
      name: `Masterwork Pick`
    }];  
    
    this.mineLevel = -1;
    this.mineButton  = document.getElementById('mine');
    this.mines = [{
      output: 2,
      cost: 4,
      name: `Iron Mine`
    }, {
      output: 3,
      cost: 8,
      name: `Copper Mine`
    }, {
      output: 5,
      cost: 24,
      name: `Silver Mine`
    }];
  }

  updateClick() {
    this.clickLevel++;
    if(this.clickLevel < this.clicks.length) {
      this.clickButton.innerText = `${this.clicks[this.clickLevel].name}: $${this.clicks[this.clickLevel].cost}`;
    } else {
      this.clickButton.style.display = 'none';
    }
  }

  updateMine() {
    this.mineLevel++;
    if(this.mineLevel < this.mines.length) {
      this.mineButton.innerText = `${this.mines[this.mineLevel].name}: $${this.mines[this.mineLevel].cost}`;
    } else {
      this.mineButton.style.display = 'none';
    }
  }
}

const upgrades = new Upgrades();

upgrades.updateClick();
upgrades.updateMine();