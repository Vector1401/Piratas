class Boat {
  constructor(x, y, width, height, boatPosY, boatAnimation) {

    this.animation = boatAnimation;
    this.speed = 0.05;

    this.body = Bodies.rectangle(x, y, width, height);

    // this.x = x;
    //this.y = y;
    this.width = width;
    this.height = height;
    // this.boat_image = loadImage("assets/boat.png");

    this.isBroken = false;

    this.boatPositionY = boatPosY;
    World.add(world, this.body);

  }

  animate() {
    this.speed += 0.05;
  }

  remove(index) {

    this.animation = brokenBoatAnimation;
    this.speed = 0.05;

    this.width = 300;
    this.height = 300;
    this.isBroken = true;

    setTimeout(() => {
      Matter.World.remove(world, barcos[index].body);
      barcos.splice(index,1);
    }, 2000);
  }

  display() {

    var index = floor(this.speed % this.animation.length);

    push();
    translate(this.body.position.x, this.body.position.y);
    imageMode(CENTER);
    image(this.animation[index], 0, this.boatPositionY, this.width, this.height);
    pop();
  }
}