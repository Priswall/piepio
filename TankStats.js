var tankstats = {
    "Basic Tank": {
        reload: 500,
        bulletSpeed: 5,
        spread: 3
    },
    "Twin": {
        reload: 400,
        bulletSpeed: 5,
        spread: 4
    },
    "Sniper": {
        reload: 1000,
        bulletSpeed: 10,
        spread: 1
    },
    "Machine Gunner": {
        reload: 200,
        bulletSpeed: 5,
        spread: 10
    },
    "Flank Guard": {
        reload: 400,
        bulletSpeed: 5,
        spread: 3
    }
};

var script = document.createElement("script");
script.src = "scripts/Tank.js";
script.async = true;
document.body.appendChild(script);