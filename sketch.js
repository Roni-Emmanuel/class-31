const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;
var gamestate = "onsling";


function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:50});
    // a variable can hold a single value of data which can be a string or no. or boolean or undefined or null 
     var st = "this is string";
     console.log(st);
     var num = 100;
     console.log(num);
     var boo = true;
     console.log(boo);
     var object;
     console.log(object);
     object = null;
     console.log(object);
     
     // an array can hold multiple values of data at a time
     var arr1 = [1,2,3,4,5,6,7,8,9];
     console.log(arr1);
     // to access the 5th element
     console.log(arr1[4]);

     // to access the 1th element
     console.log(arr1[0]);

     // an array can hold a data of different data types
     var arr2 = ["name",12,false];
     console.log(arr2);

     // an array can hold a list of arrays
     var arr3 = [[1,2],[100,200],[3,0]];
     console.log(arr3);
     // to display the first element of second element of array
     console.log(arr3[1][0]);

     // to add a new element at end of an array
     arr2.push("last");
     console.log(arr2);
     // to remove the last element of the array
     arr2.pop();
     console.log(arr2);
     
     
     arr2.pop();
     console.log(arr2);









}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    platform.display();
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
    if (gamestate !== "launched"){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});    
    }
    

}


function mouseReleased(){
    slingshot.fly();
    gamestate = "launched";
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(bird.body);
    }
}
