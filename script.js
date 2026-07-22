const questions = [
  {
    topic: "Basic Arithmetic & Word Problems",
    question: "A warehouse worker needs to pack 144 items into boxes. If each box holds 12 items, and the worker has already filled 5 boxes, how many items are left to be packed?",
    options: ["60", "72", "84", "96"],
    correct: 2,
    explanation: "Total capacity already packed: 5 × 12 = 60 items. Remaining to be packed: 144 - 60 = 84 items."
  },
  {
    topic: "Fractions & Proportions",
    question: "A recipe requires \\( 2 \\frac{3}{4} \\) cups of flour. If a chef wants to triple the recipe, how many cups of flour will be needed?",
    options: ["\\( 6 \\frac{1}{4} \\)", "\\( 8 \\frac{1}{4} \\)", "\\( 8 \\frac{1}{2} \\)", "\\( 9 \\frac{1}{4} \\)"],
    correct: 1,
    explanation: "First, convert to an improper fraction: \\( 2 \\frac{3}{4} = \\frac{11}{4} \\). Tripling it gives \\( 3 \\times \\frac{11}{4} = \\frac{33}{4} \\). Converting back to a mixed number yields \\( 8 \\frac{1}{4} \\)."
  },
  {
    topic: "Percentages & Sales Tax",
    question: "A store clerk is calculating the total cost of a tool priced at $45.00 with a 6% sales tax. What is the total cost including tax?",
    options: ["$45.06", "$47.70", "$48.00", "$51.00"],
    correct: 1,
    explanation: "Calculate the tax: $45.00 × 0.06 = $2.70. Add the tax to the base price: $45.00 + $2.70 = $47.70."
  },
  {
    topic: "Measurement & Scale",
    question: "A floor plan uses a scale where 1 inch equals 5 feet. If a room on the plan is 3.5 inches long, what is the actual length of the room in feet?",
    options: ["15 feet", "16.5 feet", "17.5 feet", "18.5 feet"],
    correct: 2,
    explanation: "Multiply the plan length by the scale factor: 3.5 inches × 5 feet/inch = 17.5 feet."
  },
  {
    topic: "Geometry & Area",
    question: "An office manager needs to buy carpet for a rectangular room that is 12 feet wide and 15 feet long. What is the area of the room in square feet?",
    options: ["27 sq ft", "54 sq ft", "180 sq ft", "360 sq ft"],
    correct: 2,
    explanation: "Area of a rectangle is length × width. 12 feet × 15 feet = 180 square feet."
  },
  {
    topic: "Basic Algebra",
    question: "Solve the following equation for \\( x \\): \\( 3x - 7 = 14 \\)",
    options: ["\\( x = 5 \\)", "\\( x = 6 \\)", "\\( x = 7 \\)", "\\( x = 21 \\)"],
    correct: 2,
    explanation: "Add 7 to both sides: \\( 3x = 21 \\). Then divide by 3: \\( x = 7 \\)."
  },
  {
    topic: "Unit Conversions",
    question: "A container holds 2.5 liters of water. How many milliliters (mL) of water are in the container? (1 liter = 1,000 mL)",
    options: ["25 mL", "250 mL", "2,500 mL", "25,000 mL"],
    correct: 2,
    explanation: "Multiply the liters by the conversion factor: 2.5 liters × 1,000 mL/liter = 2,500 mL."
  },
  {
    topic: "Rates & Speed",
    question: "A driver traveled 210 miles in 3.5 hours. What was the driver's average speed in miles per hour?",
    options: ["55 mph", "60 mph", "65 mph", "70 mph"],
    correct: 1,
    explanation: "Average speed is distance divided by time. 210 miles / 3.5 hours = 60 mph."
  },
  {
    topic: "Algebraic Expressions",
    question: "Which of the following expressions represents the phrase 'five less than double a number \\( n \\)'?",
    options: ["\\( 5 - 2n \\)", "\\( 2n - 5 \\)", "\\( 2(n - 5) \\)", "\\( n^2 - 5 \\)"],
    correct: 1,
    explanation: "'Double a number \\( n \\)' is written as \\( 2n \\). 'Five less than' means subtracting 5 from that amount, giving \\( 2n - 5 \\)."
  },
  {
    topic: "Positive & Negative Numbers",
    question: "The temperature at 6:00 AM was -4°F. By noon, the temperature had risen by 15 degrees. What was the temperature at noon?",
    options: ["-19°F", "9°F", "11°F", "19°F"],
    correct: 2,
    explanation: "Start at -4 and add 15. -4 + 15 = 11°F."
  }
];

