class Overworld {
    constructor(config) {
        this.element = config.element;
        this.canvas = this.element.querySelector(".game-canvas");
        this.ctx = this.canvas.getContext("2d");
    }
    init() {


        const image = new Image();
        image.onload = () => {
            this.ctx.drawImage(image, 0, 0)
        };
        image.src = "/IMG/maps/demo.png";

        const sombra = new Image();
        sombra.onload = () => {
            this.ctx.drawImage(sombra,
                0, //left cut 
                0, //top cut,
                32, //width of cut
                32, //height of cut
                x * 16 - 8,
                y * 16 - 18,
                32,
                32)
        };
        sombra.src = "IMG/characters/sombra.png"



        
        const x = 5;
        const y = 6;
        const prota = new Image();
        prota.onload = () => {
            this.ctx.drawImage(prota,
                0, //left cut 
                0, //top cut,
                32, //width of cut
                32, //height of cut
                x * 16 - 8,
                y * 16 - 18,
                32,
                32)
        };
        prota.src = "/IMG/characters/peaple/Prota.png";
    }
}