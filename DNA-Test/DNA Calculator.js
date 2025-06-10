const gods = {
    zeus: {
        name: "Zeus",
        title: "King of the Gods, Ruler of the Sky",
        emoji: "⚡",
        description: "Your personality aligns with the mighty Zeus! You are a natural born leader who commands respect and authority. Like the king of the gods, you have a powerful presence and aren't afraid to make tough decisions. You value justice and order, though you can be quite dramatic when things don't go your way. Your leadership style is decisive and you're not afraid to take charge in difficult situations.",
        traits: ["Leadership", "Authority", "Justice", "Power", "Decisiveness"]
    },
    poseidon: {
        name: "Poseidon",
        title: "God of the Sea, Earthquakes, and Horses",
        emoji: "🌊",
        description: "You embody the spirit of Poseidon! Like the god of the seas, you are emotional, powerful, and unpredictable. You have deep feelings that can shift like the tides - calm and peaceful one moment, stormy and intense the next. You're fiercely protective of those you love and have a strong connection to nature and freedom. Your passion drives you to great heights.",
        traits: ["Emotional Depth", "Protectiveness", "Freedom", "Passion", "Intuition"]
    },
    athena: {
        name: "Athena",
        title: "Goddess of Wisdom, Warfare, and Crafts",
        emoji: "🦉",
        description: "You share the wisdom and strategic mind of Athena! You approach life with intelligence and careful planning. Like the goddess of wisdom, you prefer to think before you act and you excel at solving complex problems. You're skilled at seeing the bigger picture and you value knowledge and learning above all else. Your advice is often sought by others.",
        traits: ["Wisdom", "Strategy", "Intelligence", "Planning", "Problem-solving"]
    },
    apollo: {
        name: "Apollo",
        title: "God of Music, Poetry, Sun, and Prophecy",
        emoji: "☀️",
        description: "You radiate the creative energy of Apollo! Like the god of music and poetry, you have a natural artistic talent and a bright, optimistic personality. You bring light and inspiration to those around you, and you have a gift for seeing the beauty in life. You're confident, creative, and have a natural charisma that draws people to you.",
        traits: ["Creativity", "Optimism", "Charisma", "Artistic Talent", "Inspiration"]
    },
    artemis: {
        name: "Artemis",
        title: "Goddess of the Hunt, Moon, and Wilderness",
        emoji: "🏹",
        description: "You embody the independent spirit of Artemis! Like the goddess of the hunt, you value your freedom and independence above all else. You're fiercely protective of your personal space and the people you care about. You have a strong connection to nature and animals, and you're not afraid to stand up for what you believe in. Your determination is unwavering.",
        traits: ["Independence", "Determination", "Nature Connection", "Protectiveness", "Focus"]
    },
    aphrodite: {
        name: "Aphrodite",
        title: "Goddess of Love, Beauty, and Pleasure",
        emoji: "💕",
        description: "You share the loving nature of Aphrodite! Like the goddess of love, you have a deep appreciation for beauty, harmony, and relationships. You're naturally charming and have a gift for bringing people together. You value emotional connections and you're not afraid to express your feelings. Your presence brings joy and warmth to those around you.",
        traits: ["Love", "Harmony", "Charm", "Emotional Intelligence", "Beauty"]
    },
    ares: {
        name: "Ares",
        title: "God of War and Courage",
        emoji: "⚔️",
        description: "You possess the fierce courage of Ares! Like the god of war, you're not afraid of conflict and you'll fight for what you believe in. You have incredible physical and mental strength, and you're always ready to defend those who can't defend themselves. Your passion and intensity can be overwhelming, but it's also what makes you so effective at overcoming obstacles.",
        traits: ["Courage", "Strength", "Passion", "Determination", "Protectiveness"]
    },
    demeter: {
        name: "Demeter",
        title: "Goddess of Agriculture and Nature",
        emoji: "🌾",
        description: "You embody the nurturing spirit of Demeter! Like the goddess of agriculture, you have a natural ability to help things grow and flourish. You're deeply caring and protective, especially of family and those you consider your own. You have a strong connection to nature and the cycles of life, and you understand the importance of patience and persistence.",
        traits: ["Nurturing", "Growth", "Patience", "Family-oriented", "Natural Wisdom"]
    },
    hephaestus: {
        name: "Hephaestus",
        title: "God of Fire, Metalworking, and Crafts",
        emoji: "🔥",
        description: "You share the creative craftmanship of Hephaestus! Like the god of the forge, you're incredibly skilled with your hands and have a natural talent for creating beautiful and useful things. You're hardworking, persistent, and you take great pride in your work. You prefer to let your actions speak louder than your words, and you have a deep appreciation for skill and craftsmanship.",
        traits: ["Craftsmanship", "Persistence", "Creativity", "Hard Work", "Skill"]
    },
    hermes: {
        name: "Hermes",
        title: "Messenger God, God of Trade and Thieves",
        emoji: "🎭",
        description: "You embody the quick wit and adaptability of Hermes! Like the messenger god, you're incredibly versatile and can adapt to almost any situation. You're charming, clever, and have a natural gift for communication. You love to travel, meet new people, and experience new things. Your curiosity and quick thinking help you navigate life's challenges with style.",
        traits: ["Adaptability", "Communication", "Curiosity", "Quick Thinking", "Versatility"]
    }
};

