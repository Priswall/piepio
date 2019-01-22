var cam = new Vector(0, 0);
var shapes = [];

function draw() {
    //Keeps 20 shapes on screen at all times
    for(var i = 0; i < 20 - shapes.length; i++) {
        shapes.push(new Shape(random(-750, 750), random(-750, 750), random(0, 2)));
    }
    //Makes lines round at the end
    c.lineCap = "round";
    frames++;
    canvas.style.cursor = "default";
    cam.x = (canvas.width / 2) - player.pos.x;
    cam.y = (canvas.height / 2) - player.pos.y;

    //Fill the background
    c.fillStyle = "rgb(200, 200, 200)";
    c.fillRect(0, 0, canvas.width, canvas.height);

    //Draw the grid
    c.strokeStyle = "rgb(150, 150, 150)";
    for(var i = 0; i < 40; i++) {
        line(0, (i * 30) - (player.pos.y % 30), canvas.width, (i * 30) - (player.pos.y % 30));
        line(((i + 40) * 30) - (player.pos.x % 30), 0, ((i + 40) * 30) - (player.pos.x % 30), canvas.height);
        line((i * 30) - (player.pos.x % 30), 0, (i * 30) - (player.pos.x % 30), canvas.height);
    }

    //Fill in the playable area
    c.save();
    c.translate(cam.x, cam.y);
    c.fillStyle = "rgb(255, 255, 255, 0.8)";
    c.fillRect(-700, -700, 1400, 1400);

    //Loops through the shapes, draws, updates, and checks if they got hit
    for(var i = 0; i < shapes.length;) {
        shapes[i].draw();
        shapes[i].update();
        if(Math.abs(shapes[i].pos.x - player.pos.x) < (shapes[i].size / 2) + 17.5 &&
           Math.abs(shapes[i].pos.y - player.pos.y) < (shapes[i].size / 2) + 17.5)
            shapes[i].gotHit(player);
        for(var j = 0; j < bullets.length; j++) {
            if(Math.abs(shapes[i].pos.x - bullets[j].pos.x) < (shapes[i].size / 2) + 8 &&
               Math.abs(shapes[i].pos.y - bullets[j].pos.y) < (shapes[i].size / 2) + 8)
                shapes[i].gotHit(bullets[j]);
        }
        for(var j = 0; j < shapes.length; j++) {
            if(i !== j) {
                if(Math.abs(shapes[i].pos.x - shapes[j].pos.x) < (shapes[i].size / 2) + (shapes[j].size / 2) &&
                   Math.abs(shapes[i].pos.y - shapes[j].pos.y) < (shapes[i].size / 2) + (shapes[j].size / 2)) {
                    shapes[i].gotHit(shapes[j]);
                    shapes[j].gotHit(shapes[i]);
                }
            }
        }
        //Kill the shapes if it's health is less than or equal to 0
        if(shapes[i].health.y <= 0)
            shapes.splice(i, 1);
        else i++;
    }

    for(var i = 0; i < bullets.length;) {
        bullets[i].draw();
        bullets[i].update();
        //Kill the bulley if it's health is less than or equal to 0
        if(bullets[i].lifetime <= 0)
            bullets.splice(i, 1);
        else i++;
    }

    player.draw();
    player.update();

    c.restore();

    //Show upgrade GUI if the player is a certain level and a certain tank
    if((player.lvl >= 15 && player.id === 0) ||
       (player.lvl >= 30 && player.id > 0) ||
       (player.lvl >= 45 && player.id > 4)) {
        if(tankorder[player.id] !== undefined) {
            upgradeTankMenu();
        }
    }

    time = new Date();
    mouseClicked = false;
    requestAnimationFrame(draw);
}

var element = document.getElementById("loading");
element.parentNode.removeChild(element);
document.body.appendChild(canvas);
requestAnimationFrame(draw);

addEventListener("keydown", (e) => {keys[e.keyCode] = true;});
addEventListener("keyup", (e) => {keys[e.keyCode] = false;});
addEventListener("mousemove", (e) => {mouse.x = e.clientX; mouse.y = e.clientY;});
addEventListener("mousedown", (e) => {mouseIsPressed = true; mouseClicked = true;});
addEventListener("mouseup", (e) => {mouseIsPressed = false;});
