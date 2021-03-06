function Barrel(offsetX, offsetY, id, w, h, r) {
    this.offset = new Vector(offsetX, offsetY);
    this.id = id;
    this.w = w;
    this.h = -h; //Negative so it points at the mouse instead of away from it
    this.cooldown = 100;
    this.rotation = r;

    this.show = function() {
        //Reload the barrel to help with a shooting animation, doesn't actually reload though
        if(this.cooldown < 100) this.cooldown += 5;
        else if(this.cooldown > 100) this.cooldown = 100;

        c.save();
        c.translate(this.offset.x, this.offset.y);
        c.rotate(this.rotation * (Math.PI / 180));
        switch(this.id) {
            case 0:                 //Normal rectangular barrel
                rect(-this.w / 2, 0, this.w, (this.h * 0.8) + ((this.h * 0.2) * Math.abs(Math.sin((this.cooldown / 50) - 0.5))));
                break;

            case 1:                 //Triangular-shaped barrel used for machine gunner class
                c.beginPath();
                c.moveTo(-this.w / 4, 0);
                c.lineTo(-this.w / 2, (this.h * 0.8) + ((this.h * 0.2) * Math.abs(Math.sin((this.cooldown / 50) - 0.5))));
                c.lineTo(this.w / 2, (this.h * 0.8) + ((this.h * 0.2) * Math.abs(Math.sin((this.cooldown / 50) - 0.5))));
                c.lineTo(this.w / 4, 0);
                c.fill();
                c.stroke();
                break;
        }
        c.restore();
    };
}

var script = document.createElement("script");
script.src = "scripts/TankStats.js";
script.async = true;
document.body.appendChild(script);
