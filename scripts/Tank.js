var classes = [
    "Basic Tank",
    "Twin",
    "Sniper",
    "Machine Gunner",
    "Flank Guard"
];

function Tank(x, y, rotation, team, id) {
    this.pos = new Vector(x, y);
    this.rotation = rotation;
    this.team = team;
    this.id = id;
    this.class = classes[this.id];
    this.xp = 0;
    this.lvl = 0;
    this.acc = 0.2;
    this.vel = new Vector(0, 0);
    this.maxSpeed = new Vector(3, 3);
    this.bulletDamage = new Vector(1, 1);
    this.barrels = [new Barrel(0, 0, 0, 20, 50, 0)];
    this.reload = new Vector(tankstats[this.class].reload, tankstats[this.class].reload);
    this.bulletSpeed = new Vector(tankstats[this.class].bulletSpeed, tankstats[this.class].bulletSpeed);
    this.spread = new Vector(tankstats[this.class].spread, tankstats[this.class].spread);
    this.bulletPenetration = new Vector(1, 1);
    this.timeStamp = 0;
    this.cooldown = this.reload.y;
    this.barrel = 0;
    this.lvl = 75;
    this.xp = 0;
    
    this.shoot = function() {
        if(this.cooldown >= this.reload.y) {
            if(mouseIsPressed) {
                switch(this.id) {
                    case 0:
                    case 2:
                    case 3:
                        bullets.push(new Bullet(
                            this.pos.x + Math.sin(this.rotation) * 40,
                            this.pos.y - Math.cos(this.rotation) * 40,
                            (this.pos.x + Math.sin(this.rotation) * 70) - ((Math.random() * this.spread.y) - (this.spread.y / 2)),
                            (this.pos.y - Math.cos(this.rotation) * 70) - ((Math.random() * this.spread.y) - (this.spread.y / 2)),
                            0, this));
                        this.barrels[0].cooldown = 0;
                        break;
                        
                    case 1:
                        switch(this.barrel) {
                            case 0:
                                bullets.push(new Bullet(
                                    this.pos.x + Math.sin(this.rotation - (15 * (Math.PI / 180))) * 40,
                                    this.pos.y - Math.cos(this.rotation - (15 * (Math.PI / 180))) * 40,
                                    (this.pos.x + Math.sin(this.rotation - (8.5 * (Math.PI / 180))) * 70) - ((Math.random() * this.spread.y) - (this.spread.y / 2)),
                                    (this.pos.y - Math.cos(this.rotation - (8.5 * (Math.PI / 180))) * 70) - ((Math.random() * this.spread.y) - (this.spread.y / 2)),
                                    0, this));
                                    this.barrels[0].cooldown = 0;
                                    this.barrel = 1;
                                break;
                            case 1:
                                bullets.push(new Bullet(
                                    this.pos.x + Math.sin(this.rotation + (15 * (Math.PI / 180))) * 40,
                                    this.pos.y - Math.cos(this.rotation + (15 * (Math.PI / 180))) * 40,
                                    (this.pos.x + Math.sin(this.rotation + (8.5 * (Math.PI / 180))) * 70) - ((Math.random() * this.spread.y) - (this.spread.y / 2)),
                                    (this.pos.y - Math.cos(this.rotation + (8.5 * (Math.PI / 180))) * 70) - ((Math.random() * this.spread.y) - (this.spread.y / 2)),
                                    0, this));
                                    this.barrels[1].cooldown = 0;
                                    this.barrel = 0;
                                break;
                        }
                        break;
                        
                    case 4:
                        bullets.push(new Bullet(
                            this.pos.x + Math.sin(this.rotation) * 40,
                            this.pos.y - Math.cos(this.rotation) * 40,
                            (this.pos.x + Math.sin(this.rotation) * 70) - ((Math.random() * this.spread.y) - (this.spread.y / 2)),
                            (this.pos.y - Math.cos(this.rotation) * 70) - ((Math.random() * this.spread.y) - (this.spread.y / 2)),
                            0, this));
                        bullets.push(new Bullet(
                            this.pos.x + Math.sin(this.rotation + (180 * (Math.PI / 180))) * 40,
                            this.pos.y - Math.cos(this.rotation + (180 * (Math.PI / 180))) * 40,
                            (this.pos.x + Math.sin(this.rotation + (180 * (Math.PI / 180))) * 70) - ((Math.random() * this.spread.y) - (this.spread.y / 2)),
                            (this.pos.y - Math.cos(this.rotation + (180 * (Math.PI / 180))) * 70) - ((Math.random() * this.spread.y) - (this.spread.y / 2)),
                            0, this));
                            this.barrels[0].cooldown = 0;
                            this.barrels[1].cooldown = 0;
                        break;
                }
                this.cooldown = 0;
                this.timeStamp = time.getTime();
            }
        } else {
            this.cooldown = time.getTime() - this.timeStamp;
        }
    };
    
    this.update = function() {
        var up = false,
            down = false,
            left = false,
            right = false;
        if(keys[87] || keys[38]) up = true;
        if(keys[83] || keys[40]) down = true;
        if(keys[65] || keys[37]) left = true;
        if(keys[68] || keys[39]) right = true;
        
        if(up && !down) this.vel.y -= this.acc;
        if(!up && down) this.vel.y += this.acc;
        if(left && !right) this.vel.x -= this.acc;
        if(!left && right) this.vel.x += this.acc;
        
        if(this.vel.x > this.maxSpeed.y) this.vel.x = this.maxSpeed.y;
        if(this.vel.x < -this.maxSpeed.y) this.vel.x = -this.maxSpeed.y;
        if(this.vel.y > this.maxSpeed.y) this.vel.y = this.maxSpeed.y;
        if(this.vel.y < -this.maxSpeed.y) this.vel.y = -this.maxSpeed.y;
        
        if(!left && !right) {
            if(Math.abs(this.vel.x) < this.acc) this.vel.x = 0;
            else if(this.vel.x < 0) this.vel.x += this.acc;
            else if(this.vel.x > 0) this.vel.x -= this.acc;
        }
        if(!up && !down) {
            if(Math.abs(this.vel.y) < this.acc) this.vel.y = 0;
            else if(this.vel.y < 0) this.vel.y += this.acc;
            else if(this.vel.y > 0) this.vel.y -= this.acc;
        }
        
        this.pos.x += this.vel.x;
        this.pos.y += this.vel.y;
        this.pos.x = constrain(this.pos.x, -750, 750);
        this.pos.y = constrain(this.pos.y, -750, 750);
        
        this.rotation = Math.atan2(-(this.pos.x - (mouse.x - cam.x)), (this.pos.y - (mouse.y - cam.y)));
        
        this.shoot();
    };
    
    this.reevaluateStats = function() {
        this.class = classes[this.id];
        this.reload = new Vector(tankstats[this.class].reload, tankstats[this.class].reload);
        this.bulletSpeed = new Vector(tankstats[this.class].bulletSpeed, tankstats[this.class].bulletSpeed);
        this.spread = new Vector(tankstats[this.class].spread, tankstats[this.class].spread);
        
        switch(this.id) {
            case 1:
                this.barrels = [
                    new Barrel(-11, 0, 0, 20, 50, 0),
                    new Barrel(11, 0, 0, 20, 50, 0)
                ];
                break;
            case 2:
                this.barrels = [
                    new Barrel(0, 0, 0, 20, 60, 0)
                ];
                break;
            case 3:
                this.barrels = [
                    new Barrel(0, 0, 1, 50, 40, 0)
                ];
                break;
            case 4:
                this.barrels = [
                    new Barrel(0, 0, 0, 20, 50, 0),
                    new Barrel(0, 0, 0, 20, 40, 180)
                ];
                break;
        }
    };
    
    this.draw = function() {
        
        c.save();
        c.translate(this.pos.x, this.pos.y);
        c.rotate(this.rotation);
        c.fillStyle = colors.lightgray;
        c.strokeStyle = colors.strokegray;
        
        this.barrels.forEach((barrel) => {
            barrel.show();
        });
        
        c.fillStyle = colors.lightblue;
        c.strokeStyle = colors.strokeblue;
        c.beginPath();
        c.arc(0, 0, 25, 0, 2 * Math.PI);
        c.fill();
        c.stroke();
        
        c.restore();
    };
}
var player = new Tank(0, 0, 0, 0, 0);

var script = document.createElement("script");
script.src = "scripts/Shape.js";
script.async = true;
document.body.appendChild(script);