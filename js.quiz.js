const questions = [
    {
        question: "What is the main character of kuroko no basket?",
        answers: ["Kagami", "Kuroko", "Midorima", "Seirin"],
        correctAnswerIndex: 2
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: ["Earth", "Mars", "Jupiter", "Saturn"],
        correctAnswerIndex: 1
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        answers: ["Shakespeare", "Dickens", "Hemingway", "Austen"],
        correctAnswerIndex: 0
    },
    {
        question: "What is 2 + 2?",
        answers: ["3", "4", "5", "6"],
        correctAnswerIndex: 1
    }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    
    // Display question
    document.getElementById('question').textContent = currentQuestion.question;
    
    // Display answers
    const answerList = document.getElementById('answer-list');
    answerList.innerHTML = '';
    
    currentQuestion.answers.forEach((answer, index) => {
        const li = document.createElement('li');
        li.innerHTML = `<button class="answer-button" onclick="checkAnswer(${index})">${answer}</button>`;
        answerList.appendChild(li);
    });
}

function checkAnswer(selectedIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedIndex === currentQuestion.correctAnswerIndex) {
        score++;
    }
    
    currentQuestionIndex++;
    
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById('question-container').style.display = 'none';
    document.getElementById('result').style.display = 'block';
    document.getElementById('score').textContent = score;
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById('result').style.display = 'none';
    document.getElementById('question-container').style.display = 'block';
    loadQuestion();
}

// Load the first question when the page is ready
window.onload = function() {
    loadQuestion();
};
