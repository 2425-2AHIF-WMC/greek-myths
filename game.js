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

    try {
        questions = await client.getAllQuestions();
        showQuestion(questions);
        
    } catch (error) {
        console.error('Error loading questions:', error);
        questionDiv.textContent = 'Failed to load quiz questions. Please try again later.';
        feedbackDiv.textContent = `Error: ${error.message}`;
    }
    

    function showQuestion(questions) {
        const nextBtn = document.getElementById('next');
        const currentQuestion = questions[currentQuestionIndex];
        console.log(currentQuestion);
        questionDiv.textContent = currentQuestion.question;
        optionsDiv.innerHTML = '';
        feedbackDiv.textContent = '';
                 
                currentQuestion.options.forEach(option => {
                    const button = document.createElement('button');
                    button.textContent = option.text;
                    button.className = 'option-btn';
                    button.onclick = () => checkAnswer(option, button);
                    optionsDiv.appendChild(button);

                });

                nextBtn.style.display = 'none';
                
    }

    function checkAnswer(option, button) {
        const nextBtn = document.getElementById('next');
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

        nextBtn.style.display = 'block';
    }

    function showResult() {
        questionDiv.style.display = 'none';
        optionsDiv.style.display = 'none';
        feedbackDiv.style.display = 'none';
        document.getElementById('next').style.display = 'none';
        const resultDiv = document.getElementById('result');
        resultDiv.style.display = 'block';
        resultDiv.textContent = `You got ${score} out of ${questions.length} correct!`;
    }

    document.getElementById('next').onclick = () => {
        currentQuestionIndex++;
        if(currentQuestionIndex < questions.length) {
            showQuestion(questions);
        }else{
            showResult();
        }
    };
});
