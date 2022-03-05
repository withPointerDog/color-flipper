export class HexColor {
  #colorName = document.querySelector(".container__color");
  #bodyStyles = document.body.style;

  constructor() {
    this._colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D"];
    document
      .querySelector(".container__button")
      .addEventListener("click", () => this.showsNextColor());
  }

  setAddColor(color) {
    this._colors.push(`${color}`);
  }

  showsNextColor() {
    let hex = "#";

    for (let i = 0; i < 6; i++) {
      let rndmIndex = this.generRndmIndex();
      hex += this._colors[rndmIndex];
    }

    this.#bodyStyles.backgroundColor = hex;
    this.#colorName.textContent = hex;
  }

  generRndmIndex() {
    return Math.floor(Math.random() * this._colors.length);
  }
}

const hex = new HexColor();
