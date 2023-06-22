class Sprite {
    constructor(config) {

        //Setup da sprite
        this.image = new Image();
        this.image.src = config.src;
        this.image.onload = () => {
            this.isLoaded = true;
        }

        //Sombra
        this.shadow = new Image();
        this.shadow.src = config.shadow || "/img/shadow.png";
        this.shadow.onload = () => {
            this.isShadowLoaded = true;
        }
        this.useShadow = true; //!config.useShadow || false;


        //Configuração de animação e estado inicial
        this.animations = config.animations || {
            idleDown: [
                [0,0]
            ]
        }
        this.currentAnimation = config.currentAnimation || 'idleDown';
        this.currentAnimationFrame = 0;

        //Referência ao GameObject
        this.gameObject = config.gameObject;
    }

    draw(ctx){
        const x = this.gameObject.x * 16 - 8;
        const y = this.gameObject.y * 16 - 18;

        this.isLoaded && ctx.drawImage(this.image,
            0,0,
            32,32,
            x,y,
            32,32
            )
    }
}