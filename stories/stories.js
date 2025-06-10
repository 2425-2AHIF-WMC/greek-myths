const stories = {
    odysseus: {
        title: "The Odyssey",
        content: `
          <h2>The Journey of Odysseus</h2>
          <p>Odysseus, the clever king of Ithaca, embarked on a long journey home after the Trojan War. Facing sirens, cyclopes, storms, and gods, his tale is one of cunning and perseverance.</p>
          <p>After ten years of war and another ten years of wandering, Odysseus finally returned home to his faithful wife, Penelope.</p>
        `,
        trivia: "Odysseus' cunning idea of the Trojan Horse was key to ending the Trojan War."
    },
    medusa: {
        title: "The Curse of Medusa",
        content: `
          <h2>Medusa the Gorgon</h2>
          <p>Medusa, once a beautiful maiden, was cursed by Athena into a monster with snakes for hair. Anyone who looked into her eyes turned to stone.</p>
          <p>She was eventually slain by the hero Perseus, who used a mirrored shield to avoid her deadly gaze.</p>
        `,
        trivia: "Medusa's severed head retained its power and was used by Perseus as a weapon."
    },
    icarus: {
        title: "The Fall of Icarus",
        content: `
          <h2>Icarus and Daedalus</h2>
          <p>Icarus, son of the inventor Daedalus, tried to escape Crete using wings made of feathers and wax. Ignoring his father's warning, he flew too close to the sun.</p>
          <p>The wax melted, and Icarus fell into the sea, symbolizing the danger of overambition.</p>
        `,
        trivia: "The sea where Icarus fell was named the Icarian Sea in his memory."
    }
};

function showStory(key) {
    const story = stories[key];
    const contentDiv = document.getElementById("content");

    if (story) {
        contentDiv.innerHTML = `
            <article>
                ${story.content}
                <div class="trivia-box">
                    💡 <strong>Trivia:</strong> ${story.trivia}
                </div>
            </article>
        `;
        contentDiv.scrollIntoView({ behavior: "smooth" });
    }
}

function petrify() {
    const overlay = document.getElementById('stone-overlay');
    const body = document.body;

    // Add petrified class to disable interactions
    body.classList.add('petrified');

    // Show stone overlay
    overlay.classList.add('active');



    // Remove petrification after 3 seconds
    setTimeout(() => {
        overlay.classList.remove('active');

        // Wait for fade out animation to complete before removing petrified state
        setTimeout(() => {
            body.classList.remove('petrified');
            // Then show the actual Medusa story
            showStory('medusa');
        }, 500);

    }, 3000);
}


// Prevent right-click and other interactions during petrification
document.addEventListener('contextmenu', function(e) {
    if(document.body.classList.contains('petrified')) {
        e.preventDefault();
    }
});

document.addEventListener('keydown', function(e) {
    if(document.body.classList.contains('petrified')) {
        e.preventDefault();
    }
});