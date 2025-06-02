// 🔥 GRIECHISCHE MYTHOLOGIE EASTER EGGS 🔥

// ===== GLOBALE VARIABLEN =====
let clickCount = 0;
let konamiCode = [];
let shadowsActive = false;
let cerberusAwake = false;

// CERBERUS ERWACHT - Triple Click auf Überschrift
function initializeCerberusEasterEgg() {
    const headers = document.querySelectorAll('h1');
    headers.forEach(header => {
        header.addEventListener('click', function() {
            clickCount++;
            if (clickCount === 3) {
                awakeCerberus();
                clickCount = 0;
            }
            setTimeout(() => { clickCount = 0; }, 2000);
        });
    });
}

async function checkImagePath() {
    let paths = ["pics/image001.png", "../pics/image001.png"];

    for (let path of paths) {
        try {
            let response = await fetch(path, { method: 'HEAD' });
            if (response.ok) return path;
        } catch (error) {
            console.log(`Bild nicht gefunden: ${path}`);
        }
    }

    return "fallback-image.png"; // Falls kein Bild gefunden wird.
}

async function awakeCerberus() {
    if (cerberusAwake) return;
    cerberusAwake = true;

    let imagePath = await checkImagePath();

    const cerberus = document.createElement('div');

    cerberus.innerHTML = `<img src="${imagePath}" height="200">`;
    cerberus.style.cssText = `
        position: fixed;
        top: 40%;
        left: 40%;
        font-size: 4em;
        z-index: 9999;
        text-shadow: 0 0 20px #ff0000;
        pointer-events: none;
    `;

    document.body.appendChild(cerberus);

    // CSS Animation hinzufügen
    if (!document.getElementById('cerberus-style')) {
        const style = document.createElement('style');
        style.id = 'cerberus-style';

        style.textContent = `
        @keyframes howl {
                0%{ transform: scale(1); }
                50%,100% { transform: scale(4); text-shadow: 0 0 30px #ff0000; }
            }`;
        document.head.appendChild(style);
    }

    document.body.appendChild(cerberus);

     cerberus.style.animation = 'howl 3s ease-in-out ';


    setTimeout(() => {
        cerberus.remove();
        cerberusAwake = false;
    }, 3000);

}


//  HADES' SCHATTEN
function initializeHadesShadow() {
    document.addEventListener('keydown', function(e) {
        if (e.shiftKey && e.key.toLowerCase() === 'h') {
            castHadesShadow();
        }
    });
}

function castHadesShadow() {
    if (shadowsActive) return;
    shadowsActive = true;

    document.body.style.transition = 'all 2s ease-in-out';
    document.body.style.background = 'radial-gradient(circle, #000000 0%, #1a0000 50%, #000000 100%)';
    document.body.style.filter = 'contrast(1.5) brightness(0.3)';

  addHadesAnimation();

    setTimeout(() => {
        document.body.style.background = '';
        document.body.style.filter = '';
        shadowsActive = false;
    }, 3000);

}



function addHadesAnimation() {
    if (!document.getElementById('hades-style')) {
        const style = document.createElement('style');
        style.id = 'hades-style';
        style.textContent = `
            @keyframes hadesAppear {
                0% { transform: translate(-50%, -50%) scale(0) rotate(0deg); opacity: 0; }
                50% { transform: translate(-50%, -50%) scale(1.5) rotate(180deg); opacity: 1; }
                100% { transform: translate(-50%, -50%) scale(1) rotate(360deg); opacity: 0.8; }
            }
            @keyframes shadowFloat {
                0% { transform: translateY(0px) rotate(0deg); opacity: 0; }
                50% { transform: translateY(-50px) rotate(180deg); opacity: 0.7; }
                100% { transform: translateY(-100px) rotate(360deg); opacity: 0; }
            }
        `;
        document.head.appendChild(style);
    }
}

//  CHARON'S MÜNZEN - Konami Code
function initializeCharonCoins() {
    const correctCode = ['ArrowUp',  'ArrowDown',
        'ArrowLeft', 'ArrowRight'];

    document.addEventListener('keydown', function(e) {
        konamiCode.push(e.code);

        if (konamiCode.length > correctCode.length) {
            konamiCode.shift();
        }

        if (JSON.stringify(konamiCode) === JSON.stringify(correctCode)) {
            summonCharonCoins();
            konamiCode = [];
        }
    });
}

