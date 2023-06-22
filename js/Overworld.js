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
    image.src = "/img/maps/Kitchen.png";

    //Objetos
    const ana = new GameObject({
        x:4,
        y:6,
    });

    setTimeout(() => {
        ana.sprite.draw(this.ctx);
    }, 200);
}

}
