class Main{
    canvas:HTMLCanvasElement;
    stage:createjs.Stage;
    helloLabel:objects.Label;

    constructor(){
        this.canvas = document.getElementById('canvas') as HTMLCanvasElement;
        this.stage = new createjs.Stage(this.canvas);

        this.helloLabel = new objects.Label("Hello, World",'60px','Consola','black',125,125,false);


        this.stage.addChild(this.helloLabel);

        createjs.Ticker.setFPS(60);
        createjs.Ticker.on('tick', this.handleTick.bind(this));
    }

    handleTick():void {
        this.stage.update();
    }
}

var x = new Main();
