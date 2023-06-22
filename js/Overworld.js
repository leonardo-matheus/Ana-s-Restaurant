class Overworld {
    constructor(config) {
        this.element = config.element;
        this.canvas = this.element.querySelector('.game-canvas');
        this.ctx = this.canvas.getContext('2d');
    }

init() {
    const image = new Image();
    image.onload = () => {
        this.ctx.drawImage(image, 0, 0);
    };
    image.src = "/img/maps/DemoLower.png";

    const x = 4;
    const y = 5;

    // * Sombra
    const shadow = new Image();
    shadow.onload = () => {
        this.ctx.drawImage(
            shadow,
            0, // corte esquerdo
            0, // corte superior
            32, // largura do corte
            32, // altura do corte
            x * 16 - 8, // posição x no canvas
            y * 16 - 18, // posição y no canvas
            32,
            32
        )
    };
    shadow.src = "/img/characters/shadow.png";


     // * Personagem Ana
    const ana = new Image();
    ana.onload = () => {
        this.ctx.drawImage(
            ana,
            0, // corte esquerdo
            0, // corte superior
            32, // largura do corte
            32, // altura do corte
            x * 16 - 8, // posição x no canvas
            y * 16 - 18, // posição y no canvas
            32,
            32
        )
    };
    ana.src = "/img/characters/people/ana.png";
}

}
