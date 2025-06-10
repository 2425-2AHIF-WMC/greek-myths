const stories = {
    odysseus: {
        title: "The Odyssey",
        content: `
        <h2>The Journey of Odysseus</h2>
        <p>Odysseus, king of Ithaca and hero of the Trojan War, is the central figure in The Odyssey, Homer’s epic about his 10-year journey home.</p>
        <p>On his voyage, he faced many perils: the one-eyed Cyclops Polyphemus, the enchantress Circe, the deadly Sirens, the six-headed Scylla, and the whirlpool Charybdis.</p>
        <p>He also spent years trapped on Calypso’s island.</p>
        <p>Through wit, endurance, and help from the gods, he returned to Ithaca and reclaimed his kingdom and faithful wife, Penelope.</p>
        `,
        trivia: "Odysseus' cunning idea of the Trojan Horse was key to ending the Trojan War."
    },
    medusa: {
        title: "The Curse of Medusa",
        content: `
          <h2>Medusa the Gorgon</h2>
          <p>Medusa was once a beautiful maiden and a priestess of Athena.</p>
          <p>After being seduced or violated by Poseidon in Athena’s temple, the enraged goddess transformed her into a Gorgon—a monster with snakes for hair and a gaze that turned anyone who looked at her to stone.</p>
          <p>Eventually, the hero Perseus was sent to slay her.</p>
          <p>With help from the gods—Hermes' winged sandals, Hades' helm of invisibility, and a mirrored shield from Athena—he beheaded her without looking directly at her.</p>
          <p>From her severed neck sprang Pegasus, the winged horse.</p>
        `,
        trivia: "Medusa's severed head retained its power and was used by Perseus as a weapon."
    },
    icarus: {
        title: "The Fall of Icarus",
        content: `
         <h2>Icarus and Daedalus</h2>
         <p>Icarus was the son of the master craftsman Daedalus, who designed the Labyrinth for King Minos of Crete.</p>
         <p>When the king imprisoned them to keep the Labyrinth's secrets, Daedalus built wings of feathers and wax for their escape.</p>
         <p>He warned Icarus not to fly too high, as the sun's heat would melt the wax.</p> 
         <p>But Icarus, exhilarated by flight, soared too close to the sun.</p>
         <p>His wings melted, and he fell into the sea and drowned—forever symbolizing the danger of hubris and overambition.</p>
          `,
        trivia: "The sea where Icarus fell was named the Icarian Sea in his memory."
    },
    hercules: {
        title: "Hercules",
        content: `
        <h2>Hercules</h2>
        <p>Hercules, son of Zeus and the mortal Alcmene, was the strongest of all Greek heroes.</p>  
        <p>Driven mad by Hera, he killed his wife and children in a frenzy. As penance, he was given twelve nearly impossible labors by King Eurystheus. </p>
        <p> These included slaying the Nemean Lion, capturing the Golden Hind, cleaning the Augean Stables, and retrieving Cerberus from the Underworld.</p>
        <p>Through courage and cunning, Hercules completed all tasks and achieved immortality after death.</p>
        `,
        trivia: "The term “Herculean task“ comes from his legendary labors, used today to describe any extremely difficult challenge."
    },
    achilles: {
        title: "Achilles",
        content: `
        <h2>Achilles</h2>
        <p>Achilles was the mightiest Greek warrior in the Trojan War.</p>
        <p>His mother, Thetis, tried to make him immortal by dipping him into the River Styx, holding him by the heel.</p>
        <p>That heel remained vulnerable. </p>
        <p> During the war, Achilles quarreled with Agamemnon, withdrew from battle, and only returned after his close friend Patroclus was killed by Hector.</p>
        <p> Achilles slew Hector in vengeance. </p>
        <p> Eventually, he was killed—most versions say by Paris—who shot an arrow guided by Apollo into his heel.</p>
        `,
        trivia:"The term “Achilles’ heel“ refers to a person’s single point of weakness, based on how Achilles died."
    },
    theseus: {
        title: "Theseus",
        content: `
        <h2>Theseus</h2>
        <p>Theseus was a prince of Athens who volunteered to slay the Minotaur, a half-man, half-bull creature kept in the Labyrinth on Crete.</p>
        <p>With the help of Princess Ariadne, who gave him a ball of thread to retrace his path, he navigated the Labyrinth, killed the Minotaur, and led the other Athenians to safety.</p>
        <p>Later, Theseus became king of Athens and was involved in many other adventures, including a descent into the Underworld and battling Amazons.</p>
        `,
        trivia:"Theseus forgot to change his ship’s sails from black to white upon his return, leading his father Aegeus to believe he had died—and causing him to leap into the sea, now named the Aegean Sea."
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

const prophecies = [
    "When the moon eclipses the sun, a hero shall fall.",
    "Beware the song of the siren when the sea is still.",
    "Three flames shall burn where one once stood.",
    "He who wears the crown of olive shall bring peace.",
    "The owl hoots twice before the shadow rises.",
    "Your path is curved like the river of Lethe.",
    "The labyrinth holds your fate — and your fear.",
    "From fire and ash, a name shall be reborn.",
    "A whisper in the east foretells of storm and sorrow.",
    "Only the silent will hear the truth of Olympus."
];

function getRandomProphecy() {
    const index = Math.floor(Math.random() * prophecies.length);
    return prophecies[index];
}

document.getElementById("oracle-container").addEventListener("click", () => {
    const prophecyText = document.getElementById("prophecy-text");
    prophecyText.textContent = getRandomProphecy();
    document.getElementById("oracle-message").style.display = "block";
});

function closeOracle() {
    document.getElementById("oracle-message").style.display = "none";
}