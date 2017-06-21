var Main = (function () {
    function Main() {
        this.canvas = document.getElementById('canvas');
        this.stage = new createjs.Stage(this.canvas);
        var label = new createjs.Text("Hello, World", "60px Consolas", 'black');
        this.stage.addChild(label);
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