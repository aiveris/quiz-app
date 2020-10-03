const quizData = [
    {
        question: '1. Jono mama turi 4 vaikus. Pirmo vardas Pirmadienis, antro Antradienis, trečio Penktadienis. Koks ketvirto vaiko vardas?',
        a: 'Ketvirtadienis',
        b: 'Šeštadienis',
        c: 'Jonas',
        d: 'Sekmadienis',
        correct: 'c'
    },
    {
        question: '2. 3 vištos per 3 dienas padėjo 3 kiaušinius. Kiek kiaušinių 12 vištų padės per 12 dienų?',
        a: '24',
        b: '36',
        c: '48',
        d: '52',
        correct: 'c'
    },
    {
        question: '3. Kokia diena buvo užvakar, jei nuo dienos, kuri bus užporyt, lieka dvi dienos iki sekmadienio?',
        a: 'Pirmadienis',
        b: 'Antradienis',
        c: 'Ketvirtadienis',
        d: 'Sekmadienis',
        correct: 'd'
    },
    {
        question: '4. Gatvėje stovi 100 namų sunumeruotų nuo 1 iki 100. Kiek kartų numeruojant buvo panaudotas 9?',
        a: '10',
        b: '11',
        c: '20',
        d: '21',
        correct: 'c'
    },
    {
        question: '5. Pieštukas ir trintukas kainuoja 1,10EUR. Pieštukas už trintuką brangesnis 1EUR. Kiek kainuoja trintukas?',
        a: '20ct',
        b: '10ct',
        c: '5ct',
        d: '1ct',
        correct: 'c'
    },
    {
        question: '6. Marijos tėtis turi 5 dukras: Čača, Čeča, Čiča, Čoča… Koks penktos dukros vardas?',
        a: 'Čuča',
        b: 'Čėča',
        c: 'Čyča',
        d: 'Marija',
        correct: 'd'
    },
    {
        question: '7. Tupėjo penkios varnos ant medžio. Atėjo medžiotojas ir dvi nušovė. Kiek varnų liko?',
        a: '3',
        b: '1',
        c: '0. Kitos nuskrido',
        d: '5',
        correct: 'c'
    },
    {
        question: '8. Vasarą turtingas, o žiemą plikas?',
        a: 'Senis besmegenis',
        b: 'Kopūstas',
        c: 'Medis',
        d: 'Arklys',
        correct: 'c'
    },
    {
        question: '9. A ir B atsisėdo palubėj. A nupuolė, B prapuolė, kas dar liko palubėj?',
        a: 'A',
        b: 'B',
        c: '0',
        d: 'ir',
        correct: 'd'
    },
    {
        question: '10. Dvi galvos, dvi rankos, šešios kojos, o eina keturiom?',
        a: 'Drakonas',
        b: 'Driežas',
        c: 'Raitelis',
        d: 'Kupranugaris',
        correct: 'c'
    },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>Teisingai atsakei ${score}/${quizData.length} klausimus.</h2>

                <button onclick="location.reload()">Iš naujo</button>
            `;
        }
    }
});