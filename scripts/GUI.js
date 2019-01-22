function upgradeTankMenu() {
    c.textAlign = "center";
    c.font = "15px Ubuntu";
    c.lineWidth = 3;
    c.strokeStyle = colors.strokegray;
    c.fillStyle = "rgb(255, 100, 100)";
    c.fillRect(10, 10, 150, 150);
    c.fillStyle = "rgb(200, 100, 100)";
    c.fillRect(10, 10, 150, 75);
    c.strokeRect(10, 10, 150, 150);
        
    c.fillStyle = colors.lightgray;
    c.strokeStyle = colors.strokegray;
    c.save();
    c.translate(85, 65);
    c.rotate((frames / 100) % 360);
    tankshow[tankorder[player.id][0]]();
    c.fillStyle = colors.lightblue;
    c.strokeStyle = colors.strokeblue;
    c.beginPath();
    c.arc(0, 0, 20, 0, 2 * Math.PI);
    c.fill();
    c.stroke();
    c.restore();
    c.fillStyle = "white";
    c.strokeStyle = "rgba(100, 100, 100, 0.5)";
    c.strokeText(classes[tankorder[player.id][0]], 85, 135);
    c.fillText(classes[tankorder[player.id][0]], 85, 135);
    if(tankorder[player.id].length > 1) {
        c.strokeStyle = colors.strokegray;
        c.fillStyle = "rgb(255, 255, 100)";
        c.fillRect(170, 10, 150, 150);
        c.fillStyle = "rgb(200, 200, 100)";
        c.fillRect(170, 10, 150, 75);
        c.strokeRect(170, 10, 150, 150);
        
        c.fillStyle = colors.lightgray;
        c.strokeStyle = colors.strokegray;
        c.save();
        c.translate(245, 65);
        c.rotate((frames / 100) % 360);
        tankshow[tankorder[player.id][1]]();
        c.fillStyle = colors.lightblue;
        c.strokeStyle = colors.strokeblue;
        c.beginPath();
        c.arc(0, 0, 20, 0, 2 * Math.PI);
        c.fill();
        c.stroke();
        c.restore();
        c.fillStyle = "white";
        c.strokeStyle = "rgba(100, 100, 100, 0.5)";
        c.strokeText(classes[tankorder[player.id][1]], 245, 135);
        c.fillText(classes[tankorder[player.id][1]], 245, 135);
    }
    if(tankorder[player.id].length > 2) {
        c.strokeStyle = colors.strokegray;
        c.fillStyle = "rgb(100, 255, 100)";
        c.fillRect(10, 170, 150, 150);
        c.fillStyle = "rgb(100, 200, 100)";
        c.fillRect(10, 170, 150, 75);
        c.strokeRect(10, 170, 150, 150);
        
        c.fillStyle = colors.lightgray;
        c.strokeStyle = colors.strokegray;
        c.save();
        c.translate(85, 225);
        c.rotate((frames / 100) % 360);
        tankshow[tankorder[player.id][2]]();
        c.fillStyle = colors.lightblue;
        c.strokeStyle = colors.strokeblue;
        c.beginPath();
        c.arc(0, 0, 20, 0, 2 * Math.PI);
        c.fill();
        c.stroke();
        c.restore();
        c.fillStyle = "white";
        c.strokeStyle = "rgba(100, 100, 100, 0.5)";
        c.strokeText(classes[tankorder[player.id][2]], 85, 300);
        c.fillText(classes[tankorder[player.id][2]], 85, 300);
    }
    if(tankorder[player.id].length > 3) {
        c.strokeStyle = colors.strokegray;
        c.fillStyle = "rgb(100, 255, 255)";
        c.fillRect(170, 170, 150, 150);
        c.fillStyle = "rgb(100, 200, 200)";
        c.fillRect(170, 170, 150, 75);
        c.strokeRect(170, 170, 150, 150);
        
        c.fillStyle = colors.lightgray;
        c.strokeStyle = colors.strokegray;
        c.save();
        c.translate(245, 225);
        c.rotate((frames / 100) % 360);
        tankshow[tankorder[player.id][3]]();
        c.fillStyle = colors.lightblue;
        c.strokeStyle = colors.strokeblue;
        c.beginPath();
        c.arc(0, 0, 20, 0, 2 * Math.PI);
        c.fill();
        c.stroke();
        c.restore();
        c.fillStyle = "white";
        c.strokeStyle = "rgba(100, 100, 100, 0.5)";
        c.strokeText(classes[tankorder[player.id][3]], 245, 300);
        c.fillText(classes[tankorder[player.id][3]], 245, 300);
    }
    
    if(mouse.x > 10 && mouse.x < 160 && mouse.y > 10 && mouse.y < 160) {
        canvas.style.cursor = "pointer";
        if(mouseClicked) {
            player.id = tankorder[player.id][0];
            player.reevaluateStats();
        }
    }
    if(mouse.x > 170 && mouse.x < 320 && mouse.y > 10 && mouse.y < 160 && tankorder[player.id].length > 1) {
        canvas.style.cursor = "pointer";
        if(mouseClicked) {
            player.id = tankorder[player.id][1];
            player.reevaluateStats();
        }
    }
    if(mouse.x > 10 && mouse.x < 160 && mouse.y > 170 && mouse.y < 320 && tankorder[player.id].length > 2) {
        canvas.style.cursor = "pointer";
        if(mouseClicked) {
            player.id = tankorder[player.id][2];
            player.reevaluateStats();
        }
    }
    if(mouse.x > 170 && mouse.x < 320 && mouse.y > 170 && mouse.y < 320 && tankorder[player.id].length > 3) {
        canvas.style.cursor = "pointer";
        if(mouseClicked) {
            player.id = tankorder[player.id][3];
            player.reevaluateStats();
        }
    }
}

var script = document.createElement("script");
script.src = "scripts/Draw.js";
script.async = true;
document.body.appendChild(script);
