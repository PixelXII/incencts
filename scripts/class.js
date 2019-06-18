var Bodies = Matter.Bodies,
    World = Matter.World,
    Engine = Matter.Engine;
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

class CustomRect { // for matter.js and p5js compatibility
  constructor(body, width, height, color, image) {
    this.body = body
    this.width = width
    this.height = height
    this.color = color
    this.image = image
  }
  showAsRect() {
    var vertices = this.body.vertices;
    fill(this.color);
    beginShape(); // DOES NOT WORK FOR IMAGES, HELP!!!
    for (var i = 0; i < vertices.length; i++) {
      vertex(vertices[i].x, vertices[i].y); // basically everything for the physics system
    }
    endShape();
  }
  displayImage() {
    image(this.image, this.body.position.x, this.body.position.y, this.width, this.height)
  }
}

// other classes? Enemy, Friendly (both need some kind of pathfinding tho)

class Enemy {
  constructor(aitype, agression, {x, y, w, h}) {
    if(aitype instanceof AIType) {
      this.aitype = aitype
    }
    this.agression = agression // what value? number? string? object?
    // what does agression determine? health? speed and agility towards player? differnet *levels of intellegence* while navigating?
    this.physicsBody = Bodies.rectangle(x, y, w, h)
    this.customBody = new CustomRect(this.physicsBody, w, h, 51, "../assets/enemy/static.png")
  }
  seek(target) {
    // steer = desired - velocity
  }
}
