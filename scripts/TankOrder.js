var tankorder = [
    [
        classes.indexOf("Twin"),
        classes.indexOf("Sniper"),
        classes.indexOf("Machine Gunner"),
        classes.indexOf("Flank Guard")
    ]
];

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
    
        c.beginPath();
        c.moveTo(-4, 0);
        c.lineTo(-16, -32);
        c.stroke();
    
        c.beginPath();
        c.lineTo(-16, -32);
        c.lineTo(16, -32);
        c.stroke();
    
        c.beginPath();
        c.lineTo(16, -32);
        c.lineTo(4, 0);
        c.stroke();
    },
    function() {
        rect(-9, 0, 18, -40);
        rect(-9, 0, 18, 32);
    }
];

var script = document.createElement("script");
script.src = "scripts/GUI.js";
script.async = true;
document.body.appendChild(script);