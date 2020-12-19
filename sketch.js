const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var maxDrops = 100
var thunder1,thunder2,thunder3,thunder4,walkingMan
var player
var t
var r
var drops = [];
var maxDrops = 100;
function preload(){
    thunder1 = loadImage("images/thunderbolt/1.png")
    thunder2 = loadImage("images/thunderbolt/2.png")
    thunder3 = loadImage("images/thunderbolt/3.png")
    thunder4 = loadImage("images/thunderbolt/4.png")
    walkingMan = loadAnimation("images/Walking Frame/walking_1.png","images/Walking Frame/walking_2.png",
    "images/Walking Frame/walking_3.png","images/Walking Frame/walking_4.png",
    "images/Walking Frame/walking_5.png","images/Walking Frame/walking_6.png",
    "images/Walking Frame/walking_7.png","images/Walking Frame/walking_8.png")
}

function setup(){
    engine = Engine.create();
    world = engine.world;
    createCanvas(600,900)
    player = createSprite(300,550,20,60)
    player.addAnimation("walkingman",walkingMan)
    if(frameCount % 150 === 0){

        for(var i=0; i<maxDrops; i++){
            drops.push(new Drop(random(0,600), random(0,600)));
        }
  
    }
}

function draw(){
    Engine.update(engine)
    background("black")
    thunder()
    drawSprites()
}   

function thunder(){
    r = Math.round(random(1,4))
    if(frameCount%90 == 0){
        t = createSprite(Math.round(random(90,400)),Math.round(random(90,10)),10,30)
        t.velocityX = -5;
    switch(r){
        case 1:t.addImage(thunder1);
        t.scale = 0.8;
        case 2:t.addImage(thunder2);
        t.scale = 1.3;
        case 3:t.addImage(thunder3);
        t.scale = 1.2;
        case 4:t.addImage(thunder4);
        t.scale = 0.7;
        default:break;
    }
    }
    for(var i = 0; i<maxDrops; i++){
        drops[i].Drop();
        drops[i].updateRainPosition()
        
    }
}
