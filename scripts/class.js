class Player {
  constructor(img) {
    this.img = img
    this.acceleration = createVector(0, 0)
    this.velocity = createVector(0, 0)
    this.position = createVector(200, 200)
    this.speed = 4;
    this.physicsBody = Bodies.rectangle(this.position.x, this.position.y, 43, 112)
    this.maxspeed = 6;
    World.add(world, this.physicsBody)
  }
  update() { // also the show function
    this.velocity.add(this.acceleration);
    this.velocity.limit(this.maxspeed);
    this.position.add(this.velocity);

    image(this.img, this.position.x, this.position.y);
    this.physicsBody.position.x = this.position.x
    this.physicsBody.position.y = this.position.y
  }
  move() {
    let acc = this.acceleration
    let sp = this.speed
    let vl = this.velocity
    let p = this;
    onkeydown = onkeyup = function(key) {
      key = key.keyCode
      // if (key === Game.controls.up) {
      //   acc.y -= sp
      // }
      // if (key === Game.controls.down) {
      //   acc.y += sp
      // }
      if (key === Game.controls.left) {
        acc.x -= sp
      }
      if (key === Game.controls.right) {
        acc.x += sp
      }
      if (key === Game.controls.up) {
        p.jump()
      }
    }
    onkeyup = function() {
      vl.sub(vl)
      acc.sub(acc)
    }
  }
  playAnim() {
    // change this.img based on animation frame paths in array
  }
  jump() {
    this.acceleration.y -= this.speed/1.5
    setTimeout(() => this.acceleration.y += this.speed, 250)
    setTimeout(() => this.acceleration.y = 0, 300)
  }
}
// other classes? Enemy, Friendly (both need some kind of pathfinding tho)
