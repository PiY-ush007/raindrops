class Rain{
 constructor(){
     var options={
         speed:5
     }
     this.body = Bodies.rectangle(0, 0, width, height, options);
     this.width = width;
     this.height = height;
     World.add(world, this.rain);

 }






 display(){
   push();
   translate(this.body.position.x, this.body.position.y);
   rectMode(CENTER);
   rect(0, 0, this.width, this.height,options);
   pop();

 }





}