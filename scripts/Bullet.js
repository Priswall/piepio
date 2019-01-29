function Bullet(x, y, dx, dy, id, source) {
    this.id = id;
    this.pos = new Vector(x, y);
    if(this.id === 0) this.vel = new Vector(2, 2);
    if(this.id === 1) this.vel = new Vector(0, 0);
    this.destination = new Vector(this.pos.x - dx, this.pos.y - dy);
    this.mag = Math.sqrt(this.destination.x * this.destination.x + this.destination.y * this.destination.y);
    // Gets these variables from the tank that shot them using the source parameter
    this.speed = source.bulletSpeed.y;
    this.damage = source.bulletDamage.y;
    this.lifetime = source.bulletPenetration.y * 20;
    this.team = source.team;
    this.reload = 1000 / 3;
    this.cooldown = 1000 / 3;
    this.timestamp = 0;

    this.update = function() {
        switch(this.id) {
            case 0:                 //Default bullet
                this.pos.x -= (this.destination.x / this.mag) * (this.speed + this.vel.x);
                this.pos.y -= (this.destination.y / this.mag) * (this.speed + this.vel.y);

                this.lifetime -= 0.1;
                break;
            case 1:
                this.destination = new Vector(this.pos.x - (mouse.x - cam.x), this.pos.y - (mouse.y - cam.y));
                this.mag = Math.sqrt(this.destination.x * this.destination.x + this.destination.y * this.destination.y);
                this.vel.x -= (this.destination.x / this.mag) * (this.speed / 15);
                this.vel.y -= (this.destination.y / this.mag) * (this.speed / 15);
                this.pos.x += this.vel.x / 2;
                this.pos.y += this.vel.y / 2;
                break;
        }
        this.vel.x = constrain(this.vel.x, -this.speed, this.speed);
        this.vel.y = constrain(this.vel.y, -this.speed, this.speed);
        if(this.vel.x > 0.1) this.vel.x -= 0.1;
        else if(this.vel.x < 0.1) this.vel.x += 0.1;
        else this.vel.x = 0;
        if(this.vel.y > 0.1) this.vel.y -= 0.1;
        else if(this.vel.y < 0.1) this.vel.y += 0.1;
        else this.vel.y = 0;
        //Determine the amount of time passed since last damage tick
        if(this.cooldown < this.reload)
            this.cooldown = time.getTime() - this.timestamp;
    };

    this.draw = function() {
        switch(this.team) {
            case 0:
                c.fillStyle = colors.lightblue;
                c.strokeStyle = colors.strokeblue;
                break;
            case 1:
                c.fillStyle = colors.lightred;
                c.strokeStyle = colors.strokered;
                break;
            case 2:
                c.fillStyle = colors.lightgreen;
                c.strokeStyle = colors.strokegreen;
                break;
            case 3:
                c.fillStyle = colors.lightpurple;
                c.strokeStyle = colors.strokepurple;
                break;
            default:
                c.fillStyle = colors.lightgray;
                c.strokeStyle = colors.strokegray;
                break;
        }

        c.save();
        c.translate(this.pos.x, this.pos.y);
        c.beginPath();
        switch(this.id) {
            case 0:                 //Default bullet
                c.arc(0, 0, 6 + (this.damage * 1.5), 0, 2 * Math.PI);
                break;
            case 1:                 //Drone
                c.rotate(-Math.atan2(this.destination.x / this.mag, this.destination.y / this.mag));
                c.moveTo(-6 - (this.damage * 0.75), 6 + (this.damage * 0.75));
                c.lineTo(6 + (this.damage * 0.75), 6 + (this.damage * 0.75));
                c.lineTo(0, -4.4 - (this.damage * 0.75));
                c.lineTo(-6 - (this.damage * 0.75), 6 + (this.damage * 0.75));
                break;
        }
        c.fill();
        c.stroke();
        c.restore();
    };
}

var script = document.createElement("script");
script.src = "scripts/Barrel.js";
script.async = true;
document.body.appendChild(script);
