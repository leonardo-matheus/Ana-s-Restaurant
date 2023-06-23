class OverworldMap {
    constructor(config) {
        this.gameObjects = config.gameObjects;

        this.lowerImage = new Image();
        this.lowerImage.src = config.lowerSrc;
        
        this.upperImage = new Image();
        this.upperImage.src = config.upperSrc;
    }

    drawLowerImage(ctx){
        ctx.drawImage(this.lowerImage, 0, 0);
    }

    drawUpperImage(ctx){
        ctx.drawImage(this.upperImage, 0, 0);
    }
}

window.OverworldMaps = {
    Restaurant: {
        lowerSrc: "/img/maps/restaurant/restaurant.png",
        upperSrc: "/img/maps/restaurant/restaurant_upper.png",
        gameObjects: {
            ana: new GameObject({
                x:4,
                y:6,
        })
    },
    Kitchen: {
    
    },
    Street: {

    },
}}