// Quiz Questions
const questions = [
    {
        question: "You're faced with a difficult decision that affects many people. What's your approach?",
        options: [
            { text: "Take charge and make the decision quickly - someone needs to lead", traits: { zeus: 3, ares: 2 } },
            { text: "Carefully analyze all options and consult with wise advisors", traits: { athena: 3, apollo: 1 } },
            { text: "Follow your instincts and trust your gut feeling", traits: { poseidon: 2, artemis: 2 } },
            { text: "Consider how it affects relationships and try to find harmony", traits: { aphrodite: 3, demeter: 2 } }
        ]
    },
    {
        question: "What type of environment makes you feel most at home?",
        options: [
            { text: "A grand palace or impressive building where I can hold court", traits: { zeus: 3, apollo: 1 } },
            { text: "Near the ocean, rivers, or any body of water", traits: { poseidon: 3 } },
            { text: "A quiet library or study filled with books and knowledge", traits: { athena: 3 } },
            { text: "Deep in the wilderness, surrounded by nature", traits: { artemis: 3, demeter: 2 } }
        ]
    },
    {
        question: "How do you handle conflict?",
        options: [
            { text: "Face it head-on with courage and determination", traits: { ares: 3, zeus: 1 } },
            { text: "Try to understand all sides and find a strategic solution", traits: { athena: 3, apollo: 1 } },
            { text: "Avoid it when possible, but fight fiercely when cornered", traits: { artemis: 2, poseidon: 2 } },
            { text: "Seek peaceful resolution and try to heal relationships", traits: { aphrodite: 2, demeter: 3 } }
        ]
    },
    {
        question: "What's your greatest strength?",
        options: [
            { text: "My ability to lead and inspire others", traits: { zeus: 3, apollo: 2 } },
            { text: "My intelligence and problem-solving skills", traits: { athena: 3, hermes: 1 } },
            { text: "My independence and self-reliance", traits: { artemis: 3, hephaestus: 2 } },
            { text: "My creativity and artistic vision", traits: { apollo: 3, aphrodite: 2, hephaestus: 1 } }
        ]
    },
    {
        question: "How do you prefer to spend your free time?",
        options: [
            { text: "Creating something beautiful with my hands", traits: { hephaestus: 3, apollo: 2 } },
            { text: "Exploring new places and meeting new people", traits: { hermes: 3, apollo: 1 } },
            { text: "Spending time in nature, perhaps hunting or hiking", traits: { artemis: 3, demeter: 2 } },
            { text: "Socializing and connecting with friends and loved ones", traits: { aphrodite: 3, hermes: 2 } }
        ]
    },
    {
        question: "What motivates you most?",
        options: [
            { text: "The desire to achieve greatness and be remembered", traits: { zeus: 3, apollo: 2 } },
            { text: "The pursuit of knowledge and understanding", traits: { athena: 3, apollo: 1 } },
            { text: "Protecting and caring for those I love", traits: { demeter: 3, artemis: 2, ares: 1 } },
            { text: "The thrill of adventure and new experiences", traits: { hermes: 3, poseidon: 2 } }
        ]
    },
    {
        question: "How do others typically see you?",
        options: [
            { text: "As a natural leader who others look up to", traits: { zeus: 3, athena: 1 } },
            { text: "As intense and passionate, sometimes unpredictable", traits: { poseidon: 3, ares: 2 } },
            { text: "As wise and thoughtful, someone they come to for advice", traits: { athena: 3, demeter: 2 } },
            { text: "As charming and charismatic, a natural people person", traits: { aphrodite: 3, hermes: 2, apollo: 1 } }
        ]
    },
    {
        question: "What's your approach to relationships?",
        options: [
            { text: "I'm intensely loyal but need my independence", traits: { artemis: 3, hephaestus: 2 } },
            { text: "I love deeply and create strong emotional bonds", traits: { aphrodite: 3, demeter: 2 } },
            { text: "I'm protective and will fight for those I care about", traits: { ares: 3, poseidon: 2 } },
            { text: "I enjoy meeting many people but few get really close", traits: { hermes: 3, apollo: 2 } }
        ]
    },
    {
        question: "If you could have any superpower, what would it be?",
        options: [
            { text: "Control over the weather and natural forces", traits: { zeus: 3, poseidon: 2 } },
            { text: "Perfect wisdom and the ability to see the future", traits: { athena: 3, apollo: 2 } },
            { text: "The power to heal and make things grow", traits: { demeter: 3, apollo: 1 } },
            { text: "Super speed and the ability to be anywhere instantly", traits: { hermes: 3, artemis: 1 } }
        ]
    },
    {
        question: "What would be your ideal legacy?",
        options: [
            { text: "To be remembered as a great ruler who brought order", traits: { zeus: 3, athena: 2 } },
            { text: "To have created something beautiful that lasts forever", traits: { apollo: 3, hephaestus: 2, aphrodite: 1 } },
            { text: "To have protected the innocent and fought for justice", traits: { ares: 3, artemis: 2 } },
            { text: "To have nurtured and helped others reach their potential", traits: { demeter: 3, athena: 1 } }
        ]
    }
];



// Quiz State
let currentQuestionIndex = 0;
let godScores = {};
let selectedAnswer = null;

// Initialize god scores
Object.keys(gods).forEach(god => {
    godScores[god] = 0;
});

// DOM Elements
const questionCounter = document.getElementById('question-counter');
const question = document.getElementById('question');
const optionsGrid = document.getElementById('options-grid');
const nextBtn = document.getElementById('next-btn');
const progressFill = document.getElementById('progress-fill');
const quizContainer = document.getElementById('quiz-container');
const resultContainer = document.getElementById('result-container');
const oracleText = document.getElementById('oracle-text');
const oracle = document.getElementById('oracle');
const restartBtn = document.getElementById('restart-btn');



// Display current question
function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];

    questionCounter.textContent = `Question ${currentQuestionIndex + 1} of ${questions.length}`;
    question.textContent = currentQuestion.question;

    // Update progress bar
    const progress = ((currentQuestionIndex) / questions.length) * 100;
    progressFill.style.width = progress + '%';

    // Clear and populate options
    optionsGrid.innerHTML = '';
    currentQuestion.options.forEach((option, index) => {
        const optionBtn = document.createElement('button');
        optionBtn.className = 'option-btn';
        optionBtn.textContent = option.text;
        optionBtn.onclick = () => selectAnswer(index, optionBtn);
        optionsGrid.appendChild(optionBtn);
    });

    // Reset state
    selectedAnswer = null;
    nextBtn.disabled = true;
}

// Handle answer selection
function selectAnswer(index, btnElement) {
    // Remove selection from all buttons
    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.classList.remove('selected');
    });

    // Add selection to clicked button
    btnElement.classList.add('selected');

    selectedAnswer = index;
    nextBtn.disabled = false;
}

// Process answer and move to next question
function nextQuestion() {
    if (selectedAnswer === null) return;

    // Add scores based on selected answer
    const currentQuestion = questions[currentQuestionIndex];
    const selectedOption = currentQuestion.options[selectedAnswer];

    Object.keys(selectedOption.traits).forEach(god => {
        godScores[god] += selectedOption.traits[god];
    });

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        showResults();
    }
}

// Calculate and display results
function showResults() {
    // Find the god with the highest score
    let topGod = null;
    let topScore = 0;
    let totalScore = 0;

    Object.keys(godScores).forEach(god => {
        totalScore += godScores[god];
        if (godScores[god] > topScore) {
            topScore = godScores[god];
            topGod = god;
        }
    });

    // Calculate percentage match
    const percentage = Math.round((topScore / totalScore) * 100);

    // Get god data
    const godData = gods[topGod];

    // Hide quiz, show results
    quizContainer.style.display = 'none';
    resultContainer.style.display = 'block';

    // Populate result data
    document.getElementById('god-image').textContent = godData.emoji;
    document.getElementById('god-name').textContent = godData.name;
    document.getElementById('god-title').textContent = godData.title;
    document.getElementById('match-percentage').textContent = percentage + '%';
    document.getElementById('god-description').textContent = godData.description;

    // Show trait breakdown
    const traitsGrid = document.getElementById('traits-grid');
    traitsGrid.innerHTML = '';

    // Sort gods by score for trait display
    const sortedGods = Object.keys(godScores)
        .sort((a, b) => godScores[b] - godScores[a])
        .slice(0, 5); // Show top 5

    sortedGods.forEach(god => {
        const traitCard = document.createElement('div');
        traitCard.className = 'trait-card';

        const godName = gods[god].name;
        const score = godScores[god];
        const godPercentage = Math.round((score / totalScore) * 100);

        traitCard.innerHTML = `
                    <div class="trait-name">${godName}</div>
                    <div class="trait-value">${godPercentage}% match</div>
                `;

        traitsGrid.appendChild(traitCard);
    });

    // Animate progress bar to 100%
    progressFill.style.width = '100%';

}



// Restart quiz
function restartQuiz() {
    currentQuestionIndex = 0;
    selectedAnswer = null;

    // Reset scores
    Object.keys(gods).forEach(god => {
        godScores[god] = 0;
    });

    // Show quiz, hide results
    quizContainer.style.display = 'block';
    resultContainer.style.display = 'none';

    // Start first question
    displayQuestion();
}

// Event listeners
nextBtn.addEventListener('click', nextQuestion);
restartBtn.addEventListener('click', restartQuiz);


// Initialize the quiz
function init() {
    displayQuestion();
}

// Start the quiz when page loads
window.addEventListener('load', init);