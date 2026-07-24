# CASAS Math Prep & Skill Assessment 🧮

An interactive, responsive, and mobile-optimized web application designed to help adult basic education (ABE) students practice and evaluate their ready-for-work math competency for the CASAS (Comprehensive Adult Student Assessment Systems) math exam.

🌐 **Live Web Application:** [casasmathprep.com](https://casasmathprep.com)

---

## 🌟 Key Features

* **Dual Study Modes:**
  * **Practice Mode:** Provides instant, step-by-step explanations after every answer selection.
  * **Test Mode:** Simulates an exam environment with feedback and scoring provided upon completion.
* **Smart Double-Randomization:**
  * **Question Pool:** Draws from a 30-question bank across 10 core CASAS math domains, selecting 1 randomized question per topic every run.
  * **Option Shuffling:** Uses a Fisher-Yates shuffle to randomize answer choices on every load to prevent guess memorization.
* **Color-Coded Score History:** Automatically tracks past test results locally using `localStorage` with intuitive status colors:
  * 🟢 **High Pass:** 90% – 100%
  * 🟡 **Low Pass:** 70% – 89%
  * 🔴 **Review Needed:** 0% – 69%
* **Adaptive Resource Recommendations:** Dynamically serves targeted study guides, flashcards, and video walkthroughs based on performance.
* **Mobile & Accessibility First:**
  * Compressed viewport layout tailored for mobile devices to prevent excessive scrolling.
  * Native system dark/light mode detection.
  * High-contrast visual score progress bar.
  * ARIA roles and keyboard-navigable interface.
* **Progressive Web App (PWA):** Fully configured with a `manifest.json` enabling users to tap *"Add to Home Screen"* on iOS and Android for native app behavior.
* **Mathematical Precision:** Powered by **KaTeX** for fast, high-quality rendering of mathematical fractions and expressions.

---

## 🎯 Evaluated Competency Domains

The assessment evaluates 10 essential workforce math domains:

1. **Basic Arithmetic & Word Problems**
2. **Fractions & Proportions**
3. **Percentages & Sales Tax**
4. **Measurement & Scale**
5. **Geometry & Area**
6. **Basic Algebra**
7. **Unit Conversions**
8. **Rates & Speed**
9. **Algebraic Expressions**
10. **Positive & Negative Numbers**

---

## 🛠️ Tech Stack

* **Frontend:** HTML5, CSS3 (Custom Properties, Flexbox, Grid, Mobile Breakpoints)
* **Logic:** Vanilla JavaScript (ES6+, Local Storage API, Dynamic DOM Manipulation)
* **Math Rendering:** [KaTeX](https://katex.org/)
* **Analytics & Performance:** Google Analytics 4 (GA4) with Enhanced Measurement
* **Hosting:** GitHub Pages with Custom Domain DNS Routing

---

## 📁 Repository Structure

```text
casas-math-test/
├── index.html        # Main HTML structure, accessibility markup, and GA4 tag
├── style.css         # Custom responsive styling, theme variables, and mobile breakpoints
├── script.js         # Question database, Fisher-Yates shuffle, state management, and scoring
├── manifest.json     # Web App Manifest for PWA installability
├── sitemap.xml       # Search engine sitemap for Google Search Console indexing
├── robots.txt        # Web crawler directives and sitemap location
├── LICENSE           # Open-source MIT License terms
└── README.md         # Project documentation and setup guide
```

---

## 🚀 Local Development Setup

To run or modify this project locally:

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/charm4n/casas-math-test.git](https://github.com/charm4n/casas-math-test.git)
   ```
2. **Navigate into the project directory:**
   ```bash
   cd casas-math-test
   ```
3. **Run the application:**
   * Open `index.html` directly in any modern web browser.
   * Alternatively, use VS Code's **Live Server** extension to launch a local development server.

---

## 🌐 Custom Domain Deployment

This project is deployed using **GitHub Pages** connected to a custom apex domain (`casasmathprep.com`). 

* **A Records:** Pointing `@` to GitHub Pages CDN IPs (`185.199.108.153` – `185.199.111.153`).
* **CNAME Record:** Pointing `www` to `charm4n.github.io`.
* **SSL/TLS:** Enforced HTTPS issued via GitHub Pages.

---

## 👤 Author

Built with care for adult learners and test preparation candidates.

* **GitHub:** [@charm4n](https://github.com/charm4n/)
* **LinkedIn:** [Chris Harman](https://www.linkedin.com/in/chris-harman-nc/)
* **Website:** [casasmathprep.com](https://casasmathprep.com)

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
