class Overworld {
  constructor(config) {
    this.element = config.element;
    this.canvas = this.element.querySelector(".game-canvas");
    this.ctx = this.canvas.getContext("2d");
    this.map = null;
  }

  starGameLoop() {
    const step = () => {
      console.log("funcionando")

      //Limpia el lienzo
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

      //Dibuja la capa inferior
      this.map.drawLowerImage(this.ctx);

      //Dibuja los objetos del juego
      Object.values(this.map.gameObjects).forEach(object =>{
        object.x += 0.02;
        object.sprite.draw(this.ctx);
      })

      //Dibuja la capa superrior
      this.map.drawUpperImage(this.ctx);

      requestAnimationFrame(() => {
        step();
      })
    }
    step();
  }
  init() {
    this.map = new OverworldMap(window.OverworldMaps.DemoRoom)
    this.starGameLoop();
  }
}
