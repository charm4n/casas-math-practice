const allQuestions = [
    // --- Topic 1: Basic Arithmetic & Word Problems ---
    {
        topic: "Basic Arithmetic & Word Problems",
        question: "A warehouse worker needs to pack 144 items into boxes. If each box holds 12 items, and the worker has already filled 5 boxes, how many items are left to be packed?",
        options: ["60", "72", "84", "96"],
        correct: 2,
        explanation: "Total capacity already packed: 5 × 12 = 60 items. Remaining to be packed: 144 - 60 = 84 items."
    },
    {
        topic: "Basic Arithmetic & Word Problems",
        question: "A store receives a shipment of 350 jackets. If 85 are sold in the first week and 120 in the second week, how many jackets remain?",
        options: ["125", "135", "145", "155"],
        correct: 2,
        explanation: "Subtract the sold jackets from the total: 350 - 85 - 120 = 145 jackets remaining."
    },
    {
        topic: "Basic Arithmetic & Word Problems",
        question: "An employee earns $18 an hour. If they work 35 hours one week and receive a $50 bonus, what is their total gross pay?",
        options: ["$580", "$630", "$680", "$730"],
        correct: 2,
        explanation: "First calculate hourly pay: 18 × 35 = 630. Then add the bonus: 630 + 50 = $680."
    },

    // --- Topic 2: Fractions & Proportions ---
    {
        topic: "Fractions & Proportions",
        question: "A recipe requires \\( 2 \\frac{3}{4} \\) cups of flour. If a chef wants to triple the recipe, how many cups of flour will be needed?",
        options: ["\\( 6 \\frac{1}{4} \\)", "\\( 8 \\frac{1}{4} \\)", "\\( 8 \\frac{1}{2} \\)", "\\( 9 \\frac{1}{4} \\)"],
        correct: 1,
        explanation: "First, convert to an improper fraction: \\( 2 \\frac{3}{4} = \\frac{11}{4} \\). Tripling it gives \\( 3 \\times \\frac{11}{4} = \\frac{33}{4} \\). Converting back to a mixed number yields \\( 8 \\frac{1}{4} \\)."
    },
    {
        topic: "Fractions & Proportions",
        question: "A plumber has a pipe that is \\( 5 \\frac{1}{2} \\) feet long. They cut off a piece that is \\( 1 \\frac{3}{4} \\) feet long. How much pipe is left?",
        options: ["\\( 3 \\frac{1}{4} \\)", "\\( 3 \\frac{3}{4} \\)", "\\( 4 \\frac{1}{4} \\)", "\\( 4 \\frac{1}{2} \\)"],
        correct: 1,
        explanation: "Convert to improper fractions to subtract: \\( \\frac{11}{2} - \\frac{7}{4} = \\frac{22}{4} - \\frac{7}{4} = \\frac{15}{4} \\). Converting back yields \\( 3 \\frac{3}{4} \\)."
    },
    {
        topic: "Fractions & Proportions",
        question: "A concrete mix requires a ratio of 1 part cement to 3 parts sand. If a builder uses 15 bags of sand, how many bags of cement are needed?",
        options: ["3", "5", "10", "45"],
        correct: 1,
        explanation: "Set up a proportion: 1/3 = x/15. Multiply both sides by 15: x = 15 / 3 = 5 bags of cement."
    },

    // --- Topic 3: Percentages & Sales Tax ---
    {
        topic: "Percentages & Sales Tax",
        question: "A store clerk is calculating the total cost of a tool priced at $45.00 with a 6% sales tax. What is the total cost including tax?",
        options: ["$45.06", "$47.70", "$48.00", "$51.00"],
        correct: 1,
        explanation: "Calculate the tax: $45.00 × 0.06 = $2.70. Add the tax to the base price: $45.00 + $2.70 = $47.70."
    },
    {
        topic: "Percentages & Sales Tax",
        question: "A printer originally costs $120. It is on sale for 20% off. What is the sale price?",
        options: ["$24", "$96", "$100", "$144"],
        correct: 1,
        explanation: "Calculate the discount: 20% of 120 is $24. Subtract the discount from the original price: 120 - 24 = $96."
    },
    {
        topic: "Percentages & Sales Tax",
        question: "A restaurant bill is $65.00. If a customer wants to leave a 15% tip, how much is the tip amount?",
        options: ["$8.75", "$9.75", "$10.50", "$74.75"],
        correct: 1,
        explanation: "Multiply the bill by the decimal form of the percentage: 65 × 0.15 = $9.75."
    },

    // --- Topic 4: Measurement & Scale ---
    {
        topic: "Measurement & Scale",
        question: "A floor plan uses a scale where 1 inch equals 5 feet. If a room on the plan is 3.5 inches long, what is the actual length of the room in feet?",
        options: ["15 feet", "16.5 feet", "17.5 feet", "18.5 feet"],
        correct: 2,
        explanation: "Multiply the plan length by the scale factor: 3.5 inches × 5 feet/inch = 17.5 feet."
    },
    {
        topic: "Measurement & Scale",
        question: "On a blueprint, 2 inches represents 15 feet. If a hallway measures 6 inches on the blueprint, what is its actual length?",
        options: ["30 feet", "40 feet", "45 feet", "60 feet"],
        correct: 2,
        explanation: "6 inches is 3 times the scale length (6 ÷ 2 = 3). Multiply the real-world scale by 3: 3 × 15 feet = 45 feet."
    },
    {
        topic: "Measurement & Scale",
        question: "A carpenter needs a board that is exactly 2 yards and 1 foot long. How many total inches is this?",
        options: ["60 inches", "72 inches", "84 inches", "96 inches"],
        correct: 2,
        explanation: "1 yard = 36 inches, so 2 yards = 72 inches. 1 foot = 12 inches. 72 + 12 = 84 total inches."
    },

    // --- Topic 5: Geometry & Area ---
    {
        topic: "Geometry & Area",
        question: "An office manager needs to buy carpet for a rectangular room that is 12 feet wide and 15 feet long. What is the area of the room in square feet?",
        options: ["27 sq ft", "54 sq ft", "180 sq ft", "360 sq ft"],
        correct: 2,
        explanation: "Area of a rectangle is length × width. 12 feet × 15 feet = 180 square feet."
    },
    {
        topic: "Geometry & Area",
        question: "A landscaper needs to put a fence around a square garden. If one side of the garden is 14 feet long, how many feet of fencing are required?",
        options: ["28 feet", "42 feet", "56 feet", "196 feet"],
        correct: 2,
        explanation: "Fencing requires calculating perimeter. The perimeter of a square is 4 × side. 4 × 14 = 56 feet."
    },
    {
        topic: "Geometry & Area",
        question: "A rectangular shipping box is 10 inches long, 8 inches wide, and 5 inches tall. What is the total volume of the box?",
        options: ["40 cubic inches", "80 cubic inches", "400 cubic inches", "800 cubic inches"],
        correct: 2,
        explanation: "Volume = length × width × height. 10 × 8 × 5 = 400 cubic inches."
    },

    // --- Topic 6: Basic Algebra ---
    {
        topic: "Basic Algebra",
        question: "Solve the following equation for \\( x \\): \\( 3x - 7 = 14 \\)",
        options: ["\\( x = 5 \\)", "\\( x = 6 \\)", "\\( x = 7 \\)", "\\( x = 21 \\)"],
        correct: 2,
        explanation: "Add 7 to both sides: \\( 3x = 21 \\). Then divide by 3: \\( x = 7 \\)."
    },
    {
        topic: "Basic Algebra",
        question: "Solve for \\( y \\): \\( \\frac{y}{4} + 3 = 8 \\)",
        options: ["\\( y = 1.25 \\)", "\\( y = 12 \\)", "\\( y = 20 \\)", "\\( y = 32 \\)"],
        correct: 2,
        explanation: "First, subtract 3 from both sides to get \\( \\frac{y}{4} = 5 \\). Then multiply both sides by 4 to get \\( y = 20 \\)."
    },
    {
        topic: "Basic Algebra",
        question: "If \\( 5a - 2 = 3a + 10 \\), what is the value of \\( a \\)?",
        options: ["\\( a = 4 \\)", "\\( a = 6 \\)", "\\( a = 8 \\)", "\\( a = 12 \\)"],
        correct: 1,
        explanation: "Subtract 3a from both sides: \\( 2a - 2 = 10 \\). Add 2 to both sides: \\( 2a = 12 \\). Divide by 2: \\( a = 6 \\)."
    },

    // --- Topic 7: Unit Conversions ---
    {
        topic: "Unit Conversions",
        question: "A container holds 2.5 liters of water. How many milliliters (mL) of water are in the container? (1 liter = 1,000 mL)",
        options: ["25 mL", "250 mL", "2,500 mL", "25,000 mL"],
        correct: 2,
        explanation: "Multiply the liters by the conversion factor: 2.5 liters × 1,000 mL/liter = 2,500 mL."
    },
    {
        topic: "Unit Conversions",
        question: "A patient weighs 75 kilograms. What is their approximate weight in pounds? (1 kg ≈ 2.2 lbs)",
        options: ["34 lbs", "150 lbs", "165 lbs", "180 lbs"],
        correct: 2,
        explanation: "Multiply the kilograms by the conversion factor: 75 × 2.2 = 165 lbs."
    },
    {
        topic: "Unit Conversions",
        question: "A machine can produce 45 parts per minute. How many parts can it produce in 2.5 hours?",
        options: ["112.5 parts", "2,700 parts", "6,750 parts", "11,250 parts"],
        correct: 2,
        explanation: "First convert hours to minutes: 2.5 × 60 = 150 minutes. Then multiply by the rate: 45 parts/minute × 150 minutes = 6,750 parts."
    },

    // --- Topic 8: Rates & Speed ---
    {
        topic: "Rates & Speed",
        question: "A driver traveled 210 miles in 3.5 hours. What was the driver's average speed in miles per hour?",
        options: ["55 mph", "60 mph", "65 mph", "70 mph"],
        correct: 1,
        explanation: "Average speed is distance divided by time. 210 miles / 3.5 hours = 60 mph."
    },
    {
        topic: "Rates & Speed",
        question: "A water pump fills a 300-gallon tank in 15 minutes. What is the pump's rate in gallons per minute?",
        options: ["15 gpm", "20 gpm", "25 gpm", "30 gpm"],
        correct: 1,
        explanation: "Rate is volume divided by time. 300 gallons ÷ 15 minutes = 20 gallons per minute (gpm)."
    },
    {
        topic: "Rates & Speed",
        question: "A courier drives 45 miles at a constant speed of 60 miles per hour. How long does the trip take?",
        options: ["30 minutes", "40 minutes", "45 minutes", "50 minutes"],
        correct: 2,
        explanation: "Time = Distance / Speed. 45 / 60 = 0.75 hours. Convert to minutes: 0.75 hours × 60 minutes = 45 minutes."
    },

    // --- Topic 9: Algebraic Expressions ---
    {
        topic: "Algebraic Expressions",
        question: "Which of the following expressions represents the phrase 'five less than double a number \\( n \\)'?",
        options: ["\\( 5 - 2n \\)", "\\( 2n - 5 \\)", "\\( 2(n - 5) \\)", "\\( n^2 - 5 \\)"],
        correct: 1,
        explanation: "'Double a number \\( n \\)' is written as \\( 2n \\). 'Five less than' means subtracting 5 from that amount, giving \\( 2n - 5 \\)."
    },
    {
        topic: "Algebraic Expressions",
        question: "Which expression represents 'the sum of a number \\( x \\) and 8, divided by 3'?",
        options: ["\\( \\frac{x}{3} + 8 \\)", "\\( \\frac{x + 8}{3} \\)", "\\( 3(x + 8) \\)", "\\( x + \\frac{8}{3} \\)"],
        correct: 1,
        explanation: "The sum of a number and 8 is written as \\( (x + 8) \\). That entire sum divided by 3 is written as \\( \\frac{x + 8}{3} \\)."
    },
    {
        topic: "Algebraic Expressions",
        question: "Evaluate the expression \\( 3x^2 - 4x + 2 \\) when \\( x = 3 \\).",
        options: ["11", "17", "23", "29"],
        correct: 1,
        explanation: "Substitute 3 for x: \\( 3(3)^2 - 4(3) + 2 \\). Solve exponents first: \\( 3(9) - 12 + 2 \\). Then multiply: \\( 27 - 12 + 2 = 17 \\)."
    },

    // --- Topic 10: Positive & Negative Numbers ---
    {
        topic: "Positive & Negative Numbers",
        question: "The temperature at 6:00 AM was -4°F. By noon, the temperature had risen by 15 degrees. What was the temperature at noon?",
        options: ["-19°F", "9°F", "11°F", "19°F"],
        correct: 2,
        explanation: "Start at -4 and add 15. -4 + 15 = 11°F."
    },
    {
        topic: "Positive & Negative Numbers",
        question: "A company’s bank account is overdrawn by $125 (a balance of -$125). If a deposit of $350 is made, what is the new balance?",
        options: ["-$475", "$125", "$225", "$475"],
        correct: 2,
        explanation: "Add the deposit to the negative balance: -125 + 350 = 225."
    },
    {
        topic: "Positive & Negative Numbers",
        question: "An elevator is located on the 4th floor underground (-4). It travels up 11 floors, then goes down 3 floors. What floor is the elevator on now?",
        options: ["4th floor", "5th floor", "7th floor", "14th floor"],
        correct: 0,
        explanation: "Start at -4. Going up 11 floors: -4 + 11 = 7. Going down 3 floors: 7 - 3 = 4."
    }
];

