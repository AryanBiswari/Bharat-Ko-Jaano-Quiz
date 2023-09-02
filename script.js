// const welcomeElement = document.getElementById('question');
const questionText = document.getElementById('question-text');
const answerText = document.getElementById('answer-text');
const showAnsBtn = document.getElementById('show-ans-btn');
const nextQuestionBtn = document.getElementById('next-question-btn');
const roundList = document.getElementById('round-list');
const sidebarRounds = ['default','elimination', 'passing', 'group', 'picture', 'video', 'audio', 'fastest', 'bonus','patiance','sanskriti','rajnitii'];

// Modify questions array to include 'round' property for each question
const questions = [
    { round: 'default', format: 'text',  question: 'Welcome to this Quiz', answer: '' },
    { round: 'elimination', format: 'text',  question: 'Q1 Krishna', answer: 'Radha' },
    { round: 'elimination', format: 'text',  question: 'Q2 भारत की सबसे बड़ी आवासीय इमारत कौन सी है', answer: 'राष्ट्रपति भवन' },
    { round: 'elimination', format: 'text',  question: 'Q3 भारत के प्रथम वित्त मंत्री कौन थे', answer: 'आर के शनमुखम चेट्टी' },
    { round: 'elimination', format: 'text',  question: 'Q4 सबसे लंबे शेड वाला प्लेटफार्म कौन सा है', answer: 'सियालदह स्टेशन का प्लेटफार्म 550 फुट शेड' },
    { round: 'elimination', format: 'text',  question: 'Q5 गुप्त साम्राज्य का विनाश किसने किया', answer: 'हूणों ने' },
    { round: 'elimination', format: 'image',  question: 'image.jpg', answer: 'Sita' },
    // ... other questions ...
    { round: 'passing', format: 'audio', question: 'Allah-Duhai-Hai(PagalWorld).mp3', answer: 'Laxmi' },
    { round: 'passing', format: 'video', question: 'video.mp4', answer: 'Parvati' },

    { round: 'patiance', format: 'text',  question: 'Q1 गुप्त साम्राज्य का विनाश किसने किया', answer: 'हूणों ने' },
    { round: 'sanskriti', format: 'text',  question: 'Q5 गुप्त साम्राज्य का विनाश किसने किया', answer: 'हूणों ने' },
    { round: 'rajnitii', format: 'text',  question: 'Q3 गुप्त साम्राज्य का विनाश किसने किया', answer: 'हूणों ने' },
    // ... other questions ...
    // ... questions for other rounds ...
];

let currentRoundQuestions = [];
let currentQuestionIndex = 0;
let currentRoundId = sidebarRounds[0];
// Show questions for the selected round
function showRoundQuestions(roundId) {
    currentQuestionIndex = 0;
    currentRoundQuestions = questions.filter(q => q.round === roundId);
    if (currentRoundQuestions.length > 0) {
        showQuestion(currentQuestionIndex);
        showAnsBtn.style.display = 'block';
        nextQuestionBtn.style.display = 'block';
        // welcomeElement.classList.add('hidden');
    } else {
        questionText.textContent = 'No questions available for this round.';
        answerText.textContent = '';
        showAnsBtn.style.display = 'none';
        nextQuestionBtn.style.display = 'none';
        // welcomeElement.classList.remove('hidden');
    }
}

// Show a specific question and its answer
function showQuestion(index) {
    // questionText.textContent = currentRoundQuestions[index].question;
    // answerText.textContent = currentRoundQuestions[index].answer;
    // answerText.classList.add('hidden');
    // showAnsBtn.textContent = 'Show Answer';
    // const currentQuestion = currentRoundQuestions[index];
    // questionText.textContent = currentQuestion.question;

    const currentQuestion = currentRoundQuestions[index];
    questionText.textContent = currentQuestion.question;

    if (currentQuestion.format === 'image') {
        questionText.innerHTML = `<img src="${currentQuestion.question}" alt="Question Image">`;
    } else if (currentQuestion.format === 'audio') {
        questionText.innerHTML = `<audio controls><source src="${currentQuestion.question}" type="audio/mp3">Your browser does not support the audio element.</audio>`;
    } else if (currentQuestion.format === 'video') {
        questionText.innerHTML = `<video controls><source src="${currentQuestion.question}" type="video/mp4">Your browser does not support the video element.</video>`;
    }

    answerText.textContent = currentQuestion.answer;
    answerText.classList.add('hidden');
    showAnsBtn.textContent = 'Show Answer';
    
}

// Toggle answer visibility
function showAnswer() {
    answerText.classList.toggle('hidden');
    showAnsBtn.textContent = answerText.classList.contains('hidden') ? 'Show Answer' : 'Hide Answer';
}

// Event listener for showing answer
showAnsBtn.addEventListener('click', showAnswer);

// Event listener for moving to the next question
nextQuestionBtn.addEventListener('click', () => {
    if (currentQuestionIndex < currentRoundQuestions.length - 1) {
        currentQuestionIndex++;
        showQuestion(currentQuestionIndex);
    } else {
        questionText.textContent = 'No more questions for this round.';
        answerText.textContent = '';
        showAnsBtn.textContent = 'Show Answer';
        answerText.classList.add('hidden');
    }
});

// Event listener for round selection in the sidebar
roundList.addEventListener('click', (event) => {
    const target = event.target;
    if (target.tagName === 'A') {
        const roundId = target.getAttribute('href').substring(1);
        if (sidebarRounds.includes(roundId)) {
            currentRoundId = roundId;
            showRoundQuestions(currentRoundId);
            event.preventDefault();
        }
    }
});

// Initialize default round and questions
showRoundQuestions(currentRoundId);


