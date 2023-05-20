class GameLevel extends Phaser.Scene {
    init(data) {
        this.location = data.location || {r: 3, c: 1};
    }

    constructor(key, name) {
        super(key);
        this.name = name;
    }

    create() {
        this.transitionDuration = 1000;

        this.w = this.game.config.width;
        this.h = this.game.config.height;
        this.s = this.game.config.width * 0.01;

        this.cameras.main.setBackgroundColor('#444');
        this.map = this.cache.json.get('map');
    }

    gotoScene(key) {
        this.cameras.main.fade(this.transitionDuration, 0, 0, 0);
        this.time.delayedCall(this.transitionDuration, () => {
            this.scene.start(key, {
                inventory: this.inventory,
                coins: this.coins,
            });
        });
    }

    onEnter() {
        console.warn('This GameScene did not implement onEnter():', this.constructor.name);
    }
}