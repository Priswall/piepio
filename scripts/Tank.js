//The names of the classes. Used for code that is easier to read
//Ex: classes.indexOf("Twin") returns the id of the "Twin" class
var classes = [
    "Basic Tank", 
    "Twin", 
    "Sniper", 
    "Machine Gunner", 
    "Flank Guard", 
    "Assassin", 
    "Overseer", 
    "Hunter", 
    "Twin Flank", 
    "Triple Shot", 
    "Quad Tank", 
    "Triplet", 
    "Octo Tank", 
    "Flamethrower", 
    "Manager", 
    "Triple Twin", 
    "Overlord", 
    "Land-miner", 
    "Trapper", 
    "Mega Trapper", 
    "Tri-trapper", 
    "Destroyer", 
    "Annihilator", 
    "Gunner", 
    "Tri-Angle", 
    "Auto 3"
];

function Tank(x, y, rotation, team, id) {
    this.pos = new Vector(x, y);
    this.vel = new Vector(0, 0);
    this.pushVel = new Vector(0, 0);
    this.rotation = rotation;
    this.team = team;
    this.id = id;
    this.class = classes[this.id];
    this.xp = 0;
    this.lvl = 0;
    this.acc = 0.2;
    this.maxSpeed = new Vector(3, 3);
    this.barrels = [new Barrel(0, 0, 0, 20, 50, 0)];
    //Create an array for drones
    this.bullets = [];
    //Gets these variables from the TankStats file
    //The x part of the vectors (i.e. this.reload.x) is the normal stat before modififying it by the stat upgrades
    this.reload = new Vector(tankstats[this.class].reload, tankstats[this.class].reload);
    this.spread = new Vector(tankstats[this.class].spread, tankstats[this.class].spread);
    this.bulletSpeed = new Vector(tankstats[this.class].bulletSpeed, tankstats[this.class].bulletSpeed);
    this.bulletDamage = new Vector(tankstats[this.class].damage, tankstats[this.class].damage);
    this.bulletPenetration = new Vector(1, 1);
    this.timeStamp = 0;
    this.cooldown = this.reload.y;
    this.barrel = 0;
    this.lvl = 75;
    this.xp = 0;

    this.shoot = function() {
        //Checks if the tank is reloaded and if the user is clicking
        if(this.cooldown >= this.reload.y) {
            if(mouseIsPressed) {
                switch(this.id) {
                    case classes.indexOf("Basic Tank"):
                        bullets.push(new Bullet(
                            this.pos.x + Math.sin(this.rotation) * 40,
                            this.pos.y - Math.cos(this.rotation) * 40,
                            (this.pos.x + Math.sin(this.rotation) * 70) - ((Math.random() * this.spread.y) - (this.spread.y / 2)),
                            (this.pos.y - Math.cos(this.rotation) * 70) - ((Math.random() * this.spread.y) - (this.spread.y / 2)),
                            0, this));
                        this.barrels[0].cooldown = 0;
						this.pushVel.x -= Math.sin(this.rotation) / 2;
						this.pushVel.y += Math.cos(this.rotation) / 2;
                        break;
                    case classes.indexOf("Sniper"):
                        bullets.push(new Bullet(
                            this.pos.x + Math.sin(this.rotation) * 40,
                            this.pos.y - Math.cos(this.rotation) * 40,
                            (this.pos.x + Math.sin(this.rotation) * 70) - ((Math.random() * this.spread.y) - (this.spread.y / 2)),
                            (this.pos.y - Math.cos(this.rotation) * 70) - ((Math.random() * this.spread.y) - (this.spread.y / 2)),
                            0, this));
                        this.barrels[0].cooldown = 0;
						this.pushVel.x -= Math.sin(this.rotation) * 1.5;
						this.pushVel.y += Math.cos(this.rotation) * 1.5;
                        break;
                    case classes.indexOf("Machine Gunner"):
                        bullets.push(new Bullet(
                            this.pos.x + Math.sin(this.rotation) * 40,
                            this.pos.y - Math.cos(this.rotation) * 40,
                            (this.pos.x + Math.sin(this.rotation) * 70) - ((Math.random() * this.spread.y) - (this.spread.y / 2)),
                            (this.pos.y - Math.cos(this.rotation) * 70) - ((Math.random() * this.spread.y) - (this.spread.y / 2)),
                            0, this));
                        this.barrels[0].cooldown = 0;
						this.pushVel.x -= Math.sin(this.rotation) / 2;
						this.pushVel.y += Math.cos(this.rotation) / 2;
                        break;
                    case classes.indexOf("Assassin"):
                        bullets.push(new Bullet(
                            this.pos.x + Math.sin(this.rotation) * 40,
                            this.pos.y - Math.cos(this.rotation) * 40,
                            (this.pos.x + Math.sin(this.rotation) * 70) - ((Math.random() * this.spread.y) - (this.spread.y / 2)),
                            (this.pos.y - Math.cos(this.rotation) * 70) - ((Math.random() * this.spread.y) - (this.spread.y / 2)),
                            0, this));
                        this.barrels[0].cooldown = 0;
						this.pushVel.x -= Math.sin(this.rotation) * 2;
						this.pushVel.y += Math.cos(this.rotation) * 2;
                        break;
                    case classes.indexOf("Destroyer"):
                        bullets.push(new Bullet(
                            this.pos.x + Math.sin(this.rotation) * 40,
                            this.pos.y - Math.cos(this.rotation) * 40,
                            (this.pos.x + Math.sin(this.rotation) * 70) - ((Math.random() * this.spread.y) - (this.spread.y / 2)),
                            (this.pos.y - Math.cos(this.rotation) * 70) - ((Math.random() * this.spread.y) - (this.spread.y / 2)),
                            0, this));
                        this.barrels[0].cooldown = 0;
						this.pushVel.x -= Math.sin(this.rotation) * 3;
						this.pushVel.y += Math.cos(this.rotation) * 3;
                        break;
                    case classes.indexOf("Twin"):
                        //Alternate between barrels
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
						this.pushVel.x -= Math.sin(this.rotation) / 2;
						this.pushVel.y += Math.cos(this.rotation) / 2;
                        break;
                    case classes.indexOf("Flank Guard"):
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
                    case classes.indexOf("Triple Shot"):
                        //Alternate between barrels
                        switch(this.barrel) {
                            case 0:
                                bullets.push(new Bullet(
                                    this.pos.x + Math.sin(this.rotation) * 40,
                                    this.pos.y - Math.cos(this.rotation) * 40,
                                    (this.pos.x + Math.sin(this.rotation) * 70) - ((Math.random() * this.spread.y) - (this.spread.y / 2)),
                                    (this.pos.y - Math.cos(this.rotation) * 70) - ((Math.random() * this.spread.y) - (this.spread.y / 2)),
                                    0, this));
                                this.barrels[2].cooldown = 0;
                                this.barrel = 1;
						        this.pushVel.x -= Math.sin(this.rotation) / 2;
								this.pushVel.y += Math.cos(this.rotation) / 2;
                                break;
                            case 1:
                                bullets.push(new Bullet(
                                    this.pos.x + Math.sin(this.rotation + (-45 * (Math.PI / 180))) * 40,
                                    this.pos.y - Math.cos(this.rotation + (-45 * (Math.PI / 180))) * 40,
                                    (this.pos.x + Math.sin(this.rotation + (-45 * (Math.PI / 180))) * 70) - ((Math.random() * this.spread.y) - (this.spread.y / 2)),
                                    (this.pos.y - Math.cos(this.rotation + (-45 * (Math.PI / 180))) * 70) - ((Math.random() * this.spread.y) - (this.spread.y / 2)),
                                    0, this));
                                bullets.push(new Bullet(
                                    this.pos.x + Math.sin(this.rotation + (45 * (Math.PI / 180))) * 40,
                                    this.pos.y - Math.cos(this.rotation + (45 * (Math.PI / 180))) * 40,
                                    (this.pos.x + Math.sin(this.rotation + (45 * (Math.PI / 180))) * 70) - ((Math.random() * this.spread.y) - (this.spread.y / 2)),
                                    (this.pos.y - Math.cos(this.rotation + (45 * (Math.PI / 180))) * 70) - ((Math.random() * this.spread.y) - (this.spread.y / 2)),
                                    0, this));
                                this.barrels[0].cooldown = 0;
                                this.barrels[1].cooldown = 0;
                                this.barrel = 0;
								this.pushVel.x -= Math.sin(this.rotation);
								this.pushVel.y += Math.cos(this.rotation);
                                break;
                        }
                        break;
                    case classes.indexOf("Quad Tank"):
                        //Alternate between barrels
                        switch(this.barrel) {
                            case 0:
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
                                this.barrels[2].cooldown = 0;
                                this.barrel = 1;
                                break;
                            case 1:
                                bullets.push(new Bullet(
                                    this.pos.x + Math.sin(this.rotation + (-90 * (Math.PI / 180))) * 40,
                                    this.pos.y - Math.cos(this.rotation + (-90 * (Math.PI / 180))) * 40,
                                    (this.pos.x + Math.sin(this.rotation + (-90 * (Math.PI / 180))) * 70) - ((Math.random() * this.spread.y) - (this.spread.y / 2)),
                                    (this.pos.y - Math.cos(this.rotation + (-90 * (Math.PI / 180))) * 70) - ((Math.random() * this.spread.y) - (this.spread.y / 2)),
                                    0, this));
                                bullets.push(new Bullet(
                                    this.pos.x + Math.sin(this.rotation + (90 * (Math.PI / 180))) * 40,
                                    this.pos.y - Math.cos(this.rotation + (90 * (Math.PI / 180))) * 40,
                                    (this.pos.x + Math.sin(this.rotation + (90 * (Math.PI / 180))) * 70) - ((Math.random() * this.spread.y) - (this.spread.y / 2)),
                                    (this.pos.y - Math.cos(this.rotation + (90 * (Math.PI / 180))) * 70) - ((Math.random() * this.spread.y) - (this.spread.y / 2)),
                                    0, this));
                                this.barrels[1].cooldown = 0;
                                this.barrels[3].cooldown = 0;
                                this.barrel = 0;
                                break;
                        }
                        break;
                    case classes.indexOf("Twin Flank"):
                        //Alternate between barrels
                        switch(this.barrel) {
                            case 0:
                                bullets.push(new Bullet(
                                    this.pos.x + Math.sin(this.rotation - (-15 * (Math.PI / 180))) * 40,
                                    this.pos.y - Math.cos(this.rotation - (-15 * (Math.PI / 180))) * 40,
                                    (this.pos.x + Math.sin(this.rotation - (-8.5 * (Math.PI / 180))) * 70) - ((Math.random() * this.spread.y) - (this.spread.y / 2)),
                                    (this.pos.y - Math.cos(this.rotation - (-8.5 * (Math.PI / 180))) * 70) - ((Math.random() * this.spread.y) - (this.spread.y / 2)),
                                    0, this));
                                bullets.push(new Bullet(
                                    this.pos.x + Math.sin(this.rotation + (-165 * (Math.PI / 180))) * 40,
                                    this.pos.y - Math.cos(this.rotation + (-165 * (Math.PI / 180))) * 40,
                                    (this.pos.x + Math.sin(this.rotation + (-172.5 * (Math.PI / 180))) * 70) - ((Math.random() * this.spread.y) - (this.spread.y / 2)),
                                    (this.pos.y - Math.cos(this.rotation + (-172.5 * (Math.PI / 180))) * 70) - ((Math.random() * this.spread.y) - (this.spread.y / 2)),
                                    0, this));
                                this.barrels[1].cooldown = 0;
                                this.barrels[3].cooldown = 0;
                                this.barrel = 1;
                                break;
                            case 1:
                                bullets.push(new Bullet(
                                    this.pos.x + Math.sin(this.rotation - (15 * (Math.PI / 180))) * 40,
                                    this.pos.y - Math.cos(this.rotation - (15 * (Math.PI / 180))) * 40,
                                    (this.pos.x + Math.sin(this.rotation - (8.5 * (Math.PI / 180))) * 70) - ((Math.random() * this.spread.y) - (this.spread.y / 2)),
                                    (this.pos.y - Math.cos(this.rotation - (8.5 * (Math.PI / 180))) * 70) - ((Math.random() * this.spread.y) - (this.spread.y / 2)),
                                    0, this));
                                bullets.push(new Bullet(
                                    this.pos.x + Math.sin(this.rotation + (165 * (Math.PI / 180))) * 40,
                                    this.pos.y - Math.cos(this.rotation + (165 * (Math.PI / 180))) * 40,
                                    (this.pos.x + Math.sin(this.rotation + (172.5 * (Math.PI / 180))) * 70) - ((Math.random() * this.spread.y) - (this.spread.y / 2)),
                                    (this.pos.y - Math.cos(this.rotation + (172.5 * (Math.PI / 180))) * 70) - ((Math.random() * this.spread.y) - (this.spread.y / 2)),
                                    0, this));
                                this.barrels[0].cooldown = 0;
                                this.barrels[2].cooldown = 0;
                                this.barrel = 0;
                                break;
                        }
                        break;
                    case classes.indexOf("Overseer"):
                        if(this.bullets.length < 7) {
                            this.bullets.push(new Bullet(
                                this.pos.x + Math.sin(this.rotation - (90 * (Math.PI / 180))) * 40,
                                this.pos.y - Math.cos(this.rotation - (90 * (Math.PI / 180))) * 40,
                                (this.pos.x + Math.sin(this.rotation - (90 * (Math.PI / 180))) * 70) - ((Math.random() * this.spread.y) - (this.spread.y / 2)),
                                (this.pos.y - Math.cos(this.rotation - (90 * (Math.PI / 180))) * 70) - ((Math.random() * this.spread.y) - (this.spread.y / 2)),
                                1, this));
                            this.bullets.push(new Bullet(
                                this.pos.x + Math.sin(this.rotation + (90 * (Math.PI / 180))) * 40,
                                this.pos.y - Math.cos(this.rotation + (90 * (Math.PI / 180))) * 40,
                                (this.pos.x + Math.sin(this.rotation + (90 * (Math.PI / 180))) * 70) - ((Math.random() * this.spread.y) - (this.spread.y / 2)),
                                (this.pos.y - Math.cos(this.rotation + (90 * (Math.PI / 180))) * 70) - ((Math.random() * this.spread.y) - (this.spread.y / 2)),
                                1, this));
                        }
                        break;
                    case classes.indexOf("Hunter"):
                        var temp = this.bulletDamage.y;
                        this.bulletDamage.y *= 0.75;
                        bullets.push(new Bullet(
                            this.pos.x + Math.sin(this.rotation) * 40,
                            this.pos.y - Math.cos(this.rotation) * 40,
                            (this.pos.x + Math.sin(this.rotation) * 70) - ((Math.random() * this.spread.y) - (this.spread.y / 2)),
                            (this.pos.y - Math.cos(this.rotation) * 70) - ((Math.random() * this.spread.y) - (this.spread.y / 2)),
                            0, this));
                        this.bulletDamage.y = temp;
                        this.barrels[0].cooldown = 0;
                        setTimeout(() => {
                            bullets.push(new Bullet(
                                this.pos.x + Math.sin(this.rotation) * 40,
                                this.pos.y - Math.cos(this.rotation) * 40,
                                (this.pos.x + Math.sin(this.rotation) * 70) - ((Math.random() * this.spread.y) - (this.spread.y / 2)),
                                (this.pos.y - Math.cos(this.rotation) * 70) - ((Math.random() * this.spread.y) - (this.spread.y / 2)),
                                0, this));
                            this.barrels[1].cooldown = 0;
                        }, 100);
                        break;
                    case classes.indexOf("Gunner"):
                        //Alternate between barrels
                        switch(this.barrel) {
                            case 0:
                                bullets.push(new Bullet(
                                    this.pos.x + Math.sin(this.rotation - (12 * (Math.PI / 180))) * 40,
                                    this.pos.y - Math.cos(this.rotation - (12 * (Math.PI / 180))) * 40,
                                    (this.pos.x + Math.sin(this.rotation - (6.5 * (Math.PI / 180))) * 70) - ((Math.random() * this.spread.y) - (this.spread.y / 2)),
                                    (this.pos.y - Math.cos(this.rotation - (6.5 * (Math.PI / 180))) * 70) - ((Math.random() * this.spread.y) - (this.spread.y / 2)),
                                    0, this));
                                bullets.push(new Bullet(
                                    this.pos.x + Math.sin(this.rotation + (12 * (Math.PI / 180))) * 40,
                                    this.pos.y - Math.cos(this.rotation + (12 * (Math.PI / 180))) * 40,
                                    (this.pos.x + Math.sin(this.rotation + (6.5 * (Math.PI / 180))) * 70) - ((Math.random() * this.spread.y) - (this.spread.y / 2)),
                                    (this.pos.y - Math.cos(this.rotation + (6.5 * (Math.PI / 180))) * 70) - ((Math.random() * this.spread.y) - (this.spread.y / 2)),
                                    0, this));
                                this.barrels[0].cooldown = 0;
                                this.barrels[1].cooldown = 0;
                                this.barrel = 1;
                                break;
                            case 1:
                                bullets.push(new Bullet(
                                    this.pos.x + Math.sin(this.rotation - (17 * (Math.PI / 180))) * 40,
                                    this.pos.y - Math.cos(this.rotation - (17 * (Math.PI / 180))) * 40,
                                    (this.pos.x + Math.sin(this.rotation - (9 * (Math.PI / 180))) * 70) - ((Math.random() * this.spread.y) - (this.spread.y / 2)),
                                    (this.pos.y - Math.cos(this.rotation - (9 * (Math.PI / 180))) * 70) - ((Math.random() * this.spread.y) - (this.spread.y / 2)),
                                    0, this));
                                bullets.push(new Bullet(
                                    this.pos.x + Math.sin(this.rotation + (17 * (Math.PI / 180))) * 40,
                                    this.pos.y - Math.cos(this.rotation + (17 * (Math.PI / 180))) * 40,
                                    (this.pos.x + Math.sin(this.rotation + (9 * (Math.PI / 180))) * 70) - ((Math.random() * this.spread.y) - (this.spread.y / 2)),
                                    (this.pos.y - Math.cos(this.rotation + (9 * (Math.PI / 180))) * 70) - ((Math.random() * this.spread.y) - (this.spread.y / 2)),
                                    0, this));
                                this.barrels[2].cooldown = 0;
                                this.barrels[3].cooldown = 0;
                                this.barrel = 0;
                                break;
                        }
						this.pushVel.x -= Math.sin(this.rotation) / 2;
						this.pushVel.y += Math.cos(this.rotation) / 2;
                        break;
                    case classes.indexOf("Tri-Angle"):
                        //Alternate between barrels
                        switch(this.barrel) {
                            case 0:
                                bullets.push(new Bullet(
                                    this.pos.x + Math.sin(this.rotation) * 40,
                                    this.pos.y - Math.cos(this.rotation) * 40,
                                    (this.pos.x + Math.sin(this.rotation) * 70) - ((Math.random() * this.spread.y) - (this.spread.y / 2)),
                                    (this.pos.y - Math.cos(this.rotation) * 70) - ((Math.random() * this.spread.y) - (this.spread.y / 2)),
                                    0, this));
                                this.barrels[0].cooldown = 0;
                                this.barrel = 1;
                                break;
                            case 1:
                                bullets.push(new Bullet(
                                    this.pos.x + Math.sin(this.rotation - (140 * (Math.PI / 180))) * 40,
                                    this.pos.y - Math.cos(this.rotation - (140 * (Math.PI / 180))) * 40,
                                    (this.pos.x + Math.sin(this.rotation - (140 * (Math.PI / 180))) * 70) - ((Math.random() * this.spread.y) - (this.spread.y / 2)),
                                    (this.pos.y - Math.cos(this.rotation - (140 * (Math.PI / 180))) * 70) - ((Math.random() * this.spread.y) - (this.spread.y / 2)),
                                    0, this));
                                bullets.push(new Bullet(
                                    this.pos.x + Math.sin(this.rotation + (140 * (Math.PI / 180))) * 40,
                                    this.pos.y - Math.cos(this.rotation + (140 * (Math.PI / 180))) * 40,
                                    (this.pos.x + Math.sin(this.rotation + (140 * (Math.PI / 180))) * 70) - ((Math.random() * this.spread.y) - (this.spread.y / 2)),
                                    (this.pos.y - Math.cos(this.rotation + (140 * (Math.PI / 180))) * 70) - ((Math.random() * this.spread.y) - (this.spread.y / 2)),
                                    0, this));
                                this.barrels[1].cooldown = 0;
                                this.barrels[2].cooldown = 0;
                                this.barrel = 0;
								this.pushVel.x += Math.sin(this.rotation) * 2;
								this.pushVel.y -= Math.cos(this.rotation) * 2;
                                break;
                        }
                        break;
                }
                this.cooldown = 0;
                this.timeStamp = time.getTime();
            }
        } else {
            //Determine if tank is reloaded
            this.cooldown = time.getTime() - this.timeStamp;
        }
    };

    this.update = function() {
        //Variables used to see which direction the player should move
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
        
        for(var i = 0; i < this.bullets.length; i++) {
            this.bullets[i].update();
            this.bullets[i].draw();
            for(var j = 0; j < this.bullets.length; j++) {
                if(i != j) {
                    if(Math.abs(this.bullets[i].pos.x - this.bullets[j].pos.x) < 12 + (this.bullets[i].damage * 0.75) + (this.bullets[j].damage * 0.75) &&
                       Math.abs(this.bullets[i].pos.y - this.bullets[j].pos.y) < 12 + (this.bullets[i].damage * 0.75) + (this.bullets[j].damage * 0.75)) {
                        var dx = this.bullets[i].pos.x - this.bullets[j].pos.x;
                        var dy = this.bullets[i].pos.y - this.bullets[j].pos.y;
                        var mag = (dx * dx + dy * dy);
                        this.bullets[i].vel.x += (dx / mag) * 15;
                        this.bullets[i].vel.y += (dy / mag) * 15;
                        this.bullets[j].vel.x -= (dx / mag) * 15;
                        this.bullets[j].vel.y -= (dy / mag) * 15;
                    }
                }
            }
        }
		if(Math.abs(this.pushVel.x) > 0.1) {
			this.pos.x += this.pushVel.x;
			this.pushVel.x *= 0.9;
		} else this.pushVel.x = 0;
		if(Math.abs(this.pushVel.y) > 0.1) {
			this.pos.y += this.pushVel.y;
			this.pushVel.y *= 0.9;
		} else this.pushVel.y = 0;
    };

    this.reevaluateStats = function() {
        //Update barrels and stats when the tank class is changed
        this.class = classes[this.id];
        if(tankstats[this.class] !== undefined) {
            this.reload = new Vector(tankstats[this.class].reload, tankstats[this.class].reload);
            this.bulletSpeed = new Vector(tankstats[this.class].bulletSpeed, tankstats[this.class].bulletSpeed);
            this.spread = new Vector(tankstats[this.class].spread, tankstats[this.class].spread);
            this.bulletDamage = new Vector(tankstats[this.class].damage, tankstats[this.class].damage);
        }

        switch(this.id) {
            case classes.indexOf("Twin"):
                this.barrels = [
                    new Barrel(-11, 0, 0, 20, 50, 0),
                    new Barrel(11, 0, 0, 20, 50, 0)
                ];
                break;
            case classes.indexOf("Sniper"):
                this.barrels = [
                    new Barrel(0, 0, 0, 20, 60, 0)
                ];
                break;
            case classes.indexOf("Machine Gunner"):
                this.barrels = [
                    new Barrel(0, 0, 1, 40, 40, 0)
                ];
                break;
            case classes.indexOf("Flank Guard"):
                this.barrels = [
                    new Barrel(0, 0, 0, 20, 50, 0),
                    new Barrel(0, 0, 0, 20, 40, 180)
                ];
                break;
            case classes.indexOf("Triple Shot"):
                this.barrels = [
                    new Barrel(0, 0, 0, 20, 50, 45),
                    new Barrel(0, 0, 0, 20, 50, -45),
                    new Barrel(0, 0, 0, 20, 50, 0)
                ];
                break;
            case classes.indexOf("Quad Tank"):
                this.barrels = [
                    new Barrel(0, 0, 0, 20, 50, 0),
                    new Barrel(0, 0, 0, 20, 50, 90),
                    new Barrel(0, 0, 0, 20, 50, 180),
                    new Barrel(0, 0, 0, 20, 50, -90)
                ];
                break;
            case classes.indexOf("Twin Flank"):
                this.barrels = [
                    new Barrel(-11, 0, 0, 20, 50, 0),
                    new Barrel(11, 0, 0, 20, 50, 0),
                    new Barrel(11, 0, 0, 20, 50, 180),
                    new Barrel(-11, 0, 0, 20, 50, 180)
                ];
                break;
            case classes.indexOf("Assassin"):
                this.barrels = [
                    new Barrel(0, 0, 0, 20, 70, 0)
                ];
                break;
            case classes.indexOf("Overseer"):
                this.barrels = [
                    new Barrel(0, 0, 1, 40, 35, 90),
                    new Barrel(0, 0, 1, 40, 35, -90)
                ];
                break;
            case classes.indexOf("Hunter"):
                this.barrels = [
                    new Barrel(0, 0, 0, 20, 55, 0),
                    new Barrel(0, 0, 0, 30, 45, 0)
                ];
                break;
            case classes.indexOf("Trapper"):
                this.barrels = [
                    new Barrel(0, 0, 2, 20, 50, 0)
                ];
                break;
            case classes.indexOf("Destroyer"):
                this.barrels = [
                    new Barrel(0, 0, 0, 40, 50, 0)
                ];
                break;
            case classes.indexOf("Gunner"):
                this.barrels = [
                    new Barrel(-15, 0, 0, 10, 45, 0),
                    new Barrel(15, 0, 0, 10, 45, 0),
                    new Barrel(-7.5, 0, 0, 10, 50, 0),
                    new Barrel(7.5, 0, 0, 10, 50, 0)
                ];
                break;
            case classes.indexOf("Tri-Angle"):
                this.barrels = [
                    new Barrel(0, 0, 0, 20, 50, 0),
                    new Barrel(0, 0, 0, 20, 40, 140),
                    new Barrel(0, 0, 0, 20, 40, -140)
                ];
                break;
            case classes.indexOf("Auto 3"):
                this.barrels = [
                    new Barrel(0, 0, 3, 20, 50, 0),
                    new Barrel(0, 0, 3, 20, 50, 120),
                    new Barrel(0, 0, 3, 20, 50, 240)
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

        //Draw the barrels
        this.barrels.forEach((barrel) => { barrel.show(); });

        //Draw the body
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