let currentQuiz = [];
let currentIndex = 0;
let userAnswers = []; // This will now store true/false instead of array indexes
let isPracticeMode = true;

const questionText = document.getElementById('questionText');
const optionsContainer = document.getElementById('optionsContainer');
const nextBtn = document.getElementById('nextBtn');
const progressBar = document.getElementById('progressBar');
const questionCategory = document.getElementById('questionCategory');
const questionCounter = document.getElementById('questionCounter');
const instantFeedbackBox = document.getElementById('instantFeedback');
const modeRadios = document.getElementsByName('quizMode');

// Fisher-Yates Shuffle Algorithm
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Generate 10-Question Quiz
function generateQuiz() {
    currentQuiz = [];
    const topics = [...new Set(allQuestions.map(q => q.topic))];

    topics.forEach(topic => {
        const topicQuestions = allQuestions.filter(q => q.topic === topic);
        shuffle(topicQuestions);
        currentQuiz.push(topicQuestions[0]);
    });

    shuffle(currentQuiz);
}

function renderMath() {
    if (window.renderMathInElement) {
        renderMathInElement(document.body, {
            delimiters: [
                { left: '$$', right: '$$', display: true },
                { left: '\\(', right: '\\)', display: false }
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
    const current = currentQuiz[currentIndex];
    questionCategory.textContent = current.topic;
    questionCounter.textContent = `Question ${currentIndex + 1} of ${currentQuiz.length}`;
    questionText.innerHTML = current.question;

    const progressPercent = ((currentIndex) / currentQuiz.length) * 100;
    progressBar.style.width = `${progressPercent}%`;
    document.querySelector('.progress-container').setAttribute('aria-valuenow', progressPercent);

    optionsContainer.innerHTML = '';
    instantFeedbackBox.className = 'feedback-box hidden';
    nextBtn.disabled = true;
    nextBtn.setAttribute('aria-disabled', 'true');

    // --- NEW: Option Shuffling Logic ---
    // 1. Map the options into objects to keep track of which one is correct
    let optionsWithCorrectFlag = current.options.map((optText, originalIndex) => {
        return {
            text: optText,
            isCorrect: originalIndex === current.correct
        };
    });

    // 2. Shuffle the objects
    shuffle(optionsWithCorrectFlag);

    // 3. Render the shuffled buttons
    optionsWithCorrectFlag.forEach((optObj) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerHTML = optObj.text;
        btn.setAttribute('role', 'radio');
        btn.setAttribute('aria-checked', 'false');
        btn.setAttribute('tabindex', '0');

        // Pass the boolean 'isCorrect' directly instead of the index
        btn.onclick = () => selectOption(optObj.isCorrect, btn);

        btn.onkeydown = (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                selectOption(optObj.isCorrect, btn);
            }
        };
        optionsContainer.appendChild(btn);
    });

    renderMath();
}

// --- NEW: Updated selectOption to accept a boolean ---
function selectOption(isCorrect, btnElement) {
    // Record true or false for this question instead of a numerical index
    userAnswers[currentIndex] = isCorrect;

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
        instantFeedbackBox.className = `feedback-box ${isCorrect ? 'correct' : 'incorrect'}`;
        instantFeedbackBox.innerHTML = `
      <strong>${isCorrect ? 'Correct!' : 'Incorrect.'}</strong><br>
      ${currentQuiz[currentIndex].explanation}
    `;

        renderMath();
        allBtns.forEach(b => b.disabled = true);
    }
}

nextBtn.onclick = () => {
    if (currentIndex < currentQuiz.length - 1) {
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

    if (pastScores.length > 5) pastScores.pop();

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

    // --- NEW: Updated to check for true/false instead of index match ---
    currentQuiz.forEach((q, idx) => {
        if (userAnswers[idx] === true) {
            score++;
            strengths.push(`${q.topic}: Correctly solved problem.`);
        } else {
            improvements.push(`${q.topic}: Needs review. (${q.explanation})`);
        }
    });

    const percentage = Math.round((score / currentQuiz.length) * 100);
    document.getElementById('scoreDisplay').textContent = `${percentage}%`;

    const scoreFillBar = document.getElementById('scoreFillBar');
    if (scoreFillBar) {
        setTimeout(() => {
            scoreFillBar.style.width = `${percentage}%`;
        }, 100);
    }

    const pastScoresList = document.getElementById('pastScoresList');
    const allScores = saveScore(percentage);

    pastScoresList.innerHTML = allScores.map(s => {
        let scoreClass = '';
        if (s.score >= 90) {
            scoreClass = 'score-pass-high';
        } else if (s.score >= 70) {
            scoreClass = 'score-pass-low';
        } else {
            scoreClass = 'score-fail';
        }
        return `<li class="${scoreClass}">${s.score}% (${s.date})</li>`;
    }).join('');

    const strengthsList = document.getElementById('strengthsList');
    const improvementsList = document.getElementById('improvementsList');

    strengthsList.innerHTML = strengths.length
        ? strengths.map(s => `<li>${s}</li>`).join('')
        : '<li>Keep practicing! Review basic concepts to build confidence.</li>';

    improvementsList.innerHTML = improvements.length
        ? improvements.map(i => `<li>${i}</li>`).join('')
        : '<li>Excellent work! You demonstrated mastery in all evaluated topics.</li>';

    const resourceContainer = document.getElementById('resourceTilesContainer');
    if (resourceContainer) {
        let recommendedResources = [];

        if (percentage < 70) {
            recommendedResources = [
                {
                    title: "Dad's Printable Math Tools",
                    url: "https://www.dadsworksheets.com/worksheets/printable-flash-cards.html",
                    desc: "Printable practice templates for core arithmetic and operation fluency."
                },
                {
                    title: "Effortless Math Flashcards",
                    url: "https://www.effortlessmath.com/math-flashcards/",
                    desc: "Free interactive decks covering algebra rules, fractions, and formulas."
                }
            ];
        } else {
            recommendedResources = [
                {
                    title: "CASAS Study Guide Walkthrough",
                    url: "https://www.youtube.com/watch?v=xWpsBajWCmQ",
                    desc: "A video overview with strategic study plans and test pacing tips."
                },
                {
                    title: "MathHelp Study Guide",
                    url: "https://www.mathhelp.com/casa-math-study-guide/",
                    desc: "Targeted skill-building lessons and diagnostics for advanced test prep."
                }
            ];
        }

        resourceContainer.innerHTML = recommendedResources.map(res => `
      <a href="${res.url}" target="_blank" rel="noopener noreferrer" class="resource-tile">
        <div>
          <h4>${res.title} &rarr;</h4>
          <p>${res.desc}</p>
        </div>
      </a>
    `).join('');
    }

    renderMath();
}

document.getElementById('retryBtn').onclick = () => {
    currentIndex = 0;
    userAnswers = [];
    document.getElementById('resultsPanel').classList.add('hidden');
    document.getElementById('quizCard').classList.remove('hidden');

    const scoreFillBar = document.getElementById('scoreFillBar');
    if (scoreFillBar) {
        scoreFillBar.style.width = '0%';
    }

    generateQuiz();
    loadQuestion();
};

generateQuiz();
loadQuestion();
/* END OF SCRIPT.JS */