const questions = [
  {
    question: "What does HTML stand for?",
    options: ["Hyper Text Markup Language", "Hot Mail", "How To Make Lasagna", "Hyperlinks and Text Markup Language"],
    answer: 0
  },
  {
    question: "Which language is used for styling web pages?",
    options: ["HTML", "JQuery", "CSS", "XML"],
    answer: 2
  },
  {
    question: "Which is not a JavaScript Framework?",
    options: ["Python Script", "JQuery", "Django", "NodeJS"],
    answer: 2
  }
];

let currentQ = 0;
let score = 0;

const questionBox = document.getElementById("questionBox");
const optionsBox = document.getElementById("optionsBox");
const nextBtn = document.getElementById("nextBtn");
const scoreBox = document.getElementById("score");

function loadQuestion() {
  let q = questions[currentQ];
  questionBox.textContent = q.question;
  optionsBox.innerHTML = "";
  q.options.forEach((opt, i) => {
    let btn = document.createElement("div");
    btn.textContent = opt;
    btn.classList.add("option");
    btn.onclick = () => checkAnswer(btn, i);
    optionsBox.appendChild(btn);
  });
  nextBtn.style.display = "none";
}

function checkAnswer(selected, i) {
  let q = questions[currentQ];
  let options = document.querySelectorAll(".option");
  options.forEach(opt => opt.style.pointerEvents = "none");

  if (i === q.answer) {
    selected.classList.add("correct");
    score++;
  } else {
    selected.classList.add("wrong");
    options[q.answer].classList.add("correct");
  }

  scoreBox.textContent = `Score: ${score}/${questions.length}`;
  nextBtn.style.display = "inline-block";
}

nextBtn.onclick = () => {
  currentQ++;
  if (currentQ < questions.length) {
    loadQuestion();
  } else {
    questionBox.textContent = "Quiz Finished!";
    optionsBox.innerHTML = "";
    nextBtn.style.display = "none";
    scoreBox.textContent = `Final Score: ${score}/${questions.length}`;
  }
};
const progressBar = document.getElementById("progressBar");

function loadQuestion() {
  let q = questions[currentQ];
  questionBox.textContent = q.question;
  optionsBox.innerHTML = "";

  q.options.forEach((opt, i) => {
    let btn = document.createElement("div");
    btn.textContent = opt;
    btn.classList.add("option");
    btn.onclick = () => checkAnswer(btn, i);
    optionsBox.appendChild(btn);
  });

  nextBtn.style.display = "none";

  // Update progress bar
  let progress = ((currentQ) / questions.length) * 100;
  progressBar.style.width = progress + "%";
}

nextBtn.onclick = () => {
  currentQ++;
  if (currentQ < questions.length) {
    loadQuestion();
  } else {
    questionBox.textContent = "🎉 Quiz Finished!";
    optionsBox.innerHTML = "";
    nextBtn.style.display = "none";
    scoreBox.textContent = `Final Score: ${score}/${questions.length}`;
    progressBar.style.width = "100%";
  }
};
loadQuestion();