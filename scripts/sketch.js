var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;


var Game = {
  character: {
    url: "https://cdn.jsdelivr.net/gh/PixelXII/incencts/assets/evensmallerchar.png", // 43 x 112
    img: null
  },
  controls: {
    up: 38,
    down: 40,
    left: 37,
    right: 39
  },
  player: null
}

let engine, world;

async function getGameData() {
  return fetch('./data.json')
    .then(response => {
      return response.json();
    })
    .then(json => {
      Game = json
      // loading images & sounds
      Game.chara = loadImage(Game.character)
    })
}


function preload() {
  // getGameData()
  Game.character.img = loadImage(Game.character.url)
}

function setup() {
  engine = Engine.create()
  world = engine.world;
  world.gravity.y = 1;

  createCanvas(400, 400); // final is 800x600
  Game.player = new Player(Game.character.img)
  // Game.character.img.resize(0, 110)
  window.addEventListener("keydown", Game.player.move(key))
  window.addEventListener("keyup", Game.player.move(key))
  frameRate(120)
}

function draw() {
  background(220);
  Engine.update(engine)
  Game.player.update()
  Game.player.move()
}

setTimeout(() => console.log(Game), 800)
