 export const quizArrays = [
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
    }
]
 let i = 0
 if(quizArrays[i] == 0){
   console.log(quizArrays[0])
   i += 1
 }
 else if(quizArrays[i] == 1){
   console.log(quizArrays[1])
   i += 1
 }