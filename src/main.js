var answers = {};

var question_one = document.getElementById('question-1'); //criando a variavel question_one e puxando do html pelo ID a pergunta 1 para armazenar na variavel

var question_two = document.getElementById('question-2'); 

var question_two = document.getElementById('question-3'); 

/* para salvar o nome e ir para a página das perguntas */

function callme(){
            var nome = document.getElementById('oNome').value;
            sessionStorage.setItem('seuNome', nome);
        }

        /* para mostrar a mensagem de boas vindas */
        
        
        
window.onload = function() {
          document.getElementById('bemvindo').innerText = "Olá, " + sessionStorage.getItem('seuNome');
      };
/*Function -

puxando os eventos (cliques) no radio (bolinha da resposta)

  if - se o evento for no tipo radio
  a resposta da pergunta (1 ou 2)

  parseInt - transforma o valor em numero inteiro, no caso transforma as resposta em numeros (resposta 1, 2 ou 3) para facilitar na hora da verificacao

  === significa que deve ser exatamente igual ao radio 
  
  */
  
  

  function storeAnswer(question_number, event){
    if(event.target.type === 'radio'){
        console.log(event.target.value);
        answers['question'+question_number] = parseInt(event.target.value);
        console.log(answers);
  }
}

question_one.addEventListener('click', function(event){
  storeAnswer(1, event)
})

question_two.addEventListener('click', function(event){
  storeAnswer(2, event)
})

question_two.addEventListener('click', function(event){
  storeAnswer(3, event)
})


/* addEventListener('click' significa que sempre que tiver um click vai ativar o evento, que é amarmazenar a resposta na (storeAnswer) */

function totalScore(){
  var total_score = 
  answers.question1+
  answers.question2+
  answers.question3;

  return total_score;
}

/* total_score recebe a variavel total_score e ela recebe o valor da resposta da questao 1 mesma coisa acontece com a questao 2*/

function getAnswerBasedScore(){
  if(totalScore() === 50 || totalScore () === 100){
   var score_info = "Essa foi por pouco! Tente de novo."
  }else if(totalScore() === 150){
    var score_info = "Parabéns! Você conhece os animais muito bem!"
  }else if(totalScore() === 0){
     var score_info = "Ops! Você precisa aprender mais sobre animais!";
  }

  return score_info;
}

/* getAnswerBasedScore mostra a resposta baseada no total de pontos o max possivel é 6 e o menor é 3, totalScore é baseado se é maior (>) ou menor (<) que 3. e retorna o score_info que recebe strings */

var submit1 = document.getElementById('submit1');
var submit2 = document.getElementById('submit2');
var submit3 = document.getElementById('submit3');

/* A pergunta 2 estara escondida, assim que a primeira for respondida e tiver o click no submit1, a questao 1 ficara invisivel (display none) e a 2 aparecera 

cada pergunta tem seu proprio botao e cada um tem uma funcao*/

function nextQuestion(question_number){
    var current_question_number = question_number - 1; // - 1 pois depois de respondida ela some 

    var question_number = question_number.toString();//transforma o a questao em texto (string), para podermos utilizar o getElementById (pois ele não pega numero)

    var current_question_number = current_question_number.toString();

    var el = document.getElementById('question-'+question_number); //esse é o que aparece para o user 

        var el2 = document.getElementById('question-'+current_question_number); //foi transformada em string (texto) para podermos puxar ela usando o ID

    el.style.display = "block";
    //quando ela esta em block ela aparece "esta bloqueada na tela"
    el2.style.display = "none";
    //depois de respondida ela vai para none "invisivel"
}

/* Function nextQuestion controla o que acontece quando clica no submit (enviar resposta)
 */

/* adicionando um evento quando clica em submit (em cada botao)*/

submit1.addEventListener('click', function(){
    nextQuestion(2);

})

submit2.addEventListener('click', function(){
    nextQuestion(3);
})

submit3.addEventListener('click', function(){
    nextQuestion(4);
})


//quando clica no submit na pergunta um ele ativa a funcao nextQuestion e vai para a numero 2



submit3.addEventListener('click', function(){
  document.getElementById("printtotalscore").innerHTML = totalScore(); //evento de click na 2 pergunta, e adicionando pelo id no HTML (innerHTML) o totalScore no resultado

  document.getElementById("printscoreinfo").innerHTML = getAnswerBasedScore();
})

