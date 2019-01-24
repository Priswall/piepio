var tankstats = {
    "Basic Tank": {
        reload: 500,
        bulletSpeed: 5,
        spread: 3,
        damage = 1
    },
    "Twin": {
        reload: 400,
        bulletSpeed: 5,
        spread: 4,
        damage = 1.5
    },
    "Sniper": {
        reload: 1000,
        bulletSpeed: 10,
        spread: 1,
        damage = 2
    },
    "Machine Gunner": {
        reload: 200,
        bulletSpeed: 5,
        spread: 10,
        damage = 1
    },
    "Flank Guard": {
        reload: 400,
        bulletSpeed: 5,
        spread: 3,
        damage = 1
    },
    "Destroyer": {
        reload: 1000,
        bulletSpeed: 4,
        spread: 1,
        damage = 10
    }
};

var script = document.createElement("script");
script.src = "scripts/Tank.js";
script.async = true;
document.body.appendChild(script);
