//El objeto sprite deberia administrar todo lo visual que se ven en pantalla
class Sprite {
    constructor(config) {
  
      //Configuracion de imagen
      this.image = new Image();
      this.image.src = config.src;
      this.image.onload = () => {
        this.isLoaded = true;
      }
  
      //Sombra
      this.shadow = new Image();
      this.useShadow = true;          //Verifica si queremos sombras o no
      if (this.useShadow) {
        this.shadow.src = "/IMG/characters/sombra.png";
      }
      this.shadow.onload = () => {    //Carga las sombras
        this.isShadowLoaded = true;
      }
  
      //Animaciones
      this.animations = config.animations || {
        idleDown: [
          [0,0]
        ]
      }
      this.currentAnimation = config.currentAnimation || "Inactivo";     //Animacion Actual 
      this.currentAnimationFrame = 0;                                    //Frame Actual
  
      //Referencia al objeto del juego
      this.gameObject = config.gameObject;
    }
  
    draw(ctx) {
      const x = this.gameObject.x * 16 - 8;
      const y = this.gameObject.y * 16 - 18;
  
      this.isShadowLoaded && ctx.drawImage(this.shadow, x, y);
  
      this.isLoaded && ctx.drawImage(this.image,
        0,0,            //Corte de la imagen
        32,32,          //Tamaño de la imagen
        x,y,            //Posicion de la imagen
        32,32           //Pixeles de la imagen
      )
    }
  }