class Player {
  constructor(img) {
    this.img = img
    this.acceleration = createVector(0, 0)
    this.position = createVector(200, 200)
    this.speed = 0.5
  }
  update() { // also the show function
    this.position.add(this.acceleration)
    image(this.img, this.position.x, this.position.y)
  }
  move(key) {
    key = key.keyCode
    if (key === Game.up) {
      this.acceleration.y += this.speed
    }
    if (key === Game.down) {
      this.acceleration.y -= this.speed
    }
    if (key === Game.left) {
      this.acceleration.x += this.speed
    }
    if (key === Game.right) {
      this.acceleration.x -= this.speed
    }
  }
}

  // other classes? Enemy, Friendly (both need some kind of pathfinding tho)