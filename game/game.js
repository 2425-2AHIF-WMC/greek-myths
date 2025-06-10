export class HttpClient {
    baseUrl = "http://localhost:3000";
    questionsUrl = `${this.baseUrl}/questions`;

    async getAllQuestions() {
        return await fetch(this.questionsUrl)
            .then(response => {
                if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
                return response.json();
            });
    }
}

document.addEventListener('DOMContentLoaded', async () => {
    const oracles = [
        "„Erkenne dich selbst.“",
        "„Nichts im Übermaß.“",
        "„Der Weise zweifelt, der Tor ist sich sicher.“",
        "„Du wirst herrschen, wenn du dich selbst beherrschst.“",
        "„Auch dein Weg ist vom Schicksal gezeichnet.“"
    ];
    let questions = [];
    let currentQuestionIndex = 0;
    let score = 0;
    const client = new HttpClient();
    const questionDiv = document.getElementById('question');
    const optionsDiv = document.getElementById('options');
    const feedbackDiv = document.getElementById('feedback');
    const nextBtn = document.getElementById('next');
    const buttonsContainer = document.getElementById('buttons-container');

    try {
        questions = await client.getAllQuestions();
        showQuestion(questions);

    } catch (error) {
        console.error('Error loading questions:', error);
        questionDiv.textContent = 'Failed to load quiz questions. Please try again later.';
        feedbackDiv.textContent = `Error: ${error.message}`;
    }

    function showDelphi() {
        questionDiv.style.display = 'none';
        optionsDiv.style.display = 'none';
        feedbackDiv.style.display = 'none';
        nextBtn.style.display = 'none';

        const resultDiv = document.getElementById('result');
        const playAgainBtn = document.getElementById('play-again');
        const oracleContainer = document.getElementById('oracle-container');
        const oracleText = document.getElementById('oracle-text');

        resultDiv.style.display = 'block';
        playAgainBtn.style.display = 'block';
        buttonsContainer.style.display = 'block';
        oracleContainer.style.display = 'block';

        resultDiv.textContent = `You got ${score} out of ${questions.length} correct!`;

        const oracles = [
            "„Erkenne dich selbst.“",
            "„Nichts im Übermaß.“",
            "„Der Weise zweifelt, der Tor ist sich sicher.“",
            "„Du wirst herrschen, wenn du dich selbst beherrschst.“",
            "„Auch dein Weg ist vom Schicksal gezeichnet.“",
            "„Das Schicksal lenkt jene, die folgen – und zieht jene, die sich widersetzen.“",
            "„Die Wahrheit liegt nicht in den Sternen, sondern in deinem Herzen.“",
            "„Wer den Schatten fürchtet, verkennt das Licht.“",
            "„Nicht der erste Schritt zählt, sondern die Richtung, die du wählst.“",
            "„Geduld ist die stärkste Waffe des Weisen.“",
            "„Wenn du am Abgrund stehst, bedenke: Vielleicht lernst du fliegen.“"
        ];

        const randomIndex = Math.floor(Math.random() * oracles.length);
        oracleText.textContent = oracles[randomIndex];
    }

    function showQuestion(questions) {
        const questionNumberDiv = document.getElementById('question-number');

        questionNumberDiv.textContent = `Question: ${currentQuestionIndex + 1} / ${questions.length}`;

        questionDiv.textContent = currentQuestionIndex < questions.length ? questions[currentQuestionIndex].question : '';
        optionsDiv.innerHTML = '';
        feedbackDiv.textContent = '';

        if (currentQuestionIndex < questions.length) {
            const currentQuestion = questions[currentQuestionIndex];
            currentQuestion.options.forEach(option => {
                const button = document.createElement('button');
                button.textContent = option.text;
                button.className = 'option-btn';
                button.onclick = () => checkAnswer(option, button);
                optionsDiv.appendChild(button);
            });

            nextBtn.style.display = 'block';
            nextBtn.disabled = true;
            nextBtn.classList.add('disabled');
            buttonsContainer.style.display = 'block';
            document.getElementById('result').style.display = 'none';
            document.getElementById('play-again').style.display = 'none';
        }
    }

    function checkAnswer(option, button) {
        const buttons = document.querySelectorAll('.option-btn');

        buttons.forEach(btn => btn.disabled = true);

        if (option.isCorrect) {
            button.style.backgroundColor = '#2ecc71';
            feedbackDiv.textContent = 'Correct!';
            score++;
        } else {
            button.style.backgroundColor = '#e74c3c';
            const correctOption = questions[currentQuestionIndex].options.find(opt => opt.isCorrect);
            feedbackDiv.textContent = `Incorrect! The correct answer is ${correctOption.text}.`;
        }

        nextBtn.disabled = false;
        nextBtn.classList.remove('disabled');
    }

    function showResult() {
        questionDiv.style.display = 'none';
        optionsDiv.style.display = 'none';
        feedbackDiv.style.display = 'none';
        nextBtn.style.display = 'none';
        const resultDiv = document.getElementById('result');
        const playAgainBtn = document.getElementById('play-again');
        resultDiv.style.display = 'block';
        playAgainBtn.style.display = 'block';
        buttonsContainer.style.display = 'block';
        resultDiv.textContent = `You got ${score} out of ${questions.length} correct!`;
    }

    document.getElementById('next').onclick = () => {
        currentQuestionIndex++;
        if(currentQuestionIndex < questions.length) {
            showQuestion(questions);
        } else {
            showResult();
        }
    };

    document.getElementById('play-again').onclick = () => {
        currentQuestionIndex = 0;
        score = 0;
        questionDiv.style.display = 'block';
        optionsDiv.style.display = 'flex';
        feedbackDiv.style.display = 'block';
        showQuestion(questions);
    };


// Klick-Event für das Orakel
    document.getElementById('oracle-container').addEventListener('click', () => {
        const oracleText = document.getElementById('oracle-text');
        const randomIndex = Math.floor(Math.random() * oracles.length);
        oracleText.textContent = oracles[randomIndex];

        // Setze Event-Listener HIER
        const oracleContainer = document.getElementById('oracle-container');
        oracleContainer.onclick = () => {
            let newText;
            do {
                newText = oracles[Math.floor(Math.random() * oracles.length)];
            } while (oracleText.textContent === newText);
            oracleText.textContent = newText;
        };
    });

});