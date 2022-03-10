class GameObject{
    constructor(config){
        this.y = config.y || 0;   //Captura la posicion
        this.x = config.x || 0;   //Captura la posicion
        this.sprite = new Sprite    ({
            gameObject: this,     //Captura la forma en la que aparecera
            src: config.src || "/IMG/characters/people/hero.png"
        })          
    }
}