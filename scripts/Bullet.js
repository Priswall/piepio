function Bullet(x, y, dx, dy, id, source) {
    this.pos = new Vector(x, y);
    this.destination = new Vector(this.pos.x - dx, this.pos.y - dy);
    this.mag = Math.sqrt(this.destination.x * this.destination.x + this.destination.y * this.destination.y);
    this.id = id;
    this.speed = source.bulletSpeed.y;
    this.damage = source.bulletDamage.y;
    this.lifetime = source.bulletPenetration.y * 20;
    this.team = source.team;
    
    this.update = function() {
        switch(this.id) {
            case 0:
                this.pos.x -= (this.destination.x / this.mag) * this.speed;
                this.pos.y -= (this.destination.y / this.mag) * this.speed;
                
                this.lifetime -= 0.1;
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
            case 0:
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