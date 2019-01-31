//Determine what classes the tank can be changed to
var tankorder = [
    [
        classes.indexOf("Sniper"),
        classes.indexOf("Twin"),
        classes.indexOf("Machine Gunner"),
        classes.indexOf("Flank Guard")
    ],
    [
        classes.indexOf("Triple Shot"),
        classes.indexOf("Twin Flank"),
        classes.indexOf("Quad Tank")
    ],
    [
        classes.indexOf("Assassin"),
        classes.indexOf("Overseer"),
        classes.indexOf("Hunter"),
        classes.indexOf("Trapper")
    ],
    [
        classes.indexOf("Destroyer"),
        classes.indexOf("Gunner")
    ],
    [
        classes.indexOf("Tri-Angle"),
        classes.indexOf("Quad Tank"),
        classes.indexOf("Twin Flank")
    ]
];
//Used for the upgrade screen GUI when the tank class can be changed
var tankshow = [
    0,
    function() {
        rect(0, 0, 16, -40);
        rect(-17.6, 0, 16, -40);
    },
    function() {
        rect(-10, 0, 16, -48);
    },
    function() {
        c.beginPath();
        c.moveTo(0, 0);
        c.lineTo(-16, -32);
        c.lineTo(16, -32);
        c.lineTo(0, 0);
        c.fill();
        c.stroke();
    },
    function() {
        rect(-9, 0, 18, -40);
        rect(-9, 0, 18, 32);
    },
    function() {
        rect(-9, 0, 18, -55);
    },
    function() {
        c.beginPath();
        c.moveTo(10, 0);
        c.lineTo(-30, -15);
        c.lineTo(-30, 15);
        c.lineTo(10, 0);
        c.fill();
        c.stroke();
              
        c.beginPath();
        c.moveTo(-10, 0);
        c.lineTo(30, 15);
        c.lineTo(30, -15);
        c.lineTo(-10, 0);
        c.fill();
        c.stroke();
    },
    function() {
        rect(-9, 0, 18, -50);
        rect(-13, 0, 26, -43);
    },
    function() {
        rect(0, 40, 16, -80);
        rect(-17.6, 40, 16, -80);
    },
    function() {
        rect(-10, 0, 18, -45);

        c.save();
        c.translate(-10, 0);
        c.rotate(0.75);
        rect(0, 0, 18, -50);
        c.restore();
              
        c.save();
        c.translate(-10, 0);
        c.rotate(-0.75);
        rect(-5, 0, 18, -40);
        c.restore();
    },
    function() {
        rect(-8, 40, 16, -80);
        rect(40, -8, -80, 16);
    },
    function() {
        rect(3, 0, 20, -50);
        rect(-24, 0, 20, -50);
        rect(-9, 0, 18, -55);
    },
    function() {
        rect(-9, 0, 18, -50);
        rect(9, 0, -18, 50);
        rect(0, -9, -50, 18);
        rect(0, 9, 50, -18);
              
        c.save();
        c.rotate(0.7854);
        rect(-9, 0, 18, -50);
        rect(9, 0, -18, 50);
        rect(0, -9, -50, 18);
        rect(0, 9, 50, -18);
        c.restore();
    },
    function() {
        rect(-3, -50, 6, 45);
        rect(-9, -47, 6, 45);
        rect(3, -47, 6, 45);
        rect(-15, -44, 6, 45);
        rect(9, -44, 6, 45);
    },
    function() {
        c.beginPath();
        c.moveTo(0, 0);
        c.lineTo(-20, -35);
        c.lineTo(20, -35);
        c.lineTo(0, 0);
        c.fill();
        c.stroke();
    },
    function() {
        rect(3, 0, 20, -50);
        rect(-24, 0, 20, -50);
              
        c.save();
        c.translate(0, 0);
        c.rotate(2.095);
        rect(3, 0, 20, -50);
        rect(-24, 0, 20, -50);
        c.restore();
              
        c.save();
        c.translate(0, 0);
        c.rotate(-2.095);
        rect(3, 0, 20, -50);
        rect(-24, 0, 20, -50);
        c.restore();
    },
    function() {
        c.beginPath();
        c.moveTo(0, 0);
        c.lineTo(-35, -20);
        c.lineTo(-35, 20);
        c.lineTo(0, 10);
        c.fill();
        c.stroke();
              
        c.beginPath();
        c.moveTo(0, 10);
        c.lineTo(35, 20);
        c.lineTo(35, -20);
        c.lineTo(0, -5);
        c.fill();
        c.stroke();
              
        c.save();
        c.translate(0, 0);
        c.rotate(1.57);
              
        c.beginPath();
        c.moveTo(0, 0);
        c.lineTo(-35, -20);
        c.lineTo(-35, 20);
        c.lineTo(0, 10);
        c.fill();
        c.stroke();
              
        c.beginPath();
        c.moveTo(0, 10);
        c.lineTo(35, 20);
        c.lineTo(35, -20);
        c.lineTo(0, -5);
        c.fill();
        c.stroke();
              
        c.restore();
    },
    function () {
        rect(-15, -30, 30, 30);
        rect(-20, -40, 40, 10);
    },
    function () {
        rect(-10, -25, 20, 20);
        
        c.beginPath();
        c.moveTo(-10, -25);
        c.lineTo(10, -25);
        c.lineTo(15, -30);
        c.lineTo(-15, -30);
        c.lineTo(-10, -25);
        c.fill();
        c.stroke();
    },
    function () {
        rect(-15, -30, 30, 30);
        
        c.beginPath();
        c.moveTo(-15, -30);
        c.lineTo(15, -30);
        c.lineTo(25, -40);
        c.lineTo(-25, -40);
        c.lineTo(-15, -30);
        c.fill();
        c.stroke();
    },
    function () {
        rect(-10, -30, 20, 30);
        
        c.beginPath();
        c.moveTo(-10, -30);
        c.lineTo(10, -30);
        c.lineTo(20, -35);
        c.lineTo(-20, -35);
        c.lineTo(-10, -30);
        c.fill();
        c.stroke();
        
        c.save();
        c.rotate(2.0944);
        rect(-10, -30, 20, 30);
              
        c.beginPath();
        c.moveTo(-10, -30);
        c.lineTo(10, -30);
        c.lineTo(20, -35);
        c.lineTo(-20, -35);
        c.lineTo(-10, -30);
        c.fill();
        c.stroke();
        c.restore();
        
        c.save();
        c.rotate(-2.0944);
        rect(-10, -30, 20, 30);
              
        c.beginPath();
        c.moveTo(-10, -30);
        c.lineTo(10, -30);
        c.lineTo(20, -35);
        c.lineTo(-20, -35);
        c.lineTo(-10, -30);
        c.fill();
        c.stroke();
        c.restore();
        
    },
    function() {
        rect(-15, 0, 30, -40);
    },
    function() {
        rect(-25, 0, 50, -50);
    },
    function() {
        rect(6, 0, 8, -35);
        rect(-16, 0, 8, -35);
        rect(1, 0, 8, -40);
        rect(-11, 0, 8, -40);
    },
    function() {
        rect(-9, 0, 18, -40);
              
        c.save();
        c.rotate(0.5236);
        rect(-9, 0, 18, 30);
        c.restore();
              
        c.save();
        c.rotate(-0.5236);
        rect(-9, 0, 18, 30);
        c.restore();
    },
    function() {
    }
];

var script = document.createElement("script");
script.src = "scripts/GUI.js";
script.async = true;
document.body.appendChild(script);
