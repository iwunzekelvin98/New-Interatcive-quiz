document.addEventListener("DOMContentLoaded", () => {
    const quizContainer = document.getElementById('quiz-container');
    const optionElements = document.querySelectorAll('.quiz-option');
    const navigationButtons = document.getElementById('navigation-buttons')
    const nextButton = document.getElementById('next-button')
    const previousButton = document.getElementById('previous-button')

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
        const optionsList = document.getElementById('options');

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
        const correctAnswer = quizData[currentQuestion].correctAnswer;
        optionElements.forEach(option => {
            if (option.textContent.trim() === selectedOption) {
                if (selectedOption === correctAnswer) {
                    option.style.backgroundColor = '#00FF00'; // Green for correct answer
                } else {
                    option.style.backgroundColor = '#FF0000'; // Red for incorrect answer 
                }
            };
        });
    };

    optionElements.forEach(option => {
        option.addEventListener('click', () => {
            checkAnswer(option.textContent);
        });
        option.addEventListener('mouseover', () => {
            option.style.backgroundColor = '#FCBB65';
        });
        option.addEventListener('mouseout', () => {
            option.style.backgroundColor = '';
        });
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
