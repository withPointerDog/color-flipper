import { HexColor } from "../color flipper/hex.js";

class SimpleColor extends HexColor {
  constructor() {
    super();

    this._colors = ["green", "red", "black", "grey", "olive", "pink"];
    document
      .querySelector(".container__button")
      .addEventListener("click", () => this.showsNextColor());
  }

  getColors() {
    return Object.values(this._colors);
  }

  showsNextColor() {
    let iRndm = this.generRndmIndex();
    document.body.style.backgroundColor = this._colors[iRndm];
    document.querySelector(".container__color").textContent =
      this._colors[iRndm];
  }
}

const simple = new SimpleColor();
