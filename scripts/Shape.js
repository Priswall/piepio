function Shape(x, y, id) {
    this.pos = new Vector(x, y);
    this.rotation = 0;
    this.id = id;
    this.vel = new Vector(random(-1, 1) / 10, random(-1, 1) / 10);
    this.pushVel = new Vector(0, 0);
    this.rotationSpeed = 0;
    
    this.update = function() {
        if(Math.abs(this.rotationSpeed) < 0.05) {
            switch(this.id) {
                case 0:
                    this.rotationSpeed = random(-1, 1) / 2;
                    this.size = 30;
                    break;
                case 1:
                    this.rotationSpeed = random(-1, 1) / 4;
                    this.size = 40;
                    break;
                case 2:
                    this.rotationSpeed = random(-1, 1) / 8;
                    this.size = 50;
                    break;
            }
        }
        this.rotation += this.rotationSpeed;
        this.pos.x += this.vel.x;
        this.pos.y += this.vel.y;
        this.pos.x += this.pushVel.x;
        this.pos.y += this.pushVel.y;
        if(this.pushVel.x > 0) this.pushVel.x -= 0.1;
        if(this.pushVel.x < 0) this.pushVel.x += 0.1;
        if(this.pushVel.y > 0) this.pushVel.y -= 0.1;
        if(this.pushVel.y < 0) this.pushVel.y += 0.1;
        if(Math.abs(this.pushVel.x) < 0.1) this.pushVel.x = 0;
        if(Math.abs(this.pushVel.y) < 0.1) this.pushVel.y = 0;
        
        this.pos.x = constrain(this.pos.x, -750, 750);
        this.pos.y = constrain(this.pos.y, -750, 750);
        this.vel.x = constrain(this.vel.x, -0.5, 0.5);
        this.vel.y = constrain(this.vel.y, -0.5, 0.5);
    };
    
    this.gotHit = function(other) {
        if(other instanceof Tank) {
            this.pushVel.x = -Math.atan2(other.pos.x - this.pos.x, other.pos.y - this.pos.y);
            this.pushVel.y = -Math.atan2(other.pos.y - this.pos.y, other.pos.x - this.pos.x);
            other.pos.x += Math.atan2(other.pos.x - this.pos.x, other.pos.y - this.pos.y) * 0.5;
            other.pos.y += Math.atan2(other.pos.y - this.pos.y, other.pos.x - this.pos.x) * 0.5;
        } else if(other instanceof Shape) {
            this.pushVel.x = -Math.atan2(other.pos.x - this.pos.x, other.pos.y - this.pos.y) / 3;
            this.pushVel.y = -Math.atan2(other.pos.y - this.pos.y, other.pos.x - this.pos.x) / 3;
            this.vel.x += this.pushVel.x / 10;
            this.vel.y += this.pushVel.y / 10;
        } else if(other instanceof Bullet) {
            this.pushVel.x = -Math.atan2(other.pos.x - this.pos.x, other.pos.y - this.pos.y) * (other.speed / 4);
            this.pushVel.y = -Math.atan2(other.pos.y - this.pos.y, other.pos.x - this.pos.x) * (other.speed / 4);
            other.pos.x += Math.atan2(other.pos.x - this.pos.x, other.pos.y - this.pos.y) * 0.5;
            other.pos.y += Math.atan2(other.pos.y - this.pos.y, other.pos.x - this.pos.x) * 0.5;
            /*
            if cooldown >= reload
                health - bullet damage
                cooldown = 0
                timestamp = time.getDate()
            else
                cooldown = time.getDate() - timestamp
            */
            other.speed -= 0.1;
            other.lifetime--;
        }
    };
    
    this.draw = function() {
        switch(this.id) {
            case 0:
                c.fillStyle = colors.lightyellow;
                c.strokeStyle = colors.strokeyellow;
                c.save();
                c.translate(this.pos.x, this.pos.y);
                c.rotate(this.rotation * (Math.PI / 180));
                rect(-15, -15, 30, 30);
                c.restore();
                break;
                
            case 1:
                c.fillStyle = colors.lightred;
                c.strokeStyle = colors.strokered;
                c.save();
                c.translate(this.pos.x, this.pos.y);
                c.rotate(this.rotation * (Math.PI / 180));
                c.beginPath();
                c.moveTo(0, 34.7);
                c.lineTo(-20, 0);
                c.lineTo(20, 0);
                c.lineTo(0, 34.7);
                c.fill();
                c.stroke();
                c.restore();
                break;
                
            case 2:
                c.fillStyle = colors.lightpurple;
                c.strokeStyle = colors.strokepurple;
                c.save();
                c.translate(this.pos.x, this.pos.y);
                c.rotate(this.rotation * (Math.PI / 180));
                c.beginPath();
                c.moveTo(-28.5, 9.3);
                c.lineTo(0, 30);
                c.lineTo(28.5, 9.3);
                c.lineTo(17.6, -24.3);
                c.lineTo(-17.6, -24.3);
                c.lineTo(-28.5, 9.3);
                c.fill();
                c.stroke();
                c.restore();
                break;
        }
        c.fillText(this.id, this.pos.x, this.pos.y - 20);
    };
}

var script = document.createElement("script");
script.src = "scripts/TankOrder.js";
script.async = true;
document.body.appendChild(script);
