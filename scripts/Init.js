//Predefine global variables
var time = new Date();
var canvas = document.createElement("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext("2d");
c.lineWidth = 3;
var keys = [];
var bullets = [];
var mouseIsPressed = false;
var mouseClicked = false;
var frames = 0;
var mouse = new Vector(0, 0);

//Returns the number within the specified limit
function constrain(num, min, max) {
    if(num < min) return min;
    if(num > max) return max;
    return num;
}

//Returns a random integer between the numbers specified
function random(min, max) {
    return Math.round(Math.random() * (max - min)) + min;
}

//JSON object that holds color info for easier mouse
//Ex: c.fillStyle = colors.lightblue;
var colors = {
    lightblue: "rgb(100, 200, 250)",
    lightred: "rgb(255, 150, 150)",
    lightyellow: "rgb(255, 255, 150)",
    lightgreen: "rgb(150, 255, 150)",
    lightpurple: "rgb(255, 150, 255)",
    lightgray: "rgb(200, 200, 200)",
    strokeblue: "rgb(50, 150, 250)",
    strokered: "rgb(200, 75, 75)",
    strokeyellow: "rgb(200, 200, 75)",
    strokegreen: "rgb(75, 200, 75)",
    strokepurple: "rgb(200, 75, 200)",
    strokegray: "rgb(100, 100, 100)"
};

//Object that holds two integers, an x and a y
function Vector(x, y) {
    this.x = x;
    this.y = y;
}

//Draws a line
function line(x, y, x2, y2) {
    c.beginPath();
    c.moveTo(x, y);
    c.lineTo(x2, y2);
    c.stroke();
}

//Draws and fills a rect
function rect(x, y, w, h) {
    c.fillRect(x, y, w, h);
    c.strokeRect(x, y, w, h);
}

var script = document.createElement("script");
script.src = "scripts/Bullet.js";
script.async = true;
document.body.appendChild(script);
