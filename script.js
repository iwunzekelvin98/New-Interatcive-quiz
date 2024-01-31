document.addEventListener("DOMContentLoaded", () => {
    const quizContainer = document.getElementById('quiz-container');
    const optionsList = document.getElementById('options');
    const navigationButtons = document.getElementById('navigation-buttons');
    const nextButton = document.getElementById('next-button');
    const previousButton = document.getElementById('previous-button');

    let currentQuestion = 0;
    let quizData;

    fetch('quizData.json')
        .then(response => response.json())
        .then(data => {
            quizData = data;
            displayQuestion(currentQuestion);
        })
        .catch(error => console.error('Error Fetching the Quiz Data', error));

    function displayQuestion(questionIndex) {
        const currentQuizData = quizData[questionIndex];
        const questionElement = document.getElementById('question');

        questionElement.textContent = currentQuizData.question;

        // Clear previous options
        optionsList.innerHTML = '';

        // Create new options
        currentQuizData.options.forEach((option, index) => {
            const li = document.createElement('li');
            li.className = 'quiz-option';
            li.textContent = String.fromCharCode(65 + index) + ') ' + option;
            optionsList.appendChild(li);
        });
    }

    function checkAnswer(selectedOption) {
        if (!quizData) {
            console.error('Quiz data not loaded yet');
            return;
        }

        const correctAnswer = quizData[currentQuestion].correctAnswer;

        if (selectedOption === correctAnswer) {
            // Change the selected option color to green for correct answer
            optionsList.querySelectorAll('.quiz-option').forEach(option => {
                if (option.textContent.trim() === selectedOption) {
                    option.style.backgroundColor = '#00FF00';
                }
            });
        } else {
            // Change the selected option color to red for incorrect answer
            optionsList.querySelectorAll('.quiz-option').forEach(option => {
                if (option.textContent.trim() === selectedOption) {
                    option.style.backgroundColor = '#FF0000';
                }
            });
        }
    }

    optionsList.addEventListener('click', (event) => {
        if (event.target.tagName === 'LI') {
            const selectedOption = event.target.textContent.trim();
            checkAnswer(selectedOption);
        }
    });

    optionsList.addEventListener('mouseover', (event) => {
        if (event.target.tagName === 'LI') {
            event.target.style.backgroundColor = '#FCBB65';
        }
    });

    optionsList.addEventListener('mouseout', (event) => {
        if (event.target.tagName === 'LI') {
            event.target.style.backgroundColor = '';
        }
    });

    previousButton.addEventListener('click', () => {
        if (currentQuestion > 0) {
            currentQuestion--;
            displayQuestion(currentQuestion);
        }
    });

    nextButton.addEventListener('click', () => {
        if (currentQuestion < quizData.length - 1) {
            currentQuestion++;
            displayQuestion(currentQuestion);
        }
    });

    previousButton.addEventListener('mouseover', () => {
        previousButton.style.backgroundColor = '#FCBB65';
    });
    previousButton.addEventListener('mouseout', () => {
        previousButton.style.backgroundColor = '';
    });
    nextButton.addEventListener('mouseover', () => {
        nextButton.style.backgroundColor = '#FCBB65';
    });
    nextButton.addEventListener('mouseout', () => {
        nextButton.style.backgroundColor = '';
    });

});
