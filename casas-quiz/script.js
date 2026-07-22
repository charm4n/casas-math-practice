const questions = [
  {
    topic: "Multi-Step Word Problems",
    question: "A warehouse worker needs to pack 144 items into boxes. If each box holds 12 items and 5 boxes are filled, how many items remain?",
    options: ["60", "72", "84", "96"],
    correct: 2,
    explanation: "Total capacity packed: 5 × 12 = 60 items. Remaining: 144 - 60 = 84 items."
  },
  {
    topic: "Fractions & Proportions",
    question: "A recipe requires 2 ¾ cups of flour. How many cups are needed if you triple the recipe?",
    options: ["6 ¼ cups", "8 ¼ cups", "8 ½ cups", "9 ¼ cups"],
    correct: 1,
    explanation: "2 ¾ = 11/4. Tripling gives 33/4 = 8 ¼ cups."
  },
  {
    topic: "Percentages & Sales Tax",
    question: "What is the total cost of a $45.00 tool with 6% sales tax applied?",
    options: ["$47.70", "$48.00", "$47.00", "$51.00"],
    correct: 0,
    explanation: "Tax = $45 × 0.06 = $2.70. Total = $45 + $2.70 = $47.70."
  }
];

let currentIndex = 0;
let userAnswers = [];

const questionText = document.getElementById('questionText');
const optionsContainer = document.getElementById('optionsContainer');
const nextBtn = document.getElementById('nextBtn');
const progressBar = document.getElementById('progressBar');
const questionCategory = document.getElementById('questionCategory');
const questionCounter = document.getElementById('questionCounter');

function loadQuestion() {
  const current = questions[currentIndex];
  questionCategory.textContent = current.topic;
  questionCounter.textContent = `Question ${currentIndex + 1} of ${questions.length}`;
  questionText.textContent = current.question;
  progressBar.style.width = `${((currentIndex) / questions.length) * 100}%`;
  
  optionsContainer.innerHTML = '';
  nextBtn.disabled = true;

  current.options.forEach((opt, idx) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.textContent = opt;
    btn.onclick = () => selectOption(idx, btn);
    optionsContainer.appendChild(btn);
  });
}

function selectOption(index, btnElement) {
  document.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
  btnElement.classList.add('selected');
  userAnswers[currentIndex] = index;
  nextBtn.disabled = false;
}

nextBtn.onclick = () => {
  if (currentIndex < questions.length - 1) {
    currentIndex++;
    loadQuestion();
  } else {
    showResults();
  }
};

function showResults() {
  document.getElementById('quizCard').classList.add('hidden');
  document.getElementById('resultsPanel').classList.remove('hidden');
  progressBar.style.width = '100%';

  let score = 0;
  const strengths = [];
  const improvements = [];

  questions.forEach((q, idx) => {
    if (userAnswers[idx] === q.correct) {
      score++;
      strengths.push(`${q.topic}: Correctly solved problem.`);
    } else {
      improvements.push(`${q.topic}: Needs review. (${q.explanation})`);
    }
  });

  const percentage = Math.round((score / questions.length) * 100);
  document.getElementById('scoreDisplay').textContent = `${percentage}%`;

  // Handle Edge Cases: Perfect score or 0% score
  const strengthsList = document.getElementById('strengthsList');
  const improvementsList = document.getElementById('improvementsList');

  strengthsList.innerHTML = strengths.length 
    ? strengths.map(s => `<li>${s}</li>`).join('') 
    : '<li>Keep practicing! Review basic concepts to build confidence.</li>';

  improvementsList.innerHTML = improvements.length 
    ? improvements.map(i => `<li>${i}</li>`).join('') 
    : '<li>Excellent work! You demonstrated mastery in all evaluated topics.</li>';
}

document.getElementById('retryBtn').onclick = () => {
  currentIndex = 0;
  userAnswers = [];
  document.getElementById('resultsPanel').classList.add('hidden');
  document.getElementById('quizCard').classList.remove('hidden');
  loadQuestion();
};

// Start Quiz
loadQuestion();