var Game = {
    character: {
        url: "https://cdn.jsdelivr.net/gh/PixelXII/platform/assets/character/char.png",
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
    createCanvas(800, 600); // final is 800x600
    Game.player = new Player(Game.character.img)
    Game.character.img.resize(0, 110)
    window.addEventListener("keydown", Game.player.move(key))
    window.addEventListener("keyup", Game.player.move(key))
}

function draw() {
    background(220);
    Game.player.update()
    onkeydown = onkeyup = function(key) {
      Game.player.move(key.keyCode)
    }
}

setTimeout(() => console.log(Game), 800)