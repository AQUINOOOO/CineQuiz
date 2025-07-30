const questions = [
    {
        questions: "O que você mais gosta de sentir ao ver um filme?",
        answers: [
            { id: 1, text: "Emoção e adrenalina", genre: "Ação" },
            { id: 2, text: "Rir sem parar", genre: "Comédia" },
            { id: 3, text: "Medo e tensão", genre: "Terror" },
            { id: 4, text: "Borboletas no estômago", genre: "Romance" },
        ]
    },
    {
        questions: "Qual cenário você escolheria para viver uma aventura?",
        answers: [
            { id: 1, text: "Uma cidade caótica em meio a perseguições", genre: "Ação" },
            { id: 2, text: "Um set de filmagem cheio de situações engraçadas", genre: "Comédia" },
            { id: 3, text: "Uma casa abandonada no meio do nada", genre: "Terror" },
            { id: 4, text: "Paris sob o pôr do sol", genre: "Romance" },
        ]
    },
    {
        questions: "Qual dessas frases combina mais com você?",
        answers: [
            { id: 1, text: "Vamos resolver isso agora!", genre: "Ação" },
            { id: 2, text: "Preciso de algo leve e divertido", genre: "Comédia" },
            { id: 3, text: "Se eu pular do sofá, é bom!", genre: "Terror" },
            { id: 4, text: "O amor sempre vence", genre: "Romance" },
        ]
    },
    {
        questions: "Seu personagem principal favorito seria",
        answers: [
            { id: 1, text: "Um herói corajoso", genre: "Ação" },
            { id: 2, text: "Um atrapalhado de coração bom", genre: "Comédia" },
            { id: 3, text: "Uma sobrevivente determinada", genre: "Terror" },
            { id: 4, text: "Um romântico incurável", genre: "Romance" },
        ]
    }
];

let questionsElement = document.getElementById('question');
let answersButtons = document.getElementById('answer-buttons');
let nextButton = document.getElementById('next-btn');

let currentQuestionIndex = 0;
let genreScores = {
    "Ação": 0,
    "Comédia": 0,
    "Terror": 0,
    "Romance": 0
};

function startQuiz() {
    currentQuestionIndex = 0;
    genreScores = { "Ação": 0, "Comédia": 0, "Terror": 0, "Romance": 0 };
    nextButton.innerHTML = 'Próximo';
    nextButton.style.display = 'none';
    showQuestion();
}

function resetState() {
    nextButton.style.display = 'none';
    while (answersButtons.firstChild) {
        answersButtons.removeChild(answersButtons.firstChild);
    }
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    questionsElement.innerHTML = currentQuestion.questions;

    currentQuestion.answers.forEach((answer) => {
        let button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add('btn');
        button.addEventListener('click', () => selectAnswer(answer));
        answersButtons.appendChild(button);
    });
}

function selectAnswer(answer) {
    genreScores[answer.genre] += 1;
    nextButton.style.display = 'block';
}

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
});

function pasta1() {
  window.location.href = 'index.html'; 
}

function showResult() {
    resetState();

    
    let topGenre = Object.keys(genreScores).reduce((a, b) =>
        genreScores[a] > genreScores[b] ? a : b
    );

    questionsElement.innerHTML = `Seu gênero de filme ideal é: <strong>${topGenre}</strong>! Indicaçao de filme sobre seu genero escolhido`;

     
    let bg = document.getElementById('background');

    switch (topGenre) {
        case "Ação":
            bg.style.backgroundImage = "url('./imagens/comedia.jpg')";
            break;
        case "Comédia":
            bg.style.backgroundImage = "url('./imagens/comedia.jpg')";
            break;
        case "Terror":
            bg.style.backgroundImage = "url('./imagens/comedia.jpg')";
            break;
        case "Romance":
            bg.style.backgroundImage = "url('./imagens/comedia.jpg')";
            break;
    }


    nextButton.onclick = pasta1;
    nextButton.innerHTML = "Reiniciar";
    nextButton.style.display = 'block';
    nextButton.addEventListener('click', pasta1);
    
    
}

startQuiz();



  