function summonCharonCoins() {
    const coins = ['🪙', '💰', '🥇', '💎'];

    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            const coin = document.createElement('div');
            coin.innerHTML = coins[Math.floor(Math.random() * coins.length)];
            coin.style.cssText = `
                position: fixed;
                top: -50px;
                left: ${Math.random() * 100}vw;
                font-size: 2em;
                z-index: 9999;
                animation: coinFall 3s ease-in;
                pointer-events: none;
                text-shadow: 0 0 10px #ffd700;
            `;

            coin.addEventListener('click', function() {
                this.style.animation = 'coinSpin 0.5s ease-in-out';
                setTimeout(() => this.remove(), 500);
            });

            document.body.appendChild(coin);

            setTimeout(() => coin.remove(), 3000);
        }, i * 100);
    }

    // Charon erscheint
    setTimeout(() => {
        const charon = document.createElement('div');
        charon.innerHTML = '⛵';
        charon.style.cssText = `
            position: fixed;
            bottom: 20px;
            left: -200px;
            font-size: 3em;
            z-index: 9998;
            animation: charonBoat 5s linear;
            text-shadow: 0 0 20px #0066cc;
            pointer-events: none;
        `;
        document.body.appendChild(charon);

        setTimeout(() => charon.remove(), 5000);
    }, 1000);

    addCoinAnimations();
}

function addCoinAnimations() {
    if (!document.getElementById('coin-style')) {
        const style = document.createElement('style');
        style.id = 'coin-style';
        style.textContent = `
            @keyframes coinFall {
                0% { transform: translateY(-50px) rotate(0deg); }
                100% { transform: translateY(${window.innerHeight + 50}px) rotate(720deg); }
            }
            @keyframes coinSpin {
                0% { transform: rotate(0deg) scale(1); }
                50% { transform: rotate(180deg) scale(1.5); }
                100% { transform: rotate(360deg) scale(0); }
            }
            @keyframes charonBoat {
                0% { transform: translateX(-200px); }
                100% { transform: translateX(${window.innerWidth + 200}px); }
            }
        `;
        document.head.appendChild(style);
    }
}
// STYX FLUSS - Mauszeiger Verfolgung
function initializeStyxRiver() {
    let styxTrail = [];
    let isTrailActive = false;

    // Aktivierung durch Alt + S
    document.addEventListener('keydown', function(e) {
        if (e.altKey && e.key.toLowerCase() === 's') {
            isTrailActive = !isTrailActive;
            if (!isTrailActive) {
                styxTrail.forEach(drop => drop.remove());
                styxTrail = [];
            }
        }
    });

    document.addEventListener('mousemove', function(e) {
        if (!isTrailActive) return;

        const drop = document.createElement('div');
        drop.innerHTML = ['💧', '🔷', '💙', '🔹'][Math.floor(Math.random() * 3)];
        drop.style.cssText = `
            position: fixed;
            top: ${e.clientY}px;
            left: ${e.clientX}px;
            font-size: 1em;
            z-index: 9996;
            animation: styxFade 1s ease-out;
            pointer-events: none;
            transform: translate(-50%, -50%);
        `;

        document.body.appendChild(drop);
        styxTrail.push(drop);

        if (styxTrail.length > 20) {
            const oldDrop = styxTrail.shift();
            oldDrop.remove();
        }

        setTimeout(() => {
            drop.remove();
            const index = styxTrail.indexOf(drop);
            if (index > -1) styxTrail.splice(index, 1);
        }, 1000);
    });

    addStyxAnimation();
}

function addStyxAnimation() {
    if (!document.getElementById('styx-style')) {
        const style = document.createElement('style');
        style.id = 'styx-style';
        style.textContent = `
            @keyframes styxFade {
                0% { 
                    opacity: 1; 
                    transform: translate(-50%, -50%) scale(1); 
                }
                100% { 
                    opacity: 0; 
                    transform: translate(-50%, -50%) scale(0.5); 
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// PANDORA'S BOX
function initializePandoraBox() {
    // Erstelle versteckte Pandora's Box
    const pandoraBox = document.createElement('div');
    pandoraBox.innerHTML = '🏺';
    pandoraBox.style.cssText = `
        position: fixed;
        bottom: 10px;
        right: 10px;
        font-size: 2em;
        cursor: pointer;
        opacity: 0.3;
        z-index: 9995;
        transition: all 0.3s ease;
        transform: rotate(${Math.random() * 20 - 10}deg);
    `;

    pandoraBox.addEventListener('mouseenter', function() {
        this.style.opacity = '1';
        this.style.transform = 'scale(1.2) rotate(0deg)';
    });

    pandoraBox.addEventListener('mouseleave', function() {
        this.style.opacity = '0.3';
        this.style.transform = 'scale(1) rotate(${Math.random() * 20 - 10}deg)';
    });

    pandoraBox.addEventListener('click', function() {
        openPandoraBox();
    });

    document.body.appendChild(pandoraBox);
}

function openPandoraBox() {
    const evils = ['😈', '👹', '💀', '🔥', '⚡', '🌪️', '💥', '🗲'];
    const hope = '✨';

    // Erst die Übel freisetzen
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const evil = document.createElement('div');
            evil.innerHTML = evils[Math.floor(Math.random() * evils.length)];
            evil.style.cssText = `
                position: fixed;
                bottom: 50px;
                right: 50px;
                font-size: 1.5em;
                z-index: 9999;
                animation: evilEscape 3s ease-out;
                pointer-events: none;
            `;

            evil.style.setProperty('--random-x', (Math.random() - 0.5) * window.innerWidth + 'px');
            evil.style.setProperty('--random-y', -(Math.random() * window.innerHeight + 100) + 'px');

            document.body.appendChild(evil);
            setTimeout(() => evil.remove(), 3000);
        }, i * 100);
    }

    // Dann die Hoffnung
    setTimeout(() => {
        const hopeElement = document.createElement('div');
        hopeElement.innerHTML = hope;
        hopeElement.style.cssText = `
            position: fixed;
            bottom: 50px;
            right: 50px;
            font-size: 3em;
            z-index: 10000;
            animation: hopeRise 4s ease-out;
            pointer-events: none;
            text-shadow: 0 0 20px #ffff00;
        `;

        document.body.appendChild(hopeElement);
        setTimeout(() => hopeElement.remove(), 4000);
    }, 2500);

    addPandoraAnimations();
}

function addPandoraAnimations() {
    if (!document.getElementById('pandora-style')) {
        const style = document.createElement('style');
        style.id = 'pandora-style';
        style.textContent = `
            @keyframes evilEscape {
                0% { 
                    transform: translate(0, 0) scale(0); 
                    opacity: 1; 
                }
                50% { 
                    transform: translate(calc(var(--random-x) * 0.5), calc(var(--random-y) * 0.5)) scale(1.2); 
                    opacity: 0.8; 
                }
                100% { 
                    transform: translate(var(--random-x), var(--random-y)) scale(0.5); 
                    opacity: 0; 
                }
            }
            @keyframes hopeRise {
                0% { 
                    transform: translate(0, 0) scale(0); 
                    opacity: 0; 
                }
                25% { 
                    transform: translate(0, -100px) scale(1); 
                    opacity: 1; 
                }
                75% { 
                    transform: translate(0, -200px) scale(1.5); 
                    opacity: 1; 
                }
                100% { 
                    transform: translate(0, -300px) scale(2); 
                    opacity: 0; 
                }
            }
        `;
        document.head.appendChild(style);
    }
}


function initializeFlowerRain() {
    document.addEventListener('keydown', function(event) {
        if (event.altKey && event.key.toLowerCase() === 'p') {
            flowerRain();
        }
    });
}

function flowerRain() {
    const flowers = ["🌸", "🌼", "💐", "🌺", "🌷"];
    for (let i = 0; i < 40; i++) {
        const flower = document.createElement("div");
        flower.textContent = flowers[Math.floor(Math.random() * flowers.length)];
        flower.style.position = "fixed";
        flower.style.left = Math.random() * 100 + "vw";
        flower.style.top = "-50px";
        flower.style.fontSize = (Math.random() * 2 + 1) + "rem";
        flower.style.zIndex = 9999;
        flower.style.pointerEvents = "none";
        flower.style.transition = "transform 5s ease-out, opacity 5s ease-out";
        document.body.appendChild(flower);

        requestAnimationFrame(() => {
            flower.style.transform = `translateY(${Math.random() * 100 + 100}vh) rotate(${Math.random() * 360}deg)`;
            flower.style.opacity = "0";
        });

        setTimeout(() => flower.remove(), 5000);
    }
}

// HAUPTINITIALISIERUNG
function initializeAllEasterEggs() {
    // Warte bis DOM geladen ist
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            setTimeout(initializeEasterEggs, 100);
        });
    } else {
        initializeEasterEggs();
    }
}

function initializeEasterEggs() {
    try {
        initializeCerberusEasterEgg();
        initializeHadesShadow();
        initializeCharonCoins();
        initializeStyxRiver();
        initializePandoraBox();
        initializeFlowerRain(); // <--- HIER EINBAUEN

    } catch (error) {
        console.error('Easter-Eggs are not working', error);
    }
}

initializeAllEasterEggs();