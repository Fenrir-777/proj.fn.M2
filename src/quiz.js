const questions = [
    {
        question: "Quem transformou a Terra em um planeta governado por insetos gigantes?",
        answers: [
            { id: 1, text: "A) Summer", correct: false },
            { id: 2, text: "B) Rick", correct: true },
            { id: 3, text: "C) Jerry", correct: false },
            { id: 4, text: "D) Morty", correct: false },
        ]
    },
    {
        question: "Verdadeiro ou falso: Morty já teve um relacionamento com um robô.",
        answers: [
            { id: 1, text: "A) Verdadeiro", correct: true },
            { id: 2, text: "B) Falso", correct: false },
            { id: 3, text: "C) Não mostrado na série", correct: false },
            { id: 4, text: "D) Foi Rick, não Morty", correct: false },
        ]
    },
    {
        question: "Qual personagem teve um surto existencial após descobrir que era um clone?",
        answers: [
            { id: 1, text: "A) Beth", correct: true },
            { id: 2, text: "B) Summer", correct: false },
            { id: 3, text: "C) Morty", correct: false },
            { id: 4, text: "D) Tammy", correct: false },
        ]
    },
    {
        question: "Quem explodiu a casa da família Smith logo no primeiro episódio?",
        answers: [
            { id: 1, text: "A) Rick", correct: true },
            { id: 2, text: "B) Um alienígena", correct: false },
            { id: 3, text: "C) Morty", correct: false },
            { id: 4, text: "D) Jerry", correct: false },
        ]
    },
    {
        question: "Verdadeiro ou falso: Rick já se transformou em um picles para evitar uma sessão de terapia.",
        answers: [
            { id: 1, text: "A) Verdadeiro", correct: true },
            { id: 2, text: "B) Falso", correct: false },
            { id: 3, text: "C) Ele virou um rato", correct: false },
            { id: 4, text: "D) Foi Morty quem fez isso", correct: false },
        ]
    },
    {
        question: "Qual desses personagens foi revelado ser um agente secreto da Federação Galáctica?",
        answers: [
            { id: 1, text: "A) Mr. Poopybutthole", correct: false },
            { id: 2, text: "B) Birdperson", correct: false },
            { id: 3, text: "C) Tammy", correct: true },
            { id: 4, text: "D) Squanchy", correct: false },
        ]
    },
    {
        question: "Qual é o nome do cientista maluco protagonista da série?",
        answers: [
            { id: 1, text: "A) Morty", correct: false },
            { id: 2, text: "B) Rick", correct: true },
            { id: 3, text: "C) Jerry", correct: false },
            { id: 4, text: "D) Summer", correct: false },
        ]
    },
    {
        question: "Qual é o nome do robô que Rick constrói apenas para passar manteiga?",
            answers: [
                { id: 1, text: "A) Butterdroid", correct: false },
                { id: 2, text: "B) Gearhead", correct: false },
                { id: 3, text: "C) Butter Robot", correct: true },
                { id: 4, text: "D) Sauce Bot", correct: false },
            ]
        },
];

const questionElement = document.querySelector(".pergunta");
const answerButtons = document.querySelectorAll(".btnResposta");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    showQuestion();
}

function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = (currentQuestionIndex + 1) + ". " + currentQuestion.question;

    currentQuestion.answers.forEach((answer, index) => {
        const btn = answerButtons[index];
        btn.textContent = answer.text;
        btn.classList.remove("correct", "incorrect");
        btn.disabled = false;
        btn.onclick = () => selectAnswer(answer, btn);
    });
}

function selectAnswer(answer, button) {
    const isCorrect = answer.correct;
    if (isCorrect) {
        button.classList.add("correct");
        score++;
    } else {
        button.classList.add("incorrect");
    }

    // Desativar todos os botões
    answerButtons.forEach(btn => btn.disabled = true);

    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            showScore();
        }
    }, 1000);
}

function showScore() {
    questionElement.textContent = `Você acertou ${score} de ${questions.length}!`;
    answerButtons.forEach(btn => {
        btn.style.display = "none";
    });
}

startQuiz();
