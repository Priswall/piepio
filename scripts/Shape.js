function Shape(x, y, id) {
    this.pos = new Vector(x, y);
    this.health = new Vector(0, 0);
    this.rotation = 0;
    this.timestamp = 0;
    this.id = id;
    this.reload = 1000 / 3;
    this.cooldown = this.reload;
    this.vel = new Vector(random(-1, 1) / 10, random(-1, 1) / 10);
    this.pushVel = new Vector(0, 0);
    this.rotationSpeed = 0;
    this.update = function() {
        if(Math.abs(this.rotationSpeed) < 0.05) {
            switch(this.id) {
                case 0:                 //Square
                    this.rotationSpeed = random(-1, 1) / 2;
                    this.size = 30;
                    this.health.x = 5;
                    this.health.y = this.health.x;
                    break;
                case 1:                 //Triangle
                    this.rotationSpeed = random(-1, 1) / 4;
                    this.size = 40;
                    this.health.x = 10;
                    this.health.y = this.health.x;
                    break;
                case 2:                 //Pentagon
                    this.rotationSpeed = random(-1, 1) / 8;
                    this.size = 50;
                    this.health.x = 20;
                    this.health.y = this.health.x;
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
            var dx = this.pos.x - other.pos.x;
            var dy = this.pos.y - other.pos.y;
            var mag = (dx * dx + dy * dy);
            this.pushVel.x = (dx / mag) * 50;
            this.pushVel.y = (dy / mag) * 50;
            if(other.cooldown >= other.reload){
                other.pos.x += (dx / mag) * 50;
                other.pos.y += (dy / mag) * 50;
                this.health.y -= other.damage;
                other.cooldown = 0;
                other. timestamp = time.getTime();
            }
            other.speed -= 0.1;
            other.lifetime--;
        }
    };

    this.draw = function() {
        //Create new canvas so transparency doesn't look weird
        var tempCanvas = document.createElement("canvas");
        var tempC = tempCanvas.getContext("2d");
        switch(this.id) {
            case 0:                 //Square
                tempC.fillStyle = colors.lightyellow;
                tempC.strokeStyle = colors.strokeyellow;
                tempC.save();
                tempC.translate(this.pos.x, this.pos.y);
                tempC.rotate(this.rotation * (Math.PI / 180));
                rect(-15, -15, 30, 30);
                tempC.restore();
                break;
            case 1:                 //Triangle
                tempC.fillStyle = colors.lightred;
                tempC.strokeStyle = colors.strokered;
                tempC.save();
                tempC.translate(this.pos.x, this.pos.y);
                tempC.rotate(this.rotation * (Math.PI / 180));
                tempC.beginPath();
                tempC.moveTo(0, 17.35);
                tempC.lineTo(-20, -17.35);
                tempC.lineTo(20, -17.35);
                tempC.lineTo(0, 17.35);
                tempC.fill();
                tempC.stroke();
                tempC.restore();
                break;
            case 2:                 //Pentagon
                tempC.fillStyle = colors.lightpurple;
                tempC.strokeStyle = colors.strokepurple;
                tempC.save();
                tempC.translate(this.pos.x, this.pos.y);
                tempC.rotate(this.rotation * (Math.PI / 180));
                tempC.beginPath();
                tempC.moveTo(-28.5, 9.3);
                tempC.lineTo(0, 30);
                tempC.lineTo(28.5, 9.3);
                tempC.lineTo(17.6, -24.3);
                tempC.lineTo(-17.6, -24.3);
                tempC.lineTo(-28.5, 9.3);
                tempC.fill();
                tempC.stroke();
                tempC.restore();
                break;
        }
        //Display the health if it was hit
        if(this.health.x != this.health.y) {
            tempC.strokeStyle = "rgba(0, 0, 0, 0.8)";
            tempC.lineWidth = 5;
            line(this.pos.x - (this.size / 2), this.pos.y + (this.size / 2) + 10, this.pos.x + (this.size / 2), this.pos.y + (this.size / 2) + 10);
            tempC.strokeStyle = colors.lightgreen;
            line(this.pos.x - (this.size / 2), this.pos.y + (this.size / 2) + 10, (this.pos.x - (this.size / 2)) + ((this.size / this.health.x) * this.health.y), this.pos.y + (this.size / 2) + 10);
            tempC.lineWidth = 3;
        }
        //Draw temporary canvas onto original canvas
        c.drawImage(tempCanvas, 0, 0);
    };
}

var script = document.createElement("script");
script.src = "scripts/TankOrder.js";
script.async = true;
document.body.appendChild(script);
