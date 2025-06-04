let leftDoor = document.querySelector(".doorLeft");
let rightDoor = document.querySelector(".doorRight");

function toggleDoors() {
    openDoor();

    setTimeout(() => {
        let underworld = document.getElementById("Underworld");
        underworld.style.display = "block";
        underworld.style.position = "absolute";
        underworld.style.top = "1";
        underworld.style.zIndex = "1000";
    }, 1500);

    setTimeout(() => {
        let doorContainer = document.getElementById("door");
        if (doorContainer) {
            doorContainer.style.display = "none";
           localStorage.setItem("doorsOpened", "true");
        }
    }, 1500);
}

function openDoor() {
    leftDoor.classList.add("doorOpenLeft");
    rightDoor.classList.add("doorOpenRight");
}

function init() {

    let referrer = document.referrer;

    if (referrer.includes("stories.html") || referrer.includes("index.html") || referrer.includes("game.html") || referrer.includes("greekgods.html") ) {
        document.getElementById("door").style.display = "block";
    } else {
        document.getElementById("door").style.display = "none";
        document.getElementById("Underworld").style.display = "block";
    }
}

document.addEventListener("DOMContentLoaded", function () {
    init();
});

document.querySelector(".backDoorContainer").addEventListener("click", toggleDoors);
