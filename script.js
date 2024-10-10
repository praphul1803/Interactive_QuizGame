const questions = [
  {
    question: "What is the capital city of India?",
    choices: ["Delhi","Mumbai", "Kolkata", "Chennai"],
    answer: "Delhi"
  },
  {
      question: "Who painted the Mona Lisa?",
      choices: ["Vincent Van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Claude Monet"],
      answer: "Leonardo da Vinci"
  },
  {
      question: "What is the smallest planet in our solar system?",
      choices: ["Earth", "Mars", "Mercury", "Jupiter"],
      answer: "Mercury"
  },
  {
    question: "Who won the 2024 T20 Cricket World Cup?",
    choices: ["India", "England", "Austrilia", "Pakistan"], 
    answer: "India"
},
{
  question: "Who is the CEO of Tesla?",
  choices : ["Jeff Brezos", "Tony Strak", "Bill Gates", "Elon Musk"],
  answer: "Elon Musk"
}
];

let currentQuestionIndex = 0;
let score = 0;

const questionDiv = document.getElementById('question');
const choicesDiv = document.getElementById('choices');
const nextBtn = document.getElementById('nextBtn');
const scoreDiv = document.getElementById('score');

function showQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionDiv.textContent = currentQuestion.question;
  choicesDiv.innerHTML = '';
  currentQuestion.choices.forEach(choice => {
      const button = document.createElement('button');
      button.textContent = choice;
      button.addEventListener('click', () => selectAnswer(choice));
      choicesDiv.appendChild(button);
  });
}

function selectAnswer(choice) {
  const currentQuestion = questions[currentQuestionIndex];
  if (choice === currentQuestion.answer) {
      score++;
  }
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
      showQuestion();
  } else {
      showScore();
  }
}

function showScore() {
  questionDiv.textContent = 'Quiz Over!';
  choicesDiv.innerHTML = '';
  scoreDiv.textContent = `Your score: ${score} out of ${questions.length}`;
  nextBtn.style.display = 'none';
}

nextBtn.addEventListener('click', showQuestion);

showQuestion();
