function Bullet(x, y, dx, dy, id, source) {
    this.pos = new Vector(x, y);
    this.destination = new Vector(this.pos.x - dx, this.pos.y - dy);
    this.mag = Math.sqrt(this.destination.x * this.destination.x + this.destination.y * this.destination.y);
    this.id = id;
    // Gets these variables from the tank that shot them using the source parameter
    this.speed = source.bulletSpeed.y;
    this.damage = source.bulletDamage.y;
    this.lifetime = source.bulletPenetration.y * 20;
    this.team = source.team;
    this.reload = 1000 / 3;
    this.cooldown = this.reload;
    this.timestamp = 0;

    this.update = function() {
        switch(this.id) {
            case 0:                 //Default bullet
                this.pos.x -= (this.destination.x / this.mag) * this.speed;
                this.pos.y -= (this.destination.y / this.mag) * this.speed;

                this.lifetime -= 0.1;
        }
        //Determine the amount of time passed since last damage tick
        if(this.cooldown < this.reload) {
            this.cooldown == time.getTime() - this.timestamp;
        }
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

        c.beginPath();
        switch(this.id) {
            case 0:                 //Default bullet
                c.arc(this.pos.x, this.pos.y, 8, 0, 2 * Math.PI);
                break;
        }
        c.fill();
        c.stroke();
    };
}

var script = document.createElement("script");
script.src = "scripts/Barrel.js";
script.async = true;
document.body.appendChild(script);
