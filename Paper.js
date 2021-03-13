class Paper {
    constructor(x, y, r){
        var options = {
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            desnity: 1.2
        }

        this.body = Bodies.circle(x, y, r, options)
        this.r = r;
        World.add(world, this.body);
    }

    display(){
        var paper_position = this.body.position;
        push()
        translate(paper_position.x, paper_position.y)
        ellipseMode(CENTER)
        strokeWeight(3);
        ellipse(0, 0, this.r);
        pop()
    }
}