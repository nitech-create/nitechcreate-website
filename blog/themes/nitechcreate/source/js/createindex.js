window.addEventListener("load", init);
var canvas = document.getElementById("createjs");
var width = document.body.clientWidth;
var height = document.documentElement.clientHeight;
canvas.width = width;
canvas.height = height*2;

function init() {
    // Stageオブジェクトを作成します
    var stage = new createjs.Stage("createjs");

    const ballnum = 150;
    const ballstripenum = 150;
    const linenum = 250;

    const ballsize = 30
    const ballstripesize = 0.1;
    const linesize=200;
    const lineweight=50

    var linesizearray=new Array(linenum)



    for (var i = 0; i < ballnum; i++) {
        var ball = new createjs.Shape();
        switch(Math.floor(Math.random()*6)){
            case 0:
                ball.graphics
                .beginFill("#F8759D")
                .drawCircle(0, 0, (Math.random() + 0.5) * ballsize);
                break;
            case 1:
                ball.graphics
                .beginFill("#FDA64A")
                .drawCircle(0, 0, (Math.random() + 0.5) * ballsize);
                break;
            case 2:
                ball.graphics
                .beginFill("#8CC919")
                .drawCircle(0, 0, (Math.random() + 0.5) * ballsize);
                break;
            case 3:
                ball.graphics
                .beginFill("#FD9267")
                .drawCircle(0, 0, (Math.random() + 0.5) * ballsize);
                break;
            case 4:
                ball.graphics
                .beginFill("#FBD000")
                .drawCircle(0, 0, (Math.random() + 0.5) * ballsize);
                break;
            default:
                ball.graphics
                .beginFill("#00B88E")
                .drawCircle(0, 0, (Math.random() + 0.5) * ballsize);
                break;

        }

        ball.x = (Math.random()*6-3) * width;
        ball.y = (Math.random()*6-3) * height;
        stage.addChild(ball);
    }

    
    for (var i = 0; i < ballstripenum; i++) {
        var ballstripe;
        switch(Math.floor(Math.random()*6)){
            case 0:
                ballstripe = new createjs.Bitmap("/img/eme.svg");
                break;
            case 1:
                ballstripe = new createjs.Bitmap("/img/orange.svg");
                break;
            case 2:
                ballstripe = new createjs.Bitmap("/img/pink.svg");
                break;
            case 3:
                ballstripe = new createjs.Bitmap("/img/green.svg");
                break;
            case 4:
                ballstripe = new createjs.Bitmap("/img/yellow.svg");
                break;
            default:
                ballstripe = new createjs.Bitmap("/img/salmon.svg");
                break;
            
        }
        stage.addChild(ballstripe);

        ballstripe.scale=(Math.random() + 0.5) * ballstripesize;
        
        ballstripe.x = (Math.random()*6-3) * width;
        ballstripe.y = (Math.random()*6-3) * height;
    }

    for (var i = 0; i < linenum; i++) {
        var line = new createjs.Shape();
        switch(Math.floor(Math.random()*6)){
            case 0:
                line.graphics
                .beginFill("#F8759D")
                break;
            case 1:
                line.graphics
                .beginFill("#FDA64A")
                break;
            case 2:
                line.graphics
                .beginFill("#8CC919")
                break;
            case 3:
                line.graphics
                .beginFill("#FD9267")
                break;
            case 4:
                line.graphics
                .beginFill("#FBD000")
                break;
            default:
                line.graphics
                .beginFill("#00B88E")
                break;

        }
var lineweights = (Math.random()+0.5)*lineweight;
var linesizes=(Math.random()*3+1.5)*linesize;
linesizearray[i]=linesizes;
        line.graphics.moveTo(linesizes,0)
        .lineTo(linesizes,lineweights)
        .lineTo(0,linesizes+lineweights)
        .lineTo(0,linesizes)
        .lineTo(linesizes,0)

        line.x = (Math.random()*6-3) * width;
        line.y = (Math.random()*6-3) * height;
        stage.addChild(line);
    }

    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener('tick', update , false);

    console.log(stage.children[21])
var scrollbefore=0;
var scrollafter=0;
    function update(){
        scrollbefore=scrollafter;
        scrollafter=window.pageYOffset;
        var scroll=scrollafter-scrollbefore;
        for(var i =0;i<ballnum;i++){
            stage.children[i].x +=scroll*stage.children[i].graphics.command.radius/200
            stage.children[i].y -=scroll*stage.children[i].graphics.command.radius/200
        }
        for(var i =ballnum;i<ballnum+ballstripenum;i++){
            stage.children[i].x +=scroll*stage.children[i].scale*3
            stage.children[i].y -=scroll*stage.children[i].scale*3
        }
        for(var i =ballnum+ballstripenum;i<ballnum+ballstripenum+linenum;i++){
            stage.children[i].x +=scroll*linesizearray[i-ballnum-ballstripenum]/300
            stage.children[i].y -=scroll*linesizearray[i-ballnum-ballstripenum]/300
        }
        stage.update();
    }

}