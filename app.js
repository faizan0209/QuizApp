document.addEventListener('DOMContentLoaded', () => {
  const questions = [
    {
      question: "What is the capital city of France?",
      Answere: [
        { text: "Paris", correct: true },
        { text: "Berlin", correct: false },
        { text: "London", correct: false },
        { text: "Madrid", correct: false }
      ]
    },
    {
      question: "Which planet is known as the Red Planet?",
      Answere: [
        { text: "Earth", correct: false },
        { text: "Mars", correct: true },
        { text: "Jupiter", correct: false },
        { text: "Saturn", correct: false }
      ]
    },
    {
      question: "Who painted the Mona Lisa?",
      Answere: [
        { text: "Leonardo da Vinci", correct: true },
        { text: "Pablo Picasso", correct: false },
        { text: "Vincent van Gogh", correct: false },
        { text: "Michelangelo", correct: false }
      ]
    },
    {
      question: "What is the largest ocean on Earth?",
      Answere: [
        { text: "Atlantic Ocean", correct: false },
        { text: "Arctic Ocean", correct: false },
        { text: "Indian Ocean", correct: false },
        { text: "Pacific Ocean", correct: true }
      ]
    },
    {
      question: "Which country is famous for kangaroos?",
      Answere: [
        { text: "South Africa", correct: false },
        { text: "Australia", correct: true },
        { text: "Brazil", correct: false },
        { text: "Canada", correct: false }
      ]
    },
    {
      question: "Who wrote the play 'Romeo and Juliet'?",
      Answere: [
        { text: "William Shakespeare", correct: true },
        { text: "Charles Dickens", correct: false },
        { text: "Jane Austen", correct: false },
        { text: "Mark Twain", correct: false }
      ]
    },
    {
      question: "What is the tallest mountain in the world?",
      Answere: [
        { text: "Mount Everest", correct: true },
        { text: "K2", correct: false },
        { text: "Mount Kilimanjaro", correct: false },
        { text: "Mount Fuji", correct: false }
      ]
    },
    {
      question: "Which is the largest desert in the world?",
      Answere: [
        { text: "Sahara Desert", correct: true },
        { text: "Gobi Desert", correct: false },
        { text: "Arabian Desert", correct: false },
        { text: "Kalahari Desert", correct: false }
      ]
    },
    {
      question: "What is the chemical symbol for the element Oxygen?",
      Answere: [
        { text: "O", correct: true },
        { text: "Au", correct: false },
        { text: "He", correct: false },
        { text: "Na", correct: false }
      ]
    },
    {
      question: "Who was the first person to step on the Moon?",
      Answere: [
        { text: "Neil Armstrong", correct: true },
        { text: "Buzz Aldrin", correct: false },
        { text: "Yuri Gagarin", correct: false },
        { text: "Alan Shepard", correct: false }
      ]
    }
  ];
  
  const questionElement = document.getElementById("question");
  const ansBtn = document.getElementById("answereBtn");
  const nextBtn = document.getElementById("btn-2");
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    shuffleQuestions(); 
    nextBtn.innerHTML = "Next";
    showQuestion();
  }

  function shuffleQuestions() {
    for (let i = questions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [questions[i], questions[j]] = [questions[j], questions[i]];
    }
  }
  
  function showQuestion() {
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
    ansBtn.innerHTML = "";
    currentQuestion.Answere.forEach(answer => {
      const button = document.createElement('button');
      button.innerHTML = answer.text;
      button.classList.add('btn');
      button.addEventListener('click', () => selectAnswer(button, answer));
      ansBtn.appendChild(button);
    });
  }
  
  function selectAnswer(button, answer) {
    const buttons = ansBtn.querySelectorAll('button');
    buttons.forEach(btn => btn.disabled = true); 
    
    if (answer.correct) {
      score++;
      button.classList.add('correct');
    } else {
      button.classList.add('incorrect');
      buttons.forEach(btn => {
        if (btn.innerHTML === questions[currentQuestionIndex].Answere.find(a => a.correct).text) {
          btn.classList.add('correct');
        }
      });
    }
  
    setTimeout(() => {
      if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        showQuestion();
      } else {
        Swal.fire(`Quiz Over! Your score is ${score}/${questions.length}`);
      
      }
    }, 1000); 
  }
  
  nextBtn.addEventListener('click', () => {
    if (currentQuestionIndex < questions.length - 1) {
      currentQuestionIndex++;
      showQuestion();
    } else {
      Swal.fire(`Quiz Over! Your score is ${score}/${questions.length}`);


    }
  });
  
  startQuiz();
});


