class Main{
    canvas:HTMLCanvasElement;
    stage:createjs.Stage;

    constructor(){
        this.canvas = document.getElementById('canvas') as HTMLCanvasElement;
        this.stage = new createjs.Stage(this.canvas);

        let label  = new createjs.Text("Hello, World", "60px Consolas", 'black');
        this.stage.addChild(label);

        createjs.Ticker.setFPS(60);
        createjs.Ticker.on('tick', this.handleTick.bind(this));
    }

    handleTick():void {
        this.stage.update();
    }
}

var x = new Main();