let currentIndex = 0;
let userAnswers = [];
let isPracticeMode = true;

const questionText = document.getElementById('questionText');
const optionsContainer = document.getElementById('optionsContainer');
const nextBtn = document.getElementById('nextBtn');
const progressBar = document.getElementById('progressBar');
const questionCategory = document.getElementById('questionCategory');
const questionCounter = document.getElementById('questionCounter');
const instantFeedbackBox = document.getElementById('instantFeedback');
const modeRadios = document.getElementsByName('quizMode');

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

modeRadios.forEach(radio => {
  radio.addEventListener('change', (e) => {
    isPracticeMode = e.target.value === 'practice';
  });
});

function loadQuestion() {
  const current = questions[currentIndex];
  questionCategory.textContent = current.topic;
  questionCounter.textContent = `Question ${currentIndex + 1} of ${questions.length}`;
  questionText.innerHTML = current.question;
  
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
    btn.innerHTML = opt;
    btn.setAttribute('role', 'radio');
    btn.setAttribute('aria-checked', 'false');
    btn.setAttribute('tabindex', '0');
    
    btn.onclick = () => selectOption(idx, btn);
    
    btn.onkeydown = (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        selectOption(idx, btn);
      }
    };
    optionsContainer.appendChild(btn);
  });

  renderMath();
}

function selectOption(index, btnElement) {
  const current = questions[currentIndex];
  userAnswers[currentIndex] = index;

  const allBtns = document.querySelectorAll('.option-btn');
  allBtns.forEach(b => {
    b.classList.remove('selected');
    b.setAttribute('aria-checked', 'false');
  });
  
  btnElement.classList.add('selected');
  btnElement.setAttribute('aria-checked', 'true');
  nextBtn.disabled = false;
  nextBtn.setAttribute('aria-disabled', 'false');

  if (isPracticeMode) {
    const isCorrect = index === current.correct;
    instantFeedbackBox.className = `feedback-box ${isCorrect ? 'correct' : 'incorrect'}`;
    instantFeedbackBox.innerHTML = `
      <strong>${isCorrect ? 'Correct!' : 'Incorrect.'}</strong><br>
      ${current.explanation}
    `;
    
    renderMath();
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

function saveScore(percentage) {
  let pastScores = JSON.parse(localStorage.getItem('casasScores')) || [];
  const dateStr = new Date().toLocaleDateString();
  pastScores.unshift({ score: percentage, date: dateStr });
  
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

  const pastScoresList = document.getElementById('pastScoresList');
  const allScores = saveScore(percentage);
  
  pastScoresList.innerHTML = allScores.map(s => 
    `<li>${s.score}% (${s.date})</li>`
  ).join('');

  const strengthsList = document.getElementById('strengthsList');
  const improvementsList = document.getElementById('improvementsList');

  strengthsList.innerHTML = strengths.length 
    ? strengths.map(s => `<li>${s}</li>`).join('') 
    : '<li>Keep practicing! Review basic concepts to build confidence.</li>';

  improvementsList.innerHTML = improvements.length 
    ? improvements.map(i => `<li>${i}</li>`).join('') 
    : '<li>Excellent work! You demonstrated mastery in all evaluated topics.</li>';

  renderMath();
}

document.getElementById('retryBtn').onclick = () => {
  currentIndex = 0;
  userAnswers = [];
  document.getElementById('resultsPanel').classList.add('hidden');
  document.getElementById('quizCard').classList.remove('hidden');
  loadQuestion();
};

loadQuestion();