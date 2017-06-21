(function() {
    var canvas;
    var stage;
    var helloLabel;

    function Start(){
        canvas = document.getElementById('canvas');
        stage = new createjs.Stage(canvas);
        createjs.Ticker.framerate = 60;
        createjs.Ticker.on('tick', Update);
        Game();
    }

    function Update(){
        stage.update();
    }

    function Game(){
        console.log('Game Starting...');

        helloLabel  = new createjs.Text("Hello World", "60px Consolas", "black");
        stage.addChild(helloLabel);
    }

    window.onload = Start;

})();