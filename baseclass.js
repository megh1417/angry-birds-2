class BaseClass {
    constructor(x,y,w,h){
        var world_option = {
            restitution : 1.0,
            friction : 1.0
          }

          this.width=w;
          this.height=h;

          this.body = Bodies.rectangle(x,y,w,h,world_option);
          this.image = loadImage('sprites/base.png');
          World.add(world,this.body);
}
display(){
    push () ;

    translate(this.body.position.x,this.body.position.y)
    angleMode(RADIANS)
    rotate (this.body.angle)
    fill ("brown");
    imageMode(CENTER);

    // image(varofimage,x,y,w,h)
    image(this.image,0,0,this.width , this.height);
    pop ();

    
 }
}