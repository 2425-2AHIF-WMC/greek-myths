document.getElementById("ritualForm").addEventListener("submit", function (e) {
    e.preventDefault();


    const god = document.getElementById("god").value;
    const offering = document.getElementById("offering").value;
    const location = document.getElementById("location").value;
    const wish = document.getElementById("wish").value;

    const resultText = document.getElementById("reactionText");
    const godImage = document.getElementById("godImage");

    const rating = evaluateRitual(god, offering, location, wish);

    let message = "";
    let imgSrc = "";
    let altText = "";

    if (rating >= 7) {
        message = "✨ Der Gott ist äußerst zufrieden. Dein Wunsch wird erfüllt!";
        imgSrc = "assets/god-happy.png";
        altText = "Gott ist erfreut";
    } else if (rating >= 4) {
        message = "😐 Der Gott ist neutral. Vielleicht hast du Glück...";
        imgSrc = "assets/god-neutral.png";
        altText = "Gott ist nachdenklich";
    } else {
        message = "⚡ Der Gott ist erzürnt! Dein Wunsch bleibt unerfüllt – oder schlimmer...";
        imgSrc = "assets/god-angry.png";
        altText = "Gott ist wütend";
    }
    document.body.className = `${god} ${rating >= 7 ? "happy" : rating >= 4 ? "neutral" : "angry"}`;

    resultText.textContent = message;

    godImage.src = imgSrc;
    godImage.alt = altText;
    godImage.style.display = "block";

    godImage.classList.remove("animate");
    void godImage.offsetWidth;
    godImage.classList.add("animate");
});


function evaluateRitual(god, offering, location, wish) {
    let points = 0;

    // Definiere, was zu welchem Gott passt
    const godPreferences = {
        poseidon: {
            offerings: { fisch: 3, wein: 1 },
            locations: { meer: 4, tempel: 2 },
            wishes: { regen: 2, schatz: 1 }
        },
        aphrodite: {
            offerings: { blumen: 4, wein: 2 },
            locations: { wald: 2, tempel: 3 },
            wishes: { liebe: 3, schatz: 1 }
        },
        ares: {
            offerings: { schwein: 4, wein: 1 },
            locations: { berg: 2, tempel: 3 },
            wishes: { sieg: 4 }
        },
        demeter: {
            offerings: { wein: 3, blumen: 2 },
            locations: { wald: 3, tempel: 2 },
            wishes: { regen: 2, schatz: 2 }
        },
        hades: {
            offerings: { schwein: 3, wein: 2 },
            locations: { berg: 2, tempel: 1 },
            wishes: { schatz: 2, sieg: 1 }
        }
    };

    const prefs = godPreferences[god];

    if (prefs.offerings[offering]) points += prefs.offerings[offering];
    if (prefs.locations[location]) points += prefs.locations[location];
    if (prefs.wishes[wish]) points += prefs.wishes[wish];

    return points;
}
