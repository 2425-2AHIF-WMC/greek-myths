const gods = [

    {
        name: "<a class = 'linkInFlashcards' href='götter/hades.html'>Hades</a>",
        description: [
            "<img src = 'pics/Hades.jpeg' width='225' height='225' alt='Hades'> ",
            "God of the Underworld",
            "Brother of Zeus and Poseidon",
            "Ruler of the Dead",
            "Possesses a Helmet of Invisibility"
        ]
    },
    {
        name: "<a class = 'linkInFlashcards' href='götter/persephone.html'>Persephone</a>",
        description: [
            "<img src = 'pics/persephone.jpg' width='225' height='225' alt='Persephone'> ",
            "Queen of the Underworld",
            "Daughter of Demeter",
            "Her abduction explains the seasons",
            "Spends one-third of the year in the Underworld"
        ]
    },
    {
        name: "<a class = 'linkInFlashcards' href='götter/charon.html'>Charon</a>",
        description: [
            "<img src = 'pics/Charon.webp' width='225' height='225' alt='Charon'> ",
            "Ferryman of the Underworld",
            "Transports souls across the River Acheron",
            "Requires a coin as payment",
            "Usually carries a long staff"
        ]
    },
    {
        name: "<a class = 'linkInFlashcards' href='götter/cerberus.html'>Cerberus</a>",
        description: [
            "<img src = 'pics/Cerberus.webp' width='225' height='225' alt='Cerberus'> ",
            "Three-headed dog",
            "Guards the entrance to the Underworld",
            "Does not let souls escape",
            "Was defeated by Heracles"
        ]
    }
];


let currentIndex = 0;
let isFlipped = false;

// Initialize
updateCard();
updateNavigation();

function flipCard() {
    const card = document.getElementById('flashcard');
    card.classList.toggle('flipped');
    isFlipped = !isFlipped;
}

function updateCard() {
    const god = gods[currentIndex];
    document.getElementById('godName').innerHTML = god.name;
    const factsContainer = document.getElementById('godFacts');
    factsContainer.innerHTML = ''; // Liste leeren
    god.description.forEach(fact => {
        if (fact.startsWith("<img")) {
            // Falls es sich um ein Bild handelt, direkt einfügen
            factsContainer.innerHTML += fact;
        } else {
            // Falls es Text ist, als Listenelement einfügen
            const li = document.createElement('li');
            li.innerHTML = fact;
            factsContainer.appendChild(li);
        }
    });
    document.getElementById('currentCard').textContent = currentIndex + 1;
    document.getElementById('totalCards').textContent = gods.length;

    // Reset flip state
    const card = document.getElementById('flashcard');
    card.classList.remove('flipped');
    isFlipped = false;
}

function nextCard() {
    if (currentIndex < gods.length - 1) {
        currentIndex++;
        updateCard();
        updateNavigation();
    }
}

function previousCard() {
    if (currentIndex > 0) {
        currentIndex--;
        updateCard();
        updateNavigation();
    }
}

function updateNavigation() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === gods.length - 1;
}

/*function shuffleCards() {
    // Fisher-Yates shuffle algorithm
    for (let i = gods.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [gods[i], gods[j]] = [gods[j], gods[i]];
    }

    currentIndex = 0;
    updateCard();
    updateNavigation();

    // Visual feedback
    const card = document.getElementById('flashcard');
    card.style.transform = 'scale(0.95)';
    setTimeout(() => {
        card.style.transform = 'scale(1)';
    }, 200);
}
*/
function resetAll() {
    currentIndex = 0;
    updateCard();
    updateNavigation();
}

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    switch(e.key) {
        case 'ArrowLeft':
            previousCard();
            break;
        case 'ArrowRight':
            nextCard();
            break;
        case ' ':
        case 'Enter':
            e.preventDefault();
            flipCard();
            break;
        case 'Escape':
            break;
    }
});
