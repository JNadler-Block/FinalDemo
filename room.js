class Start extends GameLevel {
    constructor() {
        super("game level", "Start");
    }

    preload() {
        this.load.json('map', 'map.json');
    }

    onEnter() {
        console.log("hello");
        //console.log(this.h);
    }
}

const game = new Phaser.Game({
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1920,
        height: 1080
    },
    physics: {
        default: 'arcade',
        //arcade: { debug: true }
    },
    backgroundColor: 0x212121,
    scene: [Start],
    title: "Game",
});