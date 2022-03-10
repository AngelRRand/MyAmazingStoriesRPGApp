class OverworldMap {
    constructor(config) {
      this.gameObjects = config.gameObjects;
  
      this.lowerImage = new Image();
      this.lowerImage.src = config.lowerSrc;
  
      this.upperImage = new Image();
      this.upperImage.src = config.upperSrc;
    }
  
    drawLowerImage(ctx) {
      ctx.drawImage(this.lowerImage, 0, 0)
    }
  
    drawUpperImage(ctx) {
      ctx.drawImage(this.upperImage, 0, 0)
    } 
  }

window.OverworldMaps = {
    DemoRoom: {
        lowerSrc: "/IMG/maps/DemoLower.png",
        upperSrc: "/IMG/maps/DemoUpper.png",
        gameObjects: {
            hero: new GameObject({
                x: 5,
                y: 8,
            }),
            npc1: new GameObject({
                x: 11,
                y: 6,
                src: "/IMG/characters/people/npc1.png"
            })
        }
    },
    Afuera: {
        lowerSrc: "/IMG/maps/AfueraLower.png",
        upperSrc: "/IMG/maps/AfueraUpper.png",
        gameObjects: {
            hero: new GameObject({
                x: 3,
                y: 5,
            }),
            npcA: new GameObject({
                x: 9,
                y: 6,
                src: "/IMG/characters/people/npc1.png"
            }),
            npcB: new GameObject({
                x: 10,
                y: 8,
                src: "/IMG/characters/people/npc1.png"
            })
        }
    },
}