class Particle{
    constructor(x, y) {
        var options = {
            isStatic:false,
        }
        this.body = Bodies.circle(x, y, 7,options);
        this.radius = 7;
        this.color = color(random(0,255),random(0,255),random(0,255))
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);
        pop();
      }
}