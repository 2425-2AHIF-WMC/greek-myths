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
});