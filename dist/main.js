var Main = (function () {
    function Main() {
        this.canvas = document.getElementById('canvas');
        this.stage = new createjs.Stage(this.canvas);
        this.helloLabel = new objects.Label("Hello, World", '60px', 'Consola', 'black', 125, 125, false);
        this.stage.addChild(this.helloLabel);
        createjs.Ticker.setFPS(60);
        createjs.Ticker.on('tick', this.handleTick.bind(this));
    }
    Main.prototype.handleTick = function () {
        this.stage.update();
    };
    return Main;
}());
var x = new Main();
//# sourceMappingURL=main.js.map