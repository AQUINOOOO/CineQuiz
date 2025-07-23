 const questions = [
    {
        questions: " O que você mais gosta de sentir ao ver um filme?",
        answers: [
              {id:1, text:"Emoção e adrenalina" , correct:true},
              {id:2, text:"Rir sem parar" , correct:true},
                {id:3, text: "Medo e tensão" , correct:true} ,
                  {id:4, text:"Borboletas no estômago" ,correct:true} ,
        ]  
    } , 
     {
        questions: "Qual cenário você escolheria para viver uma aventura?",
        answers: [
              {id:1, text:"Uma cidade caótica em meio a perseguições" , correct:true},
              {id:2, text:"Um set de filmagem cheio de situações engraçadas" , correct:true},
                {id:3, text: "Uma casa abandonada no meio do nada" , correct:true} ,
                  {id:4, text:" Paris sob o pôr do sol" ,correct:true} ,
        ]
    }, {
        questions: ". Qual dessas frases combina mais com você?",
        answers: [
              {id:1, text:"Vamos resolver isso agora!" , correct:true},
              {id:2, text:"Preciso de algo leve e divertido" , correct:true},
                {id:3, text: "Se eu pular do sofá, é bom!" , correct:true} ,
                  {id:4, text:"O amor sempre vence" ,correct:true} ,
        ]
    }, {
        questions: "Seu personagem principal favorito seria",
        answers: [
              {id:1, text:"Um herói corajoso" , correct:true},
              {id:2, text:" Um atrapalhado de coração bom" , correct:true},
                {id:3, text: "Uma sobrevivente determinada" , correct:true} ,
                  {id:4, text:"Um romântico incurável" ,correct:true} ,
        ]
    }
]  
let questionsElement = document.getElementById('question')
let answersButtons = document.getElementById('answer-buttons')
let nexButton = document.getElementById('next-btn')
let currentQuestionIndex = 0
let score = 0
function startQuiz(){
  currentQuestionIndex = 0
  score = 0 
  nexButton.innerHTML = 'Proximo'
  showQuestion()
}
function resetState(){
  nexButton.style.display = 'none'
  while (answersButtons.firstChild){
    answersButtons.removeChild(answersButtons.firstChild)
  }
}


function showQuestion(){
  resetState()
  let currentQuestion = questions[currentQuestionIndex]
   questionsElement.innerHTML = currentQuestion.questions
   currentQuestion.answers.forEach((answers) => {
    let button = document.createElement('button')
    button.innerHTML = answers.text
    button.dataset.id = answers.id
    button.classList.add('btn')
    button.addEventListener('click',selectAriswer)
    answersButtons.appendChild(button)
   })
   function selectAriswer(e){
      ans
   }
}
  startQuiz()


  

