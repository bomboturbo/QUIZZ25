const quizData = [
    {
        question: "Qui es-tu ?",
        a: "Gymbro",
        b: "Mafé man",
        c: "Tanuki",
        d: "Bébé toto fromage",
        correct: "c",
        gif: "https://th.bing.com/th/id/R.edae5e74d4e74992840229c013c05d3a?rik=Hgp%2bQ3Idas5d5w&riu=http%3a%2f%2f38.media.tumblr.com%2f99125d4d0914444f3036167001ac52a5%2ftumblr_n838a3ZYbv1t0l1jvo1_500.gif&ehk=4GYVs%2bX3eTcefk3ag6hkbJNSMNyCM2A7gupp4hNAsIg%3d&risl=&pid=ImgRaw&r=0"
    },
    {
        question: "Ta victime favorite ?",
        a: "Les plats de Maman",
        b: "La bougie Elephant",
        c: "Boite au lettre",
        d: "La manette",
        correct: "c",
        gif: "https://media1.tenor.com/images/d36dab36b468ea872b072f0e870452a4/tenor.gif?itemid=14794740"
    },
    {
        question: "Qui est mon joueur de l'OM favoris ?",
        a: "Steve Mandanda",
        b: "Mamadou Niang",
        c: "Azpilicueta",
        d: "Aubameyang",
        correct: "b",
        gif: "https://vl-media.fr/wp-content/uploads/2020/09/Dimitri-Payet.gif"
    },
    {
        question: "Quel est l'exercice le plus efficace pour développer les pectoraux?",
        a: "Soulevé de terre",
        b: "Développé couché",
        c: "Développeur web",
        d: "Soulevé de tana",
        correct: "b",
        gif: "https://media0.giphy.com/media/vbQePqtI5TnheWKzFh/giphy.gif"
    },
    {
        question: "Quelle est la chanson de maman ?",
        a: "Il est où le bonheur de Christophe Maé",
        b: "Au DD de PNL",
        c: "Party Anthem de LMFAO",
        d: "Positif de Matt Houston",
        correct: "d",
        gif: "https://th.bing.com/th/id/R.fbe4fdc156c9df4100e3ed3d5358fb79?rik=RKgxfGv%2fFJ2YoQ&riu=http%3a%2f%2fbestanimations.com%2fAnimals%2fMammals%2fCats%2fLions%2flion-gif-animation-10.gif&ehk=27iTHenmiVAb5WN8uetfhImiveDe0ny8ahWgDAH7YBc%3d&risl=&pid=ImgRaw&r=0"
    },
    {
        question: "Qui est le boss actuel ?",
        a: "Ich comité",
        b: "Info Garazi",
        c: "Sans chaussure",
        d: "Marathonien",
        correct: "b",
        gif: "https://gifdb.com/images/high/michael-jackson-dismayed-stare-pn7dx7tc15zx1j2x.gif"
    },
    {
        question: "La capitale du la Villa ?",
        a: "La tour",
        b: "Maison du garde",
        c: "Le tronc d'arbre",
        d: "Le box des chevaux",
        correct: "c",
        gif: "https://media2.giphy.com/media/5Lnmo2A4legCI/giphy.gif"
    },
    {
        question: "Le meilleur chiffre ?",
        a: "11",
        b: "2",
        c: "19",
        d: "78",
        correct: "c",
        gif: "https://media.tenor.com/23pi_mgRwg8AAAAM/hasbulla-hasbulla-eating.gif"
    },
    {
        question: "Ai-je galéré à faire ça ?",
        a: "Non",
        b: "Oui",
        c: "C'est de l'eau",
        d: "Fatiguew",
        correct: "d",
        gif: "https://th.bing.com/th/id/R.eafe37c1362c9f1f80cdd4f6d1b747b4?rik=bjkdii4khUjH5Q&pid=ImgRaw&r=0"
    },
    {
        question: "Que vas-tu avoir d'après toi ?",
        a: "Des chaussures",
        b: "Une buzz-cut",
        c: "Des gros mollets",
        d: "Un mystérieux code",
        correct: "d",
        gif: "https://th.bing.com/th/id/R.e0432442e3993a24dd8126a052d6d930?rik=EeZAsk%2fYYx0ePw&pid=ImgRaw&r=0"
    }
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');
const gifContainer = document.getElementById('gif-container');
const quizGif = document.getElementById('quiz-gif');
const backgroundMusic = document.getElementById('background-music');

let currentQuiz = 0;
let score = 0;

loadQuiz();

backgroundMusic.play();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
    quizGif.src = currentQuizData.gif;
    quizGif.style.display = 'block';
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false);
}

function getSelected() {
    let answer;
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;

        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            if (score === quizData.length) {
                quiz.innerHTML = `
                    <h2>LESGOOO TANUKI 10/10 !!!!!!!! JOYEUX ANNIVERSAIRE </h2>
                    <p>Voici ton code spécial à me transmettre: <strong>DF23OP0T</strong></p>
                    <button onclick="location.reload()">Recommencer</button>
                `;
            } else {
                quiz.innerHTML = `
                    <h2>Tu as seulement eu ${score}/${quizData.length} sale neuil, RECOMMENCE</h2>
                    <button onclick="location.reload()">Recommencer</button>
                `;
            }
        }
    }
});