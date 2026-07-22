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
    // Note the LaTeX syntax used here for KaTeX rendering
    question: "A recipe requires \\( 2 \\frac{3}{4} \\) cups of flour. How many cups are needed if you triple the recipe?",
    options: ["\\( 6 \\frac{1}{4} \\) cups", "\\( 8 \\frac{1}{4} \\) cups", "\\( 8 \\frac{1}{2} \\) cups", "\\( 9 \\frac{1}{4} \\) cups"],
    correct: 1,
    explanation: "\\( 2 \\frac{3}{4} = \\frac{11}{4} \\). Tripling gives \\( \\frac{33}{4} = 8 \\frac{1}{4} \\) cups."
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
let isPracticeMode = true; // Default

// DOM Elements
const questionText = document.getElementById('questionText');
const optionsContainer = document.getElementById('optionsContainer');
const nextBtn = document.getElementById('nextBtn');
const progressBar = document.getElementById('progressBar');
const questionCategory = document.getElementById('questionCategory');
const questionCounter = document.getElementById('questionCounter');
const instantFeedbackBox = document.getElementById('instantFeedback');
const modeRadios = document.getElementsByName('quizMode');

// Render Math utility
function renderMath() {
  if (window.renderMathInElement) {
    renderMathInElement(document.body, {
      delimiters: [
        {left: '$$', right: '$$', display: true},
        {left: '\\(', right: '\\)', display: false}
      ]
    });
  }
}

// Track Mode Selection
modeRadios.forEach(radio => {
  radio.addEventListener('change', (e) => {
    isPracticeMode = e.target.value === 'practice';
  });
});

function loadQuestion() {
  const current = questions[currentIndex];
  questionCategory.textContent = current.topic;
  questionCounter.textContent = `Question ${currentIndex + 1} of ${questions.length}`;
  questionText.textContent = current.question;
  
  const progressPercent = ((currentIndex) / questions.length) * 100;
  progressBar.style.width = `${progressPercent}%`;
  document.querySelector('.progress-container').setAttribute('aria-valuenow', progressPercent);
  
  optionsContainer.innerHTML = '';
  instantFeedbackBox.className = 'feedback-box hidden';
  nextBtn.disabled = true;
  nextBtn.setAttribute('aria-disabled', 'true');

  current.options.forEach((opt, idx) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.innerHTML = opt; // Using innerHTML so KaTeX tags process correctly
    btn.setAttribute('role', 'radio');
    btn.setAttribute('aria-checked', 'false');
    btn.setAttribute('tabindex', '0'); // Keyboard focus
    
    // Mouse click
    btn.onclick = () => selectOption(idx, btn);
    
    // Keyboard Accessibility (Space/Enter to select)
    btn.onkeydown = (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        selectOption(idx, btn);
      }
    };
    optionsContainer.appendChild(btn);
  });

  // Render any math formulas inserted into the DOM
  renderMath();
}

function selectOption(index, btnElement) {
  const current = questions[currentIndex];
  userAnswers[currentIndex] = index;

  // Update button styles and ARIA
  const allBtns = document.querySelectorAll('.option-btn');
  allBtns.forEach(b => {
    b.classList.remove('selected');
    b.setAttribute('aria-checked', 'false');
  });
  
  btnElement.classList.add('selected');
  btnElement.setAttribute('aria-checked', 'true');
  nextBtn.disabled = false;
  nextBtn.setAttribute('aria-disabled', 'false');

  // Instant Feedback Logic
  if (isPracticeMode) {
    const isCorrect = index === current.correct;
    instantFeedbackBox.className = `feedback-box ${isCorrect ? 'correct' : 'incorrect'}`;
    instantFeedbackBox.innerHTML = `
      <strong>${isCorrect ? 'Correct!' : 'Incorrect.'}</strong><br>
      ${current.explanation}
    `;
    
    // Render math in feedback box if needed
    renderMath();

    // Disable changing answers after selection in practice mode
    allBtns.forEach(b => b.disabled = true);
  }
}

nextBtn.onclick = () => {
  if (currentIndex < questions.length - 1) {
    currentIndex++;
    loadQuestion();
  } else {
    showResults();
  }
};

// Local Storage Helper
function saveScore(percentage) {
  let pastScores = JSON.parse(localStorage.getItem('casasScores')) || [];
  const dateStr = new Date().toLocaleDateString();
  pastScores.unshift({ score: percentage, date: dateStr });
  
  // Keep only the last 5 scores
  if(pastScores.length > 5) pastScores.pop(); 
  
  localStorage.setItem('casasScores', JSON.stringify(pastScores));
  return pastScores;
}

function showResults() {
  document.getElementById('quizCard').classList.add('hidden');
  document.getElementById('resultsPanel').classList.remove('hidden');
  progressBar.style.width = '100%';
  document.querySelector('.progress-container').setAttribute('aria-valuenow', 100);

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

  // Handle Score Tracking
  const pastScoresList = document.getElementById('pastScoresList');
  const allScores = saveScore(percentage);
  
  pastScoresList.innerHTML = allScores.map(s => 
    `<li>${s.score}% (${s.date})</li>`
  ).join('');

  // Handle Feedback Lists
  const strengthsList = document.getElementById('strengthsList');
  const improvementsList = document.getElementById('improvementsList');

  strengthsList.innerHTML = strengths.length 
    ? strengths.map(s => `<li>${s}</li>`).join('') 
    : '<li>Keep practicing! Review basic concepts to build confidence.</li>';

  improvementsList.innerHTML = improvements.length 
    ? improvements.map(i => `<li>${i}</li>`).join('') 
    : '<li>Excellent work! You demonstrated mastery in all evaluated topics.</li>';

  // Final math render for explanations in the results screen
  renderMath();
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